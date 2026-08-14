import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Brain, Code2 } from "lucide-react";
import profileHero from "@/assets/earnest-hero.png";

const heroStats = [
  { label: "Internships", value: "2" },
  { label: "Projects", value: "3+" },
  { label: "Certifications", value: "10" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90dvh] flex items-center justify-center overflow-x-clip overflow-y-visible pt-20 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-600/12 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Column Text Content */}
          <motion.div 
            className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-orange-400 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-2 block">
              HELLO, I'M
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 text-white leading-tight">
              Earnest <span className="text-gradient-orange">Abraham</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-amber-400 font-bold mb-4">
              AI & Data Science Undergraduate
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-6 leading-relaxed font-normal">
              I'm an Artificial Intelligence & Data Science undergraduate passionate about software development, data analytics, and building practical technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-6">
              <Button 
                size="lg" 
                className="btn-orange-gradient rounded-full px-7 py-3 text-sm font-semibold flex items-center gap-2" 
                onClick={() => scrollTo('#projects')}
              >
                View My Work
                <ArrowRight size={17} />
              </Button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 mb-8">
              <a 
                href="https://github.com/earnest2005" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-[#121827] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a 
                href="https://www.linkedin.com/in/earnest-abraham-622b25335" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-[#121827] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a 
                href="mailto:earnestabrah@gmail.com" 
                className="w-9 h-9 rounded-full bg-[#121827] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>

            {/* Hero Quick Statistics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 w-full max-w-md mb-2 sm:mb-0">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                  <span className="text-slate-400 text-xs font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column Profile Image Presentation (Sleek Tech Halo & Clean Presentation) */}
          <motion.div 
            className="w-full lg:w-[48%] relative flex flex-col items-center justify-center px-2 sm:px-4 pt-6 sm:pt-2 pb-2 mx-auto text-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 1. AMBIENT RADIAL GLOW (-z-20): Soft ambient orange depth lighting behind figure */}
            <div className="absolute w-[240px] h-[280px] xs:w-[280px] xs:h-[320px] sm:w-[400px] sm:h-[440px] max-w-full rounded-full bg-gradient-to-tr from-orange-600/25 via-amber-500/15 to-transparent blur-3xl pointer-events-none -z-20 inset-0 m-auto" />

            {/* 2. CONCENTRIC TECH ORBIT HALO RING (-z-10): Rotating background orbital frame */}
            <motion.svg 
              className="absolute w-[270px] h-[270px] xs:w-[320px] xs:h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] max-w-full pointer-events-none -z-10 inset-0 m-auto text-orange-500/35 drop-shadow-[0_0_12px_rgba(249,115,22,0.2)]" 
              viewBox="0 0 400 400" 
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {/* Outer Dashed Orbit Circle */}
              <circle cx="200" cy="200" r="175" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
              {/* Inner Glowing Accent Circle */}
              <circle cx="200" cy="200" r="148" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.45" />
              
              {/* Orbit Particle Nodes */}
              <circle cx="200" cy="25" r="4" fill="#F97316" className="animate-pulse" />
              <circle cx="375" cy="200" r="3.5" fill="#F97316" className="animate-pulse" />
              <circle cx="200" cy="375" r="3.5" fill="#FBBF24" />
              <circle cx="25" cy="200" r="4" fill="#FBBF24" className="animate-ping" />
            </motion.svg>

            {/* 3. ISOLATED FOREGROUND SUBJECT CONTAINER (z-20) */}
            <div className="relative z-20 isolate w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[400px] mx-auto flex items-center justify-center">
              
              {/* 3. SUBJECT IMAGE (z-20): Real Alpha PNG Cutout + Soft Drop Shadows + Bottom Fade */}
              <motion.img 
                src={profileHero} 
                alt="Earnest Abraham" 
                className="relative z-20 w-full h-auto max-h-[350px] xs:max-h-[400px] sm:max-h-[500px] object-contain mx-auto filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] drop-shadow-[0_10px_20px_rgba(249,115,22,0.25)] transition-transform duration-500 ease-out hover:scale-[1.01]"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 99%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 99%)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* FLOATING BADGE 1 (z-30): Top-Left (AI & Data Science) */}
              <motion.div 
                className="absolute top-2 -left-1 xs:-left-3 sm:top-10 sm:-left-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0B0F19]/90 border border-orange-500/40 text-white text-[11px] sm:text-xs font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5 sm:gap-2 z-30 pointer-events-auto whitespace-nowrap"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                  <Brain size={14} />
                </div>
                <span>AI & Data Science</span>
              </motion.div>

              {/* FLOATING BADGE 2 (z-30): Bottom-Right (Software & Web Dev) */}
              <motion.div 
                className="absolute bottom-3 -right-1 xs:-right-3 sm:bottom-8 sm:-right-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0B0F19]/90 border border-orange-500/40 text-white text-[11px] sm:text-xs font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5 sm:gap-2 z-30 pointer-events-auto whitespace-nowrap"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                  <Code2 size={14} />
                </div>
                <span>Software & Web Dev</span>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}



