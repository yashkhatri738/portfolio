// import { useEffect, useRef, useState } from "react";

// const skills = {
//   Languages: [
//     { name: "HTML5", color: "#e44d26", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#e44d26" d="M5.9 27.2 3.7 2h24.7l-2.3 25.2L16 30z"/><path fill="#f16529" d="M16 27.9l8.2-2.3 1.9-21.5H16z"/><path fill="#ebebeb" d="M16 13.4h-4.1l-.3-3.2H16V7.1H8.2l.1.8.7 8.5H16zm0 8-4-1.1-.2-2.8H8.6l.5 5.6L16 24.9z"/><path fill="#fff" d="M16 13.4v3.1h3.8l-.4 4L16 21.4v3.4l7.5-2.1.8-9.7.1-1.2H16zm0-6.3v3.1h7.5l.1-.7.1-1.5.1-.8H16z"/></svg>
//     )},
//     { name: "CSS3", color: "#1572b6", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#1572b6" d="M5.9 27.2 3.7 2h24.7l-2.3 25.2L16 30z"/><path fill="#33a9dc" d="M16 27.9l8.2-2.3 1.9-21.5H16z"/><path fill="#fff" d="M16 13.4H9.9l.2 2.3H16v-2.3zm0-6.3H9.3l.2 2.3H16V7.1zm0 12.7-4-1.1-.3-2.8H8.6l.5 5.6L16 24.9v-5.1z"/><path fill="#ebebeb" d="M16 13.4v2.3h5.7l-.2 1.8-3.9 1.1v2.2l7.3-2 .5-6zm0-6.3v2.3h6.3l.2-2.3H16z"/></svg>
//     )},
//     { name: "JavaScript", color: "#f7df1e", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect fill="#f7df1e" width="32" height="32" rx="3"/><path d="M9.7 24.6 11.4 23.6c.4.7.7 1.3 1.5 1.3.8 0 1.2-.3 1.2-1.5V16h2.4v7.5c0 2.5-1.5 3.7-3.6 3.7-1.9 0-3-1-3.8-2.6zm9.7-.2 1.8-1.1c.5.9 1.1 1.5 2.2 1.5 1 0 1.5-.5 1.5-1.1 0-.8-.6-1.1-1.6-1.5l-.6-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2.1l-1.7 1.1c-.5-.8-.9-1.1-1.8-1.1-.8 0-1.3.5-1.3 1.1 0 .7.5 1 1.4 1.5l.6.2c2.2 1 3.4 2 3.4 4 0 2.3-1.8 3.6-4.2 3.6-2.3 0-3.8-1.1-4.5-2.7z"/></svg>
//     )},
//     { name: "TypeScript", color: "#3178c6", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect fill="#3178c6" width="32" height="32" rx="3"/><path fill="#fff" d="M6 20.5v2.1c.4.2.8.3 1.2.4s.9.1 1.3.1c.4 0 .8 0 1.2-.1.4-.1.7-.2 1-.4.3-.2.5-.4.7-.7.2-.3.2-.7.2-1.1 0-.3 0-.5-.1-.8-.1-.2-.2-.5-.4-.6-.2-.2-.4-.4-.7-.5l-.9-.5-.6-.3-.5-.3-.3-.3c-.1-.1-.1-.2-.1-.4 0-.1 0-.2.1-.3l.3-.2.4-.1h.5c.2 0 .4.1.6.2.2.1.4.2.5.4l.5.6.1.7h1.8v-.2c0-.4-.1-.7-.3-1-.1-.3-.4-.6-.6-.8-.3-.2-.6-.4-1-.5-.4-.1-.9-.2-1.4-.2-.4 0-.8 0-1.1.2-.3.1-.7.3-1 .5-.2.2-.5.4-.6.7-.2.3-.2.6-.2.9 0 .5.1.9.4 1.2.3.3.7.6 1.3.9l1 .4.6.3.5.3c.1.1.2.3.2.5s0 .3-.1.4l-.3.3-.4.1h-.6l-.5-.1c-.2-.1-.4-.2-.5-.4-.2-.2-.3-.4-.4-.7l-.1-.7H6zm12.5-1.5h-2.2v-2.1h-1.8v2.1h-1.3v1.6h1.3V24c0 .4 0 .7.1 1 .1.3.2.5.4.7.2.2.4.3.7.4.2.1.5.1.9.1.2 0 .5 0 .7-.1.3 0 .5-.1.7-.2l-.2-1.6h-.3c-.3 0-.4-.1-.5-.3V20.6h2.5v-1.6z"/></svg>
//     )},
//   ],
//   Frontend: [
//     { name: "React.js", color: "#61dafb", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg>
//     )},
//     { name: "Next.js", color: "#ffffff", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><circle cx="16" cy="16" r="14" fill="#000"/><path d="M10 22V10h2l8 9.5V10h2v12h-2L12 12.5V22z" fill="#fff"/></svg>
//     )},
//     { name: "Tailwind CSS", color: "#38bdf8", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#38bdf8" d="M16 7c-3.3 0-5.5 1.6-6.5 5 1-1.3 2.1-1.8 3.5-1.5.75.2 1.3.75 1.9 1.35.95 1.05 2.1 2.15 4.6 2.15 3.3 0 5.5-1.6 6.5-5-1 1.3-2.1 1.8-3.5 1.5-.75-.2-1.3-.75-1.9-1.35C19.65 8.1 18.5 7 16 7zm-6.5 7.5c-3.3 0-5.5 1.6-6.5 5 1-1.3 2.1-1.8 3.5-1.5.75.2 1.3.75 1.9 1.35.95 1.05 2.1 2.15 4.6 2.15 3.3 0 5.5-1.6 6.5-5-1 1.3-2.1 1.8-3.5 1.5-.75-.2-1.3-.75-1.9-1.35C13.15 15.6 12 14.5 9.5 14.5z"/></svg>
//     )},
//     { name: "Bootstrap", color: "#7952b3", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#7952b3"/><path fill="#fff" d="M8 8h9c2.2 0 3.8 1.3 3.8 3.3 0 1.5-.9 2.5-2 2.8 1.5.4 2.5 1.5 2.5 3.2C21.3 19.6 19.5 21 17 21H8V8zm2.5 2.3v3.2h5.7c1 0 1.6-.6 1.6-1.6 0-.9-.5-1.6-1.6-1.6h-5.7zm0 5.4v3.5h6.2c1.2 0 1.8-.7 1.8-1.8 0-1-.6-1.7-1.8-1.7h-6.2z"/></svg>
//     )},
//     { name: "Framer Motion", color: "#bb4b96", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#0055FF"/><path fill="#fff" d="M8 8h16v8H16zm0 8h8l8 8H16zm8 0v8l-8-8z"/></svg>
//     )},
//   ],
//   "Backend & DB": [
//     { name: "Node.js", color: "#8cc84b", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#8cc84b" d="M16 3 4 9.5v13L16 29l12-6.5v-13L16 3zm0 2.3L26 11v10L16 26.7 6 21V11l10-5.7z"/><path fill="#8cc84b" d="M16 9a7 7 0 1 0 0 14A7 7 0 0 0 16 9zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 16 11z"/></svg>
//     )},
//     { name: "Express.js", color: "#aaa", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="4" fill="#333"/><text x="16" y="21" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="700">express</text></svg>
//     )},
//     { name: "Supabase", color: "#3ecf8e", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#3ecf8e" d="M18.7 3.4a1 1 0 0 0-1.7.7v10.7h9a1 1 0 0 0 .8-1.6L18.7 3.4z"/><path fill="#3ecf8e" opacity=".5" d="M13.3 28.6a1 1 0 0 0 1.7-.7V17.2H6a1 1 0 0 0-.8 1.6l8.1 9.8z"/></svg>
//     )},
//     { name: "MySQL", color: "#4479a1", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#4479a1" d="M16 4C9.4 4 5 6.7 5 10v12c0 3.3 4.4 6 11 6s11-2.7 11-6V10c0-3.3-4.4-6-11-6zm9 15.5c0 2.2-4 4-9 4s-9-1.8-9-4v-2.4c2 1.3 5.2 2.1 9 2.1s7-.8 9-2.1v2.4zm0-5.5c0 2.2-4 4-9 4s-9-1.8-9-4v-2.4c2 1.3 5.2 2.1 9 2.1s7-.8 9-2.1V14zm-9-4C11 10 7 8.2 7 6s4-2 9-2 9 1.8 9 4-4 4-9 4z"/></svg>
//     )},
//     { name: "Drizzle ORM", color: "#c5f74f", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="4" fill="#1a1a1a"/><text x="16" y="14" textAnchor="middle" fontSize="8" fill="#c5f74f" fontFamily="monospace" fontWeight="700">drizzle</text><text x="16" y="23" textAnchor="middle" fontSize="7" fill="#c5f74f" fontFamily="monospace">ORM</text></svg>
//     )},
//     { name: "PostgreSQL", color: "#336791", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#336791" d="M16 3a13 13 0 1 0 0 26A13 13 0 0 0 16 3zm0 2c3.6 0 6.8 1.5 9.1 3.9L16 14l-9.1-5.1A11 11 0 0 1 16 5zm-11 11c0-2.1.6-4.1 1.6-5.8l9.4 5.3v10.4A11 11 0 0 1 5 16zm12 10.9V16.5l9.4-5.3A11 11 0 0 1 16 27z"/></svg>
//     )},
//   ],
//   "AI Tools": [
//     { name: "Claude", color: "#cc785c", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#cc785c" opacity=".2"/><path fill="#cc785c" d="M16 6c-5.5 0-9.5 3.8-9.5 8.7 0 3.2 1.7 6 4.3 7.6l-.5 3.2 3-1.7c.8.2 1.7.3 2.7.3 5.5 0 9.5-3.8 9.5-8.7S21.5 6 16 6z"/></svg>
//     )},
//     { name: "ChatGPT", color: "#10a37f", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#10a37f" d="M27.6 13.3A8 8 0 0 0 20.1 5a8 8 0 0 0-7.6 5.5 6 6 0 0 0-4 5.6 6 6 0 0 0 3 5.2 6 6 0 0 0 .6 3.1A6 6 0 0 0 18 27a6 6 0 0 0 5.7-4.2 6 6 0 0 0 4-5.6 6 6 0 0 0-.1-3.9z"/></svg>
//     )},
//     { name: "Gemini", color: "#4285f4", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#4285f4" d="M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zm0 3l2 6h6l-5 3.5 2 6-5-3.5L11 22.5l2-6L8 13h6z"/></svg>
//     )},
//     { name: "Codex", color: "#a855f7", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#a855f7" opacity=".2"/><path fill="#a855f7" d="M10 18l-4-4 4-4 1.4 1.4L9 14l2.4 2.6L10 18zm12 0l-1.4-1.4L23 14l-2.4-2.6L22 10l4 4-4 4zm-7 2l3-10 1.9.6-3 10z"/></svg>
//     )},
//     { name: "Canva AI", color: "#00c4cc", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="16" fill="#00c4cc" opacity=".2"/><path fill="#00c4cc" d="M22 12.4A6 6 0 1 0 16 22a6 6 0 0 0 6-6c0-.6-.1-1.1-.3-1.6l-1.6 1.6a3.8 3.8 0 1 1-1-1l1.7-1.7c-.7-.6-1.7-.9-2.8-.9A6 6 0 1 0 22 16c0-.6-.1-1.1-.3-1.6z"/></svg>
//     )},
//     { name: "v0 / Cursor", color: "#7c3aed", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#7c3aed" opacity=".2"/><path fill="#7c3aed" d="M8 10h6v2H8zm0 4h10v2H8zm0 4h8v2H8zm10-8l6 6-6 6v-4h-2v-4h2z"/></svg>
//     )},
//   ],
//   "Tools & Design": [
//     { name: "Figma", color: "#f24e1e", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#f24e1e" d="M12.5 26a3.5 3.5 0 1 0 0-7H9v3.5a3.5 3.5 0 0 0 3.5 3.5z"/><path fill="#a259ff" d="M9 16.5h3.5a3.5 3.5 0 1 0 0-7H9v7z"/><path fill="#1abcfe" d="M9 9.5h3.5a3.5 3.5 0 0 0 0-7H9v7z"/><path fill="#0acf83" d="M12.5 9.5H16a3.5 3.5 0 0 1 0 7h-3.5v-7z"/><circle cx="19.5" cy="16.5" r="3.5" fill="#ff7262"/></svg>
//     )},
//     { name: "Git & GitHub", color: "#f05032", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#f05032" d="M29 14.1L17.9 3.1a1.5 1.5 0 0 0-2.1 0L13.3 5.5l2.6 2.6a1.8 1.8 0 0 1 2.3 2.3l2.5 2.5a1.8 1.8 0 1 1-1.1 1.1l-2.3-2.3v6a1.8 1.8 0 1 1-1.5 0V11.6a1.8 1.8 0 0 1-1-2.4L12.4 6.8 3.1 16a1.5 1.5 0 0 0 0 2.1l11 11a1.5 1.5 0 0 0 2.1 0L29 17.2a1.5 1.5 0 0 0 0-2.1z"/></svg>
//     )},
//     { name: "VS Code", color: "#007acc", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#007acc" d="M30.4 5.3 23.7 2 12.4 13.4 5.7 8.2 3 9.5v13l2.7 1.3 6.7-5.2L23.7 30l6.7-3.3V5.3zM27.4 23.8l-9.8-7.8 9.8-7.7v15.5z"/></svg>
//     )},
//     { name: "Canva", color: "#00c4cc", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="16" fill="#00c4cc"/><path fill="#fff" d="M22 12.4A6 6 0 1 0 22 16c0-.6-.1-1.1-.3-1.6l-1.6 1.6a3.8 3.8 0 1 1-1-1l1.7-1.7c-.7-.6-1.7-.9-2.8-.9A6 6 0 1 0 22 16z"/></svg>
//     )},
//     { name: "npm / pnpm", color: "#cb3837", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="3" fill="#cb3837"/><path fill="#fff" d="M5 5h22v22H18v-11h-5v11H5z"/></svg>
//     )},
//     { name: "Postman", color: "#ff6c37", icon: (
//       <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#ff6c37" opacity=".15"/><circle cx="16" cy="16" r="10" fill="none" stroke="#ff6c37" strokeWidth="2"/><circle cx="16" cy="16" r="5" fill="#ff6c37" opacity=".4"/><circle cx="16" cy="16" r="2" fill="#ff6c37"/></svg>
//     )},
//   ],
// };

