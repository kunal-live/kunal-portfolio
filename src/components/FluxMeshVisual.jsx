import React, { useState } from "react";
import {
  Activity,
  Check,
  Cpu,
  Database,
  Eye,
  GitBranch,
  HardDrive,
  Home,
  Layers,
  Monitor,
  Network,
  Radio,
  RefreshCw,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import fluxDashboard from "../assets/flux-dashboard.png";
import fluxSend from "../assets/flux-send.png";

export function FluxMeshVisual({ isDetailed = false }) {
  const [viewMode, setViewMode] = useState("home");
  const [selectedNode, setSelectedNode] = useState("host");

  return (
    <div className={`project-visual fulx-mesh-preview ${isDetailed ? "detailed-view" : ""}`}>
      {/* Top Window Bar */}
      <div className="fulx-header-bar">
        <div className="fulx-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="fulx-title-pill">
          <Network size={11} className="pulse-icon" />
          <span>flux-app · Share Beyond Boundaries (Direct P2P)</span>
        </div>

        {/* View Mode Toggle */}
        <div className="flux-view-toggle" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className={`view-toggle-btn ${viewMode === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setViewMode("home");
            }}
            title="Flux Home Page (Nearby Device Radar)"
            aria-label="Home"
          >
            <Home size={11} />
            <span>Home</span>
          </button>
          <button
            type="button"
            className={`view-toggle-btn ${viewMode === "send" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setViewMode("send");
            }}
            title="View Send Files Workflow"
          >
            <Eye size={10} />
            <span>Send Files</span>
          </button>
          <button
            type="button"
            className={`view-toggle-btn ${viewMode === "topology" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setViewMode("topology");
            }}
            title="View P2P Topology & Protocol Pipeline"
          >
            <Layers size={10} />
            <span>P2P Topology</span>
          </button>
        </div>

        <div className="fulx-beacon-wrap">
          <span className="fulx-live-beacon" />
          <span className="fulx-beacon-text">ACTIVE v4 MVP</span>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "home" || viewMode === "send" ? (
        <div className="flux-screenshot-container">
          <div className="flux-screen-frame">
            <img
              src={viewMode === "home" ? fluxDashboard : fluxSend}
              alt={viewMode === "home" ? "Flux Home Page — Nearby Device Radar" : "Flux — Send Files Workflow"}
              className="flux-screen-img"
            />
            <div className="flux-screen-badge-overlay">
              <span className="badge-radar">
                <Radio size={11} className="pulse-icon" />
                <span>{viewMode === "home" ? "Nearby Mesh Radar Active" : "Direct Chunk Dispatcher"}</span>
              </span>
            </div>
            <div className="flux-screen-quick-stats">
              <span className="stat-pill highlight">
                <Zap size={10} /> 125 MB/s Direct Transfer
              </span>
              <span className="stat-pill">
                <Network size={10} /> {viewMode === "home" ? "5 Nearby Devices" : "Direct Target Select"}
              </span>
              <span className="stat-pill">
                <ShieldCheck size={10} /> Zero Cloud Relays
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="fulx-mesh-content">
          {/* Row 1: Interactive Multi-Peer Distributed Topology */}
          <div className="fulx-topology-section">
            <div className="fulx-nodes-cluster">
              {/* Node 1: Local Workstation (Primary) */}
              <div
                className={`fulx-node host ${selectedNode === "host" ? "active" : ""}`}
                onClick={() => setSelectedNode("host")}
                role="button"
                tabIndex={0}
                title="Primary Local Workstation"
              >
                <span className="node-ping" />
                <div className="node-header">
                  <Server size={14} className="node-device-icon" />
                  <b>workstation-pro</b>
                </div>
                <div className="node-meta">
                  <span className="node-ip">127.0.0.1:8080</span>
                  <span className="node-role leader">PRIMARY WRITER</span>
                </div>
                <div className="node-stats-line">
                  <small>ROOT</small>
                  <code>0x8a4f91</code>
                  <span className="metric-tx">TX: 125 MB/s</span>
                </div>
              </div>

              {/* Replication Pipe 1 (LAN) */}
              <div className="fulx-stream-flow lan-stream">
                <div className="stream-badge-top">
                  <Zap size={9} />
                  <span>WebRTC Direct · 1.2ms</span>
                </div>
                <div className="flow-track">
                  <span className="flow-dot d1" />
                  <span className="flow-dot d2" />
                  <span className="flow-dot d3" />
                </div>
                <div className="merkle-badge">
                  <GitBranch size={9} />
                  <span>Adaptive Chunking</span>
                </div>
              </div>

              {/* Node 2: Edge Storage Node (LAN Replica) */}
              <div
                className={`fulx-node peer ${selectedNode === "edge" ? "active" : ""}`}
                onClick={() => setSelectedNode("edge")}
                role="button"
                tabIndex={0}
                title="MacBook Pro Peer"
              >
                <span className="node-ping" />
                <div className="node-header">
                  <HardDrive size={14} className="node-device-icon" />
                  <b>MacBook Pro (2m)</b>
                </div>
                <div className="node-meta">
                  <span className="node-ip">192.168.1.42</span>
                  <span className="node-role replica">100% SYNCHRONIZED</span>
                </div>
                <div className="node-stats-line">
                  <small>VERIFIED</small>
                  <code>SHA-256 OK</code>
                  <span className="metric-rx">RX: 125 MB/s</span>
                </div>
              </div>

              {/* Replication Pipe 2 (WAN / Cloud) */}
              <div className="fulx-stream-flow wan-stream">
                <div className="stream-badge-top wan">
                  <ShieldCheck size={9} />
                  <span>Cloudflare Relay · 14ms</span>
                </div>
                <div className="flow-track wan-track">
                  <span className="flow-dot d1" />
                  <span className="flow-dot d2" />
                  <span className="flow-dot d3" />
                </div>
                <div className="merkle-badge wan">
                  <Activity size={9} />
                  <span>6-Code Pairing</span>
                </div>
              </div>

              {/* Node 3: Offsite Cold Vault (Encrypted Peer) */}
              <div
                className={`fulx-node cold ${selectedNode === "cold" ? "active" : ""}`}
                onClick={() => setSelectedNode("cold")}
                role="button"
                tabIndex={0}
                title="Office PC Remote"
              >
                <span className="node-ping cold" />
                <div className="node-header">
                  <Database size={14} className="node-device-icon" />
                  <b>Office PC (Windows)</b>
                </div>
                <div className="node-meta">
                  <span className="node-ip">10.244.0.18</span>
                  <span className="node-role encrypted">ACTIVE PEER</span>
                </div>
                <div className="node-stats-line">
                  <small>CIPHER</small>
                  <code>WebRTC DTLS</code>
                  <span className="metric-sync">SYNC: 48 MB/s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Rabin Content-Defined Chunking & Merkle State Verification */}
          <div className="fulx-pipeline-panel">
            <div className="pipeline-panel-header">
              <div className="panel-title">
                <Layers size={12} />
                <span>WebRTC DataChannel Pipeline & File System API Streaming</span>
              </div>
              <div className="pipeline-ratio-badge">
                <Cpu size={10} />
                <span>Disk Streaming: Bounded Memory (Flat RAM)</span>
              </div>
            </div>

            <div className="fulx-chunks-grid">
              <div className="chunk-card verified">
                <div className="chunk-top">
                  <span className="chunk-id">CHUNK #4102</span>
                  <span className="chunk-size">64 KB</span>
                </div>
                <div className="chunk-hash">
                  <code>0x8a4f91b7e2c9...</code>
                </div>
                <div className="chunk-status">
                  <Check size={10} />
                  <span>SHA-256 VERIFIED</span>
                  <small>WebRTC DataChannel</small>
                </div>
              </div>

              <div className="chunk-card cached">
                <div className="chunk-top">
                  <span className="chunk-id">CHUNK #4103</span>
                  <span className="chunk-size">128 KB</span>
                </div>
                <div className="chunk-hash">
                  <code>0xc4e19033f9b2...</code>
                </div>
                <div className="chunk-status dedup">
                  <Database size={10} />
                  <span>DIRECT DISK STREAM</span>
                  <small>0 RAM Allocation</small>
                </div>
              </div>

              <div className="chunk-card crdt">
                <div className="chunk-top">
                  <span className="chunk-id">CHUNK #4104</span>
                  <span className="chunk-size">32 KB</span>
                </div>
                <div className="chunk-hash">
                  <code>0x3d78a291f0e4...</code>
                </div>
                <div className="chunk-status crdt-ok">
                  <GitBranch size={10} />
                  <span>CRC CHECKSUM PASS</span>
                  <small>Backpressure Window</small>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Live Protocol Gossip Terminal Log */}
          <div className="fulx-terminal-stream">
            <div className="terminal-stream-header">
              <span className="stream-dot" />
              <span>LIVE PEER DISCOVERY & CONTROL-PLANE LOGS</span>
              <small>Go stdlib signaling · WebRTC peer-to-peer</small>
            </div>
            <div className="terminal-stream-lines">
              <div className="log-line">
                <span className="log-time">[18:16:10]</span>
                <span className="log-tag mdns">[DISCOVERY]</span>
                <span className="log-msg">Capability broadcast: MacBook Pro, iPhone 15, Office PC online</span>
              </div>
              <div className="log-line">
                <span className="log-time">[18:16:11]</span>
                <span className="log-tag cdc">[WEBRTC]</span>
                <span className="log-msg">DataChannel open; negotiated chunk window 64 KiB with backpressure</span>
              </div>
              <div className="log-line">
                <span className="log-time">[18:16:11]</span>
                <span className="log-tag merkle">[STREAM]</span>
                <span className="log-msg">IMG_2025_0987.MOV (1.2 GB) streaming directly to disk via File System API</span>
              </div>
              <div className="log-line">
                <span className="log-time">[18:16:12]</span>
                <span className="log-tag quic">[SHA-256]</span>
                <span className="log-msg">Incremental integrity verified: 0 mismatches across 19,200 chunks</span>
              </div>
            </div>
          </div>

          {/* Row 4: Distributed Hardware & Architecture Pills */}
          <div className="fulx-quick-stats-footer">
            <span className="stat-pill highlight">
              <Zap size={11} /> 125 MB/s Wire Speed
            </span>
            <span className="stat-pill">
              <ShieldCheck size={11} /> End-to-End SHA-256
            </span>
            <span className="stat-pill">
              <HardDrive size={11} /> File System Access API
            </span>
            <span className="stat-pill">
              <Cpu size={11} /> Go Stdlib Server Core
            </span>
            <span className="stat-pill">
              <Network size={11} /> Zero Cloud Relays
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
