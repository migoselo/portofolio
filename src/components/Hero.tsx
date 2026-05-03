import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer, CV_URL } from "../utils/constants";

export function Hero() {
  return (
    <section className="min-h-[92dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[55%] h-[55%] rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[160px]" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Frontend Developer
          </span>
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-balance"
        >
          Welcome to My Projects &amp; Experience
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-2xl text-gray-500 max-w-2xl text-balance leading-relaxed"
        >
          Applying knowledge through real projects and experience.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 mt-12">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-gray-700 transition-colors"
          >
            Resume
          </a>
          <a href="#work" className="text-gray-500 hover:text-gray-900 transition-colors font-medium flex items-center gap-2">
            View selected work <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors group"
      >
        <span className="tracking-[0.2em] uppercase"></span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-400/60 to-transparent group-hover:from-blue-500" />
      </motion.a>
    </section>
  );
}
