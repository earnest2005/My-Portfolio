import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationList = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "St. Xavier's Catholic College of Engineering",
    duration: "2022 - 2026",
    status: "3rd Year · Ongoing",
    courses: ["Data Structures & Algorithms", "Machine Learning", "Database Management Systems", "Python & Java Programming"]
  }
];

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Academic Background
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-orange-500">Education</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                    <GraduationCap size={18} />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#141B2D] border border-slate-700/60 text-slate-300 text-xs font-medium">
                    <Calendar size={13} className="text-amber-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <h3 className="text-white text-xl font-bold mb-2">
                  {edu.degree}
                </h3>

                <span className="inline-block text-orange-400 text-xs font-semibold mb-4 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                  {edu.status}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-medium mb-3">
                  <BookOpen size={14} className="text-amber-400" />
                  <span>Key Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-[#141B2D] border border-slate-700/50 text-slate-300 text-[11px] font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


