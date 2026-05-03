import { useEffect, useRef } from "react";
import gsap from "gsap";

export type MagneticButtonProps = {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
};

export function MagneticButton({ children, strength = 0.4, radius = 140, className, onClick, type = "button", ...rest }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.8, ease: "power3.out" });
        gsap.to(inner, { x: dx * strength * 0.45, y: dy * strength * 0.45, duration: 0.8, ease: "power3.out" });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
        gsap.to(inner, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
      }
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
      gsap.to(inner, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(el);
      gsap.killTweensOf(inner);
    };
  }, [radius, strength]);

  return (
    <button ref={ref} type={type} onClick={onClick} aria-label={rest["aria-label"]} className={className}>
      <span ref={innerRef} className="relative inline-flex items-center justify-center w-full h-full">
        {children}
      </span>
    </button>
  );
}
