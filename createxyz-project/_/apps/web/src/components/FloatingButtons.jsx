import { Phone, MessageCircle, Headphones } from "lucide-react";

export default function FloatingButtons() {
  const handleCallDealer1 = () => {
    window.open('tel:+919634347223', '_self');
  };

  const handleCallDealer2 = () => {
    window.open('tel:+918800778189', '_self');
  };

  const handleCustomerSupport = () => {
    window.open('tel:+919634435040', '_self');
  };

  const handleWhatsApp = (number, message) => {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Buttons - Right Side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {/* Call Dealer 1 - Travel Packages */}
        <div className="group relative">
          <button
            onClick={handleCallDealer1}
            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-6 h-6 text-white" />
          </button>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Travel Expert
            <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </div>
        </div>

        {/* Call Dealer 2 - Taxi Services */}
        <div className="group relative">
          <button
            onClick={handleCallDealer2}
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-6 h-6 text-white" />
          </button>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Taxi Service
            <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </div>
        </div>

        {/* Customer Support Shortcut */}
        <div className="group relative">
          <button
            onClick={handleCustomerSupport}
            className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Headphones className="w-6 h-6 text-white" />
          </button>
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Customer Support
            <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="group relative">
          <button
            onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about your travel services')}
            className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </button>
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute bottom-[-6px] right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Access Bar - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 md:hidden">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {/* Travel Call */}
          <button
            onClick={handleCallDealer1}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-inter text-gray-600 dark:text-gray-400">Travel</span>
          </button>

          {/* Taxi Call */}
          <button
            onClick={handleCallDealer2}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-inter text-gray-600 dark:text-gray-400">Taxi</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => handleWhatsApp('919634347223', 'Hi, I would like to enquire about your services')}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-inter text-gray-600 dark:text-gray-400">WhatsApp</span>
          </button>

          {/* Support */}
          <button
            onClick={handleCustomerSupport}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-inter text-gray-600 dark:text-gray-400">Support</span>
          </button>
        </div>
      </div>

      {/* Mobile Spacing */}
      <div className="h-20 md:hidden"></div>

      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
}