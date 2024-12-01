import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import DOMPurify from "dompurify";

import useAlert from '../components/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Clean up input for security reasons
    const sanitizedData = {
        name: "Name: " + DOMPurify.sanitize(form.name),
        email: "Email: " + DOMPurify.sanitize(form.email),
        message: "Message: " + DOMPurify.sanitize(form.message)
    }

    // Get environment keys
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Sennding the email:
    emailjs
      .send(
        serviceID,
        templateID,
        sanitizedData,
        publicKey,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      {/* Main terminal img container */}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="src/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        {/* Text */}
        <div className="contact-container">
          <h3 className="head-text lg:mt-12">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to improve your exisiting platform or bring a unique project to life, I'm here to help.
          </p>

          {/* Forms: */}
          <form ref={formRef} onSubmit={handleSubmit} className="lg:mt-8 sm: mt-8 flex flex-col space-y-7">
            
            {/* Name */}
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex: John Doe"
              />
            </label>

            {/* Email */}
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex: johndoe@gmail.com"
              />
            </label>

            {/* Message */}
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            {/* Send message button */}
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="src//assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;