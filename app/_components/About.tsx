import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <div className="aboutMe">
        <h1>I&apos;m Holly.</h1>
        <Image
          src="/placeholder.jpg"
          height="200"
          width="250"
          alt=""
          className="projectImg"
        />
        <h2>I&apos;m a junior Web Developer with an eye for design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className="toolkit">
        <h3>My Toolkit</h3>
      </div>
    </>
  );
};

export default About;
