"use client";
import "./ProjectGrid.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Link {
  name: string;
  location: string;
}

interface NavbarProps {
  links: Link[];
}

const ProjectGrid: React.FC<NavbarProps> = () => {
  return (
    <>
      <div className="projectsContainer">
        <ul className="projectGallery">
          <li className="project">
            <Image src="/placeholder.jpg" height="200" width="250" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="200" width="250" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="200" width="250" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="200" width="250" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="200" width="250" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="200" width="250" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>
        </ul>
       </div>
    </>
  );
};

export default ProjectGrid;
