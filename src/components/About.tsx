import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js",
    "Python", "Java", "Machine Learning", "MongoDB",
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-10">
            <span className="section-number">01.</span>
            About Me
            <span className="h-px flex-1 bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a pre-final year Computer Science student at{" "}
                <span className="text-primary">SRMS Institutions</span> with a deep
                passion for Artificial Intelligence and Full Stack Development. I
                specialize in building intelligent systems that solve real-world
                problems using cutting-edge technologies.
              </p>
              <p>
                My journey in tech is driven by curiosity and a commitment to
                continuous learning. From developing{" "}
                <span className="text-primary">ML models</span> that help farmers
                make better decisions to creating{" "}
                <span className="text-primary">AI-powered debugging tools</span>, I
                love transforming ideas into impactful solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or learning about the latest
                advancements in AI.
              </p>

              <p className="pt-2">Here are some technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo placeholder */}
            <motion.div
              className="relative group mx-auto md:mx-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10 rounded-lg" />
                <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground font-mono text-sm">
                  <span>Your Photo</span>
                </div>
              </div>
              <div className="absolute -inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
