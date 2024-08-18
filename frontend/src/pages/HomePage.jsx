import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AboutAltSection from "../components/AboutAltSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <AboutAltSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
