import { Star, MapPin, Calendar, Clock } from "lucide-react";

export default function TempleToursSection() {
  const handleEnquireNow = (temple) => {
    const message = `Hi, I would like to enquire about ${temple} temple tour`;
    window.open(
      `https://wa.me/919634347223?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const templePackages = [
    {
      id: 1,
      name: "Golden Temple Amritsar",
      location: "Punjab",
      duration: "3 Days / 2 Nights",
      description:
        "Visit the most sacred Sikh shrine, experience the golden beauty and spiritual atmosphere",
      image:
        "https://raw.createusercontent.com/940ed48b-ccee-4e15-9419-2c31438dd469/",
      highlights: [
        "Golden Temple",
        "Wagah Border",
        "Jalianwala Bagh",
        "Langar Experience",
      ],
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      name: "Kashi Vishwanath",
      location: "Varanasi, UP",
      duration: "2 Days / 1 Night",
      description:
        "One of the twelve Jyotirlinga temples dedicated to Lord Shiva",
      image:
        "https://raw.createusercontent.com/7fe83f33-8130-4f77-873e-53d61c2b879b/",
      highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath", "Boat Ride"],
      rating: 4.8,
    },
    {
      id: 3,
      name: "Haridwar Temples",
      location: "Uttarakhand",
      duration: "2 Days / 1 Night",
      description:
        "Sacred city where Ganges enters the plains, famous for evening Aarti ceremony",
      image:
        "https://raw.createusercontent.com/b7daf344-862f-465f-8894-e6dca6824f8e/",
      highlights: ["Har Ki Pauri", "Ganga Aarti", "Mansa Devi", "Chandi Devi"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Ancient Temple Tours",
      location: "North India",
      duration: "4 Days / 3 Nights",
      description:
        "Explore ancient temples with intricate architecture and spiritual significance",
      image:
        "https://raw.createusercontent.com/c952cbfb-6663-4c53-a5a9-147bf3a33482/",
      highlights: [
        "Heritage Temples",
        "Guided Tours",
        "Cultural Experience",
        "Sacred Rituals",
      ],
      rating: 4.8,
    },
    {
      id: 5,
      name: "Vrindavan Mathura",
      location: "Uttar Pradesh",
      duration: "3 Days / 2 Nights",
      description: "Birthplace of Lord Krishna and land of divine love",
      image:
        "https://raw.createusercontent.com/c952cbfb-6663-4c53-a5a9-147bf3a33482/",
      highlights: [
        "Krishna Janmabhoomi",
        "Banke Bihari",
        "ISKCON Temple",
        "Govind Dev Ji",
      ],
      rating: 4.8,
    },
    {
      id: 6,
      name: "Sacred Pilgrimage",
      location: "Multi-State",
      duration: "5 Days / 4 Nights",
      description:
        "Complete pilgrimage covering multiple sacred temples and holy sites",
      image:
        "https://raw.createusercontent.com/7fe83f33-8130-4f77-873e-53d61c2b879b/",
      highlights: [
        "Multiple Temples",
        "Spiritual Guide",
        "Accommodation",
        "All Meals",
      ],
      rating: 4.9,
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#1E1E1E] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow Tag */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 border border-teal-200 dark:border-[#3A3A3A] rounded-full bg-white dark:bg-[#262626]">
              <span className="font-inter font-light text-sm text-teal-700 dark:text-teal-400">
                /Famous Temple Tours
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white/87 leading-tight mb-6">
            Sacred Temple
            <br />
            <span className="text-teal-600 dark:text-teal-400">
              Pilgrimages
            </span>
          </h2>

          {/* Description */}
          <p className="font-inter font-light text-lg text-slate-600 dark:text-white/60 max-w-3xl mx-auto">
            Experience divine blessings at India's most revered temples. From
            ancient Jyotirlingas to modern spiritual centers, discover the rich
            religious heritage across the nation.
          </p>
        </div>

        {/* Featured Temple - Large Card */}
        <div className="mb-12">
          {templePackages
            .filter((temple) => temple.featured)
            .map((temple) => (
              <div
                key={temple.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-blue-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={temple.image}
                      alt={temple.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ filter: "brightness(0.8)" }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-white">
                    {/* Featured Badge */}
                    <div className="mb-4">
                      <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                        <span className="font-inter font-medium text-sm">
                          Most Popular
                        </span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-inter text-sm opacity-90">
                          {temple.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-inter text-sm opacity-90">
                          {temple.duration}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins font-bold text-3xl lg:text-4xl mb-4">
                      {temple.name}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-base opacity-90 mb-6 leading-relaxed">
                      {temple.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {temple.highlights.map((highlight, index) => (
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
                              className={`w-5 h-5 ${
                                i < Math.floor(temple.rating)
                                  ? "text-yellow-300 fill-current"
                                  : "text-white/30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-inter font-medium">
                          {temple.rating}
                        </span>
                      </div>

                      <button
                        onClick={() => handleEnquireNow(temple.name)}
                        className="bg-white hover:bg-slate-100 text-teal-600 font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-200 active:translate-y-px"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Temple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templePackages
            .filter((temple) => !temple.featured)
            .map((temple) => (
              <div
                key={temple.id}
                className="group bg-white dark:bg-[#262626] border border-slate-200 dark:border-[#3A3A3A] rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ filter: "brightness(0.8)" }}
                  />

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      <MapPin className="w-3 h-3 text-white" />
                      <span className="font-inter text-xs text-white">
                        {temple.location}
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      <Clock className="w-3 h-3 text-white" />
                      <span className="font-inter text-xs text-white">
                        {temple.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-poppins font-medium text-xl text-slate-900 dark:text-white/87 mb-2">
                    {temple.name}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-slate-600 dark:text-white/60 mb-4 leading-relaxed">
                    {temple.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {temple.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="font-inter text-xs bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {temple.highlights.length > 3 && (
                      <span className="font-inter text-xs bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        +{temple.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Rating and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(temple.rating)
                                ? "text-teal-500 fill-current"
                                : "text-slate-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-inter text-sm text-slate-600 dark:text-white/60">
                        {temple.rating}
                      </span>
                    </div>

                    <button
                      onClick={() => handleEnquireNow(temple.name)}
                      className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-medium px-4 py-2 rounded-lg transition-all duration-200 active:translate-y-px text-sm"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-[#262626] border border-slate-200 dark:border-[#3A3A3A] rounded-2xl p-8 md:p-12">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl text-slate-900 dark:text-white/87 mb-4">
              Customize Your Temple Tour
            </h3>
            <p className="font-inter text-slate-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              Create your own spiritual journey by combining multiple temples or
              adding special services like VIP darshan, accommodation upgrades,
              and guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleEnquireNow("Custom Temple Tour Package")}
                className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                Plan Custom Tour
              </button>
              <button
                onClick={() => handleEnquireNow("All Temple Tours")}
                className="bg-white dark:bg-[#121212] border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/10 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                View All Temples
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
