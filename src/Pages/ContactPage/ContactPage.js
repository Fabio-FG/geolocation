import "./ContactPage.css";

function ContactPage() {
  return (
    <div>
      <form>
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message" maxlength="350"/>
        {/* Add a reCAPTCHA */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
