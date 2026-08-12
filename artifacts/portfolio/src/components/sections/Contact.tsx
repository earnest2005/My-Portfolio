import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Send, MapPin, Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("Contact form is not configured.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio message from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Get In Touch
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-orange-500">Connect</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Contact Info */}
          <motion.div variants={fadeIn} className="lg:col-span-5 flex flex-col justify-between gap-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:earnestabrah@gmail.com" className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0F1524] border border-slate-800/90 group hover:border-orange-500/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#141B2D] border border-slate-700/60 flex items-center justify-center text-orange-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-slate-400 text-xs font-medium block">Email</span>
                  <span className="text-white text-sm font-semibold group-hover:text-orange-400 transition-colors">
                    earnestabrah@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0F1524] border border-slate-800/90">
                <div className="w-10 h-10 rounded-lg bg-[#141B2D] border border-slate-700/60 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-slate-400 text-xs font-medium block">Location</span>
                  <span className="text-white text-sm font-semibold">
                    India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/earnest2005" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-[#141B2D] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/50 hover:bg-[#1C253C] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/earnest-abraham-622b25335" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-[#141B2D] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/50 hover:bg-[#1C253C] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column Form Card */}
          <motion.div variants={fadeIn} className="lg:col-span-7">
            <div className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-10 bg-[#080C14]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300 text-sm max-w-sm">Thank you for reaching out. I will get back to you shortly.</p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-0">
                {error ? (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-300">
                    {error}
                  </div>
                ) : null}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full bg-[#141B2D] border border-slate-700/60 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500/80 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full bg-[#141B2D] border border-slate-700/60 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500/80 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we work together?"
                    className="w-full bg-[#141B2D] border border-slate-700/60 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500/80 transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="btn-orange-gradient rounded-xl px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}


