import React from "react";
import "./FAQSection.css";

function FAQSection() {
  const button = document.querySelector("faq");
  return (
    <div className="FAQSection">
      <h2 className="faqh2">Let's Clear your Doubts! </h2>
      <div className="FAQStraps">
        <div className="faq faq1">
          <span>What is the approval criteria to be a Mentor?</span>
          <span>+</span>
        </div>
        <div className="faq faq1">
          <span>What is the approval criteria to be a Mentor?</span>
          <span>+</span>
        </div>
        <div className="faq faq1">
          <span>What is the approval criteria to be a Mentor?</span>
          <span>+</span>
        </div>
        <div className="faq faq1">
          <span>What is the approval criteria to be a Mentor?</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
