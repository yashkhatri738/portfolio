"use client";

import { useState, useEffect } from "react";
import AboutSection from "./components/about";
import HeroSection from "./components/hero";
import PortfolioSection from "./components/portfolioSection";
import ContactSection from "./components/contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "portfolio", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleTheme = () => {
    // Reserved for future light mode toggle
  };

  return (
    <main
      style={{
        background: "#080810",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <HeroSection activeSection={activeSection} />
      <AboutSection />
      <PortfolioSection activeSection={activeSection} />
      <ContactSection
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        toggleTheme={toggleTheme}
      />
    </main>
  );
}
