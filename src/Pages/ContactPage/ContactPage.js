import "./ContactPage.css";
import githubLogo from "../../images/github.svg";
import linkedinLogo from "../../images/linkedin.svg";
import gmailLogo from "../../images/gmail.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function ContactPage() {
  //translation hook
  const { t } = useTranslation();

  //useState for modal
  const [showMessage, setShowMessage] = useState(false);

  //handles for form
  const [username, setUsername ] = useState("");
  const [email, setEmail ] = useState("");
  const [message, setMessage] = useState("");

  //prevent default

  function handleSubmit(e) {
    e.preventDefault();
    setShowMessage(true)
    setUsername("")
    setEmail("")
    setMessage("")
  }

  return (
    <div>
      <div className="content-wrapper">
        <div className="contact-wrapper">
          <div className="contact-links">
            <a
              href="https://fabio-fg.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubLogo}
                alt="github-logo"
                id="github-logo"
                className="icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fabiofguerreiro/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="linkedin-logo"
                id="linkedin-logo"
                className="icon"
              />
            </a>
            <a
              href="mailto:fabio.fernando.guerreiro@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gmailLogo}
                alt="gmail-logo"
                id="gmail-logo"
                className="icon"
              />
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <h1>{t("Contact Us")}</h1>
            <input type="text" placeholder={t("Name")} value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input type="email" placeholder={"Email"} value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <textarea placeholder={t("Your Message")} maxlength="350" value={message} onChange={(e)=> setMessage(e.target.value)}/>
            {/* Add a reCAPTCHA */}
          {showMessage && <div className="message"> Your message was sent</div>}
            <button
              type="submit"
              className="submit-btn"
              
            >
              {t("Submit")}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;
