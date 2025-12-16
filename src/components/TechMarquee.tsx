import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "💛" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "GraphQL", icon: "◈" },
  { name: "Git", icon: "📦" },
  { name: "Postman", icon: "📮" }, // ✅ added
  { name: "Figma", icon: "🎯" },
];

const TechMarquee = () => {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-16 bg-secondary/30">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-4 px-8 py-4 rounded-full glass hover:bg-primary/10 transition-colors duration-300 cursor-default group"
            animate={{ y: [0, -6, 0] }}   // ✅ vertical movement
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </span>
            <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