// const stats = [
//   { num: "20+", label: "Projects\nCompleted" },
//   { num: "6mo", label: "Professional\nExperience" },
//   { num: "80+", label: "Happy\nReviews" },
//   { num: "BCA\nS6", label: "Final\nSemester" },
// ];

// function useInView(ref, threshold = 0.15) {
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [ref, threshold]);
//   return inView;
// }

// function FloatingOrb({ style }) {
//   return (
//     <div style={{
//       position: "absolute",
//       borderRadius: "50%",
//       filter: "blur(80px)",
//       pointerEvents: "none",
//       ...style,
//     }} />
//   );
// }

// function SkillPill({ skill, index }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "8px",
//         padding: "8px 16px",
//         borderRadius: "40px",
//         border: `1px solid ${hovered ? skill.color + "80" : "rgba(255,255,255,0.08)"}`,
//         background: hovered
//           ? `linear-gradient(135deg, ${skill.color}18, ${skill.color}08)`
//           : "rgba(255,255,255,0.03)",
//         fontSize: "13px",
//         color: hovered ? skill.color : "rgba(255,255,255,0.75)",
//         cursor: "default",
//         transition: "all 0.25s ease",
//         transform: hovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
//         boxShadow: hovered ? `0 4px 20px ${skill.color}30` : "none",
//         animationDelay: `${index * 60}ms`,
//         fontFamily: "'DM Sans', sans-serif",
//         fontWeight: 400,
//         whiteSpace: "nowrap",
//       }}
//     >
//       {skill.icon}
//       <span>{skill.name}</span>
//     </div>
//   );
// }

