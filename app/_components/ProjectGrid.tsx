"use client";
import "./ProjectGrid.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectGridProps {
  links?: string[]; 
}

const ProjectGrid: React.FC<ProjectGridProps> = () => {
  return (
    <>
    <h1 className="text titleFont">Projects</h1>
    <p className="text projectSubheading">Here&apos;s some of my projects that I&apos;ve created recently. Click on a tile to go to their GitHub repository!</p>
      <div className="projectsContainer">
        <ul className="projectGallery">
          <li className="project">
            <Link href="https://github.com/INFINITYX00/eslando" target="_blank">
            <Image src="/dpp-project.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Eslando&apos;s Digital Product Passports</span>
            </div>
            </Link>
          </li>

          <li className="project">
          <Link href="https://github.com/hollrosey/holly-massey-portfolio" target="_blank">
            <Image src="/portfolio.jpeg" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Portfolio Site</span>
            </div>
            </Link>
          </li>

        
          <li className="project">
          <Link href="https://hollrosey.github.io/magic-eight-ball/" target="_blank">
            <Image src="/eight-ball.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Magic Eight Ball</span>
            </div>
            </Link>
          </li>

          <li className="project">
          <Link href="https://github.com/hollrosey/fireplace-palace-hackathon" target="_blank">
            <Image src="/fireplace.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Fireplace Palace Hackathon</span>
            </div>
            </Link>
          </li>

        </ul>
       </div>
    </>
  );
};

export default ProjectGrid;
