import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="titleAndProject textColor">
        <h1 className="text titleFont">
          Hi, I&apos;m Holly, a junior Software Developer.
        </h1>
        <p className="text tagline">
          Crafting impactful experiences through code and artistic expression.
        </p>
        <div className="projectHome">
          <Image
            src="/dpp-project.png"
            height="400"
            width="300"
            alt=""
            className="homeProjectImg"
          />
          <p className="text projectDesc">
            I teamed up with 5 fellow bootcampers to craft a visually-appealing
            web app using React and Next.js for Eslando&apos;s Digital Product
            Passports. User-centric design meets stakeholder needs. 
          </p>
        </div>
        <Link className="clickable viewAllProjects text" href="/Projects">
          <p>View all projects</p>
        </Link>
      </div>

      <div className="toolkit text">
        <h2 className="text titleFont">Languages and Tools</h2>
        <div className="toolIcons">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <br />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            alt=""
            height="50"
            width="50"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
            alt=""
            height="50"
            width="50"
          />
        </div>
      </div>
      <div className="workTogether">
        <h2 className="text titleFont">Let&apos;s work together!</h2>
        <Link className="clickable getInTouch text" href="/ContactForm">
          <p>Get in touch</p>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
