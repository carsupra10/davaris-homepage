import { useEffect, useRef, useState } from "react";

/** 0 → 1 progress as the element scrolls through the viewport (top hits bottom → bottom hits top-ish). */
export function useScrollProgress<T extends HTMLElement>(offset = 0) {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh * offset + vh;
      setP(Math.min(1, Math.max(0, (vh - r.top) / total)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [offset]);
  return [ref, p] as const;
}

/** Progress through a tall sticky container: 0 at its top, 1 when its bottom reaches viewport bottom. */
export function useStickyProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dist = r.height - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / (dist || 1))));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return [ref, p] as const;
}

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
