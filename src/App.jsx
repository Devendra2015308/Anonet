import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/Testimonial";
import WhatsAppButton from "./components/layout/Whatsapp";
import FloatingCallButton from "./components/layout/Mobile";
import Plans from "./components/Plans";
import ServicesSection from "./components/OurServices";
import Benefits from "./components/Benefits";
import BookingForm from "./components/BookingForm";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Plans />
      <About />
      <ServicesSection />
      <BookingForm />
      <Benefits />
      <Testimonials />
      <ContactUs />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <FloatingCallButton />
        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  );
};

export default App;
