import React, { useRef, useState } from "react";
import { RotateCcw, Sparkles } from "lucide-react";
import signatureImg from "../assets/kunal-signature.png";

export function AnimatedSignature() {
  const [sigKey, setSigKey] = useState(0);
  const [isSigning, setIsSigning] = useState(false);
  const timeoutRef = useRef(null);
  const isSigningRef = useRef(false);

  isSigningRef.current = isSigning;

  const handleReplay = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsSigning(true);
    setSigKey((k) => k + 1);

    timeoutRef.current = setTimeout(() => {
      setIsSigning(false);
    }, 3400);
  };

  const handleAutoReplay = () => {
    if (!isSigningRef.current) {
      handleReplay();
    }
  };

  return (
    <section
      className="signature-section"
      aria-label="Author Signature"
      onMouseEnter={handleAutoReplay}
    >
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
            aria-label="Replay signature animation"
            title="Replay handwritten signature animation"
          >
            <RotateCcw size={13} className={isSigning ? "spinning" : ""} />
            <span>{isSigning ? "Signing..." : "Replay Signature"}</span>
          </button>
        </div>

        <div className="signature-card-transparent">
          <div
            key={sigKey}
            className={`signature-visual-wrap ${isSigning ? "is-signing" : "is-settled"}`}
            onClick={handleReplay}
            onMouseEnter={handleAutoReplay}
            onMouseMove={handleAutoReplay}
            onTouchStart={handleAutoReplay}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleReplay(e)}
            title="Hover or click to watch Kunal sign live"
          >
            <svg
              viewBox="0 0 1520 552"
              className="signature-svg-stage"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Kunal Jha Handwritten Signature"
            >
              <defs>
                {/* Soft feather filter ensures natural liquid ink bleeding without harsh edges */}
                <filter id={`sigFeather-${sigKey}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>

                <mask
                  id={`sigMask-${sigKey}`}
                  maskUnits="userSpaceOnUse"
                  x="-40"
                  y="-40"
                  width="1600"
                  height="640"
                >
                  {/* Black backdrop hides ink until strokes reveal it */}
                  <rect x="-40" y="-40" width="1600" height="640" fill="black" />

                  <g filter={`url(#sigFeather-${sigKey})`}>
                    {/* 1. K main stem slash */}
                    <path
                      className={`mask-stroke stroke-k-stem ${isSigning ? "is-animating" : "is-done"}`}
                      d="M 47,498 C 100,390 200,280 304,143"
                    />

                    {/* 2. K arms (upper branch & grounding lower anchor) */}
                    <path
                      className={`mask-stroke stroke-k-arms ${isSigning ? "is-animating" : "is-done"}`}
                      d="M 230,270 C 275,220 310,185 390,160 M 230,275 C 270,330 300,390 320,445 C 340,475 375,420 395,390"
                    />

                    {/* 3. Continuous cursive 'unal' cadence */}
                    <path
                      className={`mask-stroke stroke-unal ${isSigning ? "is-animating" : "is-done"}`}
                      d="M 395,390 C 420,355 445,335 460,365 C 475,395 490,395 505,365 C 520,340 540,340 555,370 C 568,395 585,395 598,368 C 612,340 630,340 645,368 C 660,395 680,395 695,365 C 710,335 735,215 750,180 C 762,162 772,180 762,225 C 745,305 752,390 785,390"
                    />

                    {/* 4. Grand 'J' loop into 'ha' (continuous uninterrupted cursive flow) */}
                    <path
                      className={`mask-stroke stroke-jha ${isSigning ? "is-animating" : "is-done"}`}
                      d="M 825,200 C 875,145 920,100 949,102 C 968,112 958,155 935,235 C 900,345 848,468 780,532 C 748,562 728,528 748,475 C 768,422 828,368 920,345 C 958,328 990,342 1010,350 C 1038,255 1052,145 1060,90 C 1068,58 1082,68 1078,112 C 1068,185 1062,305 1068,395 C 1080,355 1108,332 1134,332 C 1158,332 1168,368 1182,392 C 1198,368 1218,355 1240,368 C 1260,378 1265,398 1285,398 C 1315,398 1370,375 1440,355"
                    />

                    {/* 5. Underline flourish sweep */}
                    <path
                      className={`mask-stroke stroke-flourish ${isSigning ? "is-animating" : "is-done"}`}
                      d="M 260,465 C 460,432 740,408 1045,392 C 1200,386 1362,376 1468,334"
                    />
                  </g>

                  {/* Settle rect smoothly locks 100% full ink visibility upon stroke completion */}
                  <rect
                    x="-40"
                    y="-40"
                    width="1600"
                    height="640"
                    fill="white"
                    className={`mask-settle-rect ${isSigning ? "is-animating" : "is-done"}`}
                  />
                </mask>
              </defs>

              <image
                href={signatureImg}
                x="0"
                y="0"
                width="1520"
                height="552"
                mask={isSigning ? `url(#sigMask-${sigKey})` : undefined}
                preserveAspectRatio="xMidYMid meet"
                className="kunal-signature-svg-img"
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
              <span>{isSigning ? "Signing..." : "Hover or click to re-sign"}</span>
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

export default AnimatedSignature;
