import "../globals.css";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <ul className="navUl">
      <li className="navLi">
        <Link className="navAtag" href="/_components/ContactForm">
        Contact
        </Link>
      </li>
      <li className="navLi">
      <Link className="navAtag" href="/_components/Projects">
        Projects
        </Link>
      </li>
      <li className="navLi">
      <Link className="navAtag" href="/_components/AboutMe">
        About
        </Link>
      </li>
      <li className="navLi">
      <Link className="navAtag" href="/_components/page">
        Home
        </Link>
      </li>
    </ul>
  );
}
