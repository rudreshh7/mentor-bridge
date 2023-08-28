import React from "react";
import "./ServiceSection.css"; // Import the CSS file

const ServiceSection = () => {
  return (
    <div className="service-container">
      <h2>Find the expertise from</h2>
      <div className="image-container">
        {/* Replace these image URLs with your own */}
        <div className="image-box">
          <img src="/assets/amazon.png" alt="Expertise 1" />
        </div>
        <div className="image-box">
          <img src="/assets/spotify.png" alt="Expertise 2" />
        </div>
        <div className="image-box">
          <img src="/assets/meta.png" alt="Expertise 3" />
        </div>
      </div>
      <h2>Make Your Career Growth in</h2>
      <div className="career-image-container">
        {/* Replace these image URLs with your own */}
        <div className="career-image-box">
          <img src="/assets/career1.png" alt="Career 1" />
        </div>
        <div className="career-image-box">
          <img src="/assets/career2.png" alt="Career 2" />
        </div>
        <div className="career-image-box">
          <img src="/assets/career3.png" alt="Career 3" />
        </div>
        <div className="career-image-box">
          <img src="/assets/career4.png" alt="Career 4" />
        </div>
        <div className="career-image-box">
          <img src="/assets/career5.png" alt="Career 5" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
