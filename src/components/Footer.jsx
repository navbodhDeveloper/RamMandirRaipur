import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">

      <h3 className="footer-heading">CONTACT US</h3>

      <div className="contact-info">
        <p>We'd love to hear from you. Reach out to join seva or for temple inquiries.</p>
      </div>

      <div className="social-icons">
        <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
        <a href="https://www.youtube.com/live/JB3OC5wFKDA?si=W1ckSEEWALMnkLIx" target="_blank"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
        <a href="https://www.facebook.com/share/1BMXaCL3G3/?mibextid=wwXIfr" target="_blank"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
        <a href="mailto:rammandirraipur@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
      </div>

      <div className="contact-numbers">
        <div className="contact-box">
          <p><strong>Mandir Prabandhak Umesh Shukla</strong></p>
          <p>+91 8720040199</p>
        </div>
        <div className="contact-box">
          <p><strong>Mandir Prabandhak Pujari (Hanumanth Ji)</strong></p>
          <p>+91 7000932687</p>
        </div>
        <div className="contact-box">
          <p><strong>Mandir Landline</strong></p>
          <p>+91 7117406118</p>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Ram Mandir Seva | All Rights Reserved</p>
=======
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
     <footer className="footer">
      <p>© {new Date().getFullYear()} Ram Mandir Seva | All Rights Reserved</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="mailto:rammandirraipur@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="tel:+911234567890">
          <FontAwesomeIcon icon={faPhone} /> 1234567890
        </a>
      </div>
>>>>>>> 1baeffa9a5f3de632b379ceccbc24c3a8f633c19
    </footer>
  );
};

export default Footer;
