import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic Plan",
    image: "/Plans/plan1.png",
  },
  {
    title: "Standard Plan",
    image: "/Plans/plan2.png",
    highlighted: true,
  },
  {
    title: "Business Plan",
    image: "/Plans/plan3.png",
  },
  {
    title: "Entertainment Plan",
    image: "/Plans/plan4.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Plans = () => {
  return (
    <section id="plans" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Best Internet Plan
        </motion.h2>
        <motion.h3
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR EXCITING PLANS!
        </motion.h3>

        {/* Grid of plan images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden ${
                plan.highlighted ? "scale-105" : ""
              }`}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-md text-gray-500 mt-6">
          *Prices indicated above are the effective prices for long-term plans.{" "}
          <a href="#" className="text-blue-500 underline">
            T&C Apply
          </a>
        </p>
      </div>
    </section>
  );
};

export default Plans;
