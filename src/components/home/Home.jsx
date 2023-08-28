import React from "react";
// import Navbar from "/Navbar.jsx";
import Navbar from "../Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import ServiceSection from "./ServiceSection.jsx";
import Testimonials from "./Testimonials.jsx";
import FAQSection from "./FAQSection.jsx";
import Footer from "../Footer.jsx";
// import Footer from "./components/Footer.jsx";
// import SignUpFormOne from "./components/forms/SignUpFormOne.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
