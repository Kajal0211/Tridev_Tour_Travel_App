import { Car, MapPin, Clock, Users, Star, Shield } from "lucide-react";

export default function TaxiBookingSection() {
  const handleEnquireNow = (service) => {
    const message = `Hi, I would like to enquire about ${service}`;
    window.open(
      `https://wa.me/918800778189?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const vehicleTypes = [
    {
      id: 1,
      name: "Sedan",
      capacity: "4 Passengers",
      description: "Comfortable sedan cars for city travel and short trips",
      image:
        "https://raw.createusercontent.com/183afb6c-f5fa-4581-a3aa-f4675a9cb3b0/",
      features: ["AC", "GPS", "Professional Driver", "Clean & Sanitized"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "SUV/MUV",
      capacity: "6-7 Passengers",
      description: "Spacious SUVs perfect for family trips and group travel",
      image:
        "https://raw.createusercontent.com/183afb6c-f5fa-4581-a3aa-f4675a9cb3b0/",
      features: [
        "AC",
        "Extra Luggage Space",
        "Family Friendly",
        "GPS Tracking",
      ],
      rating: 4.9,
    },
    {
      id: 3,
      name: "Tempo Traveller",
      capacity: "10-12 Passengers",
      description: "Large capacity vehicles for group pilgrimages and tours",
      image:
        "https://raw.createusercontent.com/183afb6c-f5fa-4581-a3aa-f4675a9cb3b0/",
      features: [
        "Group Travel",
        "Comfortable Seating",
        "Entertainment",
        "Storage",
      ],
      rating: 4.7,
    },
  ];

  const services = [
    {
      id: 1,
      name: "Local City Trips",
      description: "Half-day or full-day city sightseeing",
      icon: MapPin,
      popular: false,
    },
    {
      id: 2,
      name: "Airport Transfers",
      description: "Reliable airport pickup and drop services",
      icon: Clock,
      popular: true,
    },
    {
      id: 3,
      name: "Outstation Tours",
      description: "Multi-city pilgrimage and leisure tours",
      icon: Car,
      popular: false,
    },
    {
      id: 4,
      name: "Temple Visits",
      description: "Dedicated temple darshan trips",
      icon: Star,
      popular: true,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#121212] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow Tag */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 border border-teal-200 dark:border-[#3A3A3A] rounded-full bg-white dark:bg-[#262626]">
              <span className="font-inter font-light text-sm text-teal-700 dark:text-teal-400">
                /Taxi Booking Services
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white/87 leading-tight mb-6">
            Reliable Taxi
            <br />
            <span className="text-teal-600 dark:text-teal-400">Services</span>
          </h2>

          {/* Description */}
          <p className="font-inter font-light text-lg text-slate-600 dark:text-white/60 max-w-3xl mx-auto">
            Book comfortable and reliable taxi services for all your travel
            needs. From local city trips to outstation tours, we provide safe
            and affordable transportation solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer ${
                  service.popular
                    ? "bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-800/20 border-teal-200 dark:border-teal-700"
                    : "bg-slate-50 dark:bg-[#262626] border-slate-200 dark:border-[#3A3A3A]"
                }`}
                onClick={() => handleEnquireNow(service.name)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-inter font-medium">
                      Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.popular
                      ? "bg-teal-600 text-white"
                      : "bg-slate-200 dark:bg-[#3A3A3A] text-slate-600 dark:text-white/60"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-medium text-lg text-slate-900 dark:text-white/87 mb-2">
                  {service.name}
                </h3>
                <p className="font-inter text-sm text-slate-600 dark:text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vehicle Types Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-medium text-3xl md:text-4xl text-slate-900 dark:text-white/87 mb-4">
              Choose Your Vehicle
            </h3>
            <p className="font-inter text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              Select from our fleet of well-maintained vehicles suitable for
              every occasion and group size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white dark:bg-[#262626] border border-slate-200 dark:border-[#3A3A3A] rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ filter: "brightness(0.8)" }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-poppins font-medium text-xl text-slate-900 dark:text-white/87">
                      {vehicle.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-inter text-sm text-slate-600 dark:text-white/60">
                        {vehicle.rating}
                      </span>
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="w-4 h-4 text-teal-600" />
                    <span className="font-inter text-sm text-slate-600 dark:text-white/60">
                      {vehicle.capacity}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-sm text-slate-600 dark:text-white/60 mb-4 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.map((feature, index) => (
                      <span
                        key={index}
                        className="font-inter text-xs bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() =>
                      handleEnquireNow(`${vehicle.name} Taxi Booking`)
                    }
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-medium py-3 px-4 rounded-lg transition-all duration-200 active:translate-y-px"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/10 dark:to-blue-800/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl text-slate-900 dark:text-white/87 mb-4">
              Why Choose Our Taxi Services?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-medium text-lg text-slate-900 dark:text-white/87 mb-2">
                Safe & Secure
              </h4>
              <p className="font-inter text-sm text-slate-600 dark:text-white/60">
                Verified drivers and GPS tracking for your safety
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-medium text-lg text-slate-900 dark:text-white/87 mb-2">
                On-Time Service
              </h4>
              <p className="font-inter text-sm text-slate-600 dark:text-white/60">
                Punctual pickup and drop services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-medium text-lg text-slate-900 dark:text-white/87 mb-2">
                Clean Vehicles
              </h4>
              <p className="font-inter text-sm text-slate-600 dark:text-white/60">
                Well-maintained and sanitized cars
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-medium text-lg text-slate-900 dark:text-white/87 mb-2">
                Experienced Drivers
              </h4>
              <p className="font-inter text-sm text-slate-600 dark:text-white/60">
                Professional and knowledgeable local drivers
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white dark:bg-[#262626] border border-slate-200 dark:border-[#3A3A3A] rounded-2xl p-8 md:p-12">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl text-slate-900 dark:text-white/87 mb-4">
              Book Your Taxi Now
            </h3>
            <p className="font-inter text-slate-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              Get instant quotes for your taxi booking. Our team will help you
              choose the right vehicle and plan your journey efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleEnquireNow("Taxi Booking Quote")}
                className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                Get Instant Quote
              </button>
              <button
                onClick={() => window.open("tel:+918800778189", "_self")}
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
