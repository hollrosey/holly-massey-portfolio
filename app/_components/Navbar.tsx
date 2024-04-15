import "../globals.css";
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <ul className="navUl">
      <li className="navLi">
        <Link className="navAtag" href={"/ContactForm"}>
        Contact
        </Link>
      </li>
      <li className="navLi">
      <Link className="navAtag" href={"/Projects"}>
        Projects
        </Link>
      </li>
      <li className="navLi">
      <Link className="navAtag" href={"/AboutMe"}>
        About
        </Link>
      </li>
      <li className="navLi">
      <Link className="navAtag" href={"/"}>
        Home
        </Link>
      </li>
    </ul>

  );
}

export default Navbar;