// function StatCard({ stat, index, inView }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: hovered
//           ? "rgba(255,255,255,0.06)"
//           : "rgba(255,255,255,0.03)",
//         border: "1px solid rgba(255,255,255,0.08)",
//         borderRadius: "20px",
//         padding: "24px 16px",
//         textAlign: "center",
//         transition: "all 0.3s ease",
//         transform: inView
//           ? hovered ? "translateY(-4px)" : "translateY(0)"
//           : "translateY(30px)",
//         opacity: inView ? 1 : 0,
//         transitionDelay: `${0.3 + index * 0.1}s`,
//         cursor: "default",
//         boxShadow: hovered ? "0 8px 32px rgba(138,99,255,0.15)" : "none",
//         backdropFilter: "blur(10px)",
//       }}
//     >
//       <div style={{
//         fontSize: "1.8rem",
//         fontWeight: 700,
//         background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         lineHeight: 1.1,
//         fontFamily: "'Space Grotesk', sans-serif",
//         whiteSpace: "pre-line",
//       }}>{stat.num}</div>
//       <div style={{
//         fontSize: "11px",
//         color: "rgba(255,255,255,0.45)",
//         marginTop: "8px",
//         whiteSpace: "pre-line",
//         lineHeight: 1.5,
//         textTransform: "uppercase",
//         letterSpacing: "0.06em",
//         fontFamily: "'DM Sans', sans-serif",
//       }}>{stat.label}</div>
//     </div>
//   );
// }

// export default function AboutSection() {
//   const sectionRef = useRef(null);
//   const inView = useInView(sectionRef, 0.1);
//   const [activeCategory, setActiveCategory] = useState("Languages");

//   const categoryColors = {
//     Languages: "#f7df1e",
//     Frontend: "#61dafb",
//     "Backend & DB": "#3ecf8e",
//     "AI Tools": "#a78bfa",
//     "Tools & Design": "#f24e1e",
//   };

//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

