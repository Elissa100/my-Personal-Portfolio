import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type SubmissionState = {
  kind: 'success' | 'error';
  message: string;
} | null;

const projectTypes = [
  'A new product or idea',
  'Improve an existing product',
  'Frontend or website development',
  'Backend, API, or integrations',
  'Mobile app development',
  'Full-time role or contract',
  'Something else',
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setIsSubmitting(true);
    setSubmission(null);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { error?: string };

      if (!response.ok) {
        setSubmission({
          kind: 'error',
          message: result.error || 'Your message could not be sent. Please email me directly instead.',
        });
        return;
      }

      form.reset();
      setSubmission({
        kind: 'success',
        message: 'Thanks for reaching out. Your note is on its way, and I’ll get back to you.',
      });
    } catch {
      setSubmission({
        kind: 'error',
        message: 'I couldn’t reach the message service. Please email me directly at sibomanaelissa71@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <p className="contact-aside-label">Tell me a little about it</p>
        <p>Share what you’re building, where you’re stuck, and what kind of help would move it forward.</p>
      </div>

      <div className="contact-form-grid">
        <label className="form-field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" maxLength={100} required />
        </label>
        <label className="form-field">
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className="form-field form-field-wide">
          <span>What do you need help with?</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select the closest fit</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="form-field form-field-wide">
          <span>What’s your budget range? <span className="field-optional">(optional)</span></span>
          <input
            name="budget"
            type="text"
            maxLength={120}
            placeholder="For example, RWF 500,000 to 1,000,000"
          />
        </label>
        <label className="form-field form-field-wide">
          <span>Tell me about your project</span>
          <textarea
            name="details"
            rows={5}
            maxLength={4000}
            placeholder="What are you hoping to build or improve? What’s the biggest challenge right now?"
            required
          />
        </label>
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="contact-form-footer">
        <button className="button-primary form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Let’s talk about your project'}
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <span className="form-privacy-note">Your details are only used to reply to your message.</span>
      </div>

      <p
        className={`form-status ${submission?.kind === 'error' ? 'is-error' : ''}`}
        role={submission?.kind === 'error' ? 'alert' : 'status'}
        aria-live={submission?.kind === 'error' ? 'assertive' : 'polite'}
      >
        {submission?.message || ''}
      </p>
    </form>
  );
}
