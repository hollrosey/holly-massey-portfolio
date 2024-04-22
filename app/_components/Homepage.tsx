import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="aboutContainer">
      <div className="text">
        <h1>My title will go here.</h1>
        <p>
          This is a placeholder! 
        </p>
      </div>
      <div className="aboutImage">
        <Image
          src="/placeholder.jpg"
          width="282"
          height="400"
          alt={""}
          className="profilePic"
        />
      </div>
    </div>
  );
};

export default Homepage;
