import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          to_name: user.name,
          to_email: user.email,
          message: user.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });

    console.log(user);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(user);
  };

  return (
    <div className="contact-container">
      <h1>Contact App</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={user.name}
          placeholder="Enter client name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="Enter client email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={user.message}
          placeholder="Enter your message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
