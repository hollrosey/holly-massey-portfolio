import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <h3 className="footerQuote">Always learning, always creating.</h3>
      <div className="footerContent">
      <div className="footerLeft">
          <p>Copyright 2024 © Holly Massey</p>
        </div>

        <div className="footerRight">
          <ul className="iconList">
            <li>
              <Link
                className="footerLink"
                href="https://github.com/hollrosey"
                target="_blank"
              >
                <FaGithub size={30} color="#333" />
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                href="https://linkedin.com/in/holly-massey-6114a92a6"
                target="_blank"
              >
                <FaLinkedin size={30} color="#333" />
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                href="mailto:hollyrmassey@yahoo.co.uk"
                target="_blank"
              >
                <FaEnvelope size={30} color="#333"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
