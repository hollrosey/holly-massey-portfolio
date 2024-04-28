import React from "react";
import Image from "next/image";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
    <h1 className="text titleFont">I&apos;m Holly.</h1>
      <div className="aboutMe text">
        <Image
          src="/placeholder.jpg"
          height="350"
          width="300"
          alt=""
          className="profilePicture"
        />
        <div className="aboutMeText">
        <h2>I&apos;m a junior Web Developer with an eye for design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      </div>

      <div className="toolkit text">
        <h3 className="titleFont">My Toolkit</h3>
      </div>

      <div className="bottomSection <h1>I&apos;m Holly.</h1>">
        <p>hi</p>
      </div>
    </>
  );
};

export default About;
