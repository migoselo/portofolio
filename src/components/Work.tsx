import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/constants";

export type Project = {
  title: string;
  label: string;
  desc: string;
  tech: string[];
  link: string | null;
  url: string;
  gradient: string;
  accent: string;
  internal?: boolean;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Shoos Store",
    label: "01 — E-commerce",
    desc: "A frontend e-commerce experience for a sneaker shop — product catalog, product detail pages, and clean browsing flow.",
    tech: ["React", "Tailwind CSS", "E-commerce"],
    link: "https://shoos-store-th5r.vercel.app/",
    url: "shoos-store.vercel.app",
    gradient: "from-blue-100 via-sky-50 to-indigo-100",
    accent: "from-blue-500 to-sky-500",
    image: "/shoos-store.png",
  },
  {
    title: "Stacka",
    label: "02 — Web App",
    desc: "A polished web app project demonstrating modern interface design and component architecture.",
    tech: ["React", "Web App"],
    link: "https://www.getstacka.com/",
    url: "web-stacka.vercel.app",
    gradient: "from-indigo-100 via-blue-50 to-cyan-100",
    accent: "from-indigo-500 to-blue-500",
    image: "/stacka.png",
  },
  {
    title: "Loka Monitor",
    label: "03 — Internal System",
    desc: "Internal web system to digitize manual letter and correspondence recording. Built during my internship.",
    tech: ["Web Development", "Internal Tool"],
    link: null,
    internal: true,
    url: "loka-monitor.internal",
    gradient: "from-sky-100 via-cyan-50 to-blue-100",
    accent: "from-sky-500 to-cyan-500",
    image: "/loka.png",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-16">
          Selected Work
        </motion.h2>
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-7 relative">
                <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`} />
                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)] transition-transform duration-700 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <div className="ml-3 flex-1 max-w-xs px-3 py-1 rounded-md bg-white/60 text-[11px] font-mono text-gray-400 truncate">
                      {p.url}
                    </div>
                  </div>
                  {p.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center p-12 overflow-hidden`}>
                      <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                      <div className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl`} />
                      <div className="relative text-center">
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-3">{p.label}</p>
                        <h4 className={`text-4xl md:text-6xl font-display font-bold tracking-tight bg-gradient-to-br ${p.accent} bg-clip-text text-transparent`}>
                          {p.title}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-4">{p.label}</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-lg mb-6 leading-relaxed text-balance">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
                {p.internal ? (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 bg-gray-100 px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Internal — not publicly deployed
                  </span>
                ) : (
                  <a
                    href={p.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-semibold hover:text-blue-600 transition-colors"
                  >
                    View Live Project <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
