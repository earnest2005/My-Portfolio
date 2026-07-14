import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-12 bg-background border-t border-border mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-display font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/30 ring-1 ring-white/20">
              <span className="relative z-10">EA</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent opacity-60 blur-md -z-10" />
            </div>
            <span className="text-gradient">Earnest<span className="text-foreground/70">.dev</span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            Crafting intelligent solutions & elegant interfaces.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/earnest2005" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/earnest-abraham-622b25335" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:earnestabrah@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <Button variant="glass" size="icon" onClick={scrollToTop} className="rounded-full w-10 h-10">
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
