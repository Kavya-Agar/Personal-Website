// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      className="max-w-xl mx-auto py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Me</h2>
      <p className="mb-8 text-gray-700">
        Interested in collaborating or want to say hi? Fill out the form below or email me directly at{' '}
        <a href="mailto:kavyaagar@tamu.edu" className="text-blue-600 underline">kavyaagar@tamu.edu</a>.
      </p>
      {submitted ? (
        <div className="text-green-600 font-semibold">Thank you! I’ll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      )}
      <div className="mt-8 text-gray-600 text-sm">
        Or connect with me on{' '}
        <a href="https://linkedin.com/in/kavya-agar/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        or{' '}
        <a href="https://github.com/Kavya-Agar" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </div>
    </motion.section>
  );
}
