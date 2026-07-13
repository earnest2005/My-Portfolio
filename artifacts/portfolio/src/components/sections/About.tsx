import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { BookOpen, Target, Heart, Zap, MessageSquare, Globe } from "lucide-react";

const aboutItems = [
  {
    icon: <BookOpen className="text-primary w-6 h-6" />,
    title: "Education",
    desc: "B.Tech in Artificial Intelligence & Data Science, maintaining a strong 3.8 GPA while actively participating in tech clubs."
  },
  {
    icon: <Target className="text-secondary w-6 h-6" />,
    title: "Objective",
    desc: "To leverage my dual expertise in software engineering and data analytics to build scalable, intelligent systems."
  },
  {
    icon: <Heart className="text-accent w-6 h-6" />,
    title: "Passion",
    desc: "Obsessed with clean code, elegant user interfaces, and extracting meaningful narratives from complex datasets."
  },
  {
    icon: <Zap className="text-yellow-500 w-6 h-6" />,
    title: "Strengths",
    desc: "Rapid learner, strong analytical problem solver, and capable of bridging backend logic with frontend presentation."
  },
  {
    icon: <MessageSquare className="text-green-500 w-6 h-6" />,
    title: "Soft Skills",
    desc: "Effective communicator, collaborative team player, and adept at translating technical concepts for non-technical stakeholders."
  },
  {
    icon: <Globe className="text-blue-400 w-6 h-6" />,
    title: "Languages",
    desc: "Fluent in English and Spanish. Currently exploring the language of mathematics in machine learning algorithms."
  }
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            I am a student developer passionate about the intersection of software engineering and artificial intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
