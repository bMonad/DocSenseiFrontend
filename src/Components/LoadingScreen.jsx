import { useEffect, useState } from "react";
import { getHealthStatus } from "../api";
import "../styles/LoadingScreen.css";

const ANIMATION_DURATION = 3300;
const EXIT_DURATION = 450;
const REDUCED_MOTION_DURATION = 250;
const HEALTH_CHECK_TIMEOUT = 5000;

let healthCheckPromise;

function checkHealthOnce() {
  if (!healthCheckPromise) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      HEALTH_CHECK_TIMEOUT,
    );

    healthCheckPromise = getHealthStatus(controller.signal)
      .catch((error) => {
        if (error?.name === "AbortError") {
          console.warn("DocSensei health check timed out.");
          return;
        }
        console.error("DocSensei health check failed:", error);
      })
      .finally(() => window.clearTimeout(timeoutId));
  }

  return healthCheckPromise;
}

export default function LoadingScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    void checkHealthOnce();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let exitTimer;

    const animationTimer = window.setTimeout(() => {
      setIsExiting(true);
      exitTimer = window.setTimeout(
        onComplete,
        prefersReducedMotion ? 0 : EXIT_DURATION,
      );
    }, prefersReducedMotion ? REDUCED_MOTION_DURATION : ANIMATION_DURATION);

    return () => {
      window.clearTimeout(animationTimer);
      window.clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen${isExiting ? " loading-screen--exiting" : ""}`}
      role="status"
      aria-label="Loading DocSensei"
    >
      <svg
        className="loading-screen__wordmark"
        viewBox="0 0 1000 240"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="loading-screen-text-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="#da60ff" />
          </linearGradient>
        </defs>
        <text
          className="loading-screen__text"
          x="500"
          y="170"
          textAnchor="middle"
        >
          {"DocSensei.".split("").map((character, index) => (
            <tspan
              className={character === "." ? "loading-screen__period" : undefined}
              key={`${character}-${index}`}
            >
              {character}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
}
