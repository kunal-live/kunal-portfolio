import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Moon,
  MoveUpRight,
  RotateCcw,
  Send,
  Sparkles,
  Sun,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";
import heroImage from "./assets/hero-main.jpg";
import bottomAvatar from "./assets/avatar-bottom.jpg";
import signatureImg from "./assets/kunal-signature.png";
import avatarIcon from "./assets/avatar-icon.png";
import { projects } from "./data/projectsData";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { VisitorCounter } from "./components/VisitorCounter";
import { WorkPage } from "./components/WorkPage";
import { StackPage } from "./components/StackPage";
import { ExperiencePage } from "./components/ExperiencePage";
import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";
import { AnimatedSignature } from "./components/AnimatedSignature";
import { FluxMeshVisual } from "./components/FluxMeshVisual";

const GITHUB = "https://github.com/kunal-live";
const PROFILE_IMAGE = heroImage;


const skills = [
  ["C / C++", "Systems & native development"],
  ["Java", "Backend & enterprise engineering"],
  ["Software Engineering", "Full-stack & enterprise development"],
  ["SQL & Databases", "Relational architecture & queries"],
  ["Go", "NexTerm backend architecture"],
  ["React / Next.js", "Product interfaces"],
  ["SSH / SFTP", "Remote systems tooling"],
  ["Git / GitHub", "Version control & delivery"],
];

