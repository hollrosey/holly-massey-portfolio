import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      <h1>Hi there! I&apos;m Holly, a junior Web Developer.</h1>
      <p>Insert sentence here</p>

      <div className="project">
        <Image
          src="/placeholder.jpg"
          height="200"
          width="250"
          alt=""
          className="projectImg"
        />
        <div className="hoverOverlay">
          <span className="projectName">My most recent project</span>
        </div>
      </div>
      <Link className="viewAllProjects" href="/Projects">
        View all projects
      </Link>

      <div className="workTogether">
        <h2>Let&apos;s work together!</h2>
        <Link className="getInTouch" href="/ContactForm">
          Get in touch
        </Link>
      </div>
    </>
  );
};

export default Homepage;
