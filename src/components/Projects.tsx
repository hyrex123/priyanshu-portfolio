import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Discord Automation Bot",
    description:
      "An automated Discord bot for moderation, role management, and real-time notifications with persistent data storage.",
    tags: ["Node.js", "discord.js", "MongoDB"],
    image: "./discord.jpg",
    github: "https://github.com/hyrex123/Discord-Chat-Bot",
  },
  {
    title: "Forkful – AI Recipe & Nutrition Tracker",
    description:
      "An AI-powered platform that generates personalized recipes and tracks nutritional data using intelligent recommendations.",
    tags: ["MERN", "Firebase", "Gemini API"],
    image: "./forkfull.jpg",
    github: "https://github.com/hyrex123/Forkful-AI",
  },
  {
    title: "Women Safety SOS Application",
    description:
      "A real-time SOS system enabling emergency alerts with secure backend APIs, GPS tracking, and media upload support.",
    tags: ["MERN", "JWT", "REST APIs"],
    image: "./sos.jpg",
    github: "https://github.com/hyrex123/Women-Safety-SOS",
  },
  {
    title: "Courier Management System",
    description:
      "An enterprise-grade courier management platform designed to streamline logistics operations with secure access control and optimized backend performance.",
    tags: ["MERN", "RBAC", "REST APIs"],
    image: "./cms.jpg",
    github: "https://github.com/hyrex123/Courier-Management-System",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative rounded-3xl overflow-hidden group h-full"
    >
      {/* Background image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover
                   blur-md
                   scale-105 group-hover:scale-110
                   transition-transform duration-700"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <span className="text-5xl font-display font-bold text-white/20 block mb-4">
            0{index + 1}
          </span>

          <h3 className="text-2xl font-display font-bold mb-4 text-white">
            {project.title}
          </h3>

          <p className="text-white/80 mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-white/30 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-2 rounded-full border border-white/30
                         hover:bg-white hover:text-black transition"
              aria-label="View source code on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-16">
        <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Top <span className="text-gradient">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
