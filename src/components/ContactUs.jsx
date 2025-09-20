import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactUs = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-14 text-gray-800"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Address Info */}
          <motion.div
            className="space-y-8 bg-white outline-1 outline-gray-300 bg-opacity-80 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
                Office Address
              </h3>
              <p className="text-gray-600">
                D-65, Gali No. 6, Laxmi Nagar,
                <br />
                East Delhi, India - 110091
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                Contact
              </h3>
              <p className="text-gray-600">Phone: +91 9910766205</p>
              <p className="text-gray-600">Email: annonetwifiprovider@gmail.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <ClockIcon className="w-6 h-6 text-blue-600" />
                Working Hours
              </h3>
              <p className="text-gray-600">All Days: 8:00 AM - 8:00 PM</p>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            className="w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2385486468777!2d77.27904987549473!3d28.66204947566139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbebb0caef29%3A0x74a2dd5529858f62!2sGali%20No.%206%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726322170432!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
