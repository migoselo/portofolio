import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLocalTime } from "../utils/hooks";
import { MagneticButton } from "./MagneticButton";
import { ContactModal } from "./ContactModal";

export function Footer() {
  const year = new Date().getFullYear();
  const time = useLocalTime();
  const [contactOpen, setContactOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  const headlineY = useTransform(smooth, [0, 0.55], ["260px", "0px"]);
  const headlineOpacity = useTransform(smooth, [0, 0.25, 0.55], [0, 0.6, 1]);

  const ctaScale = useTransform(smooth, [0, 0.6], [0.2, 1]);
  const ctaOpacity = useTransform(smooth, [0, 0.5], [0, 1]);
  const ctaRotate = useTransform(smooth, [0, 0.6], [-45, 0]);

  const pillsY = useTransform(smooth, [0.1, 0.65], ["140px", "0px"]);
  const pillsOpacity = useTransform(smooth, [0.1, 0.6], [0, 1]);

  const bottomY = useTransform(smooth, [0.2, 0.75], ["100px", "0px"]);
  const bottomOpacity = useTransform(smooth, [0.2, 0.7], [0, 1]);

  const curveDepth = useTransform(smooth, [0, 0.55], [240, 60]);
  const curveD = useTransform(
    curveDepth,
    (d) => `M 0 0 L 100 0 L 100 25 Q 50 ${d / 10}, 0 25 Z`
  );

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative w-full min-h-screen bg-gray-950 text-white overflow-hidden flex flex-col"
    >
      {/* SVG Curve FIX */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-[160px] md:h-[220px] pointer-events-none z-10"
      >
        <motion.path d={curveD} fill="rgb(3, 7, 18)" />
      </svg>

      {/* Background effects FIX */}
      <div className="absolute inset-0 dot-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/3 right-[-10rem] w-[36rem] h-[36rem] rounded-full bg-blue-600/25 blur-[160px]" />
      <div className="absolute bottom-0 left-[-10rem] w-[28rem] h-[28rem] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Container FIX */}
<div className="relative flex-1 flex flex-col justify-between w-full px-6 md:px-10 pt-32 md:pt-40 pb-10">
  
  {/* BAGIAN ATAS: Tetap di Tengah (Max-width) */}
  <div className="w-full max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* LEFT (Headline & Pills) */}
      <div className="lg:col-span-8">
        <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="flex items-start gap-5">
           <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-semibold">F</div>
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">Let's work <br /> together</h2>
        </motion.div>

        <motion.div style={{ y: pillsY, opacity: pillsOpacity }} className="mt-10 flex flex-wrap gap-3">
          <a href="mailto:fetriferiska@gmail.com" className="px-5 py-3 rounded-full border border-white/20 hover:border-white/60 items-center flex gap-2">
            <Mail className="w-4 h-4" /> fetriferiska@gmail.com
          </a>
          <a href="tel:+6285753742148" className="px-5 py-3 rounded-full border border-white/20 hover:border-white/60 items-center flex gap-2">
            <Phone className="w-4 h-4" /> +62 857-5374-2148
          </a>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div style={{ scale: ctaScale, opacity: ctaOpacity, rotate: ctaRotate }} className="lg:col-span-4 flex justify-start lg:justify-end">
        <MagneticButton onClick={() => setContactOpen(true)} className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-blue-500 flex items-center justify-center">
          <div className="text-center"><ArrowUpRight className="mx-auto mb-1" /> Get in touch</div>
        </MagneticButton>
      </motion.div>
    </div>
  </div>

  {/* BAGIAN BAWAH: Mentok Kanan Kiri (Full Width) */}
  <div className="w-full mt-auto">
    <motion.div style={{ opacity: bottomOpacity }} className="flex justify-end mb-4">
      <ArrowDownLeft className="w-6 h-6 text-white/40" />
    </motion.div>

    {/* Info Grid */}
    <motion.div
      style={{ y: bottomY, opacity: bottomOpacity }}
      className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
    >
      <div>
        <p className="text-white/40 text-xs">Version</p>
        <p>{year} © Edition</p>
      </div>
      <div>
        <p className="text-white/40 text-xs">Local Time</p>
        <p>{time}</p>
      </div>
      <div>
        <p className="text-white/40 text-xs">Location</p>
        <p className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Surabaya, ID</p>
      </div>
      <div className="md:text-right">
        <p className="text-white/40 text-xs">Socials</p>
        <div className="flex md:justify-end gap-3">
          <a href="https://github.com/migoselo" className="hover:text-blue-400 transition-colors"><Github className="w-4 h-4 inline mr-1" /> GitHub</a>
          <a href="mailto:fetriferiska@gmail.com" className="hover:text-blue-400 transition-colors"><Mail className="w-4 h-4 inline mr-1" /> Email</a>
        </div>
      </div>
    </motion.div>

    {/* Copyright */}
    <motion.div style={{ opacity: bottomOpacity }} className="mt-6 text-xs text-white/40 flex justify-between">
      <p>© {year} Feriska Fetri Juni Hapsari</p>
      <p>Designed & built with care</p>
    </motion.div>
  </div>
</div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}