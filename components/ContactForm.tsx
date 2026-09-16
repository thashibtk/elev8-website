'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const whatsappNumber = '917034201452';
    const text = `*New Contact Form Submission*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:*%0A${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} acceptCharset="utf-8" className="form-contact">
      <div className="cols cols-2 g-30">
        <fieldset>
          <input
            className="style-5"
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            className="style-5"
            type="email"
            name="email"
            placeholder="Email Address*"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </fieldset>
      </div>
      <div className="cols cols-2 g-30">
        <fieldset>
          <input
            className="style-5"
            type="text"
            name="phone"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            className="style-5"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </fieldset>
      </div>
      <div>
        <textarea
          className="style-5 mb-20"
          name="message"
          placeholder="Write your message*"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="tf-btn text-uppercase justify-content-center">
        Send your message
      </button>
    </form>
  );
}
