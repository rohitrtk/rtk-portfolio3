import {
  Button,
  Description,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';
import { Send } from 'lucide-react';
import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import Section from '@/components/Section';
import AnimatedContent from '@/components/AnimatedContent';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    setFormData(initialFormData);
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
      <div className="absolute top-0 right-0 w-96 h-96 blur-3xl opacity-10 bg-purple-400 dark:bg-purple-500" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-48 blur-3xl opacity-10 bg-emerald-400 dark:bg-emerald-500" />

      <AnimatedContent>
        <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
          Get in Touch
        </h2>
        <div className="h-px mb-16 bg-muted" />

        <p className="text-lg mb-12 leading-relaxed">
          Have a question or just something to say? Send me a message and I'll
          get back to you soon.
        </p>

        <Form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col"
          onInvalid={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <TextField
            className="flex flex-col min-w-96 gap-2"
            name="name"
            type="text"
          >
            <Label>Name</Label>
            <Input
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name..."
              variant="primary"
            />
          </TextField>

          <TextField
            className="flex flex-col min-w-96 gap-2"
            name="email"
            type="email"
          >
            <Label>Email</Label>
            <Input
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email..."
              variant="primary"
            />
          </TextField>

          <TextField
            className="flex flex-col min-w-96 gap-2"
            name="message"
            type="text"
          >
            <Label>Message</Label>
            <TextArea
              required
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              aria-describedby="textarea-controlled-description"
              aria-label="Message"
              className="resize-none"
              maxLength={200}
            />
            <Description id="textarea-controlled-description">
              Characters: {formData.message.length} / 200
            </Description>
          </TextField>

          <Button type="submit" variant="primary">
            <Send size={18} />
            Send
          </Button>
        </Form>
      </AnimatedContent>
    </Section>
  );
};

export default Contact;
