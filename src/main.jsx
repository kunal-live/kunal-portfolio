import React, { useEffect, useMemo, useState } from "react";
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
import { projects } from "./data/projectsData";
import { ProjectDetailPage } from "./components/ProjectDetailPage";

const GITHUB = "https://github.com/kunal-gin";
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

function LogoMark() {
  return (
    <a className="logo" href="#top" aria-label="Kunal Jha home">
      KJ<span>.</span>
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
            <span className="nexterm-version-chip">v1.0.0 · DESKTOP</span>
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
        <div className="window-bar"><span/><span/><span/></div>
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
          <i/><i/><i/><i/><i/><i/><i/><i/><i/>
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
        <div className="product-lines"><i/><i/><i/><i/></div>
      </div>
    );
  }
  if (project.visual === "portfolio") {
    return (
      <div className="project-visual portfolio-ui">
        <div className="portfolio-type">Kunal<br/><em>Jha.</em></div>
        <div className="portfolio-orb"/>
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
          <div><small>CPU</small><b>42%</b><i style={{width:"42%"}}/></div>
          <div><small>MEMORY</small><b>61%</b><i style={{width:"61%"}}/></div>
          <div><small>DISK</small><b>38%</b><i style={{width:"38%"}}/></div>
          <div><small>UPTIME</small><b>99.99%</b><i style={{width:"92%"}}/></div>
        </div>
      </div>
    );
  }
  if (project.visual === "sync") {
    return (
      <div className="project-visual fulx-mesh-preview">
        <div className="fulx-header-bar">
          <div className="fulx-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="fulx-title-pill">
            <Layers size={11} />
            <span>Fulx · Local-First P2P Replication Engine</span>
          </div>
          <span className="fulx-version-chip">UPCOMING · P2P</span>
        </div>
        <div className="fulx-mesh-content">
          <div className="fulx-nodes-cluster">
            <div className="fulx-node host active">
              <span className="node-ping" />
              <div className="node-icon">💻</div>
              <div className="node-info">
                <b>Local Host</b>
                <small>127.0.0.1</small>
              </div>
              <span className="node-status synced">SYNCED</span>
            </div>
            <div className="fulx-stream-flow">
              <div className="flow-track">
                <span className="flow-dot d1" />
                <span className="flow-dot d2" />
                <span className="flow-dot d3" />
              </div>
              <div className="merkle-badge">Merkle DAG · CDC Chunks</div>
            </div>
            <div className="fulx-node peer active">
              <span className="node-ping" />
              <div className="node-icon">🖥️</div>
              <div className="node-info">
                <b>Peer Node</b>
                <small>192.168.1.15</small>
              </div>
              <span className="node-status transfer">STREAMING</span>
            </div>
          </div>
          <div className="fulx-quick-stats">
            <span className="stat-pill">Zero Cloud Relays</span>
            <span className="stat-pill highlight">mTLS + QUIC</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function ProjectCard({ project }) {
  const detailUrl = `?project=${project.slug}`;

  return (
    <article className={`project-card accent-${project.accent} ${project.featured ? "featured" : ""}`}>
      <a
        href={detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-visual-link"
        aria-label={`Open details for ${project.title} in a new tab`}
      >
        <ProjectVisual project={project} />
      </a>
      <div className="project-card-body">
        <a
          href={detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-copy-link"
          aria-label={`Open details for ${project.title} in a new tab`}
        >
          <div className="project-copy">
            <div className="project-meta">
              <span>{project.index} / {project.category}</span>
              {project.soon ? <span className="soon">SOON</span> : <span className="live-dot"><i/> PUBLIC</span>}
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
          <ArrowUpRight size={13}/>
        </a>
        {project.live ? (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noreferrer"
            className="direct-link-btn live"
            title="Open Live Application"
          >
            <Globe2 size={14}/>
            <span>Live Demo</span>
            <ExternalLink size={12}/>
          </a>
        ) : (
          <span className="muted-link">No live URL</span>
        )}
      </div>
      </div>
    </article>
  );
}

function AnimatedSignature() {
  const [sigKey, setSigKey] = useState(0);
  const [isSigning, setIsSigning] = useState(false);

  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    setIsSigning(true);
    setSigKey((k) => k + 1);
    setTimeout(() => {
      setIsSigning(false);
    }, 6200);
  };

  return (
    <section className="signature-section" aria-label="Author Signature">
      <div className="signature-container">
        <div className="signature-ambient-glow" />

        <div className="signature-header">
          <div className="signature-badge">
            <Sparkles size={13} className="sparkle-icon" />
            <span>ENGINEERED WITH INTENT</span>
          </div>
          <button
            type="button"
            className="sig-replay-btn"
            onClick={handleReplay}
            title="Replay handwritten signature animation"
            aria-label="Replay signature animation"
          >
            <RotateCcw size={12} className={isSigning ? "spinning" : ""} />
            <span>{isSigning ? "Signing..." : "Replay Signature"}</span>
          </button>
        </div>

        <div className="signature-card-transparent">
          <div
            key={sigKey}
            className={`signature-visual-wrap ${isSigning ? "is-signing" : "is-settled"}`}
            onClick={handleReplay}
            title="Click anywhere to re-animate signature"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleReplay(e); }}
          >
            {/* SVG mask reveals the actual signature image stroke-by-stroke, like real signing */}
            <svg
              key={`sig-${sigKey}`}
              viewBox="0 0 1520 552"
              className="signature-svg-reveal"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-label="Kunal Jha Signature"
            >
              <defs>
                <mask id={`sigMask-${sigKey}`} maskUnits="userSpaceOnUse" x="-20" y="-20" width="1560" height="592">
                  <rect x="-20" y="-20" width="1560" height="592" fill="black" />
                  {/* Mask strokes animate: white = revealed, black = hidden */}
                  {/* 1. K stem slash */}
                  <path
                    className={`mask-stroke stroke-k-slash ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 47,498 C 100,390 200,280 304,143"
                  />
                  {/* 2. K arms upper + lower */}
                  <path
                    className={`mask-stroke stroke-k-arms ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 230,270 C 275,220 310,185 390,160 M 230,275 C 270,330 300,390 320,445 C 340,475 375,420 395,390"
                  />
                  {/* 3. unal cursive flow */}
                  <path
                    className={`mask-stroke stroke-unal ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 395,390 C 420,355 445,335 460,365 C 475,395 490,395 505,365 C 520,340 540,340 555,370 C 568,395 585,395 598,368 C 612,340 630,340 645,368 C 660,395 680,395 695,365 C 710,335 735,215 750,180 C 762,162 772,180 762,225 C 745,305 752,390 785,390"
                  />
                  {/* 4. J grand descending loop */}
                  <path
                    className={`mask-stroke stroke-j ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 825,200 C 875,145 920,100 949,102 C 968,112 958,155 935,235 C 900,345 848,468 780,532 C 748,562 728,528 748,475 C 768,422 828,368 920,345 C 958,328 990,342 1010,350"
                  />
                  {/* 5. ha */}
                  <path
                    className={`mask-stroke stroke-ha ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 1010,350 C 1038,255 1052,145 1060,90 C 1068,58 1082,68 1078,112 C 1068,185 1062,305 1068,395 C 1080,355 1108,332 1134,332 C 1158,332 1168,368 1182,392 C 1198,368 1218,355 1240,368 C 1260,378 1265,398 1285,398 C 1315,398 1370,375 1440,355"
                  />
                  {/* 6. Flourish underline sweep */}
                  <path
                    className={`mask-stroke stroke-flourish ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 260,465 C 460,432 740,408 1045,392 C 1200,386 1362,376 1468,334"
                  />
                </mask>
              </defs>
              {/* The actual signature image, revealed through the animated mask */}
              <image
                href={signatureImg}
                x="0" y="0"
                width="1520" height="552"
                mask={`url(#sigMask-${sigKey})`}
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>

            <div className={`sig-motto ${isSigning ? "is-signing" : "is-settled"}`}>
              <span>BUILD</span>
              <span className="motto-divider">|</span>
              <span>LEARN</span>
              <span className="motto-divider">|</span>
              <span>CREATE</span>
              <span className="motto-divider">|</span>
              <span>GROW</span>
            </div>

            <div className="signature-hover-hint">
              <RotateCcw size={11} className={isSigning ? "spinning" : ""} />
              <span>{isSigning ? "Signing..." : "Click to Re-sign"}</span>
            </div>
          </div>
        </div>

        <div className="signature-footer-bar">
          <div className="sig-author-info">
            <strong>Kunal Jha</strong>
            <span>Software Engineer · Systems, Architecture & Product Engineering</span>
          </div>
          <span className="signature-meta-chip">AUTHENTIC CRAFT · 2026</span>
        </div>
      </div>
    </section>
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

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("kj_theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onPopState = () => {
      setActiveProjectSlug(new URLSearchParams(window.location.search).get("project"));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const activeProject = useMemo(() => {
    if (!activeProjectSlug) return null;
    return projects.find((p) => p.slug === activeProjectSlug) || null;
  }, [activeProjectSlug]);

  const handleBackToPortfolio = (e) => {
    if (e) e.preventDefault();
    window.history.pushState({}, "", window.location.pathname);
    setActiveProjectSlug(null);
  };

  useEffect(() => {
    fetch("https://api.github.com/users/kunal-gin")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) setGithub({ repos: data.public_repos ?? 6, stars: 3 });
      })
      .catch(() => {});
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
      <header className="site-header">
        <div className="nav-shell">
          <LogoMark />
          <nav className={menuOpen ? "mobile-open" : ""}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#stack" onClick={closeMenu}>Stack</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={17}/> : <Moon size={17}/>}
            </button>
            <a className="top-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
              {menuOpen ? <X size={19}/> : <Menu size={19}/>}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow"><span className="status-dot"/> Available for select engineering work</div>
            <h1>Software that works <em>under pressure.</em></h1>
            <p className="hero-copy">
              I’m <strong>Kunal Jha</strong> — a <strong>Software Engineer</strong>{" "}
              building backend systems, developer tools, and products that solve concrete problems.
            </p>
            <div className="hero-actions">
              <a className="black-btn" href="#work">View selected work <ArrowDownRight size={17}/></a>
              <a className="text-btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-stats">
              <div><b>{github.repos}+</b><span>public repositories</span></div>
              <div><b>5</b><span>featured projects</span></div>
              <div><b>SWE</b><span>software engineer</span></div>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="portrait-ring"/>
            <div className="portrait-card">
              <img src={PROFILE_IMAGE} alt="Kunal Jha" />
              <div className="portrait-tag"><TerminalSquare size={15}/><span>BUILD / SHIP / ITERATE</span></div>
            </div>
            <div className="orbit orbit-one"/>
            <div className="orbit orbit-two"/>
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
                My next product direction is <strong>SentriX</strong> — a server-health monitoring system built
                to turn low-level machine signals into an operational dashboard engineers can act on.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
                <a href="https://x.com/kunaljha67" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight size={15}/></a>
                <a href="https://www.instagram.com/still.by.kunal/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15}/></a>
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
                <p>Current public work from my GitHub profile, plus SentriX — the server-health monitoring product I’m taking into the next build phase.</p>
              </div>
              <a className="outline-btn" href={GITHUB} target="_blank" rel="noreferrer">Browse all repositories <ArrowUpRight size={16}/></a>
            </div>
            <div className="project-grid">
              {projects.map(p => <ProjectCard key={p.title} project={p}/>)}
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-label">03 / STACK</div>
          <div className="section-content">
            <div className="section-intro">
              <div><h2>Tools I actually build with.</h2></div>
              <div className="stack-note"><Code2 size={17}/><span>Focused on maintainability, not tool collecting.</span></div>
            </div>
            <div className="skill-grid">
              {skills.map(([name, desc]) => (
                <div className="skill-item" key={name}>
                  <span className="skill-number">0{name === "C / C++" ? "1" : skills.findIndex(s => s[0] === name)+1}</span>
                  <div><h3>{name}</h3><p>{desc}</p></div>
                  <Check size={17}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-label">04 / EXPERIENCE</div>
          <div className="section-content">
            <div className="experience-card">
              <div className="experience-icon"><BriefcaseBusiness size={20}/></div>
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
                <ArrowUpRight size={20}/>
              </a>
            </div>

            <div className="experience-card secondary">
              <div className="experience-icon"><Zap size={20}/></div>
              <div className="experience-main">
                <div className="experience-top"><span>INDEPENDENT BUILDING</span><b>ONGOING</b></div>
                <h2>Developer Tools & Product Engineering</h2>
                <p>
                  Building and iterating on software such as NexTerm, SpendWise and other technical products,
                  with an emphasis on system behavior, UI quality and useful workflows.
                </p>
              </div>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="circle-arrow" aria-label="Open GitHub">
                <ArrowUpRight size={20}/>
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
              <a className="black-btn" href="mailto:kunaljha8990@gmail.com" title="Send email to Kunal Jha"><Mail size={16}/> kunaljha8990@gmail.com <ArrowUpRight size={16}/></a>
              <a className="outline-btn" href="https://www.linkedin.com/in/kunal-jha-dev/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={16}/></a>
              <a className="outline-btn" href={GITHUB} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={16}/></a>
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

      <footer className="site-footer">
        <div>© {year} Kunal Jha</div>
        <SocialLinks/>
        <div className="footer-right">Software Engineer</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
