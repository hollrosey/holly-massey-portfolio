import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="titleAndProject">
        <h1 className="text">Hi, I&apos;m Holly, a junior Web Developer.</h1>
        <p className="text">Insert sentence here</p>
        <div className="project">
          <Image
            src="/placeholder.jpg"
            height="350"
            width="300"
            alt=""
            className="homeProjectImg"
          />
          <div className="overlay">
            <span className="projectName">My most recent project</span>
          </div>
        </div>
        <Link className="viewAllProjects text" href="/Projects">
          <p>View all projects</p>
        </Link>
      </div>

      <div className="workTogether text">
        <h2 className="text">Let&apos;s work together!</h2>
        <Link className="getInTouch text" href="/ContactForm">
          <p>Get in touch</p>
        </Link>
      </div>
      <div className="blogSection">
        <p>hi</p>
      </div>
    </>
  );
};

export default Homepage;
