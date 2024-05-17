import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="titleAndProject">
        <h1 className="text titleFont">
          Hi, I&apos;m Holly, a junior Web Developer.
        </h1>
        <p className="text">Insert sentence here</p>
        <div className="projectHome">
          <Image
            src="/dpp-project.png"
            height="400"
            width="300"
            alt=""
            className="homeProjectImg"
          />
          <p className="text projectDesc">
            I worked with a team of 6 to design a mobile app for Eslando,
            showcasing their Digital Product Passports. This user-friendly
            interface lets consumers access clothing information with ease, all
            while maintaining a visually-appealing design. I contributed through
            user research, wireframing, and UI development using React, Next.js,
            and CSS Modules. Balancing stakeholder needs with a positive user
            experience was key, and I'm eager to further enhance the app with
            user analytics.
          </p>
        </div>
        <Link className="viewAllProjects text" href="/Projects">
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
        <Link className="getInTouch text" href="/ContactForm">
          <p>Get in touch</p>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
