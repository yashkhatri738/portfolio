"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Job Portal",
    tech: "Next.js",
    tag: "React",
    img: "/Job.png",
    github: "https://github.com/yashkhatri738/hire-seek-pulse",
    live: "https://hire-seek-pulse.vercel.app/",
    color: "#3b82f6",
    desc: "Full-stack job portal with auth, job listings, and applications.",
    year: "2025",
  },
  {
    id: 2,
    title: "Crypto Clone",
    tech: "React.js",
    tag: "React",
    img: "/Screenshot (30).png",
    github: "https://github.com/yashkhatri738/Crypto_clone",
    live: "https://yash-crypto.netlify.app/",
    color: "#f7931a",
    desc: "Live crypto tracker with real-time prices, charts & market data.",
    year: "2024",
  },
  {
    id: 3,
    title: "YouTube Clone",
    tech: "React.js",
    tag: "React",
    img: "/Screenshot (29).png",
    github:
      "https://github.com/yashkhatri738/YouTube_Clone/tree/main/YouTube_clone",
    live: "https://yash-khatri-yt.netlify.app/",
    color: "#ff0000",
    desc: "Full YouTube UI clone with search, video player & responsive layout.",
    year: "2024",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    tech: "React.js",
    tag: "React",
    img: "/Screenshot (108).png",
    github: "https://github.com/yashkhatri738/ColorGenreto",
    live: "https://yash-e-store.netlify.app/",
    color: "#10b981",
    desc: "Shopping app with cart, product listing and smooth UX.",
    year: "2024",
  },
  {
    id: 5,
    title: "ColorGenretor",
    tech: "CSS / JS",
    tag: "CSS",
    img: "/Color.png",
    github: "https://github.com/yashkhatri738/ColorGenretor",
    live: "https://color-genretor.vercel.app/",
    color: "#a78bfa",
    desc: "Random color palette generator with copy-to-clipboard and live preview.",
    year: "2023",
  },
  {
    id: 6,
    title: "Food Web",
    tech: "HTML / CSS",
    tag: "HTML",
    img: "/Screenshot (111).png",
    github: "https://github.com/yashkhatri738/Food_web",
    live: "https://yashkhatri738.github.io/Food_web/",
    color: "#f59e0b",
    desc: "Restaurant landing page with responsive design and smooth navigation.",
    year: "2023",
  },
  {
    id: 7,
    title: "Netflix Clone",
    tech: "React.js",
    tag: "React",
    img: "/laptop_thumbnail.png",
    github:
      "https://github.com/yashkhatri738/Netflix-React/tree/main/netflix_react",
    live: "https://yash-netfliix.netlify.app/login",
    color: "#e50914",
    desc: "Netflix UI with auth flow, movie browsing and responsive player.",
    year: "2024",
  },
];

const filters = ["All", "React", "CSS", "HTML"];

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered ? -8 : 0}px)`
          : "translateY(50px)",
        transition: inView
          ? `opacity 0.6s ease ${index * 0.1}s, transform 0.08s ease`
          : `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        cursor: "pointer",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#0d0d18",
        border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 20px 60px ${project.color}25, 0 0 0 1px ${project.color}30`
          : "none",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
      >
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Gradient overlay always */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, rgba(13,13,24,0.95) 0%, rgba(13,13,24,0.2) 60%, transparent 100%)`,
          }}
        />

        {/* Colored tint on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: project.color + "15",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s",
          }}
        />

        {/* Year badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "3px 10px",
            borderRadius: "20px",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
            fontSize: "11px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Outfit', sans-serif",
            backdropFilter: "blur(8px)",
          }}
        >
          {project.year}
        </div>

        {/* Tech badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "3px 10px",
            borderRadius: "20px",
            background: project.color + "22",
            border: `1px solid ${project.color}50`,
            fontSize: "11px",
            color: project.color,
            fontFamily: "'Outfit', sans-serif",
            backdropFilter: "blur(8px)",
            fontWeight: 500,
          }}
        >
          {project.tech}
        </div>

        {/* Action buttons on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.3s ease",
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(12px)",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.8)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: project.color,
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 20px ${project.color}60`,
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 20px 20px" }}>
        {/* Colored accent bar */}
        <div
          style={{
            width: hovered ? "48px" : "24px",
            height: "2px",
            background: project.color,
            borderRadius: "2px",
            marginBottom: "12px",
            transition: "width 0.4s ease",
            boxShadow: hovered ? `0 0 10px ${project.color}80` : "none",
          }}
        />

        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 8px",
            letterSpacing: "0.01em",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12.5px",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {project.desc}
        </p>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            paddingTop: "14px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'Outfit'",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
              }
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Code
            </a>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "11px" }}>
              ·
            </span>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "11px",
                color: project.color,
                fontFamily: "'Outfit'",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: project.color + "18",
              border: `1px solid ${project.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "rotate(0deg)" : "rotate(-45deg)",
              transition: "all 0.3s ease",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke={project.color}
              strokeWidth="2.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3D shimmer layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)`,
          pointerEvents: "none",
          borderRadius: "20px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  );
}

export default function PortfolioSection({
  activeSection,
}: {
  activeSection: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, 0.05);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=Syne:wght@700;800&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className={`section sec3 ${activeSection === "portfolio" ? "active" : ""}`}
        id="portfolio"
        style={{
          position: "relative",
          padding: "100px 0 120px",
          background: "#080810",
          overflow: "hidden",
        }}
      >
        {/* Background effects */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "56px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 16px",
                border: "1px solid rgba(167,139,250,0.25)",
                borderRadius: "40px",
                background: "rgba(167,139,250,0.06)",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#a78bfa",
                  animation: "blink 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color: "#a78bfa",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                My Work
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#fff",
                margin: "0 0 14px",
                lineHeight: 1.1,
              }}
            >
              Selected{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "14.5px",
                color: "rgba(255,255,255,0.4)",
                maxWidth: 480,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              A collection of projects built with modern web technologies — from
              UI clones to full-stack apps.
            </p>

            {/* Filter tabs */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "40px",
                    border: `1px solid ${activeFilter === f ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.08)"}`,
                    background:
                      activeFilter === f
                        ? "rgba(167,139,250,0.12)"
                        : "transparent",
                    color:
                      activeFilter === f ? "#a78bfa" : "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    fontFamily: "'Outfit', sans-serif",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontWeight: activeFilter === f ? 500 : 400,
                    outline: "none",
                  }}
                >
                  {f}
                  {f === "All" && (
                    <span
                      style={{
                        marginLeft: "6px",
                        padding: "1px 7px",
                        borderRadius: "10px",
                        background: "rgba(167,139,250,0.15)",
                        fontSize: "10px",
                        color: "#a78bfa",
                      }}
                    >
                      {projects.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              textAlign: "center",
              marginTop: "64px",
              opacity: inView ? 1 : 0,
              transition: "opacity 1s ease 0.8s",
            }}
          >
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "13.5px",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "16px",
              }}
            >
              Want to see more?
            </p>
            <a
              href="https://github.com/yashkhatri738"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                transition: "all 0.25s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View GitHub Profile
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}</style>
      </section>
    </>
  );
}
