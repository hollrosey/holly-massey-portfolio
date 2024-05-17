import React from "react";
import Image from "next/image";
import "./About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaReact,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaWindowMaximize,
  FaGitAlt,
  FaGithubAlt,
  FaFigma,
  FaFileCode,
  FaCodeBranch,
  FaCodepen,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiFigma,
  SiGithub,
  SiExpress,
} from "react-icons/si";

const About: React.FC = () => {
  return (
    <>
      <h1 className="text titleFont">I&apos;m Holly.</h1>
      <div className="aboutMe text">
        <Image
          src="/headshot.PNG"
          height="438"
          width="350"
          alt=""
          className="profilePicture"
        />
        <div className="aboutMeText">
          <h2 className="titleFont">
            I&apos;m a junior Web Developer with an eye for design
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div className="bottomSection">
        <p>hi</p>
      </div>
    </>
  );
};

export default About;
