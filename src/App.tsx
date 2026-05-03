import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* 🔥 INI KUNCINYA */}
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}