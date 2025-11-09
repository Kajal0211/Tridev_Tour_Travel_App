import { Mountain, Calendar, Users, Star } from "lucide-react";

export default function FourDhamYatra() {
  const handleEnquireNow = (package_name) => {
    const message = `Hi, I would like to enquire about ${package_name}`;
    window.open(
      `https://wa.me/919634347223?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const dhamPackages = [
    {
      id: 1,
      name: "Complete 4 Dham Yatra",
      duration: "12 Days / 11 Nights",
      description:
        "Complete spiritual journey covering all four sacred dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath",
      image:
        "https://raw.createusercontent.com/fb992263-7b54-48d1-a1ff-0d52cc74fd2f/",
      highlights: [
        "All 4 Dhams",
        "Helicopter Service",
        "Accommodation",
        "Meals",
        "Guide",
      ],
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      name: "Do Dham Yatra",
      duration: "6 Days / 5 Nights",
      description:
        "Visit Kedarnath and Badrinath - the most accessible and popular dham destinations",
      image:
        "https://raw.createusercontent.com/fcaac9dc-db46-4b40-91c9-e1f3c0996a9f/",
      highlights: [
        "Kedarnath",
        "Badrinath",
        "Comfortable Stay",
        "Meals",
        "Transportation",
      ],
      rating: 4.8,
      featured: false,
    },
    {
      id: 3,
      name: "Kedarnath Special",
      duration: "4 Days / 3 Nights",
      description:
        "Dedicated pilgrimage to Lord Shiva's sacred abode in the Himalayas",
      image:
        "https://raw.createusercontent.com/4019a8ce-5898-48e1-9840-f4a3738a56aa/",
      highlights: [
        "Kedarnath Temple",
        "Helicopter Option",
        "Trekking",
        "Sacred Rituals",
      ],
      rating: 4.7,
      featured: false,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#1E1E1E] dark:to-[#262626] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow Tag */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 border border-teal-200 dark:border-[#3A3A3A] rounded-full bg-white dark:bg-[#262626]">
              <span className="font-inter font-light text-sm text-teal-700 dark:text-teal-400">
                /4 Dham Yatra Special
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white/87 leading-tight mb-6">
            Sacred 4 Dham
            <br />
            <span className="text-teal-600 dark:text-teal-400">Pilgrimage</span>
          </h2>

          {/* Description */}
          <p className="font-inter font-light text-lg text-slate-600 dark:text-white/60 max-w-3xl mx-auto">
            Embark on the most sacred journey in Hinduism. Visit Yamunotri,
            Gangotri, Kedarnath, and Badrinath - the four holy shrines nestled
            in the majestic Himalayas of Uttarakhand.
          </p>

          {/* Special Features */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-white dark:bg-[#262626] px-4 py-2 rounded-full border border-teal-200 dark:border-[#3A3A3A]">
              <Mountain className="w-4 h-4 text-teal-600" />
              <span className="font-inter text-sm text-slate-700 dark:text-white/87">
                Himalayan Journey
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-[#262626] px-4 py-2 rounded-full border border-teal-200 dark:border-[#3A3A3A]">
              <Star className="w-4 h-4 text-teal-600" />
              <span className="font-inter text-sm text-slate-700 dark:text-white/87">
                Spiritual Experience
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-[#262626] px-4 py-2 rounded-full border border-teal-200 dark:border-[#3A3A3A]">
              <Users className="w-4 h-4 text-teal-600" />
              <span className="font-inter text-sm text-slate-700 dark:text-white/87">
                Group & Individual
              </span>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dhamPackages.map((package_item) => (
            <div
              key={package_item.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                package_item.featured
                  ? "lg:col-span-2 bg-gradient-to-r from-teal-600 to-blue-700"
                  : "bg-white dark:bg-[#262626] border border-slate-200 dark:border-[#3A3A3A]"
              }`}
            >
              {/* Featured Badge */}
              {package_item.featured && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                    <span className="font-inter font-medium text-sm text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Content Layout for Featured */}
              {package_item.featured ? (
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left side - Image */}
                  <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={package_item.image}
                      alt={package_item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ filter: "brightness(0.8)" }}
                    />
                  </div>

                  {/* Right side - Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center text-white">
                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="font-inter text-sm opacity-90">
                        {package_item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins font-bold text-2xl lg:text-3xl mb-4">
                      {package_item.name}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-base opacity-90 mb-6 leading-relaxed">
                      {package_item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {package_item.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="font-inter text-xs bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Rating and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(package_item.rating)
                                  ? "text-yellow-300 fill-current"
                                  : "text-white/30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-inter text-sm">
                          {package_item.rating}
                        </span>
                      </div>

                      <button
                        onClick={() => handleEnquireNow(package_item.name)}
                        className="bg-white hover:bg-slate-100 text-teal-600 font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-200 active:translate-y-px"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Package Layout */
                <div>
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={package_item.image}
                      alt={package_item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ filter: "brightness(0.8)" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      <span className="font-inter text-sm text-slate-600 dark:text-white/60">
                        {package_item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins font-medium text-xl text-slate-900 dark:text-white/87 mb-3">
                      {package_item.name}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-sm text-slate-600 dark:text-white/60 mb-4 leading-relaxed">
                      {package_item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {package_item.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="font-inter text-xs bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Rating and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(package_item.rating)
                                  ? "text-teal-500 fill-current"
                                  : "text-slate-300 dark:text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-inter text-sm text-slate-600 dark:text-white/60">
                          {package_item.rating}
                        </span>
                      </div>

                      <button
                        onClick={() => handleEnquireNow(package_item.name)}
                        className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-medium px-4 py-2 rounded-lg transition-all duration-200 active:translate-y-px text-sm"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-[#262626] border border-slate-200 dark:border-[#3A3A3A] rounded-2xl p-8 md:p-12">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl text-slate-900 dark:text-white/87 mb-4">
              Plan Your Sacred Journey
            </h3>
            <p className="font-inter text-slate-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              Our experienced team will help you plan the perfect 4 Dham Yatra
              according to your needs, budget, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleEnquireNow("Custom 4 Dham Yatra Package")}
                className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                Get Custom Quote
              </button>
              <button
                onClick={() => window.open("tel:+919634347223", "_self")}
                className="bg-white dark:bg-[#121212] border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/10 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                Call Now
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
    </div>
  );
}
