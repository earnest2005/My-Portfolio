import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Trophy, Code2, Users, Star, ExternalLink } from "lucide-react";
import certAcm from "@assets/0_ACM_1783965306486.pdf";

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  { icon: <Code2 size={24} />, value: 2, suffix: "+", label: "Projects Built" },
  { icon: <Users size={24} />, value: 2, suffix: "", label: "Internships Completed" },
  { icon: <Star size={24} />, value: 10, suffix: "+", label: "Certifications Earned" },
  { icon: <Trophy size={24} />, value: 1, suffix: "", label: "Competition Award" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Numbers & <span className="text-gradient">Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="glass-card p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="glass-card rounded-3xl p-8 max-w-4xl mx-auto w-full">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-500" /> Notable Honors
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Prize Winner — Engineer's Day 2025 Idea Presentation</h4>
                <p className="text-muted-foreground text-sm mb-2">Awarded a Certificate of Achievement by ACM, ACM-W, and St. Xavier's Catholic College of Engineering for securing a prize in the idea presentation competition.</p>
                <a
                  href={certAcm}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-primary inline-flex items-center gap-1 hover:underline"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Hackathon Participant — HackFest'2026 & NeuraX'26</h4>
                <p className="text-muted-foreground text-sm">Participated in two intra-college technical hackathons organized by the Hackathon Cell at St. Xavier's Catholic College of Engineering.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Idea/Poster Presenter — Dream Kanyakumari 2026</h4>
                <p className="text-muted-foreground text-sm">Presented at an event conducted in collaboration with StartupTN and the Nocrul Islam Centre For Higher Education (NICHE).</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
