import React from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9krwuct',
      'template_ne6o504',
      form.current,
      '9v_jIrmBH7VHKl0nX'
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rosscondie@gmail.com</h5>
            <a
              href="mailto:rosscondie@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>

            <a
              href="https://www.linkedin.com/in/rosscondie"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+4915129602494"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
