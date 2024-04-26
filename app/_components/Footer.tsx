import React from "react";
import Link from "next/link";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <h3>Always learning, always creating.</h3>
      <div className="footerRight">
        <ul className="underline-style">
          <li>
            <Link
              className="footerLink"
              href="https://github.com/hollrosey"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              className="footerLink"
              href="https://linkedin.com/in/holly-massey-6114a92a6"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="footerLink"
              href="mailto:hollyrmassey@yahoo.co.uk"
              target="_blank"
            >
              Email
            </Link>
          </li>
        </ul>
      </div>

      <div className="footerLeft">
        <p>Copyright 2024 © Holly Massey</p>
      </div>
    </footer>
  );
};

export default Footer;
