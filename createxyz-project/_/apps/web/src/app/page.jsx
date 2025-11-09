import HeroSection from "../components/HeroSection";
import PopularDestinations from "../components/PopularDestinations";
import FourDhamYatra from "../components/FourDhamYatra";
import TempleToursSection from "../components/TempleToursSection";
import TaxiBookingSection from "../components/TaxiBookingSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Hero Section */}
      <HeroSection />

      {/* Popular North India Destinations */}
      <PopularDestinations />

      {/* 4 Dham Yatra Special Section */}
      <FourDhamYatra />

      {/* Famous Temples Tours */}
      <TempleToursSection />

      {/* Taxi Booking Section */}
      <TaxiBookingSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}