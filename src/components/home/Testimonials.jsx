import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <h2 className="testih2">What are clients say about us</h2>
      <div className="testimonials">
        {/* Main Div */}
        <div className="testimonial">
          <blockquote>
            Calvin: You know sometimes when I'm talking, my words can't keep up
            with my thoughts... I wonder why we think faster than we speak.
            Hobbes: Probably so we can think twice.
          </blockquote>
          <img src="/assets/profile1.png" alt="Profile 1" />
          <p className="profilename">Alixa</p>
          <p className="profiledes">Founder Xoxo</p>
        </div>
        <div className="testimonial">
          <blockquote>
            Calvin: You know sometimes when I'm talking, my words can't keep up
            with my thoughts... I wonder why we think faster than we speak.
            Hobbes: Probably so we can think twice.
          </blockquote>
          <img src="/assets/profile2.png" alt="Profile 1" />
          <p className="profilename">Michel</p>
          <p className="profiledes">Founder Xoxo</p>
        </div>
        <div className="testimonial">
          <blockquote>
            Calvin: You know sometimes when I'm talking, my words can't keep up
            with my thoughts... I wonder why we think faster than we speak.
            Hobbes: Probably so we can think twice.
          </blockquote>
          <img src="/assets/profile3.png" alt="Profile 1" />
          <p className="profilename">Lee </p>
          <p className="profiledes">Founder Xoxo</p>
        </div>
        {/* Main Div Closed */}
      </div>
    </>
  );
}

export default Testimonials;
