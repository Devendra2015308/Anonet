import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <p className="text-md text-orange-600 font-medium">
          Connecting You to a World of Benefits.
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900">
          Benefits of Annonet
        </h2>
      </div>

      {/* Image */}
      <div className="max-w-7xl mx-auto flex justify-center px-6">
        <motion.img
          src="/benefits.png"
          alt="Benefits of Annonet"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-xl shadow-2xl"
        />
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <motion.a
          href="#plans"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-colors"
        >
          Get Started
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default Benefits;
