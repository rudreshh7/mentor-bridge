import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="left-content">
        <img src="/assets/bluerocket.png" alt="rocket" />
        <h1>Grow Faster Together</h1>
        <p>Find a mentor or lead the path for someone It's a win-win!</p>

        <div className="homebutton">
          <button className="mentor-button">Find a Mentor</button>
          <button className="mentor-button">Become a Mentor</button>
        </div>
      </div>
      <div className="right-content">
        <img src="/assets/girlandmobile.png" alt="Mentor Image" />
      </div>
    </div>
  );
};

export default HeroSection;
