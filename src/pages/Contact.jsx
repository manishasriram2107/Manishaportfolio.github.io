// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import { FaDiscord } from "react-icons/fa";
import BlobsBackground from "../components/BlobsBackground";
import emailjs from "emailjs-com";



const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    title: "New message from portfolio!",
    name: formData.name,
    email: formData.email,
    message: formData.message,
    time: new Date().toLocaleString(),
  };

  emailjs.send(
    'service_gu70ilo',      // ✅ Your Service ID
    'template_949g7fl',     // ✅ Your Template ID
    templateParams,
    'cx79q66QLi70FzTbV'     // ✅ Your Public Key
  )
  .then((result) => {
    console.log("✅ Email sent:", result.text);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }, (error) => {
    console.error("❌ Email error:", error.text);
    alert("Something went wrong. Please try again.");
  });
};



  return (
    <section className="contact">
       <div className="blobs-wrapper">
    <BlobsBackground />
  </div>
      <h2>Let’s Work Together 💼</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Send Message</button>
        {submitted && <p className="success">✅ Thank you! I’ll get back to you soon.</p>}
      </form>

      <div className="freelance-invite">
        <a
          href="https://discord.gg/euaWj2Y7"
          target="_blank"
          rel="noreferrer"
          className="discord-btn"
        >
          <FaDiscord style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Join My Discord
        </a>
      </div>

      <div className="contact-info">
        <h3>📞 Contact Details</h3>
        <p><strong>Email:</strong> <a href="mailto:manishamuralikrishnan2107@gmail.com">manishamuralikrishnan2107@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-8637653404</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/manishasriram2107" target="_blank" rel="noreferrer">@manishasriram2107</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://bit.ly/3VYCTrM" target="_blank" rel="noreferrer">linkedin.com/in/manisha</a></p>
        
      </div>
    </section>
  );
};

export default Contact;
