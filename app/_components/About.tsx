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
      <h1 className="text titleFont textColor">I&apos;m Holly.</h1>
      <div className="aboutMe text textColor">
        <Image
          src="/headshot.PNG"
          height="438"
          width="350"
          alt=""
          className="profilePicture"
        />
        <div className="aboutMeText">
          <h2 className="titleFont">
            I&apos;m a junior Software Developer with an eye for design
          </h2>
          <p>
            Fuelled by a passion for creativity and how it translates into the
            digital world, I&apos;m diving headfirst into software development.
            Outside of coding, you&apos;ll find me with a paintbrush in my hand, exploring new artistic techniques or crafting crochet pieces, one
            stitch at a time. Constantly exploring new
            tools and ideas keeps me excited about my future in software
            development.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
