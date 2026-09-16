import React, { useState, useEffect } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Github,
  Globe2,
  Layers,
  Linkedin,
  Maximize2,
  Moon,
  Server,
  Share2,
  Sparkles,
  Sun,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react";

export function ProjectDetailPage({ project, allProjects, onBack, dark, onToggleTheme }) {
  const initialTab = project.gallery?.[0]?.id || (project.images?.dashboard ? "dashboard" : "multiexec");
  const [activeMediaTab, setActiveMediaTab] = useState(initialTab);
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `${project.title} — Kunal Jha Portfolio`;
    if (project.gallery && project.gallery.length > 0) {
      setActiveMediaTab(project.gallery[0].id);
    } else if (project.images?.dashboard) {
      setActiveMediaTab("dashboard");
    }
    return () => {
      document.title = "Kunal Jha — Software Engineer";
    };
  }, [project]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const otherProjects = allProjects.filter((p) => p.slug !== project.slug);

  const activeGalleryItem = project.gallery
    ? project.gallery.find((g) => g.id === activeMediaTab) || project.gallery[0]
    : null;

  const activeImageSrc = activeGalleryItem
    ? activeGalleryItem.src
    : project.images
    ? project.images[activeMediaTab] || Object.values(project.images)[0]
    : null;

  return (
    <div className="project-detail-page">
      {/* Sticky Top Header */}
      <header className="detail-header">
        <div className="detail-header-inner">
          <div className="detail-nav-left">
            <button className="back-btn" onClick={onBack} aria-label="Back to portfolio">
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </button>
            <span className="header-divider">/</span>
            <span className="header-project-name">{project.title}</span>
          </div>

          <div className="detail-header-actions">
            <button
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title="Toggle theme"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="detail-share-btn"
              onClick={handleShare}
              title="Copy link to project"
            >
              {copied ? <Check size={15} /> : <Share2 size={15} />}
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="header-repo-btn"
                title="View GitHub Repository"
              >
                <Github size={15} />
                <span>Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="header-live-btn"
                title="Open Live Application"
              >
                <Globe2 size={15} />
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="detail-main">
        <section className="detail-hero">
          <div className="detail-hero-content">
            <div className="detail-badge-row">
              <span className="detail-category-chip">{project.index} / {project.category}</span>
              {project.live ? (
                <span className="detail-status-chip live">
                  <span className="live-ping" />
                  LIVE DEMO AVAILABLE
                </span>
              ) : project.soon ? (
                <span className="detail-status-chip soon">SOON</span>
              ) : (
                <span className="detail-status-chip code">OPEN SOURCE</span>
              )}
              <span className="detail-year-chip">{project.year}</span>
            </div>

            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-tagline">{project.tagline}</p>

            <div className="detail-cta-bar">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-hero-btn"
                >
                  <Globe2 size={17} />
                  <span>Launch Live Demo</span>
                  <ArrowUpRight size={17} />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-hero-btn"
                >
                  <Github size={17} />
                  <span>Explore Repository</span>
                  <ArrowUpRight size={17} />
                </a>
              )}
              <button onClick={onBack} className="tertiary-hero-btn">
                <span>View All Projects</span>
              </button>
            </div>
          </div>
        </section>

        {/* Metrics Bar */}
        {project.metrics && (
          <section className="detail-metrics-section">
            <div className="detail-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="metric-card">
                  <span className="metric-label">{m.label}</span>
                  <strong className="metric-value">{m.value}</strong>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Visual Media Showcase */}
        <section className="detail-showcase-section">
          <div className="showcase-header">
            <div>
              <span className="section-label">INTERACTIVE SHOWCASE</span>
              <h2 className="showcase-heading">Product Interface & Visuals</h2>
            </div>

            {project.gallery ? (
              <div className="showcase-tabs">
                {project.gallery.map((tab) => (
                  <button
                    key={tab.id}
                    className={`showcase-tab-btn ${activeMediaTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveMediaTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            ) : project.images ? (
              <div className="showcase-tabs">
                <button
                  className={`showcase-tab-btn ${activeMediaTab === "dashboard" ? "active" : ""}`}
                  onClick={() => setActiveMediaTab("dashboard")}
                >
                  📊 Dashboard Overview
                </button>
                <button
                  className={`showcase-tab-btn ${activeMediaTab === "login" ? "active" : ""}`}
                  onClick={() => setActiveMediaTab("login")}
                >
                  🔐 Authentication Screen
                </button>
              </div>
            ) : null}
          </div>

          <div className="showcase-window">
            <div className="window-topbar">
              <div className="window-controls">
                <span className="w-dot red" />
                <span className="w-dot yellow" />
                <span className="w-dot green" />
              </div>
              <div className="window-address-bar">
                {project.visual === "terminal" ? (
                  <TerminalSquare size={12} />
                ) : project.visual === "billing" ? (
                  <BriefcaseBusiness size={12} />
                ) : project.visual === "monitor" ? (
                  <Activity size={12} />
                ) : project.visual === "sync" ? (
                  <Layers size={12} />
                ) : (
                  <Globe2 size={12} />
                )}
                <span>
                  {project.slug === "nexterm"
                    ? "NexTerm v1.0.0 — Native Go & Wails v2 Systems Console"
                    : project.slug === "sentrix"
                    ? "sentrix.internal.cluster — Real-Time Infrastructure Observability Cockpit"
                    : project.slug === "flux"
                    ? "flux.local.p2p — High-Throughput Peer Mesh & Replicated DAG"
                    : project.slug === "billing-operations-portal"
                    ? "billing.internal.corp — BRM Operations & E-Invoice Portal"
                    : project.slug === "ecommerce-website"
                    ? "nike-store.kunal.dev — Summer 2026 Collection"
                    : project.live
                    ? project.live.replace(/^https?:\/\//, "")
                    : `kunal-jha.dev/projects/${project.slug}`}
                </span>
              </div>
              <div className="window-actions">
                {activeImageSrc && (
                  <button
                    className="window-expand-btn"
                    onClick={() => setLightboxOpen(true)}
                    title="Expand Fullscreen"
                  >
                    <Maximize2 size={14} />
                    <span>Expand</span>
                  </button>
                )}
              </div>
            </div>

            <div className="window-body">
              {activeImageSrc ? (
                <div className="screenshot-display" onClick={() => setLightboxOpen(true)}>
                  <img
                    src={activeImageSrc}
                    alt={`${project.title} - ${activeGalleryItem?.title || activeMediaTab}`}
                    className="featured-screenshot"
                  />
                  <div className="screenshot-click-hint">
                    <Maximize2 size={15} />
                    <span>Click to view high-resolution</span>
                  </div>
                </div>
              ) : project.visual === "terminal" ? (
                <div className="detail-terminal-ui">
                  <div className="detail-terminal-sidebar">
                    <div className="sb-section-title">ACTIVE SESSIONS</div>
                    <div className="sb-item active">● prod-api-01 (SSH)</div>
                    <div className="sb-item">○ db-primary (SFTP)</div>
                    <div className="sb-item">○ bastion-gateway</div>
                    <div className="sb-section-title">REMOTE SFTP</div>
                    <div className="sb-item">/var/www/production</div>
                    <div className="sb-item">/etc/systemd/system</div>
                  </div>
                  <div className="detail-terminal-content">
                    <pre>{`kunal@workstation:~$ nexterm connect prod-api-01 --key=~/.ssh/prod_ed25519
[INFO] Authenticating using hardware-backed SSH key...
[INFO] Encrypted session established via OpenSSH 9.4 (ChaCha20-Poly1305)
Linux ip-10-0-2-44 6.8.0-aws #1 SMP PREEMPT_DYNAMIC
Last login: Thu Sep 10 19:42:15 2026 from 10.0.0.12

root@prod-api-01:~# systemctl status nexterm-agent
● nexterm-agent.service - NexTerm High-Performance Infrastructure Agent
     Loaded: loaded (/etc/systemd/system/nexterm-agent.service; enabled)
     Active: active (running) since Tue 2026-09-08 04:12:08 UTC; 2 days ago
   Main PID: 14820 (nexterm-daemon)
      Tasks: 14 (limit: 4915)
     Memory: 18.4M
        CPU: 420ms

root@prod-api-01:~# sftp-sync --status
[OK] Bidirectional file synchronizer active. Zero dropouts detected.`}</pre>
                  </div>
                </div>
              ) : project.visual === "billing" ? (
                <div className="detail-billing-ui">
                  <div className="billing-preview-header">
                    <h3>Enterprise Billing Self-Service & Ledger Operations</h3>
                    <span>Tenant ID: BRM-ENT-9042</span>
                  </div>
                  <div className="billing-preview-cards">
                    <div className="b-card">
                      <small>OUTSTANDING RECEIVABLES</small>
                      <strong>₹ 2,84,500</strong>
                      <span className="b-trend positive">↓ 12% vs last month</span>
                    </div>
                    <div className="b-card">
                      <small>RECONCILED THIS MONTH</small>
                      <strong>₹ 8,41,200</strong>
                      <span className="b-trend">99.4% settlement rate</span>
                    </div>
                    <div className="b-card">
                      <small>ACTIVE E-INVOICES</small>
                      <strong>1,284</strong>
                      <span className="b-trend">GST compliant</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="detail-generic-ui">
                  <TerminalSquare size={48} />
                  <h3>{project.title}</h3>
                  <p>{project.longDescription}</p>
                </div>
              )}
            </div>

            {activeGalleryItem && (
              <div className="showcase-caption-bar">
                <div className="showcase-caption-content">
                  <h4 className="showcase-caption-title">{activeGalleryItem.title}</h4>
                  <p className="showcase-caption-desc">{activeGalleryItem.desc}</p>
                </div>
                <button
                  className="showcase-expand-link"
                  onClick={() => setLightboxOpen(true)}
                  title="Expand to Full Resolution"
                >
                  <Maximize2 size={13} />
                  <span>Full View</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Overview & Architecture Section */}
        <section className="detail-narrative-section">
          <div className="narrative-grid">
            <div className="narrative-card">
              <span className="section-label">01 / OVERVIEW</span>
              <h2>The Problem & Solution</h2>
              <p className="narrative-body">{project.overview || project.longDescription}</p>
              <p className="narrative-body">{project.description}</p>
            </div>

            <div className="narrative-card">
              <span className="section-label">02 / ARCHITECTURE</span>
              <h2>Engineering Highlights</h2>
              <p className="narrative-body">{project.architecture || project.longDescription}</p>
              <div className="tech-badge-list">
                {project.details.split("·").map((tech, i) => (
                  <span key={i} className="detail-tech-pill">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Breakdown */}
        {project.features && (
          <section className="detail-features-section">
            <span className="section-label">03 / CAPABILITIES</span>
            <h2 className="section-heading">Key Features & Technical Workflows</h2>
            <div className="features-grid">
              {project.features.map((feat, i) => (
                <div key={i} className="feature-item-card">
                  <div className="feature-number">0{i + 1}</div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Details */}
        {project.stack && (
          <section className="detail-stack-section">
            <span className="section-label">04 / TECHNOLOGY</span>
            <h2 className="section-heading">Architectural Components & Tools</h2>
            <div className="stack-card-grid">
              {project.stack.map((item, i) => (
                <div key={i} className="stack-role-card">
                  <div className="stack-role-header">
                    <Layers size={16} />
                    <strong>{item.name}</strong>
                  </div>
                  <p>{item.role}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links & CTA Section */}
        <section className="detail-links-section">
          <div className="links-banner">
            <div>
              <span className="section-label">PROJECT RESOURCES</span>
              <h2>Ready to inspect or run {project.title}?</h2>
              <p>Explore the code repository on GitHub or test the deployed live version directly.</p>
            </div>
            <div className="links-banner-actions">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-action-btn"
                >
                  <Globe2 size={16} />
                  <span>Visit Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-action-btn"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
              <a
                href="https://www.linkedin.com/in/kunal-jha-dev/"
                target="_blank"
                rel="noreferrer"
                className="contact-action-btn"
              >
                <Linkedin size={16} />
                <span>Discuss with Kunal</span>
              </a>
            </div>
          </div>
        </section>

        {/* Explore Other Projects Switcher */}
        <section className="detail-other-projects">
          <div className="other-projects-header">
            <div>
              <span className="section-label">MORE WORK</span>
              <h2>Explore Other Projects</h2>
            </div>
            <button onClick={onBack} className="text-btn">
              Back to Full Portfolio <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="other-projects-grid">
            {otherProjects.map((p) => (
              <a
                key={p.slug}
                href={`?project=${p.slug}`}
                className="other-project-card"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", `?project=${p.slug}`);
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
              >
                <div className="other-project-meta">
                  <span>{p.index} / {p.category}</span>
                  {p.live ? <span className="other-live-dot" /> : null}
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="other-project-link">
                  <span>View Project Details</span>
                  <ArrowUpRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Fullscreen Image View */}
      {lightboxOpen && activeImageSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar">
              <div className="lightbox-title-area">
                <span className="lightbox-project-badge">{project.title}</span>
                <span className="lightbox-title-text">
                  {activeGalleryItem?.label || activeMediaTab} — {activeGalleryItem?.title || ""}
                </span>
              </div>
              <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close lightbox">
                <X size={20} />
              </button>
            </div>
            {project.gallery && project.gallery.length > 1 && (
              <div className="lightbox-tabs">
                {project.gallery.map((tab) => (
                  <button
                    key={tab.id}
                    className={`lightbox-tab-btn ${activeMediaTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveMediaTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
            <div className="lightbox-image-wrap">
              <img
                src={activeImageSrc}
                alt={`${project.title} full view`}
                className="lightbox-image"
              />
            </div>
            {activeGalleryItem?.desc && (
              <div className="lightbox-footer">
                <p>{activeGalleryItem.desc}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="detail-footer">
        <div>© 2026 Kunal Jha · Software Engineer</div>
        <div className="detail-footer-links">
          <a href="mailto:kunaljha8990@gmail.com">Email</a>
          <a href="https://github.com/kunal-live" target="_blank" rel="noreferrer">GitHub</a>
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

