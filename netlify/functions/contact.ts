import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 500;
const MAX_BODY_LENGTH = 2000;

type ContactFormData = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonResponse = (statusCode: number, body: Record<string, unknown>) => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
};

const escapeHtml = (value: string) => {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      ...jsonResponse(405, {
        success: false,
        message: 'Method not allowed.',
      }),
      headers: {
        'Content-Type': 'application/json',
        Allow: 'POST',
      },
    };
  }

  if (!event.body) {
    return jsonResponse(400, {
      success: false,
      message: 'Request body is required.',
    });
  }

  if (event.body.length > MAX_BODY_LENGTH) {
    return jsonResponse(413, {
      success: false,
      message: 'Request body is too large.',
    });
  }

  let data: ContactFormData;

  try {
    data = JSON.parse(event.body) as ContactFormData;
  } catch {
    return jsonResponse(400, {
      success: false,
      message: 'Invalid request body.',
    });
  }

  if (
    typeof data.name !== 'string' ||
    typeof data.email !== 'string' ||
    typeof data.message !== 'string'
  ) {
    return jsonResponse(400, {
      success: false,
      message: 'Name, email, and message are required.',
    });
  }

  const name = data.name.trim();
  const email = data.email.trim().toLowerCase();
  const message = data.message.trim();

  if (!name || !email || !message) {
    return jsonResponse(400, {
      success: false,
      message: 'Name, email, and message are required.',
    });
  }

  if (name.length > MAX_NAME_LENGTH) {
    return jsonResponse(400, {
      success: false,
      message: `Name cannot exceed ${MAX_NAME_LENGTH} characters.`,
    });
  }

  if (email.length > MAX_EMAIL_LENGTH || !emailPattern.test(email)) {
    return jsonResponse(400, {
      success: false,
      message: 'Enter a valid email address.',
    });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse(400, {
      success: false,
      message: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`,
    });
  }

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'rohitkisto.dev@gmail.com',
      subject: `New portfolio message from ${name.replace(/[\r\n]/g, ' ')}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return jsonResponse(502, {
        success: false,
        message: 'The message could not be sent.',
      });
    }

    return jsonResponse(200, {
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Contact function error:', error);

    return jsonResponse(500, {
      success: false,
      message: 'Something went wrong while sending your message.',
    });
  }
};
