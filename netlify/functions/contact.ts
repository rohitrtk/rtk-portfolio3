import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'rohitkisto.dev@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p>${message}</p>
        `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Something went wrong.',
      }),
    };
  }
};
