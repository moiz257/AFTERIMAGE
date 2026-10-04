import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/footer.css";

export const ContactFaqsSection = ({ id }) => {
  return (
    <div className="contact-faqs-section" id={id}>
      <div className="section-06-grid">
        {/* Left Column: Contact */}
        <div className="grid-column contact-col">
          <div className="contact-title-wrap">
            <h3 className="column-title-lite">CONTACT US</h3>
          </div>
          <form className="mini-contact-form">
            <div className="mini-form-group">
              <label>NAME</label>
              <input type="text" />
            </div>
            <div className="mini-form-group">
              <label>EMAIL</label>
              <input type="email" />
            </div>
            <div className="mini-form-group">
              <label>MESSAGE</label>
              <input type="text" />
            </div>
            <button type="submit" className="mini-arrow-btn">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Middle Column: Donation */}
        {/* <div className="grid-column support-col">
          <h3 className="column-title-lite">FAN OF OUR WORK?</h3>
          <div className="paypal-container">
            <div className="paypal-button-real">
              <div className="pp-icon-wrap">
                <span className="pp-blue-bold">P</span>
                <span className="pp-light-blue-bold">P</span>
              </div>
              <div className="pp-text">
                <span className="pp-small">Donate with</span>
                <span className="pp-large">PayPal</span>
              </div>
            </div>
          </div>
          <p className="support-disclaimer">
            Donations go through our parent company<br />
            Khaos Europe. 100% of donations are<br />
            invested in the project with a primary focus<br />
            on our artists.
          </p>
          <div className="heart-footer">
            <span>♥</span>
          </div>
        </div> */}

        {/* Right Column: Corporate */}
        {/* <div className="grid-column corporate-col">
          <p className="corporate-intro">
            Afterimage is an independent platform for live art, sound, and culture.
          </p>
          <div className="khaos-logo-refined">
            <img
              src="/assets/image/KHAOStransWhite.71ab26ba.svg"
              alt="Khaos Europe Logo"
              className="khaos-svg-logo"
            />
            <div className="khaos-txt">KHAOS</div>
          </div>
          <a
            href="https://khaoseurope.com"
            target="_blank"
            rel="noopener noreferrer"
            className="corporate-link"
          >
            khaoseurope.com
          </a>
          <div className="registration-details">
            <p>Registered in England and Wales.</p>
            <p>Registered Company number: 10871374</p>
            <p className="copyright">AFTERIMAGE | 2026 | ®</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export const FooterMarquee = () => {
  return (
    <footer className="footer-marquee">
      <motion.div
        className="marquee-inner"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="footer-marquee-text">
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
        </span>
      </motion.div>
    </footer>
  );
};
