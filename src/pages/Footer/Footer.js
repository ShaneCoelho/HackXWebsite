import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { FaUniversity } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <section class="footer-container">
      <footer className="footer">
        <div className="bottom-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>WHERE TO FIND US</h4>
              <ul>
                <li>
                  <a
                    class="footer-txt"
                    href="https://www.sfit.ac.in/"
                    target="_blank"
                  >
                    <FaUniversity class="icon" /> St.Francis Institute Of
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=St. Francis Institute of Technology"
                    target="_blank"
                  >
                    <FaMapMarkedAlt class="icon" /> Mount Poinsur, S.V.P. Road,
                    Borivali (West), Mumbai
                  </a>
                </li>
                <li>
                  <FaEnvelope class="icon" />
                  <a href="ieeesfitsb@gmail.com" className="mail">
                    Mail
                  </a>
                </li>
                <li>
                  <FaPhoneAlt class="icon" /> Parth Barai:{" "}
                  <a href="tel:+919372269353">9372269353 </a>
                </li>
                <li>
                  <FaPhoneAlt class="icon" /> Chris:{" "}
                  <a href="tel:+919637261594">9637261594 </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>FOLLOW US</h4>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/techfest_mosaic/?hl=en"
                  target="_blank"
                >
                  <img
                    className=""
                    src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
                    alt="insta"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/school/sfit/?originalSubdomain=in"
                  target="_blank"
                >
                  <img
                    className=""
                    src="https://cdn-icons-png.flaticon.com/512/179/179330.png"
                    alt="linkedin"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    className=""
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png"
                    alt="discord"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
