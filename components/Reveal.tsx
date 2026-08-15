"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  // `ready` only flips true once this effect actually runs in the browser,
  // i.e. once we know JS is alive. Only then do we allow the "reveal"
  // (opacity: 0) class to be applied at all — so if hydration/JS ever
  // fails, content simply stays at its default visible state instead of
  // being stuck invisible.
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No IntersectionObserver support (very old browsers) → just show it.
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(t);
    }

    // Defer to a microtask so we're not calling setState synchronously
    // within the effect body itself.
    const readyTask = window.setTimeout(() => setReady(true), 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Safety net: in case the observer never fires for some reason
    // (e.g. element has 0 size at mount time), don't leave it hidden
    // forever.
    const fallback = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(readyTask);
      window.clearTimeout(fallback);
    };
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`${ready && !visible ? "reveal" : ""} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
