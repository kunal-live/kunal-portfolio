import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Github,
  Globe2,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import bottomAvatar from "../assets/avatar-bottom.jpg";
import { AnimatedSignature } from "./AnimatedSignature";
import { VisitorCounter } from "./VisitorCounter";

export function ContactPage({ onBack, GITHUB = "https://github.com/kunal-live" }) {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Enterprise Software & Billing");
  const [messageNote, setMessageNote] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Contact & Direct Inquiries — Kunal Jha";
    return () => {
      document.title = "Kunal Jha — Software Engineer";
    };
  }, []);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("kunaljha8990@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const topics = [
    "Enterprise Software & Billing",
    "Systems & Go / C++ Architecture",
    "Full-Stack Web & Cloud Product",
    "Open-Source & Technical Collaboration",
    "General Discussion / Hello",
  ];

  const handleLaunchEmail = () => {
    const subject = encodeURIComponent(`[Engineering Inquiry] ${selectedTopic}`);
    const body = encodeURIComponent(
      `Hi Kunal,\n\nI am reaching out regarding ${selectedTopic}.\n\n${messageNote || "I would like to discuss an engineering opportunity or collaboration with you."}\n\nBest regards,`
    );
    window.location.href = `mailto:kunaljha8990@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="subpage-container contact-subpage">
      {/* Subpage Hero Header */}
      <section className="subpage-hero">
        <div className="subpage-nav-bar">
          <button className="subpage-back-btn" onClick={onBack} aria-label="Return to home page" title="Return to home page">
            <Home size={15} />
            <span>Home</span>
          </button>
          <span className="subpage-breadcrumb-separator">/</span>
          <span className="subpage-current-crumb">Contact & Collaboration</span>
        </div>

        <div className="subpage-hero-content">
          <div className="subpage-label">
            <Mail size={14} className="subpage-label-icon" />
            <span>05 / DIRECT COLLABORATION</span>
          </div>
          <h1 className="subpage-title">
            Have a problem worth <em>engineering?</em> Let’s talk.
          </h1>
          <p className="subpage-subtitle">
            Whether you have an enterprise backend challenge, distributed systems requirement,
            product initiative, or wish to connect on software craft — my inbox is always open.
          </p>

          <div className="subpage-stats-strip">
            <div className="subpage-stat-item">
              <b>&lt; 24 Hours</b>
              <span>Response Latency</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Pune, India (IST)</b>
              <span>Global Remote Delivery</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Open to Build</b>
              <span>Availability Status</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Portal Grid */}
      <section className="contact-portal-section">
        <div className="contact-portal-grid">
          {/* Left Column: Direct Communication Hub */}
          <div className="contact-hub-left">
            <div className="contact-card primary-email-card">
              <span className="contact-card-label">DIRECT EMAIL ADDRESS</span>
              <div className="email-address-row">
                <span className="email-text">kunaljha8990@gmail.com</span>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <p className="email-helper-text">
                Direct route to my primary inbox. Best for technical specs, enterprise roles, and consulting inquiries.
              </p>
              <button className="black-btn full-width" onClick={handleLaunchEmail}>
                <Mail size={16} />
                <span>Open in Mail Client</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Quick Inquiry Composer */}
            <div className="contact-card inquiry-composer-card">
              <div className="inquiry-composer-header">
                <MessageSquare size={16} className="inquiry-icon" />
                <h3>Quick Inquiry Builder</h3>
              </div>
              <p className="inquiry-hint">
                Select a topic to generate a pre-formatted email draft instantly:
              </p>

              <div className="topic-chips-group">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`topic-chip ${selectedTopic === t ? "active" : ""}`}
                    onClick={() => setSelectedTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="inquiry-input-wrap">
                <label htmlFor="inquiry-note" className="input-label">
                  Optional Context or Note:
                </label>
                <textarea
                  id="inquiry-note"
                  rows={3}
                  value={messageNote}
                  onChange={(e) => setMessageNote(e.target.value)}
                  placeholder="Share a short note about the project, team, or timeline..."
                  className="inquiry-textarea"
                />
              </div>

              <button className="outline-btn full-width" onClick={handleLaunchEmail}>
                <Send size={15} />
                <span>Generate & Send Draft Email</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Social & Professional Network Cards */}
            <div className="contact-social-grid">
              <a
                href="https://www.linkedin.com/in/kunal-jha-dev/"
                target="_blank"
                rel="noreferrer"
                className="social-portal-card"
              >
                <div className="social-card-top">
                  <Linkedin size={20} />
                  <ArrowUpRight size={15} />
                </div>
                <strong>LinkedIn</strong>
                <span>Professional network & career updates</span>
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="social-portal-card"
              >
                <div className="social-card-top">
                  <Github size={20} />
                  <ArrowUpRight size={15} />
                </div>
                <strong>GitHub</strong>
                <span>Open source repositories & commits</span>
              </a>

              <a
                href="https://x.com/kunaljha67"
                target="_blank"
                rel="noreferrer"
                className="social-portal-card"
              >
                <div className="social-card-top">
                  <span className="x-text-logo">𝕏</span>
                  <ArrowUpRight size={15} />
                </div>
                <strong>X / Twitter</strong>
                <span>Systems thoughts & tech discussions</span>
              </a>

              <a
                href="https://www.instagram.com/still.by.kunal/"
                target="_blank"
                rel="noreferrer"
                className="social-portal-card"
              >
                <div className="social-card-top">
                  <Instagram size={20} />
                  <ArrowUpRight size={15} />
                </div>
                <strong>Instagram</strong>
                <span>Visuals, creative captures & life</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Avatar & Availability Status */}
          <div className="contact-hub-right">
            <div className="contact-profile-card">
              <div className="contact-avatar-display-frame">
                <img src={bottomAvatar} alt="Kunal Jha" className="contact-display-img" />
                <div className="avatar-status-pill">
                  <span className="status-dot" />
                  <span>OPEN TO BUILD</span>
                </div>
              </div>

              <div className="contact-profile-details">
                <h2>Kunal Jha</h2>
                <p className="profile-role">Software Engineer</p>
                <p className="profile-bio">
                  Focused on scalable distributed backends, developer infrastructure, and responsive modern web products.
                </p>

                <div className="availability-metadata-list">
                  <div className="meta-row">
                    <MapPin size={15} />
                    <span>Based in Pune, India (Available Globally)</span>
                  </div>
                  <div className="meta-row">
                    <Clock size={15} />
                    <span>Timezone: IST (UTC+5:30)</span>
                  </div>
                  <div className="meta-row">
                    <Globe2 size={15} />
                    <span>English · Hindi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <AnimatedSignature />

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

export default ContactPage;
