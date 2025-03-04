import React from 'react';
import '../App.css'; 

function Contact() {
  return (
    <div className="contact-container">
      <div className="right-container">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="left-container">
        <h2>Contact Information</h2>
        <p>Feel free to contact us at any time!</p>
      </div>
    </div>
  );
}

export default Contact;
