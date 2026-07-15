import { useState, useRef, type FormEvent } from 'react';
import { useReveal } from '../hooks';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
}

export default function Contact() {
  const { ref, visible } = useReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...formData, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(formData).map((k) => [k, true]));
    setTouched(allTouched);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    // Simulate API call — replace with your backend/EmailJS/Formspree endpoint
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (field: keyof FormErrors) =>
    `w-full bg-navy-900/60 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
      touched[field] && errors[field]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-white/10 focus:border-gold-500/50 focus:ring-gold-500/20'
    }`;

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="contact-heading"
      className={`py-24 px-6 bg-gradient-to-b from-navy-950 to-navy-900 reveal ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" aria-hidden="true" />
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Let's discuss how I can{' '}
            <span className="text-gold-400 font-semibold">scale your digital presence</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Contact information">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email',
                value: 'imeersyed143@gmail.com',
                href: 'mailto:imeersyed143@gmail.com',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: 'Phone / WhatsApp',
                value: '+92-316-7842387',
                href: 'https://wa.me/923167842387',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ),
                label: 'Instagram — MSM Digital',
                value: '@msmdigital.co',
                href: 'https://www.instagram.com/msmdigital.co/',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'meer-kalal-arshad',
                href: 'https://linkedin.com/in/meer-kalal-arshad-62519a392',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
                label: 'GitHub',
                value: 'github.com/meer-syed',
                href: 'https://github.com/meer-syed',
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass flex items-center gap-4 p-5 rounded-2xl hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300 group focus-visible:outline-gold-400"
                aria-label={`${label}: ${value}`}
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-sm text-white font-medium group-hover:text-gold-400 transition-colors break-all">{value}</div>
                </div>
              </a>
            ))}

            {/* Availability card */}
            <div className="glass p-5 rounded-2xl border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-emerald-400 text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to freelance projects, consulting engagements, and full-time opportunities. Typical response time: &lt;24 hours.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="glass rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Full Name <span className="text-gold-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={fieldClass('name')}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={!!(touched.name && errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-gold-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={fieldClass('email')}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={!!(touched.email && errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Subject <span className="text-gold-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className={fieldClass('subject')}
                  placeholder="Project inquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={!!(touched.subject && errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {touched.subject && errors.subject && (
                  <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message <span className="text-gold-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`${fieldClass('message')} resize-none`}
                  placeholder="Tell me about your project or how I can help…"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={!!(touched.message && errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {touched.message && errors.message && (
                  <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
                <p className="mt-1 text-xs text-slate-600 text-right">
                  {formData.message.length} chars
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 font-bold rounded-xl transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-gold-400 flex items-center justify-center gap-2"
                aria-live="polite"
              >
                {status === 'loading' && (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === 'idle' && 'Send Message →'}
                {status === 'loading' && 'Sending…'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error' && 'Failed — Try Again'}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <p role="status" className="text-center text-emerald-400 text-sm font-medium">
                  🎉 Thanks! I'll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-center text-red-400 text-sm">
                  Something went wrong. Please try emailing directly at{' '}
                  <a href="mailto:imeersyed143@gmail.com" className="underline hover:text-red-300">
                    imeersyed143@gmail.com
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
