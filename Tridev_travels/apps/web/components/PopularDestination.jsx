"use client";

import { useState } from "react";
import { MapPin, Calendar, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function PopularDestinations() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const {
    data: destinations = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["destinations", { popular: true }],
    queryFn: async () => {
      const response = await fetch("/api/destinations?popular=true");
      if (!response.ok) {
        throw new Error("Failed to fetch destinations");
      }
      const result = await response.json();
      return result.data;
    },
  });

  const filteredDestinations =
    selectedCategory === "all"
      ? destinations
      : destinations.filter((dest) => dest.category === selectedCategory);

  const handleEnquireNow = (destination) => {
    const message = `Hi, I would like to enquire about ${typeof destination === "string" ? destination : destination.name} tour package`;
    window.open(
      `https://wa.me/919634347223?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const categories = [
    { id: "all", name: "All Destinations" },
    { id: "temple", name: "Temple Tours" },
    { id: "pilgrimage", name: "Pilgrimage" },
    { id: "dham", name: "4 Dham" },
    { id: "tourist", name: "Tourist Places" },
  ];

  if (error) {
    return (
      <div className="py-16 px-6 text-center">
        <p className="text-red-600">
          Failed to load destinations. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#121212] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow Tag */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 border border-gray-200 dark:border-[#3A3A3A] rounded-full bg-white dark:bg-[#262626]">
              <span className="font-inter font-light text-sm text-gray-700 dark:text-white/87">
                /Popular Destinations
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white/87 leading-tight mb-6">
            Explore Sacred
            <br />
            North India
          </h2>

          {/* Description */}
          <p className="font-inter font-light text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            Discover the spiritual and cultural treasures of North India with
            our carefully curated travel packages covering ancient temples, holy
            cities, and divine destinations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#262626] border border-gray-200 dark:border-[#3A3A3A] rounded-xl overflow-hidden animate-pulse"
              >
                <div className="aspect-[4/3] bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Destinations Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white dark:bg-[#262626] border border-gray-200 dark:border-[#3A3A3A] rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image_url}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ filter: "brightness(0.8)" }}
                  />

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      <MapPin className="w-3 h-3 text-white" />
                      <span className="font-inter text-xs text-white">
                        {destination.location}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-inter font-medium text-gray-700 capitalize">
                      {destination.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-poppins font-medium text-xl text-gray-900 dark:text-white/87 mb-2">
                    {destination.name}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-gray-600 dark:text-white/60 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* State */}
                  <div className="mb-6">
                    <span className="font-inter text-xs bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                      {destination.state}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleEnquireNow(destination)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-inter font-medium py-3 px-4 rounded-lg transition-all duration-200 active:translate-y-px"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-gray-600 dark:text-white/60">
              No destinations found for the selected category.
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => handleEnquireNow("All North India Destinations")}
            className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-white/90 text-white dark:text-[#121212] font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 active:translate-y-px"
          >
            View All Destinations
          </button>
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