/* ── Interactive Particle Network Background ──────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on phone/mobile screens for a clean, peaceful layout
    if (window.innerWidth <= 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const PARTICLE_COUNT = 72;
    const MAX_DIST = 145;
    const MOUSE_RADIUS = 180;

    // Read current theme
    const isDark = () => document.documentElement.dataset.theme !== "light";

    // Resize canvas to full viewport
    function resize() {
      if (window.innerWidth <= 768) {
        if (animId) cancelAnimationFrame(animId);
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Pointer tracking
    function onMouseMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
    function onMouseLeave() { mouse.x = -9999; mouse.y = -9999; }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Build particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 1.6 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      const dark = isDark();

      // Particle colors based on theme
      const nodeColor = dark ? "rgba(234,179,8," : "rgba(120,80,10,";
      const lineColor = dark ? "rgba(148,163,184," : "rgba(71,85,105,";
      const accentColor = dark ? "rgba(250,204,21," : "rgba(161,98,7,";

      ctx.clearRect(0, 0, W, H);

      // Move particles
      for (const p of particles) {
        p.pulse += 0.018;
        p.x += p.vx;
        p.y += p.vy;
        // Soft bounce
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Mouse repulsion (gentle push)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.55;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
          // Speed cap
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 2.2) { p.vx = (p.vx / speed) * 2.2; p.vy = (p.vy / speed) * 2.2; }
        } else {
          // Dampen back to cruising speed
          p.vx *= 0.995;
          p.vy *= 0.995;
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.32;
            // Check mouse proximity for accent glow
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mx = midX - mouse.x;
            const my = midY - mouse.y;
            const mouseDist = Math.sqrt(mx * mx + my * my);
            const isNearMouse = mouseDist < MOUSE_RADIUS;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isNearMouse
              ? `${accentColor}${(alpha * 1.8).toFixed(3)})`
              : `${lineColor}${alpha.toFixed(3)})`;
            ctx.lineWidth = isNearMouse ? 0.9 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of particles) {
        const pulse = 0.5 + Math.sin(p.pulse) * 0.5;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const nearMouse = Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS;
        const radius = nearMouse ? p.r * (1.8 + pulse * 0.5) : p.r * (1 + pulse * 0.25);
        const alpha = nearMouse ? 0.85 : 0.35 + pulse * 0.25;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nearMouse
          ? `${accentColor}${alpha.toFixed(2)})`
          : `${nodeColor}${alpha.toFixed(2)})`;
        ctx.fill();

        // Glow on mouse-near nodes
        if (nearMouse) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${accentColor}${(alpha * 0.12).toFixed(3)})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}


function LogoMark({ onClick }) {
  return (
    <a className="logo" href="#top" onClick={onClick} aria-label="Kunal Jha home">
      <img src={avatarIcon} alt="Kunal Jha" className="nav-avatar-icon" />
      <span>KJ<em>.</em></span>
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="socials">
      <a href="mailto:kunaljha8990@gmail.com" aria-label="Email"><Mail size={18} /></a>
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
      <a href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
      <a href="https://x.com/kunaljha67" target="_blank" rel="noreferrer" aria-label="X"><X size={17} /></a>
      <a href="https://www.instagram.com/still.by.kunal/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.visual === "terminal") {
    const previewImg = project.images?.dashboard || project.images?.multiexec;
    if (previewImg) {
      return (
        <div className="project-visual nexterm-ui-preview">
          <div className="nexterm-window-bar">
            <div className="nexterm-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="nexterm-title-pill">
              <TerminalSquare size={11} />
              <span>NexTerm — Desktop Systems Workspace</span>
            </div>
            <span className="nexterm-version-chip">v1.1.0 · DESKTOP</span>
          </div>
          <div className="nexterm-screen-wrap">
            <img
              src={previewImg}
              alt="NexTerm Desktop SSH Client & Workspace"
              className="nexterm-screen-img"
            />
            <div className="nexterm-quick-stats">
              <span className="stat-pill">Workspace Hub</span>
              <span className="stat-pill highlight">v1.0.0 Desktop</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="project-visual terminal-ui">
        <div className="window-bar"><span /><span /><span /></div>
        <div className="terminal-grid">
          <div className="side-tree">
            <b>SESSIONS</b>
            <span className="tree-item active">prod-app-01</span>
            <span className="tree-item">db-cluster</span>
            <span className="tree-item">staging</span>
            <span className="tree-item">gateway</span>
          </div>
          <div className="terminal-main">
            <div className="terminal-tab">prod-app-01 <small>SSH</small></div>
            <pre>{`$ systemctl status backend
● backend-api.service
  Active: active (running)

$ df -h
/dev/sda1   500G   120G   380G
$ tail -f /var/log/syslog
[ OK ] connection established`}</pre>
          </div>
        </div>
      </div>
    );
  }
  if (project.visual === "billing") {
    if (project.images?.dashboard) {
      return (
        <div className="project-visual billing-ui-preview">
          <div className="billing-window-bar">
            <div className="billing-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="billing-title-pill">
              <BriefcaseBusiness size={11} />
              <span>Billing Selfcare Portal · Operations & Invoicing</span>
            </div>
            <span className="billing-version-chip">ENTERPRISE</span>
          </div>
          <div className="billing-screen-wrap">
            <img
              src={project.images.dashboard}
              alt="Billing Operations Portal Dashboard"
              className="billing-screen-img"
            />
            <div className="billing-quick-stats">
              <span className="stat-pill">BRM Engine</span>
              <span className="stat-pill highlight">E-Invoicing</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="project-visual billing-ui">
        <div className="mini-nav"><b>BILLING</b><span>Dashboard</span><span>Invoices</span><span>Reports</span></div>
        <div className="billing-row">
          <div><small>OUTSTANDING</small><strong>₹ 2.84L</strong></div>
          <div><small>PAID THIS MONTH</small><strong>₹ 8.41L</strong></div>
          <div><small>E-INVOICES</small><strong>1,284</strong></div>
        </div>
        <div className="chart">
          <i /><i /><i /><i /><i /><i /><i /><i /><i />
        </div>
      </div>
    );
  }
  if (project.visual === "finance") {
    return (
      <div className="project-visual finance-ui-preview">
        <div className="spendwise-browser-bar">
          <div className="spendwise-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="spendwise-url-pill">
            <Globe2 size={11} />
            <span>spendwise.kunaljha8990.workers.dev</span>
          </div>
          <span className="spendwise-live-chip">LIVE DEMO</span>
        </div>
        <div className="spendwise-screen-wrap">
          <img
            src={project.images?.dashboard}
            alt="SpendWise Personal Finance Dashboard"
            className="spendwise-screen-img"
          />
          <div className="spendwise-quick-stats">
            <span className="stat-pill">Score 82/100</span>
            <span className="stat-pill highlight">Savings 87.2%</span>
          </div>
        </div>
      </div>
    );
  }
  if (project.visual === "commerce") {
    if (project.images?.storefront) {
      return (
        <div className="project-visual commerce-ui-preview">
          <div className="commerce-window-bar">
            <div className="commerce-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="commerce-title-pill">
              <Globe2 size={11} />
              <span>Nike Storefront · Modern Footwear & Apparel</span>
            </div>
            <span className="commerce-version-chip">ECOMMERCE</span>
          </div>
          <div className="commerce-screen-wrap">
            <img
              src={project.images.storefront}
              alt="Ecommerce Storefront Showcase"
              className="commerce-screen-img"
            />
            <div className="commerce-quick-stats">
              <span className="stat-pill">Summer 2026</span>
              <span className="stat-pill highlight">30% OFF</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="project-visual commerce-ui">
        <div className="shoe-card">
          <div className="shoe">STRIDE</div>
          <small>Pro Utility</small>
          <strong>₹ 12,499</strong>
        </div>
        <div className="product-lines"><i /><i /><i /><i /></div>
      </div>
    );
  }
  if (project.visual === "portfolio") {
    return (
      <div className="project-visual portfolio-ui">
        <div className="portfolio-type">Kunal<br /><em>Jha.</em></div>
        <div className="portfolio-orb" />
        <div className="portfolio-stat"><b>ENGINEER</b><span>Software · Systems · Product</span></div>
      </div>
    );
  }
  if (project.visual === "monitor") {
    if (project.images?.overview) {
      return (
        <div className="project-visual sentrix-ui-preview">
          <div className="sentrix-window-bar">
            <div className="sentrix-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="sentrix-title-pill">
              <Activity size={11} />
              <span>SentriX · Infrastructure Fleet Observability</span>
            </div>
            <span className="sentrix-version-chip">C11 + GO CORE</span>
          </div>
          <div className="sentrix-screen-wrap">
            <img
              src={project.images.overview}
              alt="SentriX Infrastructure Fleet Dashboard"
              className="sentrix-screen-img"
            />
            <div className="sentrix-quick-stats">
              <span className="stat-pill">4 Fleet Nodes</span>
              <span className="stat-pill highlight">Sub-10ms Agent</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="project-visual monitor-ui">
        <div className="monitor-title">SENTRIX <span>ACTIVE</span></div>
        <div className="signal-grid">
          <div><small>CPU</small><b>42%</b><i style={{ width: "42%" }} /></div>
          <div><small>MEMORY</small><b>61%</b><i style={{ width: "61%" }} /></div>
          <div><small>DISK</small><b>38%</b><i style={{ width: "38%" }} /></div>
          <div><small>UPTIME</small><b>99.99%</b><i style={{ width: "92%" }} /></div>
        </div>
      </div>
    );
  }
  if (project.visual === "sync") {
    return <FluxMeshVisual isDetailed={false} />;
  }
  return null;
}

function ProjectCard({ project, onSelect }) {
  const detailUrl = `?project=${project.slug}`;

  const handleOpenDetail = (e) => {
    if (onSelect && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      onSelect(project.slug);
    }
  };

  return (
    <article className={`project-card accent-${project.accent} ${project.featured ? "featured" : ""}`}>
      <a
        href={detailUrl}
        onClick={handleOpenDetail}
        className="project-card-visual-link"
        aria-label={`Open details for ${project.title}`}
      >
        <ProjectVisual project={project} />
      </a>
      <div className="project-card-body">
        <a
          href={detailUrl}
          onClick={handleOpenDetail}
          className="project-card-copy-link"
          aria-label={`Open details for ${project.title}`}
        >
          <div className="project-copy">
            <div className="project-meta">
              <span>{project.index} / {project.category}</span>
              {project.soon ? <span className="soon">SOON</span> : <span className="live-dot"><i /> PUBLIC</span>}
            </div>
            <h3 className="project-title-row">
              <span>{project.title}</span>
              <ArrowUpRight className="title-open-arrow" size={22} />
            </h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.details}</div>
            <div className="card-explore-action">
              <span>View Full Details & Case Study</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </a>
        <div className="project-direct-actions">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="direct-link-btn"
            title="Open GitHub Repository"
          >
            <Github size={14} />
            <span>Code</span>
            <ArrowUpRight size={13} />
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="direct-link-btn live"
              title={project.slug === "nexterm" ? "Download Latest Release on GitHub" : "Open Live Application"}
            >
              <Globe2 size={14} />
              <span>{project.slug === "nexterm" ? "Latest Release" : "Live Demo"}</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="muted-link">No live URL</span>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("kj_theme");
    return saved !== null ? saved === "dark" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [github, setGithub] = useState({ repos: 6, stars: 3 });

  const [activeProjectSlug, setActiveProjectSlug] = useState(() => {
    return new URLSearchParams(window.location.search).get("project");
  });
  const [activePage, setActivePage] = useState(() => {
    return new URLSearchParams(window.location.search).get("page") || null;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("kj_theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveProjectSlug(params.get("project"));
      setActivePage(params.get("page") || null);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const activeProject = useMemo(() => {
    if (!activeProjectSlug) return null;
    return projects.find((p) => p.slug === activeProjectSlug) || null;
  }, [activeProjectSlug]);

  // Synchronize SEO title, description, canonical link, and social tags dynamically
  useEffect(() => {
    let title = "Kunal Jha — Software Engineer | Distributed Systems & React";
    let description =
      "Kunal Jha is a Software Engineer specializing in distributed systems, developer tools, high-performance Go/C11 backends, and modern React web applications.";
    let canonical = "https://kunaljha.online/";

    if (activeProject) {
      title = `${activeProject.title} — ${activeProject.tagline || activeProject.category} | Kunal Jha`;
      description = activeProject.description || activeProject.longDescription;
      canonical = `https://kunaljha.online/?project=${activeProject.slug}`;
    } else if (activePage === "work") {
      title = "Work & Systems Architecture — Kunal Jha";
      description =
        "Explore production software systems, distributed architectures, developer tools, and full-stack projects built by Kunal Jha.";
      canonical = "https://kunaljha.online/?page=work";
    } else if (activePage === "stack") {
      title = "Engineering Stack & Technologies — Kunal Jha";
      description =
        "Technical stack, languages, frameworks, databases, and architectural tools leveraged by Kunal Jha across distributed backends and frontends.";
      canonical = "https://kunaljha.online/?page=stack";
    } else if (activePage === "experience") {
      title = "Experience & Engineering Career — Kunal Jha";
      description =
        "Professional experience, systems engineering journey, open-source milestones, and technical accomplishments of Kunal Jha.";
      canonical = "https://kunaljha.online/?page=experience";
    } else if (activePage === "contact") {
      title = "Contact & Collaboration — Kunal Jha";
      description =
        "Get in touch with Kunal Jha for software engineering opportunities, systems architecture consulting, and technical collaboration.";
      canonical = "https://kunaljha.online/?page=contact";
    } else if (activePage === "about") {
      title = "About Kunal Jha — Software Engineer & Builder";
      description =
        "Personal background, engineering philosophy, and creative pursuits of Software Engineer Kunal Jha.";
      canonical = "https://kunaljha.online/?page=about";
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) linkCanonical.setAttribute("href", canonical);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonical);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);
  }, [activeProject, activePage]);

  const navigateToPage = (pageKey, e) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    setActiveProjectSlug(null);
    if (pageKey) {
      window.history.pushState({}, "", `?page=${pageKey}`);
      setActivePage(pageKey);
    } else {
      window.history.pushState({}, "", window.location.pathname);
      setActivePage(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectProject = (slug) => {
    window.history.pushState({}, "", `?project=${slug}`);
    setActiveProjectSlug(slug);
    setActivePage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPortfolio = (e) => {
    if (e) e.preventDefault();
    window.history.pushState({}, "", window.location.pathname);
    setActiveProjectSlug(null);
    setActivePage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("https://api.github.com/users/kunal-live")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) setGithub({ repos: data.public_repos ?? 6, stars: 3 });
      })
      .catch(() => { });
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const closeMenu = () => setMenuOpen(false);

  if (activeProject) {
    return (
      <ProjectDetailPage
        project={activeProject}
        allProjects={projects}
        onBack={handleBackToPortfolio}
        dark={dark}
        onToggleTheme={() => setDark((v) => !v)}
      />
    );
  }

  return (
    <div id="top">
      <ParticleCanvas />
      <header className="site-header">
        <div className="nav-shell">
          <LogoMark onClick={(e) => navigateToPage(null, e)} />
          <nav className={menuOpen ? "mobile-open" : ""}>
            <a
              href="#top"
              className={activePage === null ? "active-nav-link" : ""}
              onClick={(e) => {
                navigateToPage(null, e);
                setMenuOpen(false);
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className={activePage === "about" ? "active-nav-link" : ""}
              onClick={(e) => {
                navigateToPage("about", e);
                setMenuOpen(false);
              }}
            >
              About
            </a>
            <a
              href="#work"
              className={activePage === "work" ? "active-nav-link" : ""}
              onClick={(e) => {
                navigateToPage("work", e);
                setMenuOpen(false);
              }}
            >
              Work
            </a>
            <a
              href="#stack"
              className={activePage === "stack" ? "active-nav-link" : ""}
              onClick={(e) => {
                navigateToPage("stack", e);
                setMenuOpen(false);
              }}
            >
              Stack
            </a>
            <a
              href="#experience"
              className={activePage === "experience" ? "active-nav-link" : ""}
              onClick={(e) => {
                navigateToPage("experience", e);
                setMenuOpen(false);
              }}
            >
              Experience
            </a>
            <a
              href="#contact"
              className={activePage === "contact" ? "active-nav-link" : ""}
              onClick={(e) => {
                navigateToPage("contact", e);
                setMenuOpen(false);
              }}
            >
              Contact
            </a>

            <div className="mobile-nav-tray">
              <div className="mobile-tray-socials">
                <a href="mailto:kunaljha8990@gmail.com" aria-label="Email"><Mail size={18} /></a>
                <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="https://x.com/kunaljha67" target="_blank" rel="noreferrer" aria-label="X"><X size={17} /></a>
                <a href="https://www.instagram.com/still.by.kunal/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              </div>
            </div>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {activePage === "work" ? (
        <WorkPage
          onSelectProject={handleSelectProject}
          onBack={handleBackToPortfolio}
          GITHUB={GITHUB}
        />
      ) : activePage === "stack" ? (
        <StackPage
          onBack={handleBackToPortfolio}
          GITHUB={GITHUB}
        />
      ) : activePage === "experience" ? (
        <ExperiencePage
          onBack={handleBackToPortfolio}
          GITHUB={GITHUB}
        />
      ) : activePage === "contact" ? (
        <ContactPage
          onBack={handleBackToPortfolio}
          GITHUB={GITHUB}
        />
      ) : activePage === "about" ? (
        <AboutPage
          onBack={handleBackToPortfolio}
          GITHUB={GITHUB}
        />
      ) : (
        <>
          <main>
            <section className="hero">
              <div className="hero-left">
                <div className="eyebrow"><span className="status-dot" /> Available for select engineering work</div>
                <h1>Software that works <em>under pressure.</em></h1>
                <p className="hero-copy">
                  I’m <strong>Kunal Jha</strong> — a <strong>Software Engineer</strong>{" "}
                  building backend systems, developer tools, and products that solve concrete problems.
                </p>
                <div className="hero-actions">
                  <a className="black-btn" href="#work" onClick={(e) => navigateToPage("work", e)}>View selected work <ArrowDownRight size={17} /></a>
                  <a className="text-btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
                </div>
                <div className="hero-stats">
                  <div><b>{github.repos}+</b><span>public repositories</span></div>
                  <div><b>{projects.length}</b><span>featured projects</span></div>
                  <div><b>SWE</b><span>software engineer</span></div>
                </div>
              </div>

              <div className="hero-portrait-wrap">
                <div className="portrait-ring" />
                <div className="portrait-card">
                  <img src={PROFILE_IMAGE} alt="Kunal Jha" />
                  <div className="portrait-tag"><TerminalSquare size={15} /><span>BUILD / SHIP / ITERATE</span></div>
                </div>
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="portrait-note"><small>BASED IN</small><b>Pune, India</b></div>
              </div>
            </section>

            <section className="ticker" aria-label="Technology ticker">
              {["SOFTWARE ENGINEER", "SYSTEMS", "REACT", "JAVA", "C", "GO", "SQL", "SSH / SFTP"].map((x, i) => (
                <React.Fragment key={x}>
                  <span>{x}</span>{i < 7 && <i>•</i>}
                </React.Fragment>
              ))}
            </section>

            <section id="about" className="section about-section">
              <div className="section-label">01 / ABOUT</div>
              <div className="section-content about-grid">
                <div>
                  <h2>Bridging robust systems engineering with modern, <em>responsive products.</em></h2>
                </div>
                <div className="about-body">
                  <p>
                    My professional work is centered on Software Engineering and scalable backend systems,
                    while my independent work spans systems programming, remote infrastructure tooling,
                    finance products and React interfaces.
                  </p>
                  <p>
                    That combination shapes how I build: start from the underlying system,
                    define reliable state and interfaces, then make the workflow fast and obvious for the person using it.
                  </p>
                  <p>
                    My next product direction is <strong>Flux</strong> — a zero-install, cross-platform nearby P2P file sharing engine engineered in Go with WebRTC DataChannels, File System Access API disk streaming, and end-to-end SHA-256 integrity.
                  </p>
                  <div className="about-links">
                    <a href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
                    <a href="https://x.com/kunaljha67" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight size={15} /></a>
                    <a href="https://www.instagram.com/still.by.kunal/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a>
                  </div>
                </div>
              </div>
            </section>

            <section id="work" className="section work-section">
              <div className="section-label">02 / SELECTED WORK</div>
              <div className="section-content">
                <div className="section-intro">
                  <div>
                    <h2>Projects with a reason to exist.</h2>
                    <p>Current public work from my GitHub profile, plus Flux — the zero-install cross-platform nearby P2P file sharing system I’m actively building.</p>
                  </div>
                  <a className="outline-btn" href="#work" onClick={(e) => navigateToPage("work", e)}>Browse all projects & architecture <ArrowUpRight size={16} /></a>
                </div>
                <div className="project-grid">
                  {projects.map(p => <ProjectCard key={p.title} project={p} onSelect={handleSelectProject} />)}
                </div>
              </div>
            </section>

            <section id="stack" className="section stack-section">
              <div className="section-label">03 / STACK</div>
              <div className="section-content">
                <div className="section-intro">
                  <div><h2>Tools I actually build with.</h2></div>
                  <div className="stack-note"><Code2 size={17} /><span>Focused on maintainability, not tool collecting.</span></div>
                </div>
                <div className="skill-grid">
                  {skills.map(([name, desc]) => (
                    <div className="skill-item" key={name}>
                      <span className="skill-number">0{name === "C / C++" ? "1" : skills.findIndex(s => s[0] === name) + 1}</span>
                      <div><h3>{name}</h3><p>{desc}</p></div>
                      <Check size={17} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="experience" className="section experience-section">
              <div className="section-label">04 / EXPERIENCE</div>
              <div className="section-content">
                <div className="experience-card">
                  <div className="experience-icon"><BriefcaseBusiness size={20} /></div>
                  <div className="experience-main">
                    <div className="experience-top"><span>CURRENT ROLE</span><b>2026 — PRESENT</b></div>
                    <h2>Software Engineer</h2>
                    <p className="company">Avisys Services Pvt. Ltd.</p>
                    <p>
                      Working in enterprise software engineering,
                      building practical depth in backend development, distributed systems and business-critical workflows.
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer" className="circle-arrow" aria-label="Open LinkedIn">
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <div className="experience-card secondary">
                  <div className="experience-icon"><Zap size={20} /></div>
                  <div className="experience-main">
                    <div className="experience-top"><span>INDEPENDENT BUILDING</span><b>ONGOING · P2P</b></div>
                    <h2>Developer Tools & Product Engineering</h2>
                    <p>
                      Building and iterating on software such as Flux, NexTerm, SpendWise and other technical products,
                      with an emphasis on system behavior, UI quality and useful workflows.
                    </p>
                  </div>
                  <a href={GITHUB} target="_blank" rel="noreferrer" className="circle-arrow" aria-label="Open GitHub">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </section>

            {/* --- ANIMATED SIGNATURE (JUST ABOVE CONTACT) --- */}
            <AnimatedSignature />

            <section id="contact" className="contact-section">
              <div className="contact-no">05</div>
              <div className="contact-copy">
                <div className="section-label">CONTACT</div>
                <h2>Have a problem worth <em>engineering?</em></h2>
                <p>For software engineering, collaboration and product discussions, reach out directly via email or connect with me.</p>
                <div className="contact-actions">
                  <a className="black-btn" href="mailto:kunaljha8990@gmail.com" title="Send email to Kunal Jha"><Mail size={16} /> kunaljha8990@gmail.com <ArrowUpRight size={16} /></a>
                  <a className="outline-btn" href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} /></a>
                  <a className="outline-btn" href={GITHUB} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={16} /></a>
                </div>
              </div>
              <div className="contact-visual">
                <div className="contact-avatar-frame">
                  <img src={bottomAvatar} alt="Kunal Jha" className="contact-avatar-img" />
                </div>
                <div className="contact-badge">
                  <span className="status-dot" />
                  <span>OPEN TO BUILD</span>
                </div>
              </div>
            </section>
          </main>

          <div className="visitor-counter-wrapper">
            <VisitorCounter />
          </div>

          <footer className="site-footer">
            <div className="footer-left">© {year} Kunal Jha</div>
            <SocialLinks />
            <div className="footer-right">Software Engineer</div>
          </footer>
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

