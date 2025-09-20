import { motion } from "framer-motion";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#181d49] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-14 w-14 rounded-full"
              />
              <h3 className="text-xl font-bold">
                ANNONET <br /> WIFI NET PROVIDER
              </h3>
            </div>
            <p className="text-gray-400 text-md">
              Trusted AC Installation & Repair Specialists with 5+ Years of
              Proven Expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-md">
              <li>
                <a href="#home" className="hover:text-gray-100 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-gray-100 transition">
                  Brands
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-100 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 text-md leading-relaxed space-y-2">
              <p>
                D-65, Gali No. 6, Laxmi Nagar,
                <br />
                East Delhi, India - 110092
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+917453947573"
                  className="hover:text-gray-100 transition"
                >
                  +91 9910766205
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:annonetwifiprovider@gmail.com"
                  className="hover:text-gray-100 transition"
                >
                  annonetwifiprovider@gmail.com
                </a>
              </p>
            </address>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <FacebookIcon className="w-6 h-6 cursor-pointer" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <TwitterIcon className="w-6 h-6 cursor-pointer" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400"
              >
                <InstagramIcon className="w-6 h-6 cursor-pointer" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-400 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} ANNONET WIFI NET PROVIDER | All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
