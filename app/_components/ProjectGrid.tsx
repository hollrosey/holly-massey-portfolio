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
      <div className="projectsContainer">
        <ul className="projectGallery">
          <li className="project">
            <Image src="/dpp-project.png" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="350" width="300" alt="" className="projectImg"/>
            <div className="hoverOverlay">
              <span className="projectName">Project name</span>
            </div>
          </li>

          <li className="project">
            <Image src="/placeholder.jpg" height="350" width="300" alt="" className="projectImg"/>
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
