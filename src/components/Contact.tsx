import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // copy email state
  const [copied, setCopied] = useState(false);

  // form submit → mailto (optional, you can remove later)
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_xk2tf9o",      // ← your Service ID
      "template_hzurhxn",      // ← your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "ointJ6X5dONkn7AwP"             // ← your Public Key
    )
    .then(() => {
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Try again later.",
      });
      console.error(error);
    });
};

  // copy email
  const copyEmail = async () => {
    await navigator.clipboard.writeText("prcpcm@gmail.com");
    setCopied(true);

    toast({
      title: "Email copied",
    });

    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: Github, href: "https://github.com/hyrex123", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshu-raj-chauhan-30aa28234/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Open to Opportunities
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I’m currently seeking software developer roles. If you’re hiring or
            know of an opportunity, I’d love to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email card with copy */}
            <div className="glass rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-muted-foreground">
                    prcpcm@gmail.com
                  </p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-muted-foreground">Delhi, India</p>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <p className="font-semibold mb-4">Find Me Online</p>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
