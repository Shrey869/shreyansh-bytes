import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shreyansh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shreyansh", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shreyansh@example.com", label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground font-mono text-xs text-center flex items-center gap-1">
          Made with <Heart size={12} className="text-accent" /> by Shreyansh Saxena
        </p>
        <p className="text-muted-foreground/50 font-mono text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
