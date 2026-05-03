import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/constants";

const timeline = [
  { role: "Web Developer Intern", company: "Loka Monitor Spektrum Frekuensi Tanjung Selor", date: "Jan 2026 – Feb 2026", desc: "Built an internal web system to automate manual letter and correspondence recording." },
  { role: "Frontend Developer", company: "Website E-Commerce", date: "2026", desc: "Built product catalog, product detail pages, and navigation for an e-commerce site." },
  { role: "UI/UX Designer & Frontend Developer", company: "Bootcamp Mini Class E-code x HIMIT", date: "2025", desc: "Designed UI/UX and built a responsive landing page with HTML, CSS, Tailwind." },
];

const education = [
  { school: "Politeknik Elektronika Negeri Surabaya", degree: "D3 Teknik Informatika", date: "2024 – present" },
  { school: "SMA Negeri 1 Tanjung Selor", degree: "MIPA", date: "2021 – 2024" },
];

const capabilities = [
  "Web Design", "Wireframe Creation", "Frontend Coding", "HTML & CSS", "Tailwind CSS", "React", "UI/UX Design", "Problem-Solving", "Project Management"
];

export function Experience() {
  return (
<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold mb-12">Experience</motion.h2>
          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative pl-6 border-l border-gray-200">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5" />
                <span className="text-sm font-medium text-blue-600 mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                <h4 className="text-gray-500 font-medium mb-3">{item.company}</h4>
                <p className="text-gray-500 text-balance">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold mb-12">Education</motion.h2>
          <div className="flex flex-col gap-12 mb-16">
            {education.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative pl-6 border-l border-gray-200">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5" />
                <span className="text-sm font-medium text-blue-600 mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <h4 className="text-gray-500 font-medium">{item.school}</h4>
              </motion.div>
            ))}
          </div>

          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold mb-8">Capabilities</motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            {capabilities.map((s, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
