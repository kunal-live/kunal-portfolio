import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Filter,
  Github,
  Globe2,
  Home,
  Layers,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";
import { projects } from "../data/projectsData";
import { VisitorCounter } from "./VisitorCounter";
import { FluxMeshVisual } from "./FluxMeshVisual";

export function WorkPage({ onSelectProject, onBack, GITHUB = "https://github.com/kunal-live" }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Work & Engineering Portfolio — Kunal Jha";
    return () => {
      document.title = "Kunal Jha — Software Engineer";
    };
  }, []);

  const categories = [
    { id: "all", label: "All Systems", count: projects.length },
    {
      id: "systems",
      label: "Systems & Infrastructure",
      count: projects.filter((p) => p.details.includes("Go") || p.details.includes("C11")).length,
    },
    {
      id: "enterprise",
      label: "Enterprise & FinTech",
      count: projects.filter((p) => p.category.includes("FINANCIAL") || p.category.includes("FINTECH") || p.title.includes("Billing")).length,
    },
    {
      id: "web",
      label: "Web Products & Cloud",
      count: projects.filter((p) => p.details.includes("React") || p.details.includes("Next.js")).length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "systems") {
      return project.details.includes("Go") || project.details.includes("C11") || project.visual === "terminal" || project.visual === "sync" || project.visual === "monitor";
    }
    if (selectedCategory === "enterprise") {
      return project.category.includes("FINANCIAL") || project.category.includes("FINTECH") || project.title.includes("Billing");
    }
    if (selectedCategory === "web") {
      return project.details.includes("React") || project.details.includes("Next.js") || project.details.includes("Cloudflare");
    }
    return true;
  });

  return (
    <div className="subpage-container work-subpage">
      {/* Subpage Hero Header */}
      <section className="subpage-hero">
        <div className="subpage-nav-bar">
          <button className="subpage-back-btn" onClick={onBack} aria-label="Return to home page" title="Return to home page">
            <Home size={15} />
            <span>Home</span>
          </button>
          <span className="subpage-breadcrumb-separator">/</span>
          <span className="subpage-current-crumb">Work & Selected Systems</span>
        </div>

        <div className="subpage-hero-content">
          <div className="subpage-label">
            <Sparkles size={14} className="subpage-label-icon" />
            <span>02 / SELECTED WORK & ARCHITECTURE</span>
          </div>
          <h1 className="subpage-title">
            Engineering software with <em>clear intent</em> and concrete impact.
          </h1>
          <p className="subpage-subtitle">
            From low-level OS pseudo-terminals and peer-to-peer Merkle replication protocols to
            enterprise billing portals, time-series telemetry pipelines, and cloud edge financial applications.
          </p>

          <div className="subpage-stats-strip">
            <div className="subpage-stat-item">
              <b>{projects.length}</b>
              <span>Featured Systems</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Go · C11 · Java · React</b>
              <span>Core Technologies</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>100%</b>
              <span>Production Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="work-filter-bar">
        <div className="filter-scroll-wrapper">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="filter-count-badge">{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects Detailed Grid */}
      <section className="work-projects-section">
        <div className="work-detailed-grid">
          {filteredProjects.map((project) => {
            const previewImg =
              project.images?.dashboard ||
              project.images?.multiexec ||
              project.images?.terminal ||
              project.gallery?.[0]?.src;

            return (
              <article key={project.slug} className="work-detailed-card">
                <div className="work-card-top-header">
                  <div className="work-card-meta">
                    <span className="work-card-index">{project.index}</span>
                    <span className="work-card-category">{project.category}</span>
                  </div>
                  <div className="work-card-tech-chip">{project.details}</div>
                </div>

                {/* Project Visual Showcase Frame */}
                {/* Project Visual Showcase Frame */}
                <a
                  href={`?project=${project.slug}`}
                  className="work-card-visual"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProject(project.slug);
                  }}
                  title={`Explore full architecture for ${project.title}`}
                  aria-label={`Explore full architecture for ${project.title}`}
                >
                  {previewImg ? (
                    <img
                      src={previewImg}
                      alt={`${project.title} — ${project.tagline || "Systems Engineering Project"}`}
                      className="work-preview-image"
                      loading="lazy"
                    />
                  ) : project.visual === "sync" ? (
                    <div className="work-flux-embed">
                      <FluxMeshVisual isDetailed={false} />
                    </div>
                  ) : (
                    <div className="work-card-fallback-visual">
                      <TerminalSquare size={42} />
                    </div>
                  )}
                  <div className="work-card-overlay">
                    <span className="inspect-chip">
                      <span>Explore Architecture</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </a>

                {/* Detailed Description Content */}
                <div className="work-card-body">
                  <div className="work-card-title-row">
                    <h2 className="work-project-title">
                      <a
                        href={`?project=${project.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectProject(project.slug);
                        }}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {project.title}
                      </a>
                    </h2>
                    {project.live && (
                      <span className="live-status-pill">
                        <span className="live-status-dot" /> {project.slug === "nexterm" ? "v1.1.0 Released" : project.slug === "sentrix" ? "v1.2.0 Released" : "Live Web App"}
                      </span>
                    )}
                  </div>

                  <p className="work-project-tagline">{project.tagline}</p>
                  <p className="work-project-desc">{project.longDescription || project.description}</p>

                  {/* Highlights Bullet List */}
                  {project.keyFeatures && (
                    <div className="work-key-features">
                      <span className="features-header">KEY ARCHITECTURAL HIGHLIGHTS:</span>
                      <ul>
                        {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                          <li key={idx}>
                            <strong>{feat.title}:</strong> {feat.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="work-card-actions">
                    <a
                      href={`?project=${project.slug}`}
                      className="deep-dive-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectProject(project.slug);
                      }}
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowUpRight size={16} />
                    </a>

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="work-icon-action"
                        title="View Source on GitHub"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="work-icon-action live"
                        title={project.slug === "nexterm" || project.slug === "sentrix" ? "Download Latest Release on GitHub" : "Launch Live Application"}
                      >
                        <Globe2 size={16} />
                        <span>{project.slug === "nexterm" || project.slug === "sentrix" ? "Latest Release" : "Live Demo"}</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* GitHub Callout Footer Banner */}
      <section className="work-github-callout">
        <div className="github-callout-inner">
          <div className="github-callout-copy">
            <Github size={28} className="github-callout-icon" />
            <div>
              <h3>Explore All Open Repositories</h3>
              <p>Continuous commits, systems experiments, and experimental tools on GitHub.</p>
            </div>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="black-btn github-cta"
          >
            <span>Visit @kunal-live</span>
            <ArrowUpRight size={16} />
          </a>
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

export default WorkPage;
