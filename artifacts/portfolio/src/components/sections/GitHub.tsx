import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Github, GitFork, Star, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

const repos = [
  {
    name: "react-ui-components",
    description: "A collection of highly reusable, accessible React components built with Tailwind CSS.",
    language: "TypeScript",
    color: "bg-orange-500",
    stars: 128,
    forks: 34
  },
  {
    name: "ml-trading-bot",
    description: "Algorithmic trading bot using reinforcement learning and real-time market data.",
    language: "Python",
    color: "bg-amber-500",
    stars: 85,
    forks: 12
  },
  {
    name: "java-enterprise-api",
    description: "Boilerplate for scalable Java Spring Boot REST APIs with JWT authentication.",
    language: "Java",
    color: "bg-orange-400",
    stars: 64,
    forks: 21
  }
];

export default function GitHubSection() {
  return (
    <section id="github" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-start gap-1">
            <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
              Open Source Contributions
            </span>
            <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Github size={36} className="text-orange-500" /> Open <span className="text-orange-500">Source</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeIn}>
            <a href="https://github.com/earnest2005" target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full gap-2 border-slate-700 hover:border-orange-500/60 hover:bg-orange-500/10 text-slate-200 hover:text-white transition-all text-xs font-bold px-5 py-2">
                <Github size={16} /> Follow on GitHub
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">
          {/* Contribution Graph Card */}
          <motion.div variants={fadeIn} className="bg-[#0F1524] border border-slate-800/90 p-6 rounded-2xl w-full overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-orange-500/50 transition-all duration-300">
            <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" /> 1,245 contributions in the last year
            </h3>
            <div className="flex gap-1 overflow-x-auto pb-3 custom-scrollbar">
              {Array.from({ length: 52 }).map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const intensity = Math.random();
                    let bgColor = "bg-[#141B2D]";
                    if (intensity > 0.8) bgColor = "bg-orange-500";
                    else if (intensity > 0.6) bgColor = "bg-orange-500/70";
                    else if (intensity > 0.4) bgColor = "bg-orange-500/40";
                    else if (intensity > 0.2) bgColor = "bg-orange-500/20";
                    
                    return (
                      <div 
                        key={rowIndex} 
                        className={`w-3 h-3 rounded-sm ${bgColor} hover:ring-2 hover:ring-orange-400 transition-all cursor-pointer`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-slate-400 font-medium mt-3">
              <span>Less</span>
              <div className="w-3 h-3 rounded-sm bg-[#141B2D]" />
              <div className="w-3 h-3 rounded-sm bg-orange-500/20" />
              <div className="w-3 h-3 rounded-sm bg-orange-500/40" />
              <div className="w-3 h-3 rounded-sm bg-orange-500/70" />
              <div className="w-3 h-3 rounded-sm bg-orange-500" />
              <span>More</span>
            </div>
          </motion.div>

          {/* Repo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {repos.map((repo, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-[#0F1524] border border-slate-800/90 p-5 rounded-2xl flex flex-col hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <BookIcon className="text-slate-400 w-4 h-4" />
                  <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors text-sm truncate">{repo.name}</h4>
                </div>
                <p className="text-xs text-slate-400 mb-4 flex-1 line-clamp-2 leading-relaxed">{repo.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-3 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <Circle size={9} className={`${repo.color} fill-current`} />
                    <span className="text-slate-300">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-slate-300"><Star size={13} className="text-amber-400" /> {repo.stars}</div>
                    <div className="flex items-center gap-1 text-slate-300"><GitFork size={13} className="text-orange-400" /> {repo.forks}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BookIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
    </svg>
  );
}

