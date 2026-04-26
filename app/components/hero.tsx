"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection({ activeSection }: { activeSection?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Parallax only when hero is in view (scrollY < window.innerHeight)
  const heroVisible = scrollY < (typeof window !== "undefined" ? window.innerHeight : 900);
  const parallaxSlow = heroVisible ? `translateY(${scrollY * 0.25}px)` : "none";
  const parallaxMed  = heroVisible ? `translateY(${scrollY * 0.4}px)`  : "none";
  const parallaxFast = heroVisible ? `translateY(${scrollY * 0.55}px)` : "none";
  const imgFloat = `perspective(800px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg) scale(1.02)`;

  const glowX = 50 + mousePos.x * 30;
  const glowY = 50 + mousePos.y * 30;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=Syne:wght@700;800&display=swap"
        rel="stylesheet"
      />

      {/* Custom cursor — fixed, global */}
      <div style={{
        position: "fixed", left: cursorPos.x, top: cursorPos.y,
        width: 12, height: 12, borderRadius: "50%",
        background: "#e8ff47", transform: "translate(-50%,-50%)",
        pointerEvents: "none", zIndex: 9999, mixBlendMode: "difference",
      }} />
      <div style={{
        position: "fixed", left: cursorPos.x, top: cursorPos.y,
        width: 36, height: 36, borderRadius: "50%",
        border: "1px solid rgba(232,255,71,0.4)", transform: "translate(-50%,-50%)",
        pointerEvents: "none", zIndex: 9998,
        transition: "left 0.12s ease, top 0.12s ease",
      }} />

      <section
        ref={sectionRef}
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#080810",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Noise grain */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }} />

        {/* Mouse glow */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background: `radial-gradient(ellipse 60% 60% at ${glowX}% ${glowY}%, rgba(232,255,71,0.04) 0%, transparent 70%)`,
          transition: "background 0.3s ease",
        }} />

        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          transform: parallaxSlow,
        }} />

        {/* Diagonal line */}
        <div style={{
          position: "absolute", top: 0, left: "55%", width: "1px", height: "100%",
          background: "linear-gradient(to bottom, transparent, rgba(232,255,71,0.15), transparent)",
          zIndex: 3, pointerEvents: "none",
        }} />

        {/* Ghost name */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) ${parallaxSlow}`,
          fontSize: "clamp(120px, 20vw, 220px)",
          fontFamily: "'Bebas Neue', sans-serif",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          letterSpacing: "0.05em", whiteSpace: "nowrap",
          zIndex: 2, userSelect: "none", pointerEvents: "none",
        }}>YASH</div>

        {/* ===== PROFILE IMAGE CENTER ===== */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) ${parallaxMed} ${imgFloat}`,
          zIndex: 4,
          width: "clamp(240px, 28vw, 400px)",
          aspectRatio: "3/4",
          transition: "transform 0.08s ease",
        }}>
          {/* Rotating glow */}
          <div style={{
            position: "absolute", inset: "-16px",
            borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
            background: "conic-gradient(from 0deg, #e8ff47, #60a5fa, #a78bfa, #e8ff47)",
            opacity: 0.22, filter: "blur(20px)",
            animation: "rotateGlow 8s linear infinite",
          }} />
          {/* Conic border */}
          <div style={{
            position: "absolute", inset: "-3px",
            borderRadius: "36% 64% 51% 49% / 44% 38% 62% 56%",
            background: "conic-gradient(from 0deg, #e8ff47 0%, transparent 30%, #60a5fa 60%, transparent 80%, #e8ff47 100%)",
            animation: "rotateGlow 6s linear infinite",
          }} />
          {/* Image */}
          <div style={{
            position: "relative", width: "100%", height: "100%",
            borderRadius: "34% 66% 50% 50% / 43% 37% 63% 57%",
            overflow: "hidden", background: "#1a1a2e",
          }}>
            <img src="/profile.jpeg" alt="Yash" style={{
              width: "100%", height: "100%", objectFit: "cover",
              objectPosition: "center top",
              filter: "contrast(1.05) brightness(0.95)", display: "block",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,8,16,0.55) 0%, transparent 50%)",
            }} />
          </div>

          {/* Badge — Available */}
          <div style={{
            position: "absolute", top: "8%", left: "-20%",
            background: "rgba(8,8,16,0.88)", border: "1px solid rgba(232,255,71,0.3)",
            borderRadius: "14px", padding: "10px 14px", backdropFilter: "blur(16px)",
            animation: "floatA 3s ease-in-out infinite", zIndex: 10,
          }}>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit'", marginBottom: "3px" }}>Status</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80", animation: "blink 2s infinite" }} />
              <span style={{ fontSize: "12px", color: "#e8ff47", fontFamily: "'Outfit'", fontWeight: 500 }}>Available</span>
            </div>
          </div>

          {/* Badge — Company */}
          {/* <div style={{
            position: "absolute", top: "12%", right: "-24%",
            background: "rgba(8,8,16,0.88)", border: "1px solid rgba(96,165,250,0.3)",
            borderRadius: "14px", padding: "10px 14px", backdropFilter: "blur(16px)",
            animation: "floatA 3.5s ease-in-out infinite 0.5s", zIndex: 10,
          }}>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit'", marginBottom: "3px" }}>Company</div>
            <div style={{ fontSize: "12px", color: "#60a5fa", fontFamily: "'Outfit'", fontWeight: 500 }}>PrimexMeta 🚀</div>
          </div> */}

          {/* Badge — Role */}
          <div style={{
            position: "absolute", bottom: "6%", left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(8,8,16,0.88)", border: "1px solid rgba(167,139,250,0.3)",
            borderRadius: "14px", padding: "8px 16px", backdropFilter: "blur(16px)",
            animation: "floatB 4s ease-in-out infinite 1s", zIndex: 10, whiteSpace: "nowrap",
          }}>
            <div style={{ fontSize: "12px", color: "#a78bfa", fontFamily: "'Outfit'", fontWeight: 500, textAlign: "center" }}>
              Fullstack Developer
            </div>
          </div>
        </div>

        {/* ===== LEFT TEXT ===== */}
        <div style={{
          position: "absolute", top: "50%", left: "5%",
          transform: `translateY(-50%) ${parallaxFast}`,
          zIndex: 6, maxWidth: 260,
        }}>
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.9s ease 0.2s",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "5px 12px", border: "1px solid rgba(232,255,71,0.2)",
              borderRadius: "40px", background: "rgba(232,255,71,0.06)", marginBottom: "16px",
            }}>
              <span style={{ fontSize: "11px", color: "#e8ff47", fontFamily: "'Outfit'", letterSpacing: "0.1em", textTransform: "uppercase" }}>Portfolio 2025</span>
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.05,
              color: "#fff", margin: "0 0 8px",
            }}>
              Hi,<br />I'm{" "}
              <span style={{ color: "#e8ff47", textShadow: "0 0 40px rgba(232,255,71,0.4)" }}>Yash.</span>
            </h1>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em",
            }}>FULLSTACK DEVELOPER</div>
          </div>
        </div>

        {/* ===== RIGHT TEXT ===== */}
        <div style={{
          position: "absolute", top: "50%", right: "4%",
          transform: `translateY(-40%) ${parallaxFast}`,
          zIndex: 6, maxWidth: 260,
        }}>
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s ease 0.4s",
          }}>
            <p style={{
              fontFamily: "'Outfit'", fontSize: "13.5px", lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)", margin: "0 0 24px",
              borderLeft: "2px solid rgba(232,255,71,0.3)", paddingLeft: "14px",
            }}>
              BCA Final Year · Building complete web apps. 6 months at{" "}
              <span style={{ color: "#60a5fa" }}>PrimexMeta</span> as a permanent Fullstack Dev.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
              {["React", "Next.js", "Node", "Supabase", "MySQL"].map((t) => (
                <span key={t} style={{
                  padding: "3px 10px", borderRadius: "6px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: "'Outfit'",
                }}>{t}</span>
              ))}
            </div>
            <a href="/Frontend resume.pdf" target="_blank" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "11px 22px", background: "#e8ff47", borderRadius: "10px",
              color: "#080810", textDecoration: "none", fontSize: "13px",
              fontWeight: 600, fontFamily: "'Outfit'",
              boxShadow: "0 0 30px rgba(232,255,71,0.25)", transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(232,255,71,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(232,255,71,0.25)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>

        {/* ===== 3D STAT CARDS ===== */}
        <div style={{
          position: "absolute", bottom: "8%", left: "3%", zIndex: 7,
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? `perspective(600px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`
            : "translateY(40px)",
          transition: "opacity 0.8s ease 0.6s, transform 0.1s ease",
        }}>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "14px 18px", backdropFilter: "blur(20px)", minWidth: "140px",
          }}>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "'Outfit'", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Projects</div>
            <div style={{ fontSize: "28px", fontWeight: 700, fontFamily: "'Syne'", color: "#e8ff47" }}>20+</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "'Outfit'" }}>Completed</div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "8%", right: "3%", zIndex: 7,
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? `perspective(600px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`
            : "translateY(40px)",
          transition: "opacity 0.8s ease 0.7s, transform 0.1s ease",
        }}>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "14px 18px", backdropFilter: "blur(20px)", minWidth: "140px",
          }}>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "'Outfit'", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Experience</div>
            <div style={{ fontSize: "28px", fontWeight: 700, fontFamily: "'Syne'", color: "#60a5fa" }}>6 mo</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "'Outfit'" }}>PrimexMeta</div>
          </div>
        </div>

        {/* ===== SCROLL INDICATOR ===== */}
        <div style={{
          position: "absolute", bottom: "28px", left: "50%",
          transform: "translateX(-50%)", zIndex: 8,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: mounted ? 1 : 0, transition: "opacity 1s ease 1.2s",
        }}>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", fontFamily: "'Outfit'", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "22px", height: "36px", border: "1.5px solid rgba(255,255,255,0.12)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
            <div style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#e8ff47", animation: "scrollDot 2s ease-in-out infinite" }} />
          </div>
        </div>

        {/* ===== ORBITING RINGS ===== */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) ${parallaxMed}`,
          width: "clamp(320px, 42vw, 520px)", aspectRatio: "1",
          border: "1px dashed rgba(255,255,255,0.05)", borderRadius: "50%",
          zIndex: 3, animation: "spinSlow 30s linear infinite", pointerEvents: "none",
        }}>
          <div style={{ position: "absolute", top: "-4px", left: "50%", transform: "translateX(-50%)", width: "8px", height: "8px", borderRadius: "50%", background: "#e8ff47", boxShadow: "0 0 10px #e8ff47" }} />
        </div>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) ${parallaxMed}`,
          width: "clamp(400px, 55vw, 660px)", aspectRatio: "1",
          border: "1px dashed rgba(255,255,255,0.03)", borderRadius: "50%",
          zIndex: 3, animation: "spinSlow 50s linear infinite reverse", pointerEvents: "none",
        }}>
          <div style={{ position: "absolute", bottom: "-4px", left: "50%", transform: "translateX(-50%)", width: "6px", height: "6px", borderRadius: "50%", background: "#60a5fa", boxShadow: "0 0 8px #60a5fa" }} />
        </div>

        <style>{`
          @keyframes rotateGlow { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
          @keyframes floatA { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-8px);} }
          @keyframes floatB { 0%,100%{transform:translateX(-50%) translateY(0px);} 50%{transform:translateX(-50%) translateY(-8px);} }
          @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
          @keyframes scrollDot { 0%{transform:translateY(0);opacity:1;} 80%{transform:translateY(14px);opacity:0;} 100%{transform:translateY(0);opacity:0;} }
          @keyframes spinSlow { from{transform:translate(-50%,-50%) rotate(0deg);} to{transform:translate(-50%,-50%) rotate(360deg);} }
        `}</style>
      </section>
    </>
  );
}
