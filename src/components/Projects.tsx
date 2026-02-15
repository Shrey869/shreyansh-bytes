import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "AI-Based Crop Recommendation System",
    description:
      "A machine learning model that analyzes soil conditions, weather patterns, and historical data to recommend optimal crops for farmers, improving agricultural decision-making.",
    tech: ["Python", "Scikit-Learn", "Flask", "React", "MongoDB"],
    github: "https://github.com/shreyansh",
    live: "#",
    category: "AI/ML",
    featured: true,
  },
  {
    title: "AI Code Error Detector & Explainer",
    description:
      "An intelligent tool that detects code errors, explains them in simple language, and suggests fixes using NLP and RAG techniques for enhanced developer productivity.",
    tech: ["Python", "NLP", "RAG", "React", "Node.js"],
    github: "https://github.com/shreyansh",
    live: "#",
    category: "AI/ML",
    featured: true,
  },
  {
    title: "Full Stack E-Commerce Platform",
    description:
      "A scalable e-commerce application with user authentication, product management, payment integration, and real-time order tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/shreyansh",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A modern chat application with real-time messaging, file sharing, and group chat capabilities using WebSocket technology.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/shreyansh",
    category: "Web Development",
    featured: false,
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with charts, filters, and export capabilities using Power BI and React.",
    tech: ["React", "D3.js", "Python", "Power BI"],
    github: "https://github.com/shreyansh",
    category: "Web Development",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio website built with React, TypeScript, and Framer Motion featuring glassmorphism design.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/shreyansh",
    live: "#",
    category: "Web Development",
    featured: false,
  },
];

const filters = ["All", "AI/ML", "Web Development", "Full Stack"];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const featured = filtered.filter((p) => p.featured);
  const other = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-2 mb-10">
            <span className="section-number">02.</span>
            Things I've Built
            <span className="h-px flex-1 bg-border ml-4" />
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs border transition-all duration-300 ${
                  active === f
                    ? "bg-primary/10 border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-16">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                className={`relative grid md:grid-cols-12 items-center gap-4`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {/* Project image placeholder */}
                <div
                  className={`md:col-span-7 ${i % 2 === 1 ? "md:col-start-6" : ""} relative rounded-lg overflow-hidden`}
                >
                  <div className="aspect-video bg-secondary/50 rounded-lg border border-border/50 flex items-center justify-center">
                    <span className="text-muted-foreground font-mono text-sm">
                      Project Screenshot
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div
                  className={`md:col-span-6 ${
                    i % 2 === 1 ? "md:col-start-1 md:row-start-1 md:text-left" : "md:col-start-7 md:text-right"
                  } relative z-10`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="glass-card p-5 mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {project.tech.map((t) => (
                      <span key={t} className="skill-badge">{t}</span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {other.length > 0 && (
            <>
              <h3 className="text-center text-xl font-display font-semibold text-foreground mb-8">
                Other Noteworthy Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {other.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="glass-card p-6 flex flex-col h-full group hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <Folder className="text-primary" size={36} />
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={18} />
                        </a>
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-muted-foreground font-mono text-xs">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
