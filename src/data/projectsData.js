import nextermDashboard from "../assets/nexterm-dashboard.png";
import nextermMultiexec from "../assets/nexterm-multiexec.png";
import nextermTerminal from "../assets/nexterm-terminal.png";
import spendwiseDashboard from "../assets/spendwise-dashboard.png";
import spendwiseLogin from "../assets/spendwise-login.png";
import billingDashboard from "../assets/billing-dashboard.png";
import billingEinvoice from "../assets/billing-einvoice.png";
import billingCustomer360 from "../assets/billing-customer360.png";
import ecommerceStorefront from "../assets/ecommerce-storefront.png";
import ecommerceProducts from "../assets/ecommerce-products.png";
import ecommerceOffer from "../assets/ecommerce-offer.png";
import sentrixOverview from "../assets/sentrix-overview.png";
import sentrixTelemetry from "../assets/sentrix-telemetry.png";
import sentrixIncidents from "../assets/sentrix-incidents.png";
import sentrixArchitecture from "../assets/sentrix-architecture.png";

export const projects = [
  {
    slug: "nexterm",
    images: {
      dashboard: nextermDashboard,
      multiexec: nextermMultiexec,
      terminal: nextermTerminal,
    },
    gallery: [
      {
        id: "dashboard",
        label: "📊 Workspace Hub",
        title: "Your Terminal, Elevated — NexTerm Command Workspace",
        desc: "Organized session catalogs, environment filters (PROD, UAT, TEST, LOCAL), multi-protocol connection wizards, and fast session launchpads.",
        src: nextermDashboard,
      },
      {
        id: "multiexec",
        label: "🖥️ 4-Way MultiExec",
        title: "Synchronized Multi-Host Terminal Execution",
        desc: "Broadcast commands across 4 isolated servers simultaneously with zero latency and independent stream buffering.",
        src: nextermMultiexec,
      },
      {
        id: "terminal",
        label: "💻 Active SSH Session",
        title: "Native SSH2 Terminal & Dual SFTP File Browser",
        desc: "High-throughput GPU-accelerated terminal session connected to production hosts with integrated dual-pane SFTP explorer and OS keyring authentication.",
        src: nextermTerminal,
      },
    ],
    index: "01",
    title: "NexTerm",
    category: "DESKTOP · SYSTEMS",
    tagline: "Cross-Platform SSH Client & Remote Infrastructure Workspace",
    description:
      "A cross-platform SSH client, terminal emulator, SFTP browser and remote infrastructure workspace built around real operator workflows.",
    longDescription:
      "NexTerm re-imagines the developer and system administrator terminal experience into a cohesive desktop workspace. Powered by a native Go engine and Wails v2 bridging directly to OS-level PTYs and system keychains, it eliminates the clunky friction of switching between standalone SSH clients, separate SFTP transfer tools, and connection managers.",
    details: "Go · Wails v2 · xterm.js",
    repo: "https://github.com/kunal-gin/NexTerm",
    live: null,
    accent: "ink",
    visual: "terminal",
    featured: true,
    status: "Active Development",
    year: "2026",
    role: "Lead Systems Architect & Developer",
    metrics: [
      { label: "Core Runtime", value: "Go + Wails v2" },
      { label: "Emulation", value: "xterm.js GPU" },
      { label: "Protocols", value: "SSH2 / SFTP / PTY" },
      { label: "Platforms", value: "Windows · macOS · Linux" },
    ],
    overview:
      "Server engineers frequently juggle separate tools for terminal access, remote file transfers, connection credentials, and bastion tunnels. NexTerm converges these essential workflows into a unified, high-performance desktop environment with zero bloat.",
    architecture:
      "Built with a decoupled architecture where Go handles concurrency, raw cryptographic SSH protocols, and system keychain interactions, while an optimized Web-based frontend provides GPU-accelerated rendering through xterm.js and intuitive multi-pane layouts.",
    features: [
      {
        title: "Multi-Session Terminal Workspace",
        desc: "Tabbed and split-pane terminal sessions supporting persistent SSH tunnels, custom keybindings, and automatic reconnection.",
      },
      {
        title: "Integrated Dual-Pane SFTP Explorer",
        desc: "Seamless drag-and-drop file transfers between local filesystems and remote servers with transfer queue monitoring.",
      },
      {
        title: "Hardware & Keyring Security",
        desc: "Credentials, passphrases, and private keys are secured via native OS keychains (Windows DPAPI, macOS Keychain, Linux Secret Service).",
      },
      {
        title: "Bastion Jump Host Routing",
        desc: "Native proxying through SSH jump hosts for secure access into private VPCs and staging clusters.",
      },
    ],
    stack: [
      { name: "Go (Golang)", role: "Core backend, SSH2 protocol engine, and PTY manager" },
      { name: "Wails v2", role: "Native OS window wrapper and low-overhead IPC bridge" },
      { name: "xterm.js", role: "High-performance GPU-accelerated terminal canvas" },
      { name: "React", role: "Operator interface and configuration components" },
      { name: "crypto/ssh", role: "Native cryptographic key negotiation and secure tunnels" },
    ],
  },
  {
    slug: "billing-operations-portal",
    images: {
      dashboard: billingDashboard,
      einvoice: billingEinvoice,
      customer360: billingCustomer360,
    },
    gallery: [
      {
        id: "dashboard",
        label: "📊 Operations Dashboard",
        title: "Live Operations & Activity Overview",
        desc: "Real-time tracking of portal jobs, invoice counts, ClearTax e-invoice queues, and operation execution status.",
        src: billingDashboard,
      },
      {
        id: "einvoice",
        label: "⚡ E-Invoice Workflow",
        title: "Automated BRM E-Invoicing Engine",
        desc: "Input validation, BRM transaction execution, result persistence, and audit notification pipeline.",
        src: billingEinvoice,
      },
      {
        id: "customer360",
        label: "👥 Customer 360",
        title: "Account Balance & Enterprise Services",
        desc: "Search by account POID, view outstanding balances, enterprise segmentation, and export ledger records.",
        src: billingCustomer360,
      },
    ],
    index: "02",
    title: "Billing Operations Portal",
    category: "ENTERPRISE · REACT",
    tagline: "Modern Billing Self-Service & Enterprise Invoicing Platform",
    description:
      "A modern billing self-service portal prototype covering invoicing, e-invoice workflows, account tools, reporting and administrative operations.",
    longDescription:
      "An enterprise-grade financial administration portal built to streamline corporate billing lifecycles, real-time e-invoicing compliance, automated tax audits, and payment reconciliations for recurring business accounts.",
    details: "React · Vite · JavaScript",
    repo: "https://github.com/kunal-gin/brm-billing-operations-portal",
    live: null,
    accent: "blue",
    visual: "billing",
    featured: false,
    status: "Enterprise Prototype",
    year: "2026",
    role: "Frontend Engineer",
    metrics: [
      { label: "Focus", value: "Enterprise B2B Billing" },
      { label: "Architecture", value: "Modular React 19" },
      { label: "Compliance", value: "E-Invoicing Standards" },
      { label: "Data Scale", value: "High-Volume Records" },
    ],
    overview:
      "Corporate finance teams struggle with fragmented billing portals, delayed e-invoice validation, and opaque accounts receivable. This portal prototype offers an all-in-one operational hub for automated invoice generation, reconciliation, and customer self-service.",
    architecture:
      "Engineered with clean separation between billing ledger states, dispute resolution flows, and real-time transaction reporting. Uses reusable design tokens for enterprise dark/light operational comfort.",
    features: [
      {
        title: "E-Invoice Lifecycle Workflow",
        desc: "Real-time generation, digital validation, dispute resolution, and export to certified enterprise formats.",
      },
      {
        title: "Receivables & DSO Analytics",
        desc: "Interactive dashboards displaying aging buckets, Days Sales Outstanding (DSO), and payment velocity metrics.",
      },
      {
        title: "Customer Self-Service Hub",
        desc: "Client portal allowing account administrators to view line items, update tax IDs, and initiate instant payment settlement.",
      },
      {
        title: "Role-Based Access & Audit Logs",
        desc: "Granular administrative privileges with complete non-repudiation audit trails for financial compliance.",
      },
    ],
    stack: [
      { name: "React", role: "Component architecture and declarative UI views" },
      { name: "Vite", role: "Fast HMR and production bundle optimization" },
      { name: "JavaScript (ESNext)", role: "Business logic and financial calculation models" },
      { name: "CSS3 Tokens", role: "Custom enterprise design system and data density layouts" },
    ],
  },
  {
    slug: "spendwise",
    index: "03",
    title: "SpendWise",
    category: "PRODUCT · FINTECH",
    tagline: "Know where your money goes. Personal Finance OS & Smart Wealth Analytics",
    description:
      "A personal finance dashboard for expenses, income, EMIs, investments, budgets, savings and financial insights.",
    longDescription:
      "SpendWise is a personal finance management system designed to make daily monetary tracking frictionless and visually insightful. Built with modern web standards, it provides real-time income vs. expense balance monitoring, automated savings rate calculations, categorized expenditure breakdowns, and a proprietary Financial Health scoring algorithm.",
    details: "Next.js · TypeScript · Supabase · Recharts · Cloudflare",
    repo: "https://github.com/kunal-gin/SpendWise",
    live: "https://spendwise.kunaljha8990.workers.dev/",
    accent: "purple",
    visual: "finance",
    featured: false,
    status: "Live & Deployed",
    year: "2026",
    role: "Full-Stack Product Engineer",
    images: {
      dashboard: spendwiseDashboard,
      login: spendwiseLogin,
    },
    gallery: [
      {
        id: "dashboard",
        label: "📊 Financial Cockpit",
        title: "Real-Time Income, Expenses & Wealth Score",
        desc: "Visual cashflow tracking, interactive balance charts, and categorized spending breakdowns.",
        src: spendwiseDashboard,
      },
      {
        id: "login",
        label: "🔐 Secure Authentication",
        title: "Supabase Multi-Factor Auth & Session State",
        desc: "Encrypted passwordless authentication, persistent user sessions, and protected financial data vaults.",
        src: spendwiseLogin,
      },
    ],
    metrics: [
      { label: "Financial Health Score", value: "82 / 100" },
      { label: "Tracked Income Flow", value: "₹21,000 / mo" },
      { label: "Projected Savings Rate", value: "87.2%" },
      { label: "Global Edge Runtime", value: "Cloudflare Workers" },
    ],
    overview:
      "Most expense trackers are either overly tedious or lack actionable intelligence. SpendWise gives individuals immediate clarity on cash flow, discretionary leaks, and savings velocity through a sleek dark-mode cockpit designed around human behavioral finance.",
    architecture:
      "Built with Next.js and TypeScript on Cloudflare Workers for sub-100ms global edge delivery. Employs Supabase for relational schema modeling, Row Level Security (RLS) for data privacy, and Recharts for GPU-smooth interactive visualizations.",
    features: [
      {
        title: "Dynamic Financial Health Score",
        desc: "Proprietary algorithmic index (82/100) evaluating savings discipline, emergency buffer health, and non-essential burn ratios.",
      },
      {
        title: "Categorized Spend & Real-Time Analytics",
        desc: "Automatic categorization for Petrol & Travel, Investments, Bills, and Miscellaneous with monthly spending curves.",
      },
      {
        title: "Monthly Goal & Milestone Tracker",
        desc: "Target budgeting for investments or savings goals with proactive progress bars and overspending warnings.",
      },
      {
        title: "Flexible Multi-Tier Authentication",
        desc: "Seamless entry supporting Google OAuth, email/password sign-in, and instant guest demo mode for immediate evaluation.",
      },
      {
        title: "Edge-Powered Global Performance",
        desc: "Deployed globally on Cloudflare Workers with cached assets and near-instant edge data hydration.",
      },
    ],
    stack: [
      { name: "Next.js", role: "Full-stack React framework with edge SSR capabilities" },
      { name: "TypeScript", role: "End-to-end type safety and contract verification" },
      { name: "Cloudflare Workers", role: "Serverless edge infrastructure and ultra-low latency routing" },
      { name: "Supabase & PostgreSQL", role: "Relational persistence with Row Level Security (RLS)" },
      { name: "Recharts", role: "Responsive data visualization and interactive financial charts" },
      { name: "Lucide Icons", role: "Modern design token iconography" },
    ],
  },
  {
    slug: "ecommerce-website",
    images: {
      storefront: ecommerceStorefront,
      products: ecommerceProducts,
      offer: ecommerceOffer,
    },
    gallery: [
      {
        id: "storefront",
        label: "👟 Storefront Showcase",
        title: "Summer Collection & Featured Hero",
        desc: "Dynamic hero section featuring new arrivals, high-performance footwear, and interactive collection exploration.",
        src: ecommerceStorefront,
      },
      {
        id: "products",
        label: "🛍️ Popular Products",
        title: "Faceted Product Grid & Pricing",
        desc: "Product cards with real-time ratings, stock availability, category filtering, and direct cart actions.",
        src: ecommerceProducts,
      },
      {
        id: "offer",
        label: "🔥 Special Offers",
        title: "Promotional Banner & Brand Journey",
        desc: "Editorial layout with high-fashion imagery, promotional discount badges, and responsive touch navigation.",
        src: ecommerceOffer,
      },
    ],
    index: "04",
    title: "Ecommerce Website",
    category: "WEB · FRONTEND",
    tagline: "High-Performance Modern Streetwear & Apparel Storefront",
    description:
      "A responsive modern streetwear and footwear e-commerce store with browsing, search, filtering, product details and cart flows.",
    longDescription:
      "A complete digital retail experience focusing on fluid micro-interactions, responsive touch layouts, faceted search and inventory filtering, dynamic cart state management, and optimized checkout UX.",
    details: "React · Vite · JavaScript",
    repo: "https://github.com/kunal-gin/Ecommerce-Website",
    live: null,
    accent: "sand",
    visual: "commerce",
    featured: false,
    status: "Completed Prototype",
    year: "2025",
    role: "Frontend Engineer",
    metrics: [
      { label: "Category", value: "Streetwear & Footwear" },
      { label: "Core UX", value: "Faceted Search & Cart" },
      { label: "Performance", value: "Instant Client Routing" },
      { label: "Design", value: "Editorial High-Fashion" },
    ],
    overview:
      "An exploration into contemporary digital fashion retail, combining editorial aesthetics with swift catalog filtering, persistent shopping cart mechanics, and smooth micro-animations.",
    architecture:
      "Implemented with React and Vite for rapid bundle execution. State management orchestrates cart additions, size selections, and promotional discount calculations without external state library overhead.",
    features: [
      {
        title: "Faceted Catalog Filtering",
        desc: "Instant client-side filtering across product categories, sizing ranges, price brackets, and availability tags.",
      },
      {
        title: "Interactive Product Showcase",
        desc: "Multi-angle image gallery with touch-friendly navigation, size selector, and stock status indicators.",
      },
      {
        title: "Persistent Shopping Cart",
        desc: "Session-stored cart drawer supporting real-time quantity adjustments, price calculations, and checkout preview.",
      },
      {
        title: "Responsive Editorial Styling",
        desc: "Magazine-inspired typography and asymmetric product grid layouts optimized for mobile and desktop screens.",
      },
    ],
    stack: [
      { name: "React", role: "Component hierarchy and reactive view state" },
      { name: "Vite", role: "Rapid bundling and fast hot-module replacement" },
      { name: "JavaScript", role: "Cart business logic and filtering operations" },
      { name: "Modern CSS", role: "Responsive CSS Grid, Flexbox, and fluid typography" },
    ],
  },
  {
    slug: "sentrix",
    index: "05",
    title: "SentriX",
    category: "SYSTEMS · OBSERVABILITY",
    tagline: "High-Performance Infrastructure Monitoring & Real-Time Telemetry Platform",
    description:
      "A lightweight, sub-second infrastructure monitoring platform engineered for real-time fleet telemetry, kernel metric sampling, anomaly detection and incident triage.",
    longDescription:
      "SentriX is a modern, high-performance infrastructure monitoring and fleet observability platform built for Linux servers and distributed clusters. Powered by a native C11 daemon delivering sub-10ms collection latency, a high-throughput Go ingestion pipeline, and TimescaleDB hypertable storage, SentriX replaces heavyweight legacy monitoring suites with a sleek, obsidian-glassmorphic real-time cockpit.",
    details: "C11 · Go · TimescaleDB · React · WebSockets",
    repo: "https://github.com/kunal-gin/SentriX",
    live: null,
    accent: "orange",
    visual: "monitor",
    featured: false,
    status: "Production Ready",
    year: "2026",
    role: "Lead Systems & DevOps Engineer",
    images: {
      overview: sentrixOverview,
      telemetry: sentrixTelemetry,
      incidents: sentrixIncidents,
      architecture: sentrixArchitecture,
    },
    gallery: [
      {
        id: "overview",
        label: "📊 Fleet Overview",
        title: "SentriX Distributed Infrastructure Fleet Cockpit",
        desc: "Real-time cluster observability across Linux hosts, live capacity gauges, threshold alarms, and instantaneous fleet health filtering.",
        src: sentrixOverview,
      },
      {
        id: "telemetry",
        label: "⚡ Node Telemetry",
        title: "High-Frequency Kernel Telemetry & CPU Waveform",
        desc: "Direct host metric sampling graphing real-time CPU load averages, memory pressure, swap utilization, and disk I/O without DOM lag.",
        src: sentrixTelemetry,
      },
      {
        id: "incidents",
        label: "🚨 Incident Center",
        title: "Automated Incident Lifecycle & Escalation Matrix",
        desc: "Multi-stage incident triage (Open, Acknowledged, Resolved) with chronological timeline events, root cause audit trails, and channel dispatch.",
        src: sentrixIncidents,
      },
      {
        id: "architecture",
        label: "📐 Core Architecture",
        title: "Go Ingestion Core, TimescaleDB & C11 Agent Topology",
        desc: "Decoupled system architecture connecting lightweight C11 host daemons to Go streaming buffers, TimescaleDB continuous aggregates, and obsidian UI.",
        src: sentrixArchitecture,
      },
    ],
    metrics: [
      { label: "Agent Overhead", value: "<15MB RSS · <0.5% CPU" },
      { label: "Sampling Interval", value: "Sub-10ms Native" },
      { label: "Storage Engine", value: "TimescaleDB / PG16" },
      { label: "Fleet Observability", value: "Real-Time WebSocket" },
    ],
    overview:
      "Heavyweight monitoring suites often introduce high resource overhead and complex configuration. SentriX is designed as a lean, single-binary agent reporting to a crystal-clear operational dashboard with zero-dependency demo capabilities.",
    architecture:
      "Engineered with a native C11 collection daemon communicating via streaming buffers with a Go ingestion core, persisting to TimescaleDB continuous aggregates, and broadcasting live fleet status over WebSockets into a React glassmorphic UI.",
    features: [
      {
        title: "Sub-10ms Metric Collection",
        desc: "Native C11 agent extracting raw kernel metrics from procfs and sysfs with virtually zero CPU footprint.",
      },
      {
        title: "Real-Time Telemetry Streaming",
        desc: "Bidirectional WebSocket connection pushing live CPU waveforms, memory pressure, and network throughput to connected operator dashboards.",
      },
      {
        title: "Multi-Stage Incident Triage",
        desc: "Automated alert evaluation against threshold hysteresis, timeline event logging, and root-cause post-mortem audit history.",
      },
      {
        title: "Standalone Demo Mode",
        desc: "Built-in synthetic fleet simulation allowing complete offline evaluation without external database dependencies.",
      },
    ],
    stack: [
      { name: "C11 Native Agent", role: "Sub-10ms low-overhead procfs / sysfs metric collection daemon" },
      { name: "Go Ingestion Core", role: "Non-blocking high-throughput metric streaming and token authentication" },
      { name: "TimescaleDB & PostgreSQL 16", role: "High-velocity hypertable storage with continuous aggregates" },
      { name: "React 18 & Vite", role: "Obsidian glassmorphic dark-mode observability workstation" },
      { name: "Tailwind CSS & Recharts", role: "GPU-smooth real-time metric rendering and telemetry curves" },
    ],
  },
  {
    slug: "flux",
    index: "06",
    title: "Flux",
    category: "SOON · DISTRIBUTED SYSTEMS",
    tagline: "High-Throughput Peer-to-Peer Data Replication & Local-First Sync Engine",
    description:
      "A lightweight, peer-to-peer data synchronization engine designed for cryptographic integrity verification, delta chunk streaming, and zero-conflict multi-device replication.",
    longDescription:
      "Flux is an ultra-fast, local-first synchronization and peer-to-peer file replication protocol engineered in Go. Built around content-defined chunking (Rabin CDC), Merkle DAG state verification, and encrypted peer-to-peer gossip discovery, Flux safely propagates filesystem and data modifications across authorized workstations, edge nodes, and cloud instances without routing through centralized corporate servers.",
    details: "Go · P2P · Merkle DAG · Local-First",
    repo: "https://github.com/kunal-gin/Flux",
    live: null,
    accent: "emerald",
    visual: "sync",
    soon: true,
    featured: false,
    status: "Upcoming Release",
    year: "2026",
    role: "Distributed Systems Architect",
    metrics: [
      { label: "Topology", value: "Decentralized P2P Mesh" },
      { label: "Chunking Algorithm", value: "Rabin CDC + Merkle DAG" },
      { label: "Transport Security", value: "Mutual TLS / QUIC" },
      { label: "Storage Model", value: "Local-First / Zero Cloud" },
    ],
    overview:
      "Modern multi-device and edge workflows suffer from privacy concerns, latency, and vendor lock-in with centralized cloud storage. Flux provides high-velocity, tamper-evident device-to-device replication operating directly over local LANs and private peer-to-peer encrypted tunnels.",
    architecture:
      "Designed with an asynchronous actor model in Go. Files are partitioned into variable-sized content-defined chunks, hashed into a cryptographically verified Merkle tree, and synchronized through direct QUIC peer streams with conflict-free replicated data structures (CRDTs).",
    features: [
      {
        title: "Content-Defined Chunking & Deduplication",
        desc: "Variable-length Rabin chunking ensuring minimal bandwidth consumption by only transferring byte deltas across devices.",
      },
      {
        title: "Cryptographic Merkle DAG Integrity",
        desc: "Continuous state hashing preventing corrupted transfers, replay attacks, or unauthorized state alteration.",
      },
      {
        title: "Peer-to-Peer Mesh Discovery",
        desc: "mDNS for zero-config local LAN device pairing and distributed hash tables (DHT) for encrypted WAN routing.",
      },
      {
        title: "Zero-Knowledge End-to-End Encryption",
        desc: "Full wire and storage encryption using ChaCha20-Poly1305, ensuring even intermediary relay nodes have zero plaintext visibility.",
      },
    ],
    stack: [
      { name: "Go (Golang)", role: "Core P2P daemon, Merkle tree calculation, and concurrency orchestration" },
      { name: "libp2p & QUIC", role: "Multiplexed encrypted transport, NAT traversal, and peer discovery" },
      { name: "BadgerDB", role: "High-performance embedded key-value metadata index" },
      { name: "CRDT Engine", role: "Conflict-free state resolution and multi-master convergence" },
    ],
  },
];
