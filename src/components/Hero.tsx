import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const roles = ["AI/ML Engineer", "Full Stack Developer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/shreyansh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shreyansh", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shreyansh@example.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Fixed left social bar */}
      <motion.div
        className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
        <div className="w-px h-24 bg-muted-foreground/30" />
      </motion.div>

      {/* Fixed right email bar */}
      <motion.div
        className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="mailto:shreyansh@example.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-xs tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          shreyansh@example.com
        </a>
        <div className="w-px h-24 bg-muted-foreground/30" />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 z-10">
        <motion.p
          className="font-mono text-primary mb-5 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Shreyansh Saxena.
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I build intelligent solutions.
        </motion.h2>

        <motion.div
          className="h-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="font-mono text-primary text-lg md:text-xl">
            {displayText}
            <span className="border-r-2 border-primary ml-0.5 animate-typewriter-blink">
              &nbsp;
            </span>
          </span>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          A passionate Computer Science student crafting innovative AI-powered
          applications and scalable web solutions. Currently focused on building
          intelligent systems that solve real-world problems.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#projects" className="btn-filled">
            View My Work
          </a>
          <a href="/resume.pdf" className="btn-primary">
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
