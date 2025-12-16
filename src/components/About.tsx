import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          > 
            <div className="aspect-square rounded-3xl glass overflow-hidden relative group">
  {/* Black & White Image */}
  <img
    src="./coffeecode.jpg"
    alt="Workspace"
    className="absolute inset-0 w-full h-full object-cover
               grayscale contrast-125 brightness-90
               scale-105 group-hover:scale-110
               transition-transform duration-700 ease-out"
  />

  {/* Very subtle dark overlay (NOT color) */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Decorative animated blobs (kept subtle) */}
  <motion.div
    className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/10 blur-xl"
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 4, repeat: Infinity }}
  />

  <motion.div
    className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/10 blur-xl"
    animate={{ scale: [1.3, 1, 1.3] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
</div>

            {/* Floating badge */}
            
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Turning ideas into{" "}
              <span className="text-gradient">Reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a Software Developer based in India with experience building secure, scalable, and production-ready applications.
              </p>
              <p>
               I’ve worked extensively with Node.js, Express.js, MongoDB, and MySQL, delivering clean APIs, implementing authentication and access control, and optimizing system performance. My experience includes enterprise backend systems, AI-powered platforms, and security-focused projects.
              </p>
              <p>
                I bring a strong engineering mindset, write maintainable code, and collaborate effectively across teams to deliver reliable software that scales.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              {[
                { value: "5+", label: "Projects" },
                { value: "03", label: "Internships" },
                { value: "95%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <p className="text-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
