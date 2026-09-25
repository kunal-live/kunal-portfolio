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
import fluxDashboard from "../assets/flux-dashboard.png";
import fluxSend from "../assets/flux-send.png";
import fluxPairing from "../assets/flux-pairing.png";
import fluxSettings from "../assets/flux-settings.png";

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
    repo: "https://github.com/kunal-live/NexTerm",
    live: "https://github.com/kunal-live/NexTerm/releases/latest",
    accent: "ink",
    visual: "terminal",
    featured: true,
    status: "v1.1.0 Released",
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
    repo: "https://github.com/kunal-live/brm-billing-operations-portal",
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
    repo: "https://github.com/kunal-live/SpendWise",
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
    repo: "https://github.com/kunal-live/Ecommerce-Website",
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
    repo: "https://github.com/kunal-live/SentriX",
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
    images: {
      dashboard: fluxDashboard,
      send: fluxSend,
      pairing: fluxPairing,
      settings: fluxSettings,
    },
    gallery: [
      {
        id: "dashboard",
        label: "🏠 Home",
        title: "Flux Home — Real-Time Peer Mesh Radar & Nearby Discovery",
        desc: "Interactive capability-based device radar discovering nearby peer nodes (MacBook Pro, iPhone 15, Office PC, Linux Machine) and live multi-file transfers with zero cloud relays.",
        src: fluxDashboard,
      },
      {
        id: "send",
        label: "📤 Send Files",
        title: "Direct P2P File & Folder Dispatcher",
        desc: "Drag-and-drop batch file and folder dispatcher with automatic adaptive chunk sizing, backpressure flow control, and one-click destination targeting.",
        src: fluxSend,
      },
      {
        id: "pairing",
        label: "⚡ Code & QR Pairing",
        title: "Cross-Network QR & Short-Code Pairing",
        desc: "Dynamic QR code and 6-character short code generator enabling peer connections across different subnets, NATs, and private networks.",
        src: fluxPairing,
      },
      {
        id: "settings",
        label: "⚙️ Engine Preferences",
        title: "Device Capabilities & WebRTC Configuration",
        desc: "Device alias management, dual appearance themes, Direct WebRTC DataChannels, File System Access API disk streaming, and STUN endpoint configurations.",
        src: fluxSettings,
      },
    ],
    index: "06",
    title: "Flux",
    category: "P2P SYSTEMS · NETWORKING",
    tagline: "Zero-Install Cross-Platform Nearby P2P File Sharing & Device Mesh",
    description:
      "Zero-install, cross-platform nearby file sharing. Open a URL, discover nearby devices over an interactive mesh radar, and transfer files device-to-device at native wire speed without uploading to the cloud.",
    longDescription:
      "Flux re-imagines cross-platform file transfers into an instantaneous, browser-driven local-first experience. Powered by a high-performance Go control-plane daemon (100% standard library) with embedded web assets, Flux pairs devices automatically through capability discovery or dynamic QR/6-character codes. Files transfer directly peer-to-peer via WebRTC DataChannels with adaptive chunk sizing, backpressure flow control, and streaming directly to disk via the File System Access API with incremental SHA-256 integrity verification.",
    details: "Go · WebRTC · P2P · File System API · PWA",
    repo: "https://github.com/kunal-live/Flux",
    live: null,
    accent: "emerald",
    visual: "sync",
    soon: false,
    featured: true,
    status: "Active Development · v4 MVP",
    year: "2026",
    role: "Lead Systems & Distributed Protocol Architect",
    metrics: [
      { label: "Transport Layer", value: "Direct WebRTC DataChannel" },
      { label: "Control Plane", value: "Pure Go Stdlib (Zero Deps)" },
      { label: "Disk Streaming", value: "File System Access API" },
      { label: "Integrity", value: "Incremental SHA-256 Verified" },
    ],
    overview:
      "AirDrop only works within Apple's ecosystem, while cloud drives force gigabytes of private data onto corporate servers only to download them right back onto a nearby machine. Flux bridges this gap: a zero-install, truly cross-platform peer-to-peer sharing system that works instantaneously across Windows, macOS, Linux, Android, and iOS directly within any modern browser.",
    architecture:
      "Engineered with a lean Go control-plane hub handling lightweight WebSocket signaling, presence broadcasting, and fallback relaying. Peers exchange binary frames directly over encrypted WebRTC DataChannels with bounded in-flight windows to prevent memory bloat on multi-gigabyte payloads. File streams are piped directly into disk storage using the browser's File System Access API, with cryptographic SHA-256 integrity checked on both endpoints.",
    features: [
      {
        title: "Capability-Based Mesh Discovery",
        desc: "Devices in the same network discover each other with zero manual configuration; each advertises platform metadata and streaming capabilities dynamically.",
      },
      {
        title: "Direct P2P DataChannel Transfers",
        desc: "High-throughput binary chunked transfers with adaptive sizing and backpressure flow control, completely bypassing cloud relays.",
      },
      {
        title: "Dynamic QR & Short-Code Pairing",
        desc: "Seamless cross-network and WAN pairing using dynamic QR codes and 6-character short codes when devices are on disparate subnets.",
      },
      {
        title: "Direct-to-Disk Streaming & Flat Memory",
        desc: "Streams multi-gigabyte payloads directly into the local filesystem via the File System Access API without RAM spikes.",
      },
      {
        title: "Zero-Dependency Go Server Core",
        desc: "Compiles into a single standalone static Go binary with embedded web assets, zero third-party dependencies, and native /healthz and /metrics endpoints.",
      },
      {
        title: "Installable Offline PWA",
        desc: "Progressive Web App with Service Worker caching enabling offline launching and native-app feel across desktop and mobile.",
      },
    ],
    stack: [
      { name: "Go (Golang)", role: "Control-plane signaling hub, binary relay fallback, and embedded web bundle" },
      { name: "WebRTC DataChannel", role: "Direct encrypted peer-to-peer binary transport with adaptive message sizing" },
      { name: "File System Access API", role: "Direct-to-disk streaming for multi-gigabyte payloads with flat memory footprint" },
      { name: "Web Crypto API", role: "Real-time incremental SHA-256 chunk hashing and end-to-end integrity validation" },
      { name: "Service Worker & PWA", role: "Offline application shell caching and cross-platform installation" },
    ],
  },
];

