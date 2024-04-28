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

      <div className="toolkit text">
        <h3 className="titleFont">My Toolkit</h3>
        <ul className="toolKitContent">
          <li>
            <div className="icon-container">
              <FaHtml5 />
            </div>
            <div className="iconText">HTML</div>
          </li>
          <li>
            <div className="icon-container">
              <FaCss3Alt />
            </div>
            <div className="iconText">CSS</div>
          </li>
          <li>
            <div className="icon-container">
              <FaJsSquare />
            </div>
            <div className="iconText">JavaScript</div>
          </li>
          <li>
            <div className="icon-container">
              <SiTypescript />
            </div>
            <div className="iconText">TypeScript</div>
          </li>
          <li>
            <div className="icon-container">
              <FaNode />
            </div>
            <div className="iconText">Node.js</div>
          </li>
          <li>
            <div className="icon-container">
              <FaReact />
            </div>
            <div className="iconText">React</div>
          </li>
          <li>
            <div className="icon-container">
              <SiNextdotjs />
            </div>
            <div className="iconText">Next.js</div>
          </li>
          <li>
            <div className="icon-container">
              <SiPostgresql />
            </div>
            <div className="iconText">PostgreSQL</div>
          </li>
          <li>
            <div className="icon-container">
              <FaDatabase />
            </div>
            <div className="iconText">SQL</div>
          </li>
          <li>
            <div className="icon-container">
              <FaServer />
            </div>
            <div className="iconText">REST API</div>
          </li>
          <li>
            <div className="icon-container">
              <SiFigma />
            </div>
            <div className="iconText">Figma</div>
          </li>
          <li>
            <div className="icon-container">
              <SiGithub />
            </div>
            <div className="iconText">Github</div>
          </li>
          <li>
            <div className="icon-container">
              <FaGitAlt />
            </div>
            <div className="iconText">Git</div>
          </li>
          <li>
            <div className="icon-container">
              <SiExpress />
            </div>
            <div className="iconText">Express</div>
          </li>
          <li>
            <div className="icon-container">
              <FaLaptopCode />
            </div>
            <div className="iconText">PlayWright</div>
          </li>
          <li>
            <div className="icon-container">
              <FaWindowMaximize />
            </div>
            <div className="iconText">Vitest</div>
          </li>
        </ul>
      </div>

      <div className="bottomSection">
        <p>hi</p>
      </div>
    </>
  );
};

export default About;
