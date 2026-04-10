function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Please fill out
        the form below and we'll get back to you as soon as possible.
      </p>
      <input type="text" placeholder="Your Name" className="contact-input" />
      <input type="email" placeholder="Your Email" className="contact-input" />
      <textarea
        placeholder="Your Message"
        className="contact-textarea"
      ></textarea>
      <button className="contact-button">Send Message</button>
    </div>
  );
}
export default ContactUs;
