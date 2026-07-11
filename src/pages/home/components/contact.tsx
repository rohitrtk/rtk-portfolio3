import { Send } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import Section from '@/components/section';
import AnimatedContent from '@/components/animated-content';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const MAX_MESSAGE_LENGTH = 500;

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [sending, setSending] = useState<boolean>(false);

  const sendMessage = async (data: typeof initialFormData) => {
    setSending(true);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact">
      <div
        aria-hidden={true}
        className="absolute pointer-events-none top-0 right-0 w-96 h-96 blur-3xl opacity-10 bg-purple-400 dark:bg-purple-500"
      />
      <div
        aria-hidden={true}
        className="absolute pointer-events-none bottom-0 left-1/3 w-[600px] h-48 blur-3xl opacity-10 bg-emerald-400 dark:bg-emerald-500"
      />

      <AnimatedContent>
        <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
          Get in Touch
        </h2>
        <Separator className="mb-16" />

        <p className="text-lg mb-12 leading-relaxed">
          Have a question or just something to say? Send me a message and I'll
          get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl flex-col gap-6"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={sending}
                placeholder="Your name..."
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={sending}
                placeholder="Your email..."
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={sending}
                placeholder="Write your message..."
                maxLength={MAX_MESSAGE_LENGTH}
                className="min-h-36 resize-none"
                aria-describedby="message-description"
              />

              <FieldDescription id="message-description" className="text-right">
                {formData.message.length} / {MAX_MESSAGE_LENGTH} characters
              </FieldDescription>
            </Field>
          </FieldGroup>

          <Button
            size="responsive"
            type="submit"
            disabled={sending}
            className="w-full flex gap-1 sm:w-auto"
          >
            {sending ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <Send data-icon="inline-start" size={20} />
            )}

            {sending ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </AnimatedContent>
    </Section>
  );
};

export default Contact;