//       <section
//         ref={sectionRef}
//         id="about"
//         style={{
//           position: "relative",
//           padding: "100px 0",
//           background: "#0a0a0f",
//           overflow: "hidden",
//           minHeight: "100vh",
//         }}
//       >
//         {/* Ambient orbs */}
//         <FloatingOrb style={{ width: 500, height: 500, top: -100, left: -150, background: "radial-gradient(circle, rgba(138,99,255,0.12) 0%, transparent 70%)" }} />
//         <FloatingOrb style={{ width: 400, height: 400, bottom: -50, right: -100, background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }} />
//         <FloatingOrb style={{ width: 300, height: 300, top: "40%", right: "30%", background: "radial-gradient(circle, rgba(62,207,142,0.06) 0%, transparent 70%)" }} />

//         {/* Dot grid */}
//         <div style={{
//           position: "absolute", inset: 0, pointerEvents: "none",
//           backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }} />

//         <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", position: "relative" }}>

//           {/* Title */}
//           <div style={{
//             textAlign: "center",
//             marginBottom: "72px",
//             opacity: inView ? 1 : 0,
//             transform: inView ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.7s ease",
//           }}>
//             <div style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               padding: "6px 16px",
//               border: "1px solid rgba(138,99,255,0.3)",
//               borderRadius: "40px",
//               marginBottom: "20px",
//               background: "rgba(138,99,255,0.08)",
//             }}>
//               <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", animation: "pulse 2s infinite" }} />
//               <span style={{ fontSize: "12px", color: "#a78bfa", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>About me</span>
//             </div>
//             <h2 style={{
//               fontSize: "clamp(2rem, 5vw, 3.5rem)",
//               fontWeight: 700,
//               fontFamily: "'Space Grotesk', sans-serif",
//               color: "#fff",
//               lineHeight: 1.1,
//               margin: 0,
//             }}>
//               Crafting digital{" "}
//               <span style={{
//                 background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}>experiences</span>
//             </h2>
//           </div>

//           {/* Bio + Stats */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "1.2fr 0.8fr",
//             gap: "48px",
//             marginBottom: "80px",
//             alignItems: "start",
//           }}>
//             {/* Left bio */}
//             <div style={{
//               opacity: inView ? 1 : 0,
//               transform: inView ? "translateX(0)" : "translateX(-30px)",
//               transition: "all 0.8s ease 0.2s",
//             }}>
//               <div style={{
//                 background: "rgba(255,255,255,0.02)",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 borderRadius: "24px",
//                 padding: "36px",
//                 backdropFilter: "blur(20px)",
//               }}>
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "16px",
//                   marginBottom: "24px",
//                 }}>
//                   <div style={{
//                     width: 52,
//                     height: 52,
//                     borderRadius: "14px",
//                     background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "22px",
//                     fontFamily: "'Space Grotesk', sans-serif",
//                     fontWeight: 700,
//                     color: "#fff",
//                   }}>Y</div>
//                   <div>
//                     <div style={{ color: "#fff", fontWeight: 600, fontSize: "18px", fontFamily: "'Space Grotesk', sans-serif" }}>Yash</div>
//                     <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'DM Sans', sans-serif" }}>Fullstack Developer · PrimexMeta</div>
//                   </div>
//                   <div style={{
//                     marginLeft: "auto",
//                     padding: "4px 12px",
//                     background: "rgba(62,207,142,0.1)",
//                     border: "1px solid rgba(62,207,142,0.3)",
//                     borderRadius: "20px",
//                     fontSize: "11px",
//                     color: "#3ecf8e",
//                     fontFamily: "'DM Sans', sans-serif",
//                     letterSpacing: "0.05em",
//                   }}>● Available</div>
//                 </div>

//                 <p style={{
//                   color: "rgba(255,255,255,0.65)",
//                   lineHeight: 1.85,
//                   fontSize: "14.5px",
//                   fontFamily: "'DM Sans', sans-serif",
//                   margin: "0 0 20px",
//                 }}>
//                   Hey! I'm a <span style={{ color: "#a78bfa", fontWeight: 500 }}>Fullstack Developer</span> in my final year of BCA (6th semester). I recently completed a <span style={{ color: "#60a5fa", fontWeight: 500 }}>6-month internship at PrimexMeta</span> as a fullstack developer — and I'm now a permanent member of the team.
//                 </p>
//                 <p style={{
//                   color: "rgba(255,255,255,0.65)",
//                   lineHeight: 1.85,
//                   fontSize: "14.5px",
//                   fontFamily: "'DM Sans', sans-serif",
//                   margin: "0 0 28px",
//                 }}>
//                   I build complete products — clean, performant frontends with React & Next.js, solid backends with Node & Express, and databases with Supabase, MySQL & Drizzle ORM. I also leverage AI tools like Claude, ChatGPT & Gemini to ship smarter and faster.
//                 </p>

//                 <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
//                   {["Clean, modern UI & UX design", "End-to-end fullstack development", "AI-augmented development workflow", "Real-world production experience"].map((item, i) => (
//                     <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                       <div style={{ width: 5, height: 5, borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #60a5fa)", flexShrink: 0 }} />
//                       <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <a
//                   href="/Resume Yash -1-1.pdf"
//                   target="_blank"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     padding: "12px 24px",
//                     background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
//                     borderRadius: "12px",
//                     color: "#fff",
//                     textDecoration: "none",
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "'DM Sans', sans-serif",
//                     transition: "opacity 0.2s, transform 0.2s",
//                     boxShadow: "0 4px 20px rgba(167,139,250,0.3)",
//                   }}
//                   onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
//                 >
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
//                   Download CV
//                 </a>
//               </div>
//             </div>

