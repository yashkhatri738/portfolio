// "use client";

// import { useState, useEffect } from "react";
// import AboutSection from "./about";
// import HeroSection from "./hero";
// import PortfolioSection from "./portfolioSection";
// import ContactSection from "./contact";

// export default function Home() {
//   const [isLightMode, setIsLightMode] = useState(false);

//   useEffect(() => {
//     if (isLightMode) {
//       document.body.classList.add("light-mode");
//     } else {
//       document.body.classList.remove("light-mode");
//     }
//   }, [isLightMode]);

//   const handleNavClick = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const toggleTheme = () => {
//     setIsLightMode((prev) => !prev);
//   };

//   return (
//     <main
//       style={{
//         background: "#080810",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Each section stacks naturally — no activeSection gating */}
//       <div id="home">
//         <HeroSection activeSection="home" />
//       </div>

//       <div id="about" style={{ scrollMarginTop: "0px" }}>
//         <AboutSection />
//       </div>

//       <div id="portfolio" style={{ scrollMarginTop: "0px" }}>
//         <PortfolioSection activeSection="portfolio" />
//       </div>

//       <div id="contact" style={{ scrollMarginTop: "0px" }}>
//         <ContactSection
//           activeSection="contact"
//           handleNavClick={handleNavClick}
//           toggleTheme={toggleTheme}
//         />
//       </div>
//     </main>
//   );
// }



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
