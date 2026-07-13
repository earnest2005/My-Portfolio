import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Github, GitFork, Star, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

const repos = [
  {
    name: "react-ui-components",
    description: "A collection of highly reusable, accessible React components built with Tailwind CSS.",
    language: "TypeScript",
    color: "bg-blue-500",
    stars: 128,
    forks: 34
  },
  {
    name: "ml-trading-bot",
    description: "Algorithmic trading bot using reinforcement learning and real-time market data.",
    language: "Python",
    color: "bg-yellow-500",
    stars: 85,
    forks: 12
  },
  {
    name: "java-enterprise-api",
    description: "Boilerplate for scalable Java Spring Boot REST APIs with JWT authentication.",
    language: "Java",
    color: "bg-orange-500",
    stars: 64,
    forks: 21
  }
];

export default function GitHubSection() {
  return (
    <section id="github" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto w-full">
          <div className="flex flex-col gap-2">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold flex items-center gap-4">
              <Github size={40} className="text-foreground" /> Open <span className="text-gradient">Source</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Active contributor to the developer community.
            </motion.p>
          </div>
          <motion.div variants={fadeIn}>
            <Button variant="outline" className="rounded-full gap-2">
              <Github size={18} /> Follow on GitHub
            </Button>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col gap-8">
          {/* Contribution Graph Placeholder */}
          <motion.div variants={fadeIn} className="glass-card p-6 md:p-8 rounded-3xl w-full overflow-hidden">
            <h3 className="text-lg font-bold mb-6">1,245 contributions in the last year</h3>
            <div className="flex gap-1 overflow-x-auto pb-4 custom-scrollbar">
              {Array.from({ length: 52 }).map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const intensity = Math.random();
                    let bgColor = "bg-muted";
                    if (intensity > 0.8) bgColor = "bg-primary";
                    else if (intensity > 0.6) bgColor = "bg-primary/70";
                    else if (intensity > 0.4) bgColor = "bg-primary/40";
                    else if (intensity > 0.2) bgColor = "bg-primary/20";
                    
                    return (
                      <div 
                        key={rowIndex} 
                        className={`w-3 h-3 rounded-sm ${bgColor} hover:ring-2 hover:ring-foreground transition-all cursor-pointer`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mt-4">
              <span>Less</span>
              <div className="w-3 h-3 rounded-sm bg-muted" />
              <div className="w-3 h-3 rounded-sm bg-primary/20" />
              <div className="w-3 h-3 rounded-sm bg-primary/40" />
              <div className="w-3 h-3 rounded-sm bg-primary/70" />
              <div className="w-3 h-3 rounded-sm bg-primary" />
              <span>More</span>
            </div>
          </motion.div>

          {/* Repo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <motion.div key={idx} variants={fadeIn} className="glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <BookIcon className="text-muted-foreground w-4 h-4" />
                  <h4 className="font-bold text-primary group-hover:underline truncate">{repo.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{repo.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-1.5">
                    <Circle size={10} className={`${repo.color} fill-current`} />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1"><Star size={14} /> {repo.stars}</div>
                    <div className="flex items-center gap-1"><GitFork size={14} /> {repo.forks}</div>
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
