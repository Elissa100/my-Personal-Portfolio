// Contacts.jsx
import React, { useContext, useRef, useState } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aql73qs",
        "template_y1y0hcd",
        form.current,
        "aUZ_XH7IJvjAQv9bh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); 
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input type="email" name="email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <button type="submit" id="submit" className="button">Send</button>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
