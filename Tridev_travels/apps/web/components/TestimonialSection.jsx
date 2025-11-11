import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Tridev Travel made our 4 Dham Yatra absolutely seamless. The arrangements were perfect, and our guide was very knowledgeable about the spiritual significance of each place.",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
      trip: "4 Dham Yatra"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Excellent taxi service for our Golden Temple visit. The driver was punctual, the car was clean, and the entire experience was comfortable and safe.",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400",
      trip: "Golden Temple Tour"
    },
    {
      id: 3,
      name: "Amit Patel", 
      location: "Ahmedabad",
      rating: 5,
      text: "Best travel agency for North India tours! They organized our Mathura-Vrindavan trip beautifully. Highly recommended for spiritual journeys.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      trip: "Mathura-Vrindavan Package"
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-[#1E1E1E] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow Tag */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 border border-gray-200 dark:border-[#3A3A3A] rounded-full bg-white dark:bg-[#262626]">
              <span className="font-inter font-light text-sm text-gray-700 dark:text-white/87">
                /Customer Reviews
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white/87 leading-tight mb-6">
            What Our Pilgrims
            <br />
            <span className="text-orange-600 dark:text-orange-400">Say About Us</span>
          </h2>

          {/* Description */}
          <p className="font-inter font-light text-lg text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
            Read genuine reviews from our satisfied customers who have experienced divine journeys with Tridev Travel Agency across North India's sacred destinations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white dark:bg-[#262626] border border-gray-200 dark:border-[#3A3A3A] rounded-xl p-8 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-inter text-gray-700 dark:text-white/87 leading-relaxed mb-6 text-base">
                "{testimonial.text}"
              </p>

              {/* Trip Info */}
              <div className="mb-6">
                <span className="font-inter text-sm bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">
                  {testimonial.trip}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.9)" }}
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-gray-900 dark:text-white/87">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 dark:text-white/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl mb-4">
              Trusted by Thousands
            </h3>
            <p className="font-inter opacity-90 max-w-2xl mx-auto">
              Join the thousands of satisfied pilgrims who have experienced memorable spiritual journeys with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-poppins font-bold text-3xl md:text-4xl mb-2">5000+</div>
              <div className="font-inter text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl md:text-4xl mb-2">500+</div>
              <div className="font-inter text-sm opacity-90">4 Dham Yatras</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl md:text-4xl mb-2">1000+</div>
              <div className="font-inter text-sm opacity-90">Temple Tours</div>
            </div>
            <div>
              <div className="font-poppins font-bold text-3xl md:text-4xl mb-2">4.9</div>
              <div className="font-inter text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white dark:bg-[#262626] border border-gray-200 dark:border-[#3A3A3A] rounded-2xl p-8 md:p-12">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl text-gray-900 dark:text-white/87 mb-4">
              Start Your Spiritual Journey
            </h3>
            <p className="font-inter text-gray-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied pilgrims and experience the divine blessings of North India's sacred destinations with our expertly crafted tour packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const message = `Hi, I would like to start planning my spiritual journey with Tridev Travel`;
                  window.open(`https://wa.me/919634347223?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                Plan My Journey
              </button>
              <button 
                onClick={() => {
                  const message = `Hi, I would like to share my experience with Tridev Travel`;
                  window.open(`https://wa.me/919634347223?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-white dark:bg-[#121212] border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white/87 hover:bg-gray-50 dark:hover:bg-gray-800 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
              >
                Share Your Experience
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
