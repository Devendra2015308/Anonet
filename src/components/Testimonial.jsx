import { motion } from "framer-motion";
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Neha Reddy",
    role: "Home Owner",
    text: "“Awesome customer support, they fixed issue within 2 hours of registering ticket.”",
  },
  {
    name: "Rohit Malhotra",
    role: "Restaurant Owner",
    text: "“We are a holistic wellness center dedicated to helping you discover health and rediscover vitality.”",
  },
  {
    name: "Sunil Dey",
    role: "Society Maintenance Head",
    text: "“We are using ANONET Broadband service from last 2 years, we are very satisfied.”",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Futuristic glowing blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-indigo-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-200 leading-relaxed italic">
                {testimonial.text}
              </p>

              {/* Stars */}
              <div className="mt-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-5 h-5 fill-current drop-shadow-md"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Futuristic glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-indigo-500/30 pointer-events-none animate-pulse"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
