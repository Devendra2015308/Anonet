import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.div
      className="relative" // Changed from fixed to relative
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.a
        href="tel:+917053604920"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.8)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#3945b4] hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </motion.div>
  );
};

export default FloatingCallButton;
