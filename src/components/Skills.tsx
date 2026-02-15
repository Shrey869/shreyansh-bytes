import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "NLP", "RAG", "Scikit-Learn"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "DB2"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Azure", "Power BI"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-10">
            <span className="section-number">03.</span>
            Technical Skills
            <span className="h-px flex-1 bg-border ml-4" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-badge hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIdx * 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
