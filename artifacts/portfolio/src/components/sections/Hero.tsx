import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import profileImg from "@assets/0_ChatGPT_Image_Jul_13,_2026,_09_28_58_PM_1783964089174.png";

const roles = [
  "AI & Data Science Student",
  "Java Developer",
  "React Developer",
  "Java & React Developer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 dark:opacity-30 mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-50 dark:opacity-30 mix-blend-screen" />
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-sm font-medium text-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for Fall Internships
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
              Hi, I'm <span className="text-gradient">Earnest Abraham</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl mt-4 block min-h-[44px] sm:min-h-[56px] lg:min-h-[64px] leading-tight text-muted-foreground font-semibold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Bridging the gap between intelligent data systems and elegant user interfaces. Building the future of data-driven applications.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Button size="lg" className="rounded-full px-8 gap-2 group" onClick={() => scrollTo('#projects')}>
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="rounded-full px-8 gap-2" onClick={() => scrollTo('#resume')}>
                <Download size={18} />
                Resume
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => scrollTo('#contact')}>
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com/earnest2005" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/earnest-abraham-622b25335" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:earnestabrah@gmail.com" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 relative w-full max-w-md lg:max-w-lg aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-20 blur-3xl animate-pulse" />
            <motion.div 
              className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-2"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-muted">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.1] bg-[size:16px_16px]" />
                <img 
                  src={profileImg} 
                  alt="Earnest Abraham E A" 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              className="absolute -left-8 top-1/4 glass px-4 py-2 rounded-2xl flex items-center gap-3 shadow-xl z-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">
                J
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Java</p>
                <p className="text-sm font-bold">Developer</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -right-8 bottom-1/3 glass px-4 py-2 rounded-2xl flex items-center gap-3 shadow-xl z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Data</p>
                <p className="text-sm font-bold">Analytics</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
