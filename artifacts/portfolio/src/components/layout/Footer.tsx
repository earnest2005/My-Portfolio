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
          <div className="text-2xl font-display font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-[10px]">
              AE
            </div>
            <span>Earnest<span className="text-muted-foreground">.dev</span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            Crafting intelligent solutions & elegant interfaces.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
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
