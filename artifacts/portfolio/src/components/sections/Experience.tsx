import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Briefcase, Calendar, Code, GraduationCap } from "lucide-react";

const timeline = [
  {
    id: 1,
    type: "internship",
    title: "Data Analytics Intern",
    company: "TechInsights Inc.",
    date: "Summer 2023",
    icon: <Briefcase size={20} />,
    description: "Developed automated data pipelines using Python and Pandas. Created interactive Power BI dashboards that improved executive decision-making speed by 30%.",
    tags: ["Python", "Power BI", "SQL"]
  },
  {
    id: 2,
    type: "project",
    title: "Lead Frontend Developer",
    company: "University Software Lab",
    date: "Jan 2023 - May 2023",
    icon: <Code size={20} />,
    description: "Led a team of 4 students to build a campus event management system using React and Firebase. Implemented complex state management and real-time updates.",
    tags: ["React", "Firebase", "Team Leadership"]
  },
  {
    id: 3,
    type: "training",
    title: "Advanced Java Programming & OOP",
    company: "CodeAcademy Bootcamps",
    date: "Fall 2022",
    icon: <GraduationCap size={20} />,
    description: "Intensive 12-week training program focusing on enterprise Java development, design patterns, exception handling, and multithreading.",
    tags: ["Java", "OOP", "Design Patterns"]
  },
  {
    id: 4,
    type: "workshop",
    title: "Machine Learning Foundations",
    company: "Google Developer Student Clubs",
    date: "Oct 2022",
    icon: <GraduationCap size={20} />,
    description: "Participated in hands-on workshops building predictive models using Scikit-Learn and exploring neural network basics.",
    tags: ["Machine Learning", "Scikit-Learn"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Journey & <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            A timeline of my professional growth, practical training, and impactful roles.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto w-full">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2 z-10 text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {item.icon}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          {item.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      <h4 className="text-muted-foreground font-medium mb-4">{item.company}</h4>
                      
                      <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
