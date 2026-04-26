"use client";

import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "India, Delhi",
    color: "#f59e0b",
    href: null,
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "yashkhatri378@gmail.com",
    color: "#60a5fa",
    href: "mailto:yashkhatri378@gmail.com",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 8595753180",
    color: "#4ade80",
    href: "tel:+918595753180",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: "Education",
    value: "BCA — Final Year (S6)",
    color: "#a78bfa",
    href: null,
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Languages",
    value: "Hindi & English",
    color: "#fb7185",
    href: null,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yash_khatri07/",
    color: "#e1306c",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/YashK91962",
    color: "#1da1f2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/yashkhatri738",
    color: "#ffffff",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-khatri-434952285/",
    color: "#0a66c2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const navItems = [
  {
    section: "home",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Home",
  },
  {
    section: "about",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "About",
  },
  {
    section: "portfolio",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    label: "Work",
  },
  {
    section: "contact",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Contact",
  },
];

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

export default function ContactSection({
  activeSection,
  handleNavClick,
  toggleTheme,
}: {
  activeSection: string;
  handleNavClick: (id: string) => void;
  toggleTheme: () => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, 0.05);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formspree.io/f/mvgzqppp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...formState, _captcha: false }),
      });
      setSent(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (_) {}
    setSending(false);
  };

  const inputStyle = (field: string): React.CSSProperties =>
    ({
      width: "100%",
      padding: "14px 16px",
      background:
        focused === field ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
      border: `1px solid ${focused === field ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.07)"}`,
      borderRadius: "12px",
      color: "#fff",
      fontSize: "13.5px",
      fontFamily: "'Outfit', sans-serif",
      outline: "none",
      transition: "all 0.25s ease",
      boxShadow:
        focused === field ? "0 0 0 3px rgba(167,139,250,0.08)" : "none",
    }) as React.CSSProperties;

  const glowX = 40 + mousePos.x * 20;
  const glowY = 40 + mousePos.y * 20;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=Syne:wght@700;800&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className={`section sec5 ${activeSection === "contact" ? "active" : ""}`}
        id="contact"
        style={{
          position: "relative",
          padding: "100px 0 140px",
          background: "#080810",
          overflow: "hidden",
        }}
      >
        {/* BG effects */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 50% 50% at ${glowX}% ${glowY}%, rgba(167,139,250,0.05) 0%, transparent 70%)`,
            transition: "background 0.4s ease",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-8%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,113,133,0.06) 0%, transparent 70%)",
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
          {/* Title */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "64px",
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
                border: "1px solid rgba(251,113,133,0.25)",
                borderRadius: "40px",
                background: "rgba(251,113,133,0.06)",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#fb7185",
                  animation: "contactPulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color: "#fb7185",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Get in touch
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#fff",
                margin: "0 0 12px",
                lineHeight: 1.1,
              }}
            >
              Let's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fb7185, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Connect
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
          </div>

          {/* Main grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: "32px",
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              {/* Info card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  padding: "32px",
                  marginBottom: "20px",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #fb7185, #a78bfa)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    Y
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      Yash Khatri
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "12px",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      Fullstack Developer · PrimexMeta
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.8,
                    margin: "0 0 24px",
                  }}
                >
                  Need a{" "}
                  <span style={{ color: "#a78bfa" }}>Fullstack Developer</span>{" "}
                  to bring your ideas to life? I build modern, responsive, and
                  high-performance web apps — from database to UI. Let's build
                  something amazing together!
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {contactInfo.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 14px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        transition: "all 0.2s",
                        cursor: item.href ? "pointer" : "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor = item.color + "30";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.02)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.04)";
                      }}
                      onClick={() => item.href && window.open(item.href)}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "10px",
                          background: item.color + "15",
                          border: `1px solid ${item.color}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: item.color,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.3)",
                            fontFamily: "'Outfit'",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "2px",
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.75)",
                            fontFamily: "'Outfit'",
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                      {item.href && (
                        <div
                          style={{
                            marginLeft: "auto",
                            color: "rgba(255,255,255,0.2)",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  padding: "20px 24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: "'Outfit'",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "14px",
                  }}
                >
                  Find me on
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.label}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = s.color + "18";
                        e.currentTarget.style.borderColor = s.color + "50";
                        e.currentTarget.style.color = s.color;
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = `0 8px 20px ${s.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.03)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.07)";
                        e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s ease 0.35s",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  padding: "36px",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ marginBottom: "28px" }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#fff",
                      margin: "0 0 6px",
                    }}
                  >
                    Send a message
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.3)",
                      margin: 0,
                    }}
                  >
                    I usually respond within 24 hours.
                  </p>
                </div>

                {sent ? (
                  <div style={{ textAlign: "center", padding: "48px 20px" }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(74,222,128,0.1)",
                        border: "1px solid rgba(74,222,128,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne'",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#4ade80",
                        marginBottom: "8px",
                      }}
                    >
                      Message Sent!
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit'",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      Thanks for reaching out. I'll get back to you soon.
                    </div>
                    <button
                      onClick={() => setSent(false)}
                      style={{
                        marginTop: "20px",
                        padding: "10px 24px",
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Outfit'",
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {/* Name + Email row */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "14px",
                      }}
                    >
                      <div>
                        <label
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.3)",
                            fontFamily: "'Outfit'",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            display: "block",
                            marginBottom: "6px",
                          }}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Yash Khatri"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          style={inputStyle("name")}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.3)",
                            fontFamily: "'Outfit'",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            display: "block",
                            marginBottom: "6px",
                          }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          style={inputStyle("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.3)",
                          fontFamily: "'Outfit'",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Project collaboration / Hiring"
                        value={formState.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("subject")}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.3)",
                          fontFamily: "'Outfit'",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        placeholder="Hey Yash, I'd love to discuss..."
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle("message"),
                          resize: "none",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      />
                    </div>

                    <input type="hidden" name="_captcha" value="false" />

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginTop: "4px",
                      }}
                    >
                      <button
                        type="submit"
                        disabled={sending}
                        style={{
                          flex: 1,
                          padding: "14px",
                          borderRadius: "12px",
                          background: sending
                            ? "rgba(167,139,250,0.3)"
                            : "linear-gradient(135deg, #fb7185, #a78bfa)",
                          border: "none",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 600,
                          fontFamily: "'Outfit', sans-serif",
                          cursor: sending ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          transition: "all 0.2s",
                          boxShadow: sending
                            ? "none"
                            : "0 4px 20px rgba(167,139,250,0.3)",
                        }}
                        onMouseEnter={(e) => {
                          if (!sending) {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 30px rgba(167,139,250,0.45)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 20px rgba(167,139,250,0.3)";
                        }}
                      >
                        {sending ? (
                          <>
                            <div
                              style={{
                                width: 16,
                                height: 16,
                                border: "2px solid rgba(255,255,255,0.3)",
                                borderTopColor: "#fff",
                                borderRadius: "50%",
                                animation: "spin 0.8s linear infinite",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Send Message
                          </>
                        )}
                      </button>

                      <a
                        href="/Resume Yash -1-1.pdf"
                        target="_blank"
                        style={{
                          padding: "14px 18px",
                          borderRadius: "12px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          background: "rgba(255,255,255,0.03)",
                          color: "rgba(255,255,255,0.6)",
                          textDecoration: "none",
                          fontSize: "13px",
                          fontFamily: "'Outfit'",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          whiteSpace: "nowrap",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.07)";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.03)";
                          e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        CV
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Footer strip */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              opacity: inView ? 1 : 0,
              transition: "opacity 1s ease 1s",
            }}
          >
            <div
              style={{
                fontFamily: "'Outfit'",
                fontSize: "12px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              © 2025 Yash Khatri · Built with React & ❤️
            </div>
            <div
              style={{
                fontFamily: "'Outfit'",
                fontSize: "12px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              yashkhatri378@gmail.com
            </div>
          </div>
        </div>

        <style>{`
          @keyframes contactPulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
          @keyframes spin { to{transform:rotate(360deg);} }
          #contact input::placeholder, #contact textarea::placeholder { color: rgba(255,255,255,0.2); }
          #contact input, #contact textarea { color-scheme: dark; }
        `}</style>
      </section>

      {/* ===== CONTROLS NAV ===== */}
      <div
        style={{
          position: "fixed",
          right: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.section;
          return (
            <div
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              title={item.label}
              style={{
                position: "relative",
                width: isActive ? 46 : 40,
                height: isActive ? 46 : 40,
                borderRadius: isActive ? "14px" : "12px",
                background: isActive
                  ? "linear-gradient(135deg, #fb7185, #a78bfa)"
                  : "rgba(255,255,255,0.04)",
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: isActive ? "#fff" : "rgba(255,255,255,0.35)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                boxShadow: isActive
                  ? "0 4px 20px rgba(251,113,133,0.35)"
                  : "none",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              {item.icon}
              {/* Active dot */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    right: -8,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#fb7185",
                    boxShadow: "0 0 8px #fb7185",
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 30,
            background: "rgba(255,255,255,0.08)",
            margin: "4px 0",
          }}
        />

        {/* Theme toggle */}
        <div
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{
            width: 40,
            height: 40,
            borderRadius: "12px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(255,255,255,0.4)",
            transition: "all 0.25s ease",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(232,255,71,0.08)";
            e.currentTarget.style.color = "#e8ff47";
            e.currentTarget.style.borderColor = "rgba(232,255,71,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.color = "rgba(255,255,255,0.4)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
      </div>
    </>
  );
}
