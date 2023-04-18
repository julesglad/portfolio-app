import "./contact.css";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import React, { useRef } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rh72r8e",
        "template_qqrgfro",
        form.current,
        "AlGt980X7PaE1BxWt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact__background">
      <h2>Let's talk!</h2>

      <div className="container contact__container">
        <div className="contact__options">
        
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact-text">gladden.julie@gmail.com</h5>
            <a href="mailto:gladden.julie@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>

            <a
              href="https://www.linkedin.com/in/julie-j-gladden/"
              target="_blank"
            >
              Go to profile
            </a>
          </article>
        </div>

        {/*end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your E-Mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary-alt">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
