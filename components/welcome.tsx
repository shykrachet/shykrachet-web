"use client";

import { useEffect, useState, type ReactNode } from "react";

const greeting = "Welcome";
let hasPlayedWelcome = false;

export default function Welcome({ children }: { children: ReactNode }) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "leaving" | "done">("idle");
  const active = phase === "typing" || phase === "leaving";

  useEffect(() => {
    if (hasPlayedWelcome) return;

    hasPlayedWelcome = true;
    const introStart = window.setTimeout(() => {
      setPhase("typing");
    }, 0);

    return () => {
      window.clearTimeout(introStart);
    };
  }, []);

  useEffect(() => {
    if (phase !== "typing" && phase !== "leaving") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "leaving") {
      timer = setTimeout(() => setPhase("done"), reducedMotion ? 0 : 500);
    } else {
      let length = 0;
      const type = () => {
        length = reducedMotion ? greeting.length : length + 1;
        setText(greeting.slice(0, length));
        timer = length < greeting.length
          ? setTimeout(type, 130)
          : setTimeout(() => setPhase("leaving"), 700);
      };
      timer = setTimeout(type, reducedMotion ? 0 : 300);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const skip = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPhase("leaving");
    };
    const fallback = window.setTimeout(() => {
      setPhase("done");
    }, 4000);

    window.addEventListener("keydown", skip);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(fallback);
      window.removeEventListener("keydown", skip);
    };
  }, [active]);

  return (
    <>
      {active && (
        <div className={`welcome-screen${phase === "leaving" ? " welcome-screen-leaving" : ""}`}>
          <p className="welcome-greeting">
            <span className="sr-only">{greeting}</span>
            <span aria-hidden="true">
              {text}
              <span className="welcome-cursor" />
            </span>
          </p>
        </div>
      )}
      <div inert={active} className={active ? "welcome-content-hidden" : "welcome-content-revealed"}>
        {children}
      </div>
    </>
  );
}
