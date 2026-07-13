import { motion } from "framer-motion";
import { FileSpreadsheet, BarChart3, Sparkles, Briefcase as BriefcaseIcon, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiMysql, SiHtml5, SiCss, SiReact, SiTailwindcss, SiFirebase, SiNumpy, SiPandas, SiGit, SiGithub, SiReplit, SiEclipseide, SiGooglesheets } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Responsive Design", icon: <span className="font-bold text-xs">RWD</span> }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Firestore", icon: <SiFirebase /> },
      { name: "REST APIs", icon: <span className="font-bold text-xs">API</span> }
    ]
  },
  {
    title: "Data Analytics & AI",
    skills: [
      { name: "Excel", icon: <FileSpreadsheet /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Matplotlib", icon: <span className="font-bold text-xs">MPL</span> },
      { name: "Data Visualization", icon: <BarChart3 /> }
    ]
  },
  {
    title: "Software Development",
    skills: [
      { name: "OOP", icon: <span className="font-bold text-xs">OOP</span> },
      { name: "Data Structures", icon: <span className="font-bold text-xs">DSA</span> },
      { name: "Exception Handling", icon: <span className="font-bold text-xs">TRY</span> },
      { name: "Collections", icon: <span className="font-bold text-xs">COL</span> },
      { name: "CRUD Operations", icon: <span className="font-bold text-xs">CRUD</span> }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Eclipse IDE", icon: <SiEclipseide /> },
      { name: "Cursor AI", icon: <Sparkles size={16} /> },
      { name: "Replit", icon: <SiReplit /> }
    ]
  },
  {
    title: "Design & Productivity",
    skills: [
      { name: "MS Office", icon: <BriefcaseIcon size={16} /> },
      { name: "Google Workspace", icon: <SiGooglesheets /> },
      { name: "Canva", icon: <span className="font-bold text-xs">CV</span> }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <Users size={16} /> },
      { name: "Teamwork", icon: <Users size={16} /> },
      { name: "Communication", icon: <Users size={16} /> },
      { name: "Adaptability", icon: <Users size={16} /> },
      { name: "Time Management", icon: <Users size={16} /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            A versatile toolkit spanning full-stack development and data science.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={fadeIn}
              className="glass-card p-6 rounded-3xl"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    <span className="text-lg opacity-80">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
