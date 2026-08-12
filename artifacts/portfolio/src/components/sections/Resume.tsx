import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6 items-center max-w-4xl mx-auto"
      >
        <div className="flex flex-col gap-1 text-center items-center">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Official CV Document
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Curriculum <span className="text-orange-500">Vitae</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-slate-300 text-sm sm:text-base max-w-lg mt-1">
            Looking for a formal copy of my qualifications? Download my latest resume below.
          </motion.p>
        </div>

        <motion.div 
          variants={fadeIn}
          className="w-full bg-[#0F1524] border border-slate-800/90 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-orange-500/50 transition-all duration-300"
        >
          {/* Decorative background ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30 shrink-0">
              <FileText size={28} />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">Earnest_Abraham_Resume.pdf</h3>
              <p className="text-slate-400 text-xs font-medium">Updated July 2026 • Verified PDF Document</p>
            </div>
          </div>

          <a 
            href="/Resume_Earnest.pdf"
            download="Earnest_Abraham_Resume.pdf"
            className="z-10 w-full md:w-auto"
          >
            <Button size="lg" className="btn-orange-gradient rounded-full gap-2 px-7 py-2.5 text-xs font-bold w-full md:w-auto">
              <Download size={16} /> Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

