import React, { useEffect, useState } from "react";
import { Users, Eye } from "lucide-react";

/**
 * Converts a positive integer into its ordinal string representation.
 * e.g., 1 -> "1st", 2 -> "2nd", 3 -> "3rd", 4 -> "4th", 21 -> "21st", 142 -> "142nd"
 */
export function getOrdinalSuffix(n) {
  if (!n || typeof n !== "number") return "";
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  const suffix = s[(v - 20) % 10] || s[v] || s[0];
  return `${n.toLocaleString()}${suffix}`;
}

const PRIMARY_API = "https://countapi.mileshilliard.com/api/v1";
const COUNTER_KEY = "kunal_jha_portfolio_visits";
const SESSION_KEY = "kunal_portfolio_visitor_number";
const LOCAL_CACHE_KEY = "kunal_portfolio_last_count";

export function VisitorCounter({ className = "" }) {
  const [visitorNumber, setVisitorNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function recordOrFetchVisit() {
      // Check if this visitor was already counted in the current browser session
      const existingSessionNumber = sessionStorage.getItem(SESSION_KEY);

      if (existingSessionNumber) {
        const parsed = parseInt(existingSessionNumber, 10);
        if (!isNaN(parsed) && parsed > 0) {
          if (isMounted) {
            setVisitorNumber(parsed);
            setIsLoading(false);
            setIsLive(true);
          }
          return;
        }
      }

      // First time visiting in this session -> Hit the live counter to increment
      try {
        const response = await fetch(`${PRIMARY_API}/hit/${COUNTER_KEY}`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();

        if (data && typeof data.value === "number") {
          const count = data.value;
          sessionStorage.setItem(SESSION_KEY, String(count));
          localStorage.setItem(LOCAL_CACHE_KEY, String(count));

          if (isMounted) {
            setVisitorNumber(count);
            setIsLoading(false);
            setIsLive(true);
          }
          return;
        }
      } catch (err) {
        console.warn("Primary counter API failed, trying secondary fallback...", err);
      }

      // Secondary fallback if primary count API is unavailable
      try {
        const abacusRes = await fetch("https://abacus.jasoncameron.dev/hit/kunal-jha-portfolio/visits");
        if (abacusRes.ok) {
          const abacusData = await abacusRes.json();
          if (abacusData && typeof abacusData.value === "number") {
            const count = abacusData.value;
            sessionStorage.setItem(SESSION_KEY, String(count));
            localStorage.setItem(LOCAL_CACHE_KEY, String(count));

            if (isMounted) {
              setVisitorNumber(count);
              setIsLoading(false);
              setIsLive(true);
            }
            return;
          }
        }
      } catch (fallbackErr) {
        console.warn("Secondary counter fallback also unavailable, using local cache.", fallbackErr);
      }

      // Offline / network failure resilience
      const cached = localStorage.getItem(LOCAL_CACHE_KEY);
      const fallbackCount = cached ? parseInt(cached, 10) + 1 : 1;
      localStorage.setItem(LOCAL_CACHE_KEY, String(fallbackCount));
      sessionStorage.setItem(SESSION_KEY, String(fallbackCount));

      if (isMounted) {
        setVisitorNumber(fallbackCount);
        setIsLoading(false);
        setIsLive(false);
      }
    }

    recordOrFetchVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <aside
      className={`visitor-telemetry-badge ${className}`}
      aria-label="Portfolio visitor counter"
    >
      <div className="visitor-badge-inner">
        <div className="visitor-status-indicator" title={isLive ? "Live counter connected" : "Cached telemetry"}>
          <span className={`visitor-radar-ping ${isLive ? "active" : ""}`} />
          <span className="visitor-radar-core" />
        </div>

        <Users size={13} className="visitor-badge-icon" />

        <p className="visitor-badge-text">
          You are the{" "}
          {isLoading ? (
            <span className="visitor-number-pill skeleton" aria-hidden="true">
              ...
            </span>
          ) : (
            <strong className="visitor-number-pill">
              {getOrdinalSuffix(visitorNumber)}
            </strong>
          )}{" "}
          visitor of my portfolio
        </p>

        <span className="visitor-live-tag">
          <span className="live-spark" />
          LIVE
        </span>
      </div>
    </aside>
  );
}

export default VisitorCounter;
