import { useEffect, useState } from "react";
import { useAssetPreload } from "../lib/useAssetPreload";

export const Loader = ({ onLoadComplete }) => {
  const { progress: assetProgress, status } = useAssetPreload();

  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 640;
  });

  /* Detect mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Skip loader on mobile */
  useEffect(() => {
    if (isMobile) {
      onLoadComplete && onLoadComplete();
    }
  }, [isMobile, onLoadComplete]);

  /* Sync asset progress */
  useEffect(() => {
    const target = Math.min(98, Math.max(0, Math.round(assetProgress || 0)));
    setProgress((p) => (target > p ? target : p));
  }, [assetProgress]);

  /* Loader timing + completion */
  useEffect(() => {
    const minDuration = 2000;
    let rafId;
    let finished = false;

    const minTimer = setTimeout(() => setMinElapsed(true), minDuration);

    const tick = () => {
      const assetsLoaded = status === "done";

      if (assetsLoaded && minElapsed && !finished) {
        finished = true;

        const start = performance.now();
        const startProgress = progress;
        const duration = 300;

        const animate = (t) => {
          const frac = Math.min(1, (t - start) / duration);
          setProgress(Math.round(startProgress + (100 - startProgress) * frac));

          if (frac < 1) {
            requestAnimationFrame(animate);
          } else {
            setIsComplete(true);
            setTimeout(() => {
              onLoadComplete && onLoadComplete();
            }, 1000);
          }
        };

        requestAnimationFrame(animate);
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(minTimer);
      cancelAnimationFrame(rafId);
    };
  }, [status, minElapsed, progress, onLoadComplete]);

  if (isMobile) return null;

  const textOpacity = progress / 100;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isComplete ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isComplete ? "none" : "auto" }}
      role="status"
      aria-live="polite"
    >
      {/* Integrated Noise Background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-[url('/Grain.webp')] bg-repeat"
          style={{ backgroundSize: '200px 200px' }} // Optional: controls the "tightness" of the grain
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] px-4 flex flex-col items-center">
        {/* Top text */}
        <p
          className="text-white text-xs tracking-[0.35em] font-semibold uppercase mb-4"
          style={{ opacity: textOpacity * 0.6 }}
        >
          Building Digital Solutions that Scale....
        </p>

        {/* Title */}
      <div className="w-full flex justify-center overflow-visible">
  <h1
    className="font-black italic mb-12 whitespace-nowrap text-center leading-none"
    style={{ 
      fontSize: "clamp(3.5rem, 9vw, 8.5rem)", // PERFECT responsive size
      opacity: textOpacity,
      filter: `blur(${(1 - textOpacity) * 8}px)`,
      background: "linear-gradient(to bottom, #ffffff 30%, #444444 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.04em",
      paddingRight: "0.25em", // ⭐ FIXES italic cutoff
      paddingLeft: "0.15em"   // ⭐ balances the slant
    }}
  >
    SHIVA&nbsp;YADAV
  </h1>
</div>
        {/* Progress Bar */}
        <div className="w-full max-w-[520px]">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #FD2F08, #ffffff)",
              }}
            />
          </div>

          <p className="mt-3 text-center text-white/60 text-sm">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};  