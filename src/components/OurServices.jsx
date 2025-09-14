import React from "react";
import {
  Wifi,
  Network,
  Share2,
  Radio,
  PhoneCall,
  Server,
  Settings,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Broadband",
    description: [
      "High Speed Connection",
      "Flexibility & Scalability",
      "Unlimited Plans",
    ],
    icon: <Wifi className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Internet Lease Line",
    description: [
      "Ring Connectivity On Fiber",
      "SLA of 99.5% UP Time",
      "24X7X365 Customer Support",
    ],
    icon: <Network className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Point-to-Point",
    description: [
      "Dedicated Connectivity",
      "Clear Channel",
      "Class of Service",
    ],
    icon: <Share2 className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Fiber on Lease",
    description: [
      "Redundant fiber network",
      "Secured and Reliable network",
      "Lightning Fast Speed",
    ],
    icon: <Radio className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Cloud Telephony",
    description: [
      "Flexible and Scalable",
      "User Friendly Solutions",
      "Easy to Manage",
    ],
    icon: <PhoneCall className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Data center",
    description: [
      "State-Of-The-Art",
      "Multiple Layers Of Security",
      "Seamless & Reliable Internet Services",
    ],
    icon: <Server className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Managed Services",
    description: [
      "Proactive Monitoring & Maintenance",
      "Expertise and Support",
      "Predictable Costs & Service Labels",
    ],
    icon: <Settings className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Security & Surveillance",
    description: [
      "Expert Monitoring & Solution",
      "Advance Physical & Digital Security Measures",
      "High Level Data Encryption",
    ],
    icon: <Shield className="w-10 h-10 text-orange-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-gray-500 text-lg">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Explore The Magic Of The Network
        </h2>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
            }}
            className="bg-white outline-1 rounded-2xl shadow-2xl p-6 text-center transition-transform cursor-pointer group"
          >
            <div className="flex justify-center mb-4 transform group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="font-bold text-xl text-indigo-900 mb-3">
              {service.title}
            </h3>
            <ul className="text-gray-600 text-md space-y-1">
              {service.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