//             {/* Right stats */}
//             <div style={{
//               opacity: inView ? 1 : 0,
//               transform: inView ? "translateX(0)" : "translateX(30px)",
//               transition: "all 0.8s ease 0.3s",
//             }}>
//               {/* Company badge */}
//               <div style={{
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 borderRadius: "20px",
//                 padding: "20px 24px",
//                 marginBottom: "20px",
//                 backdropFilter: "blur(10px)",
//               }}>
//                 <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px", fontFamily: "'DM Sans', sans-serif" }}>Current Position</div>
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                   <div style={{
//                     width: 42,
//                     height: 42,
//                     borderRadius: "10px",
//                     background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(96,165,250,0.2))",
//                     border: "1px solid rgba(167,139,250,0.3)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: "18px",
//                   }}>🚀</div>
//                   <div>
//                     <div style={{ color: "#fff", fontWeight: 600, fontSize: "15px", fontFamily: "'Space Grotesk', sans-serif" }}>PrimexMeta</div>
//                     <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>Fullstack Developer · Permanent</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Stats grid */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
//                 {stats.map((s, i) => <StatCard key={i} stat={s} index={i} inView={inView} />)}
//               </div>
//             </div>
//           </div>

//           {/* Skills */}
//           <div style={{
//             opacity: inView ? 1 : 0,
//             transform: inView ? "translateY(0)" : "translateY(30px)",
//             transition: "all 0.8s ease 0.5s",
//           }}>
//             <div style={{ textAlign: "center", marginBottom: "36px" }}>
//               <h3 style={{
//                 fontSize: "1.6rem",
//                 fontWeight: 700,
//                 color: "#fff",
//                 fontFamily: "'Space Grotesk', sans-serif",
//                 margin: "0 0 8px",
//               }}>Tech Stack</h3>
//               <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
//                 Tools & technologies I work with
//               </p>
//             </div>

//             {/* Category tabs */}
//             <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
//               {Object.keys(skills).map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   style={{
//                     padding: "8px 18px",
//                     borderRadius: "40px",
//                     border: `1px solid ${activeCategory === cat ? categoryColors[cat] + "60" : "rgba(255,255,255,0.08)"}`,
//                     background: activeCategory === cat ? `${categoryColors[cat]}15` : "transparent",
//                     color: activeCategory === cat ? categoryColors[cat] : "rgba(255,255,255,0.45)",
//                     fontSize: "13px",
//                     fontFamily: "'DM Sans', sans-serif",
//                     cursor: "pointer",
//                     transition: "all 0.2s ease",
//                     fontWeight: activeCategory === cat ? 500 : 400,
//                   }}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Pills */}
//             <div style={{
//               background: "rgba(255,255,255,0.02)",
//               border: "1px solid rgba(255,255,255,0.06)",
//               borderRadius: "24px",
//               padding: "28px 32px",
//               backdropFilter: "blur(10px)",
//             }}>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//                 {skills[activeCategory].map((skill, i) => (
//                   <SkillPill key={skill.name} skill={skill} index={i} />
//                 ))}
//               </div>
//             </div>

//             {/* All skills summary */}
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginTop: "24px" }}>
//               {Object.entries(skills).map(([cat, items]) => (
//                 items.map(s => (
//                   <div key={s.name} style={{
//                     display: "flex", alignItems: "center", gap: "5px",
//                     padding: "4px 10px",
//                     borderRadius: "6px",
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.05)",
//                     fontSize: "11px",
//                     color: "rgba(255,255,255,0.3)",
//                     fontFamily: "'DM Sans', sans-serif",
//                   }}>
//                     {s.icon}
//                     <span>{s.name}</span>
//                   </div>
//                 ))
//               ))}
//             </div>
//           </div>
//         </div>

//         <style>{`
//           @keyframes pulse {
//             0%, 100% { opacity: 1; transform: scale(1); }
//             50% { opacity: 0.5; transform: scale(0.85); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Skill { name: string; color: string; icon: React.ReactNode; }
interface StatItem { num: string; label: string; }

// ─── Skill Data ───────────────────────────────────────────────────────────────
const skills: Record<string, Skill[]> = {
  Languages: [
    { name: "HTML5", color: "#e44d26", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#e44d26" d="M5.9 27.2 3.7 2h24.7l-2.3 25.2L16 30z"/><path fill="#f16529" d="M16 27.9l8.2-2.3 1.9-21.5H16z"/><path fill="#ebebeb" d="M16 13.4h-4.1l-.3-3.2H16V7.1H8.2l.1.8.7 8.5H16zm0 8-4-1.1-.2-2.8H8.6l.5 5.6L16 24.9z"/><path fill="#fff" d="M16 13.4v3.1h3.8l-.4 4L16 21.4v3.4l7.5-2.1.8-9.7.1-1.2H16zm0-6.3v3.1h7.5l.1-.7.1-1.5.1-.8H16z"/></svg> },
    { name: "CSS3", color: "#1572b6", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#1572b6" d="M5.9 27.2 3.7 2h24.7l-2.3 25.2L16 30z"/><path fill="#33a9dc" d="M16 27.9l8.2-2.3 1.9-21.5H16z"/><path fill="#fff" d="M16 13.4H9.9l.2 2.3H16v-2.3zm0-6.3H9.3l.2 2.3H16V7.1zm0 12.7-4-1.1-.3-2.8H8.6l.5 5.6L16 24.9v-5.1z"/><path fill="#ebebeb" d="M16 13.4v2.3h5.7l-.2 1.8-3.9 1.1v2.2l7.3-2 .5-6zm0-6.3v2.3h6.3l.2-2.3H16z"/></svg> },
    { name: "JavaScript", color: "#f7df1e", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect fill="#f7df1e" width="32" height="32" rx="3"/><path d="M9.7 24.6 11.4 23.6c.4.7.7 1.3 1.5 1.3.8 0 1.2-.3 1.2-1.5V16h2.4v7.5c0 2.5-1.5 3.7-3.6 3.7-1.9 0-3-1-3.8-2.6zm9.7-.2 1.8-1.1c.5.9 1.1 1.5 2.2 1.5 1 0 1.5-.5 1.5-1.1 0-.8-.6-1.1-1.6-1.5l-.6-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2.1l-1.7 1.1c-.5-.8-.9-1.1-1.8-1.1-.8 0-1.3.5-1.3 1.1 0 .7.5 1 1.4 1.5l.6.2c2.2 1 3.4 2 3.4 4 0 2.3-1.8 3.6-4.2 3.6-2.3 0-3.8-1.1-4.5-2.7z"/></svg> },
    { name: "TypeScript", color: "#3178c6", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect fill="#3178c6" width="32" height="32" rx="3"/><path fill="#fff" d="M6 20.5v2.1c.4.2.8.3 1.2.4s.9.1 1.3.1c.4 0 .8 0 1.2-.1.4-.1.7-.2 1-.4.3-.2.5-.4.7-.7.2-.3.2-.7.2-1.1 0-.3 0-.5-.1-.8-.1-.2-.2-.5-.4-.6-.2-.2-.4-.4-.7-.5l-.9-.5-.6-.3-.5-.3-.3-.3c-.1-.1-.1-.2-.1-.4 0-.1 0-.2.1-.3l.3-.2.4-.1h.5c.2 0 .4.1.6.2.2.1.4.2.5.4l.5.6.1.7h1.8v-.2c0-.4-.1-.7-.3-1-.1-.3-.4-.6-.6-.8-.3-.2-.6-.4-1-.5-.4-.1-.9-.2-1.4-.2-.4 0-.8 0-1.1.2-.3.1-.7.3-1 .5-.2.2-.5.4-.6.7-.2.3-.2.6-.2.9 0 .5.1.9.4 1.2.3.3.7.6 1.3.9l1 .4.6.3.5.3c.1.1.2.3.2.5s0 .3-.1.4l-.3.3-.4.1h-.6l-.5-.1c-.2-.1-.4-.2-.5-.4-.2-.2-.3-.4-.4-.7l-.1-.7H6zm12.5-1.5h-2.2v-2.1h-1.8v2.1h-1.3v1.6h1.3V24c0 .4 0 .7.1 1 .1.3.2.5.4.7.2.2.4.3.7.4.2.1.5.1.9.1.2 0 .5 0 .7-.1.3 0 .5-.1.7-.2l-.2-1.6h-.3c-.3 0-.4-.1-.5-.3V20.6h2.5v-1.6z"/></svg> },
  ],
  Frontend: [
    { name: "React.js", color: "#61dafb", icon: <svg viewBox="0 0 32 32" width="20" height="20"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg> },
    { name: "Next.js", color: "#ffffff", icon: <svg viewBox="0 0 32 32" width="20" height="20"><circle cx="16" cy="16" r="14" fill="#000"/><path d="M10 22V10h2l8 9.5V10h2v12h-2L12 12.5V22z" fill="#fff"/></svg> },
    { name: "Tailwind CSS", color: "#38bdf8", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#38bdf8" d="M16 7c-3.3 0-5.5 1.6-6.5 5 1-1.3 2.1-1.8 3.5-1.5.75.2 1.3.75 1.9 1.35.95 1.05 2.1 2.15 4.6 2.15 3.3 0 5.5-1.6 6.5-5-1 1.3-2.1 1.8-3.5 1.5-.75-.2-1.3-.75-1.9-1.35C19.65 8.1 18.5 7 16 7zm-6.5 7.5c-3.3 0-5.5 1.6-6.5 5 1-1.3 2.1-1.8 3.5-1.5.75.2 1.3.75 1.9 1.35.95 1.05 2.1 2.15 4.6 2.15 3.3 0 5.5-1.6 6.5-5-1 1.3-2.1 1.8-3.5 1.5-.75-.2-1.3-.75-1.9-1.35C13.15 15.6 12 14.5 9.5 14.5z"/></svg> },
    { name: "Bootstrap", color: "#7952b3", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#7952b3"/><path fill="#fff" d="M8 8h9c2.2 0 3.8 1.3 3.8 3.3 0 1.5-.9 2.5-2 2.8 1.5.4 2.5 1.5 2.5 3.2C21.3 19.6 19.5 21 17 21H8V8zm2.5 2.3v3.2h5.7c1 0 1.6-.6 1.6-1.6 0-.9-.5-1.6-1.6-1.6h-5.7zm0 5.4v3.5h6.2c1.2 0 1.8-.7 1.8-1.8 0-1-.6-1.7-1.8-1.7h-6.2z"/></svg> },
    { name: "Framer Motion", color: "#0055FF", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#0055FF"/><path fill="#fff" d="M8 8h16v8H16zm0 8h8l8 8H16zm8 0v8l-8-8z"/></svg> },
  ],
  "Backend & DB": [
    { name: "Node.js", color: "#8cc84b", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#8cc84b" d="M16 3 4 9.5v13L16 29l12-6.5v-13L16 3zm0 2.3L26 11v10L16 26.7 6 21V11l10-5.7z"/></svg> },
    { name: "Express.js", color: "#aaa", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="4" fill="#333"/><text x="16" y="21" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="700">express</text></svg> },
    { name: "Supabase", color: "#3ecf8e", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#3ecf8e" d="M18.7 3.4a1 1 0 0 0-1.7.7v10.7h9a1 1 0 0 0 .8-1.6L18.7 3.4z"/><path fill="#3ecf8e" opacity=".5" d="M13.3 28.6a1 1 0 0 0 1.7-.7V17.2H6a1 1 0 0 0-.8 1.6l8.1 9.8z"/></svg> },
    { name: "MySQL", color: "#4479a1", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#4479a1" d="M16 4C9.4 4 5 6.7 5 10v12c0 3.3 4.4 6 11 6s11-2.7 11-6V10c0-3.3-4.4-6-11-6zm9 15.5c0 2.2-4 4-9 4s-9-1.8-9-4v-2.4c2 1.3 5.2 2.1 9 2.1s7-.8 9-2.1v2.4zm0-5.5c0 2.2-4 4-9 4s-9-1.8-9-4v-2.4c2 1.3 5.2 2.1 9 2.1s7-.8 9-2.1V14zm-9-4C11 10 7 8.2 7 6s4-2 9-2 9 1.8 9 4-4 4-9 4z"/></svg> },
    { name: "Drizzle ORM", color: "#c5f74f", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="4" fill="#1a1a1a"/><text x="16" y="14" textAnchor="middle" fontSize="8" fill="#c5f74f" fontFamily="monospace" fontWeight="700">drizzle</text><text x="16" y="23" textAnchor="middle" fontSize="7" fill="#c5f74f" fontFamily="monospace">ORM</text></svg> },
    { name: "PostgreSQL", color: "#336791", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#336791" d="M16 3a13 13 0 1 0 0 26A13 13 0 0 0 16 3zm0 2c3.6 0 6.8 1.5 9.1 3.9L16 14l-9.1-5.1A11 11 0 0 1 16 5zm-11 11c0-2.1.6-4.1 1.6-5.8l9.4 5.3v10.4A11 11 0 0 1 5 16zm12 10.9V16.5l9.4-5.3A11 11 0 0 1 16 27z"/></svg> },
  ],
  "AI Tools": [
    { name: "Claude", color: "#cc785c", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#cc785c" opacity=".2"/><path fill="#cc785c" d="M16 6c-5.5 0-9.5 3.8-9.5 8.7 0 3.2 1.7 6 4.3 7.6l-.5 3.2 3-1.7c.8.2 1.7.3 2.7.3 5.5 0 9.5-3.8 9.5-8.7S21.5 6 16 6z"/></svg> },
    { name: "ChatGPT", color: "#10a37f", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#10a37f" d="M27.6 13.3A8 8 0 0 0 20.1 5a8 8 0 0 0-7.6 5.5 6 6 0 0 0-4 5.6 6 6 0 0 0 3 5.2 6 6 0 0 0 .6 3.1A6 6 0 0 0 18 27a6 6 0 0 0 5.7-4.2 6 6 0 0 0 4-5.6 6 6 0 0 0-.1-3.9z"/></svg> },
    { name: "Gemini", color: "#4285f4", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#4285f4" d="M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zm0 3l2 6h6l-5 3.5 2 6-5-3.5L11 22.5l2-6L8 13h6z"/></svg> },
    { name: "Codex", color: "#a855f7", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#a855f7" opacity=".2"/><path fill="#a855f7" d="M10 18l-4-4 4-4 1.4 1.4L9 14l2.4 2.6L10 18zm12 0l-1.4-1.4L23 14l-2.4-2.6L22 10l4 4-4 4zm-7 2l3-10 1.9.6-3 10z"/></svg> },
    { name: "Canva AI", color: "#00c4cc", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="16" fill="#00c4cc" opacity=".2"/><path fill="#00c4cc" d="M22 12.4A6 6 0 1 0 16 22a6 6 0 0 0 6-6c0-.6-.1-1.1-.3-1.6l-1.6 1.6a3.8 3.8 0 1 1-1-1l1.7-1.7c-.7-.6-1.7-.9-2.8-.9A6 6 0 1 0 22 16z"/></svg> },
    { name: "v0 / Cursor", color: "#7c3aed", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#7c3aed" opacity=".2"/><path fill="#7c3aed" d="M8 10h6v2H8zm0 4h10v2H8zm0 4h8v2H8zm10-8l6 6-6 6v-4h-2v-4h2z"/></svg> },
  ],
  "Tools & Design": [
    { name: "Figma", color: "#f24e1e", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#f24e1e" d="M12.5 26a3.5 3.5 0 1 0 0-7H9v3.5a3.5 3.5 0 0 0 3.5 3.5z"/><path fill="#a259ff" d="M9 16.5h3.5a3.5 3.5 0 1 0 0-7H9v7z"/><path fill="#1abcfe" d="M9 9.5h3.5a3.5 3.5 0 0 0 0-7H9v7z"/><path fill="#0acf83" d="M12.5 9.5H16a3.5 3.5 0 0 1 0 7h-3.5v-7z"/><circle cx="19.5" cy="16.5" r="3.5" fill="#ff7262"/></svg> },
    { name: "Git & GitHub", color: "#f05032", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#f05032" d="M29 14.1L17.9 3.1a1.5 1.5 0 0 0-2.1 0L13.3 5.5l2.6 2.6a1.8 1.8 0 0 1 2.3 2.3l2.5 2.5a1.8 1.8 0 1 1-1.1 1.1l-2.3-2.3v6a1.8 1.8 0 1 1-1.5 0V11.6a1.8 1.8 0 0 1-1-2.4L12.4 6.8 3.1 16a1.5 1.5 0 0 0 0 2.1l11 11a1.5 1.5 0 0 0 2.1 0L29 17.2a1.5 1.5 0 0 0 0-2.1z"/></svg> },
    { name: "VS Code", color: "#007acc", icon: <svg viewBox="0 0 32 32" width="20" height="20"><path fill="#007acc" d="M30.4 5.3 23.7 2 12.4 13.4 5.7 8.2 3 9.5v13l2.7 1.3 6.7-5.2L23.7 30l6.7-3.3V5.3zM27.4 23.8l-9.8-7.8 9.8-7.7v15.5z"/></svg> },
    { name: "npm / pnpm", color: "#cb3837", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="3" fill="#cb3837"/><path fill="#fff" d="M5 5h22v22H18v-11h-5v11H5z"/></svg> },
    { name: "Postman", color: "#ff6c37", icon: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="6" fill="#ff6c37" opacity=".15"/><circle cx="16" cy="16" r="10" fill="none" stroke="#ff6c37" strokeWidth="2"/><circle cx="16" cy="16" r="5" fill="#ff6c37" opacity=".4"/><circle cx="16" cy="16" r="2" fill="#ff6c37"/></svg> },
  ],
};

const stats: StatItem[] = [
  { num: "20+", label: "Projects\nCompleted" },
  { num: "6mo", label: "Professional\nExperience" },
  { num: "80+", label: "Happy\nReviews" },
  { num: "BCA\nS6", label: "Final\nSemester" },
];

const categoryColors: Record<string, string> = {
  Languages: "#f7df1e", Frontend: "#61dafb", "Backend & DB": "#3ecf8e",
  "AI Tools": "#a78bfa", "Tools & Design": "#f24e1e",
};

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "8px 16px", borderRadius: "40px",
        border: `1px solid ${hovered ? skill.color + "80" : "rgba(255,255,255,0.08)"}`,
        background: hovered ? `linear-gradient(135deg, ${skill.color}18, ${skill.color}08)` : "rgba(255,255,255,0.03)",
        fontSize: "13px", color: hovered ? skill.color : "rgba(255,255,255,0.75)",
        cursor: "default", transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 4px 20px ${skill.color}30` : "none",
        fontFamily: "'DM Sans', sans-serif", fontWeight: 400, whiteSpace: "nowrap",
      }}
    >
      {skill.icon}
      <span>{skill.name}</span>
    </div>
  );
}

function StatCard({ stat, index, inView }: { stat: StatItem; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px",
        padding: "24px 16px", textAlign: "center", transition: "all 0.3s ease",
        transform: inView ? (hovered ? "translateY(-4px)" : "translateY(0)") : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${0.3 + index * 0.1}s`,
        cursor: "default",
        boxShadow: hovered ? "0 8px 32px rgba(138,99,255,0.15)" : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{
        fontSize: "1.8rem", fontWeight: 700,
        background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        lineHeight: 1.1, fontFamily: "'Space Grotesk', sans-serif", whiteSpace: "pre-line",
      }}>{stat.num}</div>
      <div style={{
        fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "8px",
        whiteSpace: "pre-line", lineHeight: 1.5, textTransform: "uppercase",
        letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif",
      }}>{stat.label}</div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, 0.08);
  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: "relative", padding: "120px 0 100px",
        background: "#0a0a0f", overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      {[
        { w: 500, h: 500, t: -100, l: -150, color: "rgba(138,99,255,0.1)" },
        { w: 400, h: 400, b: -50, r: -100, color: "rgba(59,130,246,0.08)" },
        { w: 300, h: 300, t: "40%", r: "30%", color: "rgba(62,207,142,0.05)" },
      ].map((orb, i) => (
        <div key={i} style={{
          position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
          width: orb.w, height: orb.h,
          top: (orb as any).t, left: (orb as any).l,
          bottom: (orb as any).b, right: (orb as any).r,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
        }} />
      ))}

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", position: "relative" }}>

        {/* Title */}
        <div style={{
          textAlign: "center", marginBottom: "72px",
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", border: "1px solid rgba(138,99,255,0.3)",
            borderRadius: "40px", marginBottom: "20px", background: "rgba(138,99,255,0.08)",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", animation: "aboutPulse 2s infinite" }} />
            <span style={{ fontSize: "12px", color: "#a78bfa", fontFamily: "'DM Sans'", letterSpacing: "0.1em", textTransform: "uppercase" }}>About me</span>
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif", color: "#fff", lineHeight: 1.1, margin: 0,
          }}>
            Crafting digital{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              experiences
            </span>
          </h2>
        </div>

        {/* Bio + Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px", marginBottom: "80px", alignItems: "start" }}>

          {/* Left bio card */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease 0.2s" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", padding: "36px", backdropFilter: "blur(20px)" }}>
              {/* Avatar row */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{ width: 52, height: 52, borderRadius: "14px", background: "linear-gradient(135deg, #a78bfa, #60a5fa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontFamily: "'Space Grotesk'", fontWeight: 700, color: "#fff" }}>Y</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "18px", fontFamily: "'Space Grotesk'" }}>Yash Khatri</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'DM Sans'" }}>Fullstack Developer · PrimexMeta</div>
                </div>
                <div style={{ marginLeft: "auto", padding: "4px 12px", background: "rgba(62,207,142,0.1)", border: "1px solid rgba(62,207,142,0.3)", borderRadius: "20px", fontSize: "11px", color: "#3ecf8e", fontFamily: "'DM Sans'", letterSpacing: "0.05em" }}>● Available</div>
              </div>

              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: "14.5px", fontFamily: "'DM Sans'", margin: "0 0 16px" }}>
                Hey! I'm a <span style={{ color: "#a78bfa", fontWeight: 500 }}>Fullstack Developer</span> in my final year of BCA (6th semester). I recently completed a <span style={{ color: "#60a5fa", fontWeight: 500 }}>6-month internship at PrimexMeta</span> as a fullstack developer — and I'm now a <span style={{ color: "#4ade80", fontWeight: 500 }}>permanent member of the team</span>.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: "14.5px", fontFamily: "'DM Sans'", margin: "0 0 28px" }}>
                I build complete products — clean frontends with React & Next.js, solid backends with Node & Express, databases with Supabase, MySQL & Drizzle ORM, and leverage AI tools like Claude & ChatGPT to ship smarter.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {["Clean, modern UI & UX design", "End-to-end fullstack development", "AI-augmented development workflow", "Real-world production experience"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #60a5fa)", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", fontFamily: "'DM Sans'" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="/Resume Yash -1-1.pdf" target="_blank" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                borderRadius: "12px", color: "#fff", textDecoration: "none",
                fontSize: "14px", fontWeight: 500, fontFamily: "'DM Sans'",
                boxShadow: "0 4px 20px rgba(167,139,250,0.3)", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.3s" }}>
            {/* Company badge */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "20px 24px", marginBottom: "20px", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px", fontFamily: "'DM Sans'" }}>Current Position</div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: 42, height: 42, borderRadius: "10px", background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(96,165,250,0.2))", border: "1px solid rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🚀</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "15px", fontFamily: "'Space Grotesk'" }}>PrimexMeta</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", fontFamily: "'DM Sans'" }}>Fullstack Developer · Permanent</div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {stats.map((s, i) => <StatCard key={i} stat={s} index={i} inView={inView} />)}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease 0.5s" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#fff", fontFamily: "'Space Grotesk'", margin: "0 0 8px" }}>Tech Stack</h3>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", fontFamily: "'DM Sans'", margin: 0 }}>Tools & technologies I work with</p>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            {Object.keys(skills).map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "8px 18px", borderRadius: "40px",
                border: `1px solid ${activeCategory === cat ? categoryColors[cat] + "60" : "rgba(255,255,255,0.08)"}`,
                background: activeCategory === cat ? `${categoryColors[cat]}15` : "transparent",
                color: activeCategory === cat ? categoryColors[cat] : "rgba(255,255,255,0.45)",
                fontSize: "13px", fontFamily: "'DM Sans'", cursor: "pointer",
                transition: "all 0.2s ease", fontWeight: activeCategory === cat ? 500 : 400,
                outline: "none",
              }}>{cat}</button>
            ))}
          </div>

          {/* Skill pills */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "28px 32px", backdropFilter: "blur(10px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {skills[activeCategory].map((skill, i) => <SkillPill key={skill.name} skill={skill} index={i} />)}
            </div>
          </div>

          {/* All skills mini row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", justifyContent: "center", marginTop: "24px" }}>
            {Object.values(skills).flat().map(s => (
              <div key={s.name} style={{
                display: "flex", alignItems: "center", gap: "5px",
                padding: "4px 10px", borderRadius: "6px",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
                fontSize: "11px", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans'",
              }}>
                {s.icon}<span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutPulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.5;transform:scale(0.85);} }
      `}</style>
    </section>
  );
}
