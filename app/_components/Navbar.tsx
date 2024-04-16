"use client";
import "../globals.css";
import React from 'react';
import Link from 'next/link';

interface Link {
  name: string;
  location: string;
}

interface NavbarProps {
  links: Link[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="underline-style">
    <ul className="navUl">
      {links.map((link, index) => ( // Fixed map function syntax
        <li className="navLi" key={index}>
          <Link className="navAtag" href={link.location}> 
           {link.name}
          </Link>
        </li>
      ))}
    </ul>
    </nav>
  );
}


export default Navbar;

