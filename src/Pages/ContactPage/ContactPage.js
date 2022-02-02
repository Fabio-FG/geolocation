import "./ContactPage.css";
import githubLogo from "../../images/github.svg";
import linkedinLogo from "../../images/linkedin.svg";
import gmailLogo from "../../images/gmail.svg";
import { useTranslation } from "react-i18next";

function ContactPage() {

  //translation hook
  const { t } = useTranslation();

  return (
      <div>
    <div className="content-wrapper">
      <div className="contact-wrapper">
        <div className="contact-links">
          <img src={githubLogo} alt="github-logo" id="github-logo" className="icon"/>
          <img src={linkedinLogo} alt="linkedin-logo" id="linkedin-logo" className="icon"/>
          <img src={gmailLogo} alt="gmail-logo" id="gmail-logo" className="icon"/>
        </div>
        <form>
          <h1>{t("Contact Us")}</h1>
          <input type="text" placeholder={t("Name")} />
          <input type="email" placeholder={("Email")} />
          <textarea placeholder={t("Your Message")} maxlength="350" />
          {/* Add a reCAPTCHA */}
          <button type="submit" className="submit-btn">{t("Submit")}</button>
        </form>
        </div>
        </div>
    </div>
  );
}

export default ContactPage;
