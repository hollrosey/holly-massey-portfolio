import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      <h1 className="text">Hi, I&apos;m Holly, a junior Web Developer.</h1>
      <p className="text">Insert sentence here</p>

      <div className="project">
        <Image
          src="/placeholder.jpg"
          height="250"
          width="300"
          alt=""
          className="projectImg"
        />
        <div className="overlay">
          <span className="projectName">My most recent project</span>
        </div>
      </div>
      <Link className="viewAllProjects text" href="/Projects">
        <p>View all projects</p>
      </Link>

      <div className="workTogether text">
        <h2 className="text">Let&apos;s work together!</h2>
        <Link className="getInTouch text" href="/ContactForm">
          Get in touch
        </Link>
      </div>
    </>
  );
};

export default Homepage;
