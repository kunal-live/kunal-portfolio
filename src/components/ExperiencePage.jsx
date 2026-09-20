import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";
import { VisitorCounter } from "./VisitorCounter";

export function ExperiencePage({ onBack, GITHUB = "https://github.com/kunal-live" }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Experience & Career Journey — Kunal Jha";
    return () => {
      document.title = "Kunal Jha — Software Engineer";
    };
  }, []);

  const experiences = [
    {
      period: "2026 — PRESENT",
      status: "CURRENT ROLE",
      role: "Software Engineer",
      company: "Avisys Services Pvt. Ltd.",
      location: "Pune, Maharashtra, India",
      type: "Full-Time · Enterprise Software Engineering",
      description:
        "Specializing in enterprise-scale software engineering, robust distributed systems, and business-critical financial billing pipelines. Applying core depth in Java, relational databases, Oracle BRM integration, and modern web application frontends.",
      responsibilities: [
        {
          title: "Enterprise Billing & Invoicing Systems",
          desc: "Architected and maintained corporate financial billing workflows, automated tax audits, recurring account reconciliations, and real-time electronic invoicing compliance pipelines using Oracle BRM.",
        },
        {
          title: "High-Throughput Backend Microservices",
          desc: "Engineered scalable Java backend services and RESTful APIs, ensuring strict transactional integrity (ACID), zero data loss, and resilient error recovery across multi-tenant enterprise data.",
        },
        {
          title: "Relational Database Performance Optimization",
          desc: "Authored and tuned complex relational SQL queries, table partitionings, and composite indexes to minimize execution latency for high-volume customer search and invoicing dashboards.",
        },
        {
          title: "Modern Portal Frontends",
          desc: "Delivered intuitive, high-density React operational dashboards allowing billing administrators to navigate complex ledger data, invoice cycles, and customer profiles with zero cognitive drag.",
        },
      ],
      technologies: ["Java", "Oracle BRM", "React", "SQL", "REST APIs", "Enterprise Architecture", "Git"],
      link: "https://www.linkedin.com/in/kunal-jha-dev/",
      linkLabel: "View Company Profile on LinkedIn",
    },
    {
      period: "ONGOING",
      status: "PRODUCT INITIATIVES",
      role: "Developer Tools & Systems Engineering",
      company: "Independent Open Source Projects",
      location: "Remote",
      type: "Research & Development",
      description:
        "Building and iterating on high-performance developer workspaces, infrastructure telemetry platforms, and peer-to-peer data replication protocols with rigorous attention to OS-level mechanics and UI quality.",
      responsibilities: [
        {
          title: "NexTerm (Cross-Platform Terminal Workspace)",
          desc: "Engineered a native Go engine bridged via Wails v2 to OS-level pseudo-terminals (PTYs), complete with multi-host command broadcast, dual-pane SFTP file management, and hardware-accelerated xterm.js rendering.",
        },
        {
          title: "SentriX (Fleet Telemetry Cockpit)",
          desc: "Developed a native C11 collection daemon delivering sub-10ms host metric sampling, paired with a Go ingestion pipeline and TimescaleDB hypertable storage for distributed cluster monitoring.",
        },
        {
          title: "Flux (Local-First P2P Replication Engine)",
          desc: "Created a zero-central-server data replication protocol in Go leveraging Rabin content-defined chunking (CDC), cryptographic Merkle DAG state validation, and encrypted peer-to-peer gossip discovery.",
        },
        {
          title: "SpendWise (Cloudflare Edge Finance Platform)",
          desc: "Shipped a personal finance tracking suite utilizing Cloudflare Workers serverless edge execution, Supabase PostgreSQL, and dynamic visual analytics.",
        },
      ],
      technologies: ["Go", "C11", "React", "TimescaleDB", "Wails v2", "Cloudflare Workers", "P2P Protocols"],
      link: GITHUB,
      linkLabel: "Explore Source Repositories on GitHub",
    },
  ];

  const competencies = [
    {
      title: "Systems Architecture",
      desc: "Designing resilient client-server boundaries, daemon lifecycles, and low-latency protocol implementations.",
    },
    {
      title: "Enterprise Reliability",
      desc: "Delivering business-critical financial workflows where accuracy, idempotency, and audit trails are non-negotiable.",
    },
    {
      title: "Performance Optimization",
      desc: "Profiling memory allocations, database query plans, and render lifecycles to guarantee snappy responsiveness.",
    },
    {
      title: "Product Craftsmanship",
      desc: "Crafting interfaces that feel immediate, fluid, and obvious to engineers, administrators, and end-users.",
    },
  ];

  return (
    <div className="subpage-container experience-subpage">
      {/* Subpage Hero Header */}
      <section className="subpage-hero">
        <div className="subpage-nav-bar">
          <button className="subpage-back-btn" onClick={onBack} aria-label="Return to overview">
            <ArrowLeft size={16} />
            <span>Overview</span>
          </button>
          <span className="subpage-breadcrumb-separator">/</span>
          <span className="subpage-current-crumb">Experience & Career Milestones</span>
        </div>

        <div className="subpage-hero-content">
          <div className="subpage-label">
            <BriefcaseBusiness size={14} className="subpage-label-icon" />
            <span>04 / PROFESSIONAL TRACK RECORD</span>
          </div>
          <h1 className="subpage-title">
            Proven depth in <em>enterprise systems</em> and hands-on product craft.
          </h1>
          <p className="subpage-subtitle">
            A comprehensive look at my professional engineering roles, enterprise billing systems work,
            and continuous independent product engineering in systems and developer tooling.
          </p>

          <div className="subpage-stats-strip">
            <div className="subpage-stat-item">
              <b>Enterprise SWE</b>
              <span>Avisys Services</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Production Grade</b>
              <span>High-Reliability Standards</span>
            </div>
            <div className="subpage-stat-divider" />
            <div className="subpage-stat-item">
              <b>Pune, India</b>
              <span>Global Remote Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Experience Timeline */}
      <section className="experience-timeline-section">
        <div className="experience-timeline-list">
          {experiences.map((exp, idx) => (
            <article key={idx} className="experience-detailed-card">
              <div className="card-status-badge-row">
                <span className="experience-badge status">{exp.status}</span>
                <span className="experience-badge period">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </span>
                <span className="experience-badge location">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </span>
              </div>

              <div className="experience-card-header">
                <div>
                  <h2 className="experience-role-title">{exp.role}</h2>
                  <div className="experience-company-row">
                    <strong className="company-name">{exp.company}</strong>
                    <span className="type-dot">•</span>
                    <span className="employment-type">{exp.type}</span>
                  </div>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="company-link-btn"
                  title={exp.linkLabel}
                >
                  <span>{exp.linkLabel}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <p className="experience-summary-para">{exp.description}</p>

              {/* Responsibilities Detailed List */}
              <div className="responsibilities-block">
                <h3 className="responsibilities-title">CORE DELIVERABLES & TECHNICAL SCOPE</h3>
                <div className="responsibilities-grid">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="responsibility-item">
                      <div className="resp-header">
                        <CheckCircle2 size={16} className="resp-check" />
                        <h4>{resp.title}</h4>
                      </div>
                      <p>{resp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="experience-tech-row">
                <span className="tech-label">ENVIRONMENT & TOOLS:</span>
                <div className="tech-tags-wrap">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="exp-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Core Competencies Matrix */}
      <section className="competencies-section">
        <div className="competencies-box">
          <div className="competencies-header">
            <Sparkles size={15} className="competency-icon" />
            <h2>Core Competencies & Problem-Solving Methodology</h2>
            <p>Principles that guide every architecture review, pull request, and deployment.</p>
          </div>

          <div className="competencies-grid">
            {competencies.map((c, i) => (
              <div key={i} className="competency-card">
                <span className="competency-num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
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

export default ExperiencePage;
