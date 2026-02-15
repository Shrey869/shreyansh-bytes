import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    provider: "Cisco",
    name: "Certified Internetwork Expert Data Center",
    date: "2024",
  },
  {
    provider: "IBM",
    name: "Certified Database Associate",
    date: "2024",
  },
  {
    provider: "Microsoft",
    name: "Certified: Data Analyst Associate",
    date: "2024",
  },
  {
    provider: "Coursera",
    name: "Machine Learning Specialization",
    date: "2023",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-10">
            <span className="section-number">04.</span>
            Certifications
            <span className="h-px flex-1 bg-border ml-4" />
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-primary text-xs mb-1 uppercase tracking-wider">
                          {cert.provider}
                        </p>
                        <h3 className="text-foreground font-display font-semibold group-hover:text-primary transition-colors">
                          {cert.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Award className="text-accent" size={18} />
                        <span className="font-mono text-muted-foreground text-xs">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
