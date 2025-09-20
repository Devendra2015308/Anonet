import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

export default function WhatsAppButton({ phoneNumber = "919910766205" }) {
  const iconControls = useAnimation();
  const buttonRef = useRef(null);

  useEffect(() => {
    iconControls.start({
      scale: 1,
      transition: { type: "spring", stiffness: 300 },
    });

    const interval = setInterval(() => {
      iconControls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 1, ease: "easeInOut" },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [iconControls]);

  const handleClick = () => {
    const defaultMessage = encodeURIComponent(
      "Hello, I would like to know more about your services."
    );
    const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={buttonRef}
    >
      <motion.button
        onClick={handleClick}
        className="bg-[#25D366] text-white p-2.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        aria-label="Chat with us"
        whileHover={{
          backgroundColor: "#128C7E",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={iconControls}
          whileHover={{ rotate: 10 }}
        >
          <FaWhatsapp size={38} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
