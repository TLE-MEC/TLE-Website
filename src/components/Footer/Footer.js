import React, { useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  var yr = new Date().getFullYear();

  const handleContactForm = (e) => {
    e.preventDefault();

    if (email) {
      if (isEmail(email)) {
        const responseData = {
          email: email,
        };

        axios
          .post(process.env.REACT_APP_SHEETDB_API, responseData)
          .then((res) => {
            setEmail("");
          })
          .then(() => {
            setEmailErr("Subscribed");
          });
      } else {
        setEmailErr("Invalid Email!");
      }
    } else {
      setEmailErr("Enter Email");
    }
  };

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <h1>Stay Updated</h1>
          <p>
            Want to stay updated with the latest news about TLE MEC? Enter your
            email address to receive alerts on our latest activities.
          </p>

          <div className="footer_input_div">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="footer_input"
            />
            <button className="footer_btn" onClick={handleContactForm}>
              Get Updates
            </button>
          </div>
          <p>{emailErr}</p>
        </div>
        <div className="footer_right">
          <h2>Address</h2>
          <div className="footer_right_content">
            <HiOutlineLocationMarker className="footer_right_icon" />
            <p>
              Govt. Model Engineering College, Model Engineering College Road,
              Karimakkad, Thrikkakara, Edappally, Kochi, Kerala 682021
            </p>
          </div>
          <h2>Email</h2>
          <div className="footer_right_content">
            <HiOutlineMail className="footer_right_icon" />
            <p>
              <a href="mailto:tle@mec.ac.in">tle@mec.ac.in</a>
            </p>
          </div>
          <div className="footer_social">
            <a
              href="https://www.linkedin.com/company/tle-mec/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="footer_social_icon" />
            </a>
            <a
              href="https://www.instagram.com/tle.mec/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer_social_icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCs_SoUB3FdeUQ5E892Vq8OQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="footer_social_icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright © {yr} | TLE MEC </h4>
      </div>
    </div>
  );
}

export default Footer;
