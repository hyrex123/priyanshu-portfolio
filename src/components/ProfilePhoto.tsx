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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative ${className}`}
    >
      {/* SIMPLE CIRCULAR RING ON CIRCUMFERENCE */}
      <div
        className={`${sizeClasses[size]} rounded-full border-4 border-primary flex items-center justify-center`}
      >
        {/* PROFILE PHOTO */}
        <img
          src="/ProfilePhoto.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
