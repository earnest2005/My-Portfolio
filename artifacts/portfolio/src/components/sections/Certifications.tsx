import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2023",
    icon: "☁️", // We can use an icon component, but a stylistic text element is fine too. Let's use Lucide icons.
  },
  {
    title: "Data Analyst Professional Certificate",
    issuer: "Google",
    date: "May 2023",
  },
  {
    title: "Java SE 11 Developer Certification",
    issuer: "Oracle",
    date: "Jan 2023",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Nov 2022",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Licenses & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            Validated expertise through industry-recognized programs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 border border-primary/20">
                <Award className="text-primary w-6 h-6" />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-muted-foreground font-medium text-sm mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} /> {cert.date}
                  </div>
                  <a href="#" className="text-xs font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Verify <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
