import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-8 bg-[#060911] border-t border-slate-800/80 mt-12 text-slate-400">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Monogram Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center text-white text-xs font-extrabold shadow-md shadow-orange-500/20">
            EA
          </div>
          <span className="text-white font-bold text-base tracking-tight">
            Earnest Abraham
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/earnest2005" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-orange-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/earnest-abraham-622b25335" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-orange-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:earnestabrah@gmail.com" 
            className="text-slate-400 hover:text-orange-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4 text-xs">
          <span>© {new Date().getFullYear()} Earnest Abraham. All rights reserved.</span>
          <button 
            onClick={scrollToTop} 
            className="w-8 h-8 rounded-full bg-[#141B2D] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500/50 hover:bg-[#1C253C] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}


