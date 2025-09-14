import { useEffect, useState } from "react";

const images = [
  "/Hero/1.jpg",
  "/Hero/2.jpg",
  "/Hero/3.jpg",
  "/Hero/4.jpg",
  "/Hero/5.jpg",
  "/Hero/6.jpg",
  "/Hero/7.jpg",
  "/Hero/8.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Background Images with fade */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ease-in-out hover:scale-105">
          Your Trusted Wifi Service Provider
        </h2>
        <p className="text-xl mb-6 opacity-90 transition-opacity duration-700 hover:opacity-100">
          Fast Connections. Reliable Coverage. Affordable Plans. Professional
          WiFi Solutions.
        </p>
        <a
          href="#contact"
          className="relative inline-block text-xl font-semibold text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-[#2D336B] to-[#3B5998] shadow-md hover:from-[#4A6FD6] hover:to-[#1A3E8D] hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span className="relative z-10">Book a Service</span>
          <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-md transition-opacity duration-300 group-hover:opacity-20"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
