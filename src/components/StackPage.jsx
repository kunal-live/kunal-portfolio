import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe2,
  Home,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { VisitorCounter } from "./VisitorCounter";

export function StackPage({ onBack, GITHUB = "https://github.com/kunal-live" }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Engineering Stack & Architecture — Kunal Jha";
    return () => {
      document.title = "Kunal Jha — Software Engineer";
    };
  }, []);

  const stackCategories = [
    {
      id: "systems",
      title: "Systems & Core Languages",
      icon: <Cpu size={22} className="cat-icon" />,
      description: "Low-level performance, memory control, and high-concurrency native execution.",
      skills: [
        {
          name: "C / C++",
          role: "Systems & Daemon Engineering",
          details:
            "Direct memory management, POSIX systems calls, Linux signal handling, and lightweight background daemon architectures (used in the SentriX low-latency monitoring engine).",
          highlights: ["POSIX API", "Memory Management", "Sub-10ms Latency", "Daemon Lifecycles"],
        },
        {
          name: "Go (Golang)",
          role: "Concurrent Services & Native Runtimes",
          details:
            "Engineered concurrent worker pools using goroutines and channels, OS-level pseudo-terminal (PTY) bridging via Wails v2 in NexTerm, and local-first Merkle DAG replication in Flux.",
          highlights: ["Goroutines & Channels", "Wails v2 Desktop Bridge", "P2P Protocols", "PTY Control"],
        },
        {
          name: "Java",
          role: "Enterprise Backend Architecture",
          details:
            "Robust enterprise backend development, object-oriented system modeling, high-throughput business transactions, and enterprise software engineering at Avisys Services.",
          highlights: ["Enterprise OOP", "Spring Ecosystem", "Transactional Integrity", "Enterprise APIs"],
        },
      ],
    },
    {
      id: "data",
      title: "Data Architecture & Infrastructure",
      icon: <Database size={22} className="cat-icon" />,
      description: "Relational modeling, time-series telemetry, and secure network protocols.",
      skills: [
        {
          name: "SQL & Relational Databases",
          role: "Schema Design & Query Optimization",
          details:
            "Architecting normalized transactional schemas, complex joins, index tuning, composite foreign keys, and enterprise financial billing databases (Oracle BRM).",
          highlights: ["Schema Normalization", "Index Tuning", "ACID Compliance", "Query Optimization"],
        },
        {
          name: "TimescaleDB & Time-Series",
          role: "Telemetry Ingestion & Hypertables",
          details:
            "Partitioned hypertable storage designed for high-frequency infrastructure metrics, sub-sampling aggregates, and fast real-time analytical queries in SentriX.",
          highlights: ["Hypertables", "Time-Series Chunking", "Continuous Aggregates", "Analytical Queries"],
        },
        {
          name: "SSH, SFTP & OS Terminals",
          role: "Secure Protocols & Remote Tooling",
          details:
            "Deep protocol implementation with SSH2 encryption, multi-host broadcast execution, PTY stream multiplexing, and bidirectional SFTP file streaming.",
          highlights: ["SSH2 Protocol", "PTY Multiplexing", "Dual-Pane SFTP", "Keyring Security"],
        },
        {
          name: "Cloudflare Workers & Edge",
          role: "Serverless Compute & Low-Latency KV",
          details:
            "Deploying globally distributed edge microservices and KV-backed cache stores with zero cold starts (utilized in the SpendWise personal finance platform).",
          highlights: ["Edge Workers", "Serverless Architecture", "Cloudflare KV", "Microsecond Latency"],
        },
      ],
    },
    {
      id: "frontend",
      title: "Frontend & Product Engineering",
      icon: <Globe2 size={22} className="cat-icon" />,
      description: "Performant, accessible user interfaces built with modern reactive standards.",
      skills: [
        {
          name: "React & Next.js",
          role: "Reactive UI Systems & Client Architecture",
          details:
            "Building modular component libraries, custom state management hooks, client-side caching, fluid layout virtualization, and full server-side rendering pipelines.",
          highlights: ["Hooks & State Machines", "Component Architecture", "SSR / SSG", "Interactive Visualizers"],
        },
        {
          name: "TypeScript & Modern JavaScript",
          role: "Type-Safe Contracts & Client Logic",
          details:
            "End-to-end type safety, runtime schema validations, asynchronous concurrency pipelines, and clean API consumer interfaces.",
          highlights: ["Static Typing", "ESNext Features", "Async Pipelines", "Runtime Validation"],
        },
        {
          name: "CSS Architecture & Editorial UX",
          role: "Design Tokens & Fluid Micro-Interactions",
          details:
            "Crafting dark/light responsive design systems, obsidian glassmorphism, SVG stroke animations, and fluid typography without heavy runtime UI bloat.",
          highlights: ["CSS Custom Properties", "Glassmorphic Theme Tokens", "SVG Stroke Animations", "Zero-Bloat CSS"],
        },
      ],
    },
    {
      id: "devops",
      title: "Developer Workflows & Delivery",
      icon: <Workflow size={22} className="cat-icon" />,
      description: "Version control, Linux environments, and automated continuous delivery.",
      skills: [
        {
          name: "Git & GitHub Workflows",
          role: "Trunk-Based Delivery & CI Automation",
          details:
            "Version control, branch protection strategies, multi-stage automated build actions, release tagging, and semantic changelog maintenance.",
          highlights: ["Trunk-Based Git", "GitHub Actions CI/CD", "Release Automation", "Semantic Versioning"],
        },
        {
          name: "Linux / Unix Environments",
          role: "Host Administration & System Diagnostics",
          details:
            "Deep familiarity with Linux process lifecycles, memory inspect tools (top, htop, vmstat), systemd service management, and shell scripting.",
          highlights: ["systemd Units", "Process Management", "Shell Scripting", "Host Diagnostics"],
        },
      ],
    },
  ];

  const designPrinciples = [
    {
      title: "Maintainability Over Tool-Chasing",
      description:
        "Selecting tools that withstand years in production rather than hype cycles. Standard library power and clean interfaces beat unnecessary dependency bloat every time.",
    },
    {
      title: "Mechanical Sympathy",
      description:
        "Understanding how the CPU, operating system, network stack, and browser rendering engine execute code ensures software remains responsive under heavy workloads.",
    },
    {
      title: "Operational Visibility By Default",
      description:
        "Every service, background worker, and user interface should expose clear telemetry, deterministic state, and helpful failure recovery paths.",
    },
  ];

  return (
    <div className="subpage-container stack-subpage">
      {/* Subpage Hero Header */}
      <section className="subpage-hero">
        <div className="subpage-nav-bar">
          <button className="subpage-back-btn" onClick={onBack} aria-label="Return to home page" title="Return to home page">
            <Home size={15} />
            <span>Home</span>
          </button>
          <span className="subpage-breadcrumb-separator">/</span>
          <span className="subpage-current-crumb">Stack & Technical Architecture</span>
        </div>

        <div className="subpage-hero-content">
          <div className="subpage-label">
            <Code2 size={14} className="subpage-label-icon" />
            <span>03 / ENGINEERING TOOLCHAIN</span>
          </div>
          <h1 className="subpage-title">
            Tools chosen for <em>maintainability</em>, throughput, and operational clarity.
          </h1>
          <p className="subpage-subtitle">
            A battle-tested engineering stack applied across native desktop runtimes, Linux daemons,
            enterprise transactional engines, and modern reactive client products.
          </p>

          <div className="subpage-stats-strip">
            <div className="subpage-stat-item">
              <b>Systems & Enterprise</b>
              <span>Dual Domain Expertise</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Zero Bloat</b>
              <span>Production Philosophy</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Full-Stack</b>
              <span>OS Kernel to Web Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stack Categories */}
      <section className="stack-categories-section">
        {stackCategories.map((category) => (
          <div key={category.id} className="stack-category-block">
            <div className="category-header-row">
              <div className="category-title-group">
                {category.icon}
                <h2>{category.title}</h2>
              </div>
              <p className="category-subtitle">{category.description}</p>
            </div>

            <div className="stack-skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="stack-skill-card">
                  <div className="skill-card-top">
                    <div>
                      <h3 className="skill-title">{skill.name}</h3>
                      <span className="skill-role-badge">{skill.role}</span>
                    </div>
                    <CheckCircle2 size={18} className="skill-verified-icon" />
                  </div>

                  <p className="skill-details-text">{skill.details}</p>

                  <div className="skill-highlights-list">
                    {skill.highlights.map((h, i) => (
                      <span key={i} className="skill-tag">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Architectural Principles Banner */}
      <section className="principles-section">
        <div className="principles-card">
          <div className="principles-badge">
            <ShieldCheck size={14} />
            <span>CORE ARCHITECTURAL PHILOSOPHY</span>
          </div>
          <h2>How I approach engineering decisions</h2>
          <div className="principles-grid">
            {designPrinciples.map((p, idx) => (
              <div key={idx} className="principle-item">
                <span className="principle-num">0{idx + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
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

export default StackPage;
