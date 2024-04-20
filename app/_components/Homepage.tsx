import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="aboutContainer">
      <div className="text">
        <h1>This is a test title...</h1>
        <p>And this is a test paragraph to represent a short summary of my portfolio.</p>
      </div>
      <div className="aboutImage">
        <Image src="/placeholder.jpg" width="400" height="450" alt={""} className="profilePic"/>
      </div>
    </div>
  );
};

export default Homepage;
