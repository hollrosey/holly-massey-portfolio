import React from "react";
import Link from "next/link";
import "./ContactHeader.css";

const ContactHeader: React.FC = () => {
  return (
    <>
      <h1>Let&apos;s connect.</h1>
      <p>
        Have a project in mind? Or maybe you just want to chat! Drop me a line
        using the form below, and let&apos;s connect. You can also find me on{" "}
        <Link
          className="footerLink"
          href="https://linkedin.com/in/holly-massey-6114a92a6"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        or feel free to send me an{" "}
        <Link
          className="footerLink"
          href="mailto:hollyrmassey@yahoo.co.uk"
          target="_blank"
        >
          email
        </Link>
        .
      </p>
    </>
  );
};

export default ContactHeader;
