import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 bg-[#080C14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="text-xl font-display font-extrabold tracking-tight text-white z-50 flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center text-white text-xs font-extrabold shadow-md shadow-orange-600/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
            <span className="relative z-10">EA</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 opacity-60 blur-sm -z-10" />
          </div>
          <span>EARNEST</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-orange-500 after:to-amber-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="btn-orange-gradient rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5"
              onClick={() => scrollTo('#resume')}
            >
              <Download size={14} /> Download CV
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#080C14]/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl lg:hidden flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm font-medium text-slate-200 hover:text-white py-1.5 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="btn-orange-gradient w-full mt-2 rounded-full py-2 flex items-center justify-center gap-2"
              onClick={() => scrollTo('#resume')}
            >
              <Download size={15} /> Download CV
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


