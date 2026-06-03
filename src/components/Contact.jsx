import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
 FaGithub,
 FaLinkedin,
 FaWhatsapp,
 FaEnvelope
}
from "react-icons/fa";

function Contact() {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ijadb0o",
      "template_suoksjp",
      form.current,
      "Jt-W4itLFrjan2ml2"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
       console.log(error);

alert(
  `Failed to send message: ${error.text}`
);
      }
    );
};

return (

<section
id="contact"
className="contact"
>

<h2>
Let's Connect
</h2>

<p className="contact-subtitle">

Interested in working together or have a project in mind?
Feel free to reach out.

</p>

<div className="contact-container">

<div className="contact-card">

<FaEnvelope />

<h3>Email</h3>

<a href="mailto:vermasaloni0786@gmail.com">

vermasaloni0786@gmail.com

</a>

</div>

<div className="contact-card">

<FaLinkedin />

<h3>LinkedIn</h3>

<a
href="https://www.linkedin.com/in/saloni-verma-973835296"
target="_blank"
rel="noreferrer"
>

Connect on LinkedIn

</a>

</div>

<div className="contact-card">

<FaGithub />

<h3>GitHub</h3>

<a
href="https://github.com/Saloni-gif"
target="_blank"
rel="noreferrer"
>

Explore Projects

</a>

</div>

<div className="contact-card">

<FaWhatsapp />

<h3>WhatsApp</h3>

<a
href="https://wa.me/918103780502"
target="_blank"
rel="noreferrer"
>

Message on WhatsApp

</a>

</div>

</div>

<div className="contact-form-container">

  <h3>
  Send Me a Message
  </h3>

  <form
  className="contact-form"
  ref={form}
  onSubmit={sendEmail}
>

    <input
type="text"
name="name"
placeholder="Your Name"
required
/>

    <input
type="email"
name="email"
placeholder="Your Email"
required
/>

    <textarea
name="message"
placeholder="Your Message"
required
/>
    <button type="submit">
      Send Message
    </button>

  </form>

</div>

</section>

)

}

export default Contact;