import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Compass,
  Cpu,
  Github,
  HeartHandshake,
  Home,
  Layers,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import heroImage from "../assets/hero-main.jpg";
import { VisitorCounter } from "./VisitorCounter";

export function AboutPage({ onBack, GITHUB = "https://github.com/kunal-live" }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "About — Kunal Jha";
    return () => {
      document.title = "Kunal Jha — Software Engineer";
    };
  }, []);

  const principles = [
    {
      title: "Systems-First Thinking",
      desc: "Every great web product rests on the reliability of the underlying protocol, database, and OS execution model. Starting from systems fundamentals prevents architectural dead-ends.",
    },
    {
      title: "Clarity Over Complexity",
      desc: "Clever code is often tech debt in disguise. I value explicit interfaces, reproducible builds, deterministic state, and readable code that the next engineer can reason about effortlessly.",
    },
    {
      title: "Ergonomics for Operators",
      desc: "Software isn't finished until the person operating it feels completely confident. High-density terminals, operational dashboards, and user flows must be frictionless.",
    },
  ];

  return (
    <div className="subpage-container about-subpage">
      {/* Subpage Hero Header */}
      <section className="subpage-hero">
        <div className="subpage-nav-bar">
          <button className="subpage-back-btn" onClick={onBack} aria-label="Return to home page" title="Return to home page">
            <Home size={15} />
            <span>Home</span>
          </button>
          <span className="subpage-breadcrumb-separator">/</span>
          <span className="subpage-current-crumb">About Kunal Jha</span>
        </div>

        <div className="subpage-hero-content">
          <div className="subpage-label">
            <Compass size={14} className="subpage-label-icon" />
            <span>01 / ABOUT & PHILOSOPHY</span>
          </div>
          <h1 className="subpage-title">
            Bridging robust <em>systems engineering</em> with modern, responsive products.
          </h1>
          <p className="subpage-subtitle">
            A software engineer focused on building backend foundations, developer infrastructure,
            and intuitive user interfaces that withstand production stress.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="about-narrative-section">
        <div className="about-narrative-grid">
          <div className="about-photo-card">
            <div className="about-image-frame">
              <img src={heroImage} alt="Kunal Jha" className="about-profile-img" />
              <div className="about-location-tag">
                <MapPin size={13} />
                <span>Pune, India · Software Engineer</span>
              </div>
            </div>
            <div className="about-quick-facts">
              <div className="fact-item">
                <span className="fact-label">CURRENT ROLE</span>
                <span className="fact-value">Software Engineer @ Avisys Services</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">CORE FOCUS</span>
                <span className="fact-value">Enterprise Systems & Developer Tools</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">LANGUAGES</span>
                <span className="fact-value">Go, Java, C/C++, JavaScript, SQL</span>
              </div>
            </div>
          </div>

          <div className="about-story-copy">
            <div className="story-paragraph-block">
              <h2>The Journey & Mindset</h2>
              <p>
                My professional career is grounded in enterprise software engineering at <strong>Avisys Services</strong>,
                where I specialize in high-reliability financial billing engines, Oracle BRM integration,
                and scalable transactional backends.
              </p>
              <p>
                Simultaneously, my independent engineering work spans systems programming, OS pseudo-terminals,
                low-latency Linux daemons, and peer-to-peer data synchronization protocols.
              </p>
              <p>
                That dual perspective defines how I approach every technical problem:
                <strong> start from the underlying machine</strong>, model deterministic states and clean interfaces,
                and then build a fast, obvious, and delightful workflow for the human operator.
              </p>
            </div>

            <div className="story-paragraph-block">
              <h2>Next Horizon: Flux & Beyond</h2>
              <p>
                My current product direction is <strong>Flux</strong> — a zero-install, cross-platform nearby P2P file sharing
                protocol engineered in Go with WebRTC DataChannels, direct-to-disk streaming via the File System Access API,
                and incremental SHA-256 integrity verification. Designed around zero cloud relays and cross-device mesh discovery,
                Flux bridges the walled-garden gap across Windows, macOS, Linux, iOS, and Android without requiring app installations.
              </p>
              <p>
                I believe software engineering is at its best when it delivers practical utility without unnecessary abstractions.
              </p>
            </div>

            <div className="about-principles-subgrid">
              {principles.map((p, idx) => (
                <div key={idx} className="about-principle-card">
                  <span className="principle-number">0{idx + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry Visitor Counter */}
      <div className="visitor-counter-wrapper">
        <VisitorCounter />
      </div>

      <footer className="site-footer">
        <div>© 2026 Kunal Jha · Software Engineer</div>
        <div className="subpage-footer-links">
          <a href="mailto:kunaljha8990@gmail.com">Email</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/kunaljha67" target="_blank" rel="noreferrer">X (Twitter)</a>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="to-top-btn">
          Back to Top ↑
        </button>
      </footer>
    </div>
  );
}

export default AboutPage;
