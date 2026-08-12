import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Trophy, Code2, Users, Star, ExternalLink } from "lucide-react";
import certAcm from "@assets/0_ACM_1783965306486.pdf";

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { icon: <Code2 size={22} className="text-orange-400" />, value: 3, suffix: "+", label: "Projects Built" },
  { icon: <Users size={22} className="text-amber-400" />, value: 2, suffix: "", label: "Internships Completed" },
  { icon: <Star size={22} className="text-orange-400" />, value: 10, suffix: "+", label: "Certifications Earned" },
  { icon: <Trophy size={22} className="text-amber-400" />, value: 1, suffix: "", label: "Competition Award" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-center text-center gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Milestones & Recognition
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="text-orange-500">Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0F1524] border border-slate-800/90 p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-orange-500/50 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#141B2D] border border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto w-full shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-orange-500/50 transition-all duration-300">
          <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <Trophy className="text-amber-400" size={20} /> Notable Honors
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-100 text-sm sm:text-base">Prize Winner — Engineer's Day 2025 Idea Presentation</h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-1.5 leading-relaxed">Awarded a Certificate of Achievement by ACM, ACM-W, and St. Xavier's Catholic College of Engineering for securing a prize in the idea presentation competition.</p>
                <a
                  href={certAcm}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-orange-400 inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  Verify Certificate <ExternalLink size={12} />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-100 text-sm sm:text-base">Hackathon Participant — HackFest'2026 & NeuraX'26</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Participated in two intra-college technical hackathons organized by the Hackathon Cell at St. Xavier's Catholic College of Engineering.</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-100 text-sm sm:text-base">Idea/Poster Presenter — Dream Kanyakumari 2026</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Presented at an event conducted in collaboration with StartupTN and the Nocrul Islam Centre For Higher Education (NICHE).</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

