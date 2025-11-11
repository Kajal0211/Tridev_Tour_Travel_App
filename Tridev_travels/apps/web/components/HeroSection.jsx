import { useState } from "react";
import { Phone, Menu, X, Search, MapPin, Calendar, Users } from "lucide-react";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("travel");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleEnquireNow = (service) => {
    const message = `Hi, I would like to enquire about ${service}`;
    window.open(
      `https://wa.me/919634347223?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleCallDealer1 = () => {
    window.open("tel:+919634347223", "_self");
  };

  const handleCallDealer2 = () => {
    window.open("tel:+918800778189", "_self");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.createusercontent.com/dd2cef2c-a0e9-4f62-a164-5e48f999cd29/')",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 60%, rgba(51, 65, 85, 0.3) 100%)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 bg-slate-900/20 backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg p-2">
              <h1 className="font-poppins font-bold text-white text-lg">
                TRIDEV
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-full px-6 py-3">
                <span className="text-slate-700 font-inter font-medium text-sm">
                  Home
                </span>
              </div>
              <a
                href="/travel-packages"
                className="bg-slate-900/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <span className="text-white font-inter text-sm">
                  Travel Packages
                </span>
              </a>
              <a
                href="/taxi-booking"
                className="bg-slate-900/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <span className="text-white font-inter text-sm">
                  Taxi Booking
                </span>
              </a>
              <div className="bg-slate-900/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-200 cursor-pointer">
                <span className="text-white font-inter text-sm">
                  4 Dham Yatra
                </span>
              </div>
              <div className="bg-slate-900/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-200 cursor-pointer">
                <span className="text-white font-inter text-sm">
                  Temples Tour
                </span>
              </div>
            </div>
          </div>

          {/* Right Cluster - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Call Dealer Buttons */}
            <button
              onClick={handleCallDealer1}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-white font-inter text-sm">
                Call Dealer 1
              </span>
            </button>
            <button
              onClick={handleCallDealer2}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-white font-inter text-sm">
                Call Dealer 2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-white">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-slate-900/50 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="bg-white rounded-full px-4 py-2 text-center">
                <span className="text-slate-700 font-inter font-medium text-sm">
                  Home
                </span>
              </div>
              <a
                href="#"
                className="text-white/80 hover:text-white font-inter text-sm text-center"
              >
                Travel Packages
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white font-inter text-sm text-center"
              >
                Taxi Booking
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white font-inter text-sm text-center"
              >
                4 Dham Yatra
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white font-inter text-sm text-center"
              >
                Temples Tour
              </a>

              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <button
                  onClick={handleCallDealer1}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 rounded-full"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white font-inter text-sm">
                    Call Dealer 1
                  </span>
                </button>
                <button
                  onClick={handleCallDealer2}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 rounded-full"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white font-inter text-sm">
                    Call Dealer 2
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
        <div className="max-w-6xl w-full">
          {/* Headline */}
          <div className="text-center mb-8">
            <h1 className="font-poppins font-extrabold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Discover Divine
              <br />
              North India
            </h1>
            <p className="font-inter text-white text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Experience the spiritual journey through sacred temples, 4 Dham
              Yatra, and breathtaking destinations of North India with our
              expert travel services.
            </p>
          </div>

          {/* Booking Widget */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
            {/* Tab Switcher */}
            <div className="flex bg-slate-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab("travel")}
                className={`flex-1 py-3 px-4 rounded-md font-inter font-medium text-sm transition-all duration-200 ${
                  activeTab === "travel"
                    ? "bg-white text-teal-600 shadow-sm"
                    : "text-slate-600 hover:text-teal-600"
                }`}
              >
                Travel Packages
              </button>
              <button
                onClick={() => setActiveTab("taxi")}
                className={`flex-1 py-3 px-4 rounded-md font-inter font-medium text-sm transition-all duration-200 ${
                  activeTab === "taxi"
                    ? "bg-white text-teal-600 shadow-sm"
                    : "text-slate-600 hover:text-teal-600"
                }`}
              >
                Taxi Booking
              </button>
            </div>

            {/* Travel Package Form */}
            {activeTab === "travel" && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Travelers</option>
                    <option>1 Person</option>
                    <option>2 Persons</option>
                    <option>3-5 Persons</option>
                    <option>Group (6+)</option>
                  </select>
                </div>
                <button
                  onClick={() => handleEnquireNow("Travel Package")}
                  className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Enquire Now</span>
                  <Search className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Taxi Booking Form */}
            {activeTab === "taxi" && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-red-400" />
                  <input
                    type="text"
                    placeholder="Drop Location"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="datetime-local"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => handleEnquireNow("Taxi Booking")}
                  className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Enquire Now</span>
                  <Search className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}

