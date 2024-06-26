import React from "react";
import Link from "next/link";
import "./ContactHeader.css";

const ContactHeader: React.FC = () => {
  return (
    <>
      <h1 className="centered titleFont">Let&apos;s connect.</h1>
      <p className="centered paraMargin">
        Have a project in mind? Or maybe you just want to chat! Drop me a line
        using the form below, and let&apos;s connect. You can also find me on{" "}
        <Link
          className="contactLink"
          href="https://linkedin.com/in/holly-massey-6114a92a6"
          target="_blank"
        >
          LinkedIn
        </Link>.
      </p>
    </>
  );
};

export default ContactHeader;
