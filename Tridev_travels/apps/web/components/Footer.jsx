import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const handleCallDealer1 = () => {
    window.open('tel:+919634347223', '_self');
  };

  const handleCallDealer2 = () => {
    window.open('tel:+918800778189', '_self');
  };

  const handleWhatsApp = (number, message) => {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:info@tridevtravel.com', '_self');
  };

  return (
    <footer className="bg-gray-900 dark:bg-[#151515] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4 inline-block mb-4">
              <h2 className="font-poppins font-bold text-white text-2xl">TRIDEV</h2>
            </div>
            <h3 className="font-poppins font-medium text-2xl md:text-3xl mb-4">
              Your Spiritual Journey Awaits
            </h3>
            <p className="font-inter text-gray-300 dark:text-[#A1A1A1] max-w-2xl mx-auto">
              Experience divine blessings through sacred 4 Dham Yatra, temple tours, and comfortable taxi services across North India.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to book a travel package')}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book Your Journey</span>
            </button>
            <button
              onClick={handleCallDealer1}
              className="bg-white dark:bg-[#2B2B2B] border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 dark:border-[#272727] mb-12"></div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">
              Our Services
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about 4 Dham Yatra')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                4 Dham Yatra
              </button>
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about temple tours')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Temple Tours
              </button>
              <button
                onClick={() => handleWhatsApp('918800778189', 'Hi, I would like to enquire about taxi services')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Taxi Services
              </button>
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about North India tours')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                North India Tours
              </button>
            </div>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">
              Popular Destinations
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about Rishikesh tour')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Rishikesh
              </button>
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about Varanasi tour')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Varanasi
              </button>
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about Golden Temple tour')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Golden Temple
              </button>
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about Mathura-Vrindavan tour')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Mathura-Vrindavan
              </button>
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <button
                    onClick={handleCallDealer1}
                    className="font-inter text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                  >
                    +91 96343 47223
                  </button>
                  <span className="font-inter text-sm text-gray-400">Travel Packages</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <button
                    onClick={handleCallDealer2}
                    className="font-inter text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    +91 88007 78189
                  </button>
                  <span className="font-inter text-sm text-gray-400">Taxi Services</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <button
                    onClick={() => window.open('tel:+919634435040', '_self')}
                    className="font-inter text-gray-300 hover:text-green-400 transition-colors duration-200 block"
                  >
                    +91 96344 35040
                  </button>
                  <span className="font-inter text-sm text-gray-400">Customer Support</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <button
                    onClick={handleEmail}
                    className="font-inter text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    info@tridevtravel.com
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">
              Quick Actions
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to get a custom quote for my trip')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Get Custom Quote
              </button>
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I need help planning my spiritual journey')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-orange-400 transition-colors duration-200 text-left"
              >
                Plan My Journey
              </button>
              <button
                onClick={() => handleWhatsApp('918800778189', 'Hi, I would like to book a taxi')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Book Taxi Now
              </button>
              <button
                onClick={() => handleWhatsApp('919634435040', 'Hi, I need customer support')}
                className="block font-inter text-gray-300 dark:text-[#A1A1A1] hover:text-green-400 transition-colors duration-200 text-left"
              >
                Customer Support
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & WhatsApp Section */}
        <div className="border-t border-gray-700 dark:border-[#272727] pt-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="font-poppins font-medium text-lg text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleWhatsApp('919634347223', 'Hi, I found you through your website')}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-inter text-sm">WhatsApp Travel</span>
              </button>
              <button
                onClick={() => handleWhatsApp('918800778189', 'Hi, I need taxi service')}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-inter text-sm">WhatsApp Taxi</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-700 dark:border-[#272727] px-6 md:px-16 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-2">
                <h5 className="font-poppins font-bold text-white text-sm">TRIDEV</h5>
              </div>
              <div>
                <p className="font-inter text-gray-400 text-sm">
                  © 2025 Tridev Travel Agency. All rights reserved.
                </p>
                <p className="font-inter text-gray-500 text-xs">
                  Your trusted partner for spiritual journeys across North India
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="text-center md:text-right">
              <p className="font-inter text-gray-400 text-sm mb-1">24/7 Emergency Support</p>
              <button
                onClick={() => window.open('tel:+919634435040', '_self')}
                className="font-inter text-green-400 hover:text-green-300 font-medium transition-colors duration-200"
              >
                +91 96344 35040
              </button>
            </div>
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
    </footer>
  );
}

