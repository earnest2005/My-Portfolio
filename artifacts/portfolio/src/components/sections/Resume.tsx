import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 items-center max-w-4xl mx-auto"
      >
        <div className="flex flex-col gap-4 text-center">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Curriculum <span className="text-gradient">Vitae</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            Prefer a traditional format? Grab a copy of my resume.
          </motion.p>
        </div>

        <motion.div 
          variants={fadeIn}
          className="w-full glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shrink-0">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Earnest_Abraham_Resume.pdf</h3>
              <p className="text-muted-foreground text-sm">Updated August 2023 • 124 KB • 1 Page</p>
            </div>
          </div>

          <Button size="lg" className="rounded-full gap-2 px-8 z-10 w-full md:w-auto text-base">
            <Download size={20} /> Download PDF
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
