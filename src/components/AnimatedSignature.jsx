import React, { useState } from "react";
import { RotateCcw, Sparkles } from "lucide-react";
import signatureImg from "../assets/kunal-signature.png";

export function AnimatedSignature() {
  const [sigKey, setSigKey] = useState(0);
  const [isSigning, setIsSigning] = useState(false);

  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    setIsSigning(true);
    setSigKey((k) => k + 1);
    setTimeout(() => {
      setIsSigning(false);
    }, 7200);
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
            aria-label="Replay signature animation"
            title="Replay signature animation"
          >
            <RotateCcw size={13} className={isSigning ? "spinning" : ""} />
            <span>{isSigning ? "Inscribing..." : "Replay Signature"}</span>
          </button>
        </div>

        <div
          className="signature-canvas-stage"
          onClick={handleReplay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleReplay(e)}
          title="Click to replay Kunal's authentic signature"
        >
          <div className="signature-grid-backdrop" />

          <div className="signature-crop-viewport">
            <svg
              className="signature-svg"
              viewBox="0 0 1520 552"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Kunal Jha's Authentic Animated Signature"
            >
              <defs>
                <mask id={`sigMask-${sigKey}`} maskUnits="userSpaceOnUse" x="0" y="0" width="1520" height="552">
                  <rect width="1520" height="552" fill="black" />
                  {/* 1. K main stem */}
                  <path
                    className={`mask-stroke stroke-k-stem ${isSigning ? "is-animating" : "is-done"}`}
                    d="M 230,135 C 230,220 226,340 220,440"
                  />
                  {/* 2. K arms */}
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
              <image
                href={signatureImg}
                x="0"
                y="0"
                width="1520"
                height="552"
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

export default AnimatedSignature;
