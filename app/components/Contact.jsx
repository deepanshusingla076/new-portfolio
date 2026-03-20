'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconPin, IconGitHub, IconLinkedIn } from '../lib/icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState(null);
  const [errorText, setErrorText] = useState('');

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    setErrorText('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      setState('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorText(error.message || 'Something went wrong.');
      setState('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">08</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-info-title">
              Let&apos;s build<br />something together.
            </div>
            <p className="contact-info-text">
              I&#39;m open to full-time opportunities, internships, freelance projects, and
              collaborations. Feel free to reach out — I typically respond within 24 hours.
            </p>
            <div className="contact-details">
              <a href="mailto:deepanshusingla076@gmail.com" className="contact-detail-item">
                <IconMail /> deepanshusingla076@gmail.com
              </a>
              <a href="tel:+918307398746" className="contact-detail-item">
                <IconPhone /> +91 83073 98746
              </a>
              <span className="contact-detail-item">
                <IconPin /> Panchkula, Haryana, India
              </span>
              <a href="https://github.com/deepanshusingla076" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <IconGitHub /> github.com/deepanshusingla076
              </a>
              <a href="https://www.linkedin.com/in/deepanshu-singla-519057335/" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                <IconLinkedIn /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" className="form-input" placeholder="Your name"
                value={form.name} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com"
                value={form.email} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={onChange} required />
            </div>

            {state === 'success' && (
              <div className="form-msg success">✓ Message sent! I&apos;ll get back to you soon.</div>
            )}
            {state === 'error' && (
              <div className="form-msg error">
                {errorText || 'Something went wrong.'}{' '}
                <a href="mailto:deepanshusingla076@gmail.com" className="form-error-link">
                  Email me directly
                </a>{' '}or try again.
              </div>
            )}

            <button type="submit" className="form-submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
