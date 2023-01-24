import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
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
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shasankperiwal@gmail.com</h5>
            <a href="mailto:shasankperiwal@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Shasank Periwal</h5>
            <a
              href="https://www.linkedin.com/in/shasank-periwal-650612184/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-81330-79519</h5>
            <a href="https://wa.me/918133079519" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" className="btn-primary btn-contact">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
