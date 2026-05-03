
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/feriska_wlls/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/feriska-fetri-juni-hapsari-49b481404/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll biar gak bisa gerak pas menu kebuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="w-full px-6 md:px-10 pt-5 flex justify-between items-center">
          {/* LOGO: Ilang pas scroll biar bersih */}
          <AnimatePresence>
            {!scrolled && (
              <motion.a 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                href="#top" 
                className="pointer-events-auto flex items-center gap-2"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span className="font-bold text-[20px] text-black">Feriska.</span>
              </motion.a>
            )}
          </AnimatePresence>

          {/* DESKTOP NAV: Muncul cuma pas di paling atas */}
          {!scrolled && (
            <nav className="hidden md:flex items-center gap-8 ml-auto pointer-events-auto">
              {navLinks.slice(1).map((link) => (
                <a key={link.href} href={link.href} className="text-[18px] font-medium text-black hover:opacity-60 transition">
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* BURGER BUTTON: Muncul di mobile langsung, di desktop muncul pas scroll */}
          <div className="ml-auto pointer-events-auto">
            <button
              onClick={() => setOpen(true)}
              className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-black text-white ${
                scrolled 
                ? "w-16 h-16 shadow-2xl scale-100 opacity-100" 
                : "md:hidden w-12 h-12"
              }`}
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </motion.header>

    {/* FULL SCREEN OVERLAY - SEKARANG PASTI FULL LAYAR */}
{/* OVERLAY HITAM (Background transparan biar tetep kelihatan halaman belakang) */}
<AnimatePresence>
  {open && (
    <>
      {/* Background gelap transparan buat nutupin konten belakang dikit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)} // Klik luar buat tutup
        className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-[2px] pointer-events-auto"
      />

      {/* DRAWER MENU - Lebarnya diatur di sini */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        // max-w-[450px] atau w-[50vw] buat atur lebarnya biar gak full
        className="fixed top-0 right-0 z-[100] h-screen w-full max-w-[500px] bg-[#1c1d20] text-white flex flex-col justify-between p-8 md:p-12 shadow-2xl pointer-events-auto"
      >
        {/* Header Menu */}
        <div className="flex justify-between items-start border-b border-white/10 pb-6">
          <p className="text-[12px] uppercase tracking-widest text-white/40">Navigation</p>
          <button 
            onClick={() => setOpen(false)}
            className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Menu Links - Font disesuaikan biar gak kegedean di box kecil */}
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              onClick={() => setOpen(false)}
              className="group flex items-center text-[40px] md:text-[50px] font-light leading-tight hover:translate-x-2 transition-transform duration-300"
            >
              <span className="opacity-0 group-hover:opacity-100 -ml-6 mr-4 transition-all">•</span>
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Socials */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-[12px] uppercase tracking-widest text-white/40 mb-4">Socials</p>
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="text-xs hover:text-blue-500 transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
}