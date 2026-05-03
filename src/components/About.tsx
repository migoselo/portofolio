import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/constants";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-12">
          A bit about me
        </motion.h2>
        <motion.div variants={fadeInUp} className="text-lg md:text-xl text-gray-500 space-y-6 leading-relaxed">
          <p>
            I'm a web developer with a genuine passion for building and shaping digital experiences.
            Right now, I'm in my fourth semester studying Informatics Engineering, continuously
            pushing my technical skills, analytical thinking, and creativity.
          </p>
          <p>
            Whether it's writing clean React code or designing thoughtful user interfaces, I love
            the process of turning ideas into functional, beautiful realities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
