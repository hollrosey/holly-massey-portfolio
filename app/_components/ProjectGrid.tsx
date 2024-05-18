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
    <p className="text projectSubheading">Here&apos;s some of my projects that I&apos;ve created recently. Click the links to go to their GitHub repositories!</p>
      <div className="projectsContainer">
        <ul className="projectGallery">
          <li className="project">
            
            <Image src="/dpp-project.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName"><Link href="https://github.com/INFINITYX00/eslando" target="_blank">Eslando&apos;s Digital Product Passports</Link></span>
            </div>
          </li>

          <li className="project">
            <Image src="/portfolio.jpeg" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName"><Link href="https://github.com/hollrosey/holly-massey-portfolio" target="_blank">Portfolio Site</Link></span>
            </div>
          </li>

        
          <li className="project">
            <Image src="/eight-ball.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName"><Link href="https://hollrosey.github.io/magic-eight-ball/" target="_blank">Magic Eight Ball</Link></span>
            </div>
          </li>

          <li className="project">
            <Image src="/fireplace.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName"><Link href="https://github.com/hollrosey/fireplace-palace-hackathon" target="_blank">Fireplace Palace Hackathon</Link></span>
            </div>
          </li>

        </ul>
       </div>
    </>
  );
};

export default ProjectGrid;
