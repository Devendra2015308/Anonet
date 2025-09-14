"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Headphones,
  IndianRupee,
  Monitor,
  Gauge,
} from "lucide-react";

const features = [
  {
    title: "Home Security",
    description:
      "Smart Home Integration along with 24/7 professional monitoring",
    icon: <Shield className="w-8 h-8 text-orange-400" />,
    highlight: true,
  },
  {
    title: "Free Installation",
    description:
      "Professional installation services along with on-site consultation",
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Fast Support 24/7",
    description:
      "Remote monitoring and management with a dedicated support team",
    icon: <Headphones className="w-8 h-8 text-blue-400" />,
    highlight: true,
  },
  {
    title: "Best Pricing",
    description:
      "We offer customized plans at a competitive pricing along with regular promotional offers",
    icon: <IndianRupee className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "4K and 8K Quality",
    description:
      "Enjoy a more immersive and engaging viewing experience with a future-proof setup",
    icon: <Monitor className="w-8 h-8 text-orange-400" />,
    highlight: true,
  },
  {
    title: "Ultrafast Connect",
    description:
      "Provisioned on a reliable fiber-optic network, ensuring stable and consistent service",
    icon: <Gauge className="w-8 h-8 text-orange-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-[#2D336B] mt-2 text-lg font-medium">
          Best Internet Service Provider in Town
        </p>

        {/* Feature grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-lg shadow-2xl transition-all duration-300 ${
                feature.highlight
                  ? "bg-[#2D336B] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="flex items-center mb-4">{feature.icon}</div>
              <h3 className="text-3xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-md leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
