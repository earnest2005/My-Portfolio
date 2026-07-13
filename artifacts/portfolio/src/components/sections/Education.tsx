import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "St. Xavier's Catholic College of Engineering",
    duration: "3rd Year · Ongoing",
    gpa: "AI & DS",
    icon: <GraduationCap size={24} className="text-primary" />,
    description: "Currently in the 3rd year of a B.Tech program specializing in Artificial Intelligence and Data Science, building a strong foundation in Java, Python, data analytics, and modern software development."
  }
];

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Academic <span className="text-gradient">Background</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center shrink-0 border border-border group-hover:scale-110 transition-transform duration-300">
                {edu.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <span className="px-3 py-1 bg-background rounded-full text-sm font-medium border border-border whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-lg font-medium text-muted-foreground">{edu.institution}</span>
                  <span className="px-2 py-1 rounded bg-accent/10 text-accent text-sm font-bold">
                    {edu.gpa}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
