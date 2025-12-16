import { motion } from "framer-motion";

interface ProfilePhotoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ProfilePhoto = ({ size = "lg", className = "" }: ProfilePhotoProps) => {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-48 h-48 md:w-64 md:h-64",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`relative ${className}`}
    >
      {/* Animated ring */}
      <motion.div
        className={`absolute inset-0 rounded-full border-2 border-primary/50 ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "3px",
        }}
      />
      
      {/* Outer glow ring */}
      <motion.div
        className={`absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl ${sizeClasses[size]}`}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Photo container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-primary/30 glass`}>
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
        
        {/* Avatar icon placeholder - replace src with your actual photo */}
        <img
          src="./ProfilePhoto.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            top: `${20 + i * 30}%`,
            left: i % 2 === 0 ? "-10%" : "105%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

export default ProfilePhoto;
