import { motion } from "framer-motion";
import { useState } from "react";

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // validate phone number
  const validatePhone = (value) => /^[0-9]{10}$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    setPhoneError("");

    const formData = new FormData(e.target);

    // send request to web3forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="booking"
      className="relative py-12 md:py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Futuristic glowing blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Book Your Connection
        </motion.h2>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl space-y-6"
          >
            {/* Web3Forms Hidden Fields */}
            <input
              type="hidden"
              name="access_key"
              value="b7c778a9-9f09-4f87-b1f7-721737fc3803"
            />
            <input
              type="hidden"
              name="subject"
              value="New WiFi Broadband Booking Request"
            />
            <input
              type="hidden"
              name="from_name"
              value="ANONET Broadband Website"
            />

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full p-3 rounded-lg bg-white/10 border ${
                  phoneError ? "border-red-500" : "border-white/20"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter your 10-digit phone number"
              />
              {phoneError && (
                <p className="text-red-400 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Address
              </label>
              <textarea
                name="address"
                required
                rows="2"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your address"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Additional message (optional)"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/50 transition"
            >
              Submit Request
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              ✅ Request Submitted!
            </h3>
            <p className="text-gray-300">
              Thank you for booking. We’ll get in touch with you shortly.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
