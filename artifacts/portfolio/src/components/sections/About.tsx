import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { BookOpen, Target, Heart, Zap, MessageSquare, Globe } from "lucide-react";

const aboutItems = [
  {
    icon: <BookOpen className="text-primary w-6 h-6" />,
    title: "Education",
    desc: "3rd year B.Tech student in Artificial Intelligence & Data Science at St. Xavier's Catholic College of Engineering."
  },
  {
    icon: <Target className="text-secondary w-6 h-6" />,
    title: "Objective",
    desc: "To leverage my dual expertise in software development and data analytics to build scalable, intelligent solutions that make a difference."
  },
  {
    icon: <Heart className="text-accent w-6 h-6" />,
    title: "Passion",
    desc: "Passionate about learning, building, and creating solutions that make a difference — with a strong foundation in Java, React, Python, and Data Analytics."
  },
  {
    icon: <Zap className="text-yellow-500 w-6 h-6" />,
    title: "Strengths",
    desc: "Rapid learner, strong analytical problem solver, and capable of bridging backend logic with frontend presentation."
  },
  {
    icon: <MessageSquare className="text-green-500 w-6 h-6" />,
    title: "Soft Skills",
    desc: "Effective communicator and collaborative team player, with strengths in problem solving, adaptability, and time management."
  },
  {
    icon: <Globe className="text-blue-400 w-6 h-6" />,
    title: "Languages",
    desc: "Fluent in English and Tamil. Currently learning German (Level A1) through a certified course."
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
            Aspiring AI Engineer and Software Developer with a strong foundation in Java, React, Python, and Data Analytics. Passionate about learning, building, and creating solutions that make a difference.
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
