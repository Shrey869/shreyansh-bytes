import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Copy, Check, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shreyansh@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Email copied to clipboard!" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast({ title: "Message sent!", description: "I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-number text-center block mb-2">05. What's Next?</p>
          <h2 className="section-heading text-center mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question,
            a project idea, or just want to say hi, my inbox is always open!
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Mail size={16} />
              shreyansh@example.com
              {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
            </button>
            <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
              <MapPin size={16} /> Bareilly, UP, India
            </span>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 text-left space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-mono text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-mono text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1.5 block">Subject</label>
              <input
                type="text"
                required
                maxLength={200}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-filled w-full justify-center disabled:opacity-50"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={16} /> Send Message
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
