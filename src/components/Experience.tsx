import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
  company: "Star Cement Ltd",
  location: "Meghalaya, India",
  period: "Jul 2024 – Aug 2024",
  description:
    "Contributed to the development of enterprise backend systems, focusing on API design, performance optimization, and access control.",
  achievements: [
    "Built a Courier Management System using JavaScript,Tailwind,PHP and MySQL",
    "Optimized SQL queries to improve backend performance and system responsiveness",
    "Implemented role-based access control (RBAC) and RESTful APIs, improving workflow efficiency by 10%",
    "Prepared technical architecture and API documentation for internal engineering teams",
    ],
  },
  {
    title: "Technical Coding Mentor Apprentice",
  company: "Assam Down Town University",
  location: "Guwahati Assam, India",
  period: "Nov 2024 – Feb 2025",
  description:
    "Supported backend development and algorithms courses by mentoring students and assisting with hands-on technical training.",
  achievements: [
    "Mentored 200+ students in backend development concepts, data structures, and problem-solving",
    "Guided students through lab sessions, project reviews, and algorithm-focused training",
    "Strengthened students’ understanding of system design, coding best practices, and backend workflows",
    ],
  },
  {
    title: "Cybersecurity Intern",
  company: "Prodigy Infotech",
  location: "Remote",
  period: "Jan 2024 – Feb 2024",
  description:
    "Worked on cybersecurity-focused Python tools and encryption techniques to improve data security and threat detection.",
  achievements: [
    "Built Python tools for password security analysis and keylogger detection",
    "Developed a 3-DES–based image encryption pipeline for secure data transfer",
    "Gained hands-on experience with security tools and secure coding practices",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Career Path
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary glow -translate-x-1/2 top-8"
              />

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 hover:glow-soft transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-1">{exp.title}</h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{exp.company} • {exp.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
