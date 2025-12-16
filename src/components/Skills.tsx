import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TechMarquee from "./TechMarquee";

const skills = [
  { name: "Node.js", level: 90 },
  { name: "React", level: 70 },
  { name: "Express", level: 85 },
  { name: "Database Design", level:80},
  { name: "API Testing", level:70}
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 1.5,
                        delay: 1 + index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-center text-muted-foreground mb-6">Technologies I Work With</p>
        <TechMarquee />
      </motion.div>
    </section>
  );
};

export default Skills;
