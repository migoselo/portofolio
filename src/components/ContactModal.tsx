import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) { setSent(false); setSending(false); }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    const subject = `New message from ${form.name} via portfolio`;
    const body = [`Hi Feriska,`, ``, form.message, ``, `---`, `Name: ${form.name}`, `Email: ${form.email}`, form.phone ? `Phone: ${form.phone}` : null].filter(Boolean).join("\n");
    window.location.href = `mailto:fetriferiska@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { setSending(false); setSent(true); }, 600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="contact-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <button type="button" aria-label="Close form" onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white text-gray-900 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.5)]">
            <button type="button" onClick={onClose} aria-label="Close" className="absolute top-5 right-5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <div className="px-7 md:px-9 pt-9 pb-7 text-center">
              <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Get in touch</h3>
              <p className="mt-2 text-gray-500 text-sm md:text-base">Let's work together!</p>
            </div>
            {sent ? (
              <div className="px-7 md:px-9 pb-9 text-center">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="font-medium text-base mb-1">Email client opened</p>
                  <p className="text-sm text-gray-500">Tinggal klik kirim di aplikasi email kamu, pesannya sudah lengkap.</p>
                </div>
                <button type="button" onClick={onClose} className="mt-5 w-full px-4 py-3.5 rounded-2xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Tutup</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-7 md:px-9 pb-9 flex flex-col gap-3">
                <input type="text" required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white placeholder:text-gray-400 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                <input type="email" required placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white placeholder:text-gray-400 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                <input type="tel" placeholder="Phone number (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white placeholder:text-gray-400 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                <textarea required placeholder="Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white placeholder:text-gray-400 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all resize-y min-h-[120px]" />
                <button type="submit" disabled={sending} className="mt-2 w-full px-4 py-4 rounded-2xl bg-blue-600 text-white text-base font-medium hover:bg-blue-500 active:scale-[0.99] disabled:opacity-60 transition-all">
                  {sending ? "Opening email…" : "Submit"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
