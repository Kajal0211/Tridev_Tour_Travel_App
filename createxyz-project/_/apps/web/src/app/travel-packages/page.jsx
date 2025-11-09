'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, MapPin, Clock, Users, Star, Calendar, ChevronRight } from 'lucide-react';

export default function TravelPackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const { data: packages = [], isLoading, error } = useQuery({
    queryKey: ['travel-packages', { category: selectedCategory, destination: searchTerm, duration: selectedDuration }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedCategory) params.append('category', selectedCategory);
      if (searchTerm) params.append('destination', searchTerm);
      if (selectedDuration) params.append('duration', selectedDuration);

      const response = await fetch(`/api/travel-packages?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch travel packages');
      }
      const result = await response.json();
      return result.data;
    },
  });

  const handleEnquireNow = (packageItem) => {
    const message = `Hi, I would like to enquire about "${packageItem.title}" travel package`;
    window.open(`https://wa.me/919634347223?text=${encodeURIComponent(message)}`, '_blank');
  };

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'dham_yatra', label: '4 Dham Yatra' },
    { value: 'temple_tour', label: 'Temple Tours' },
    { value: 'north_india', label: 'North India Tours' },
    { value: 'premium', label: 'Premium Packages' }
  ];

  const durations = [
    { value: '', label: 'Any Duration' },
    { value: '3', label: 'Up to 3 days' },
    { value: '7', label: 'Up to 7 days' },
    { value: '14', label: 'Up to 14 days' }
  ];

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Failed to load travel packages. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            Travel Packages
          </h1>
          <p className="font-inter text-white/90 max-w-2xl text-lg">
            Discover amazing travel packages for North India destinations, 4 Dham Yatra, and temple tours
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="relative">
              <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                {durations.map((duration) => (
                  <option key={duration.value} value={duration.value}>
                    {duration.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedDuration('');
              }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-inter font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">No packages found</h3>
            <p className="font-inter text-gray-600 mb-6">Try adjusting your search criteria or browse all packages.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedDuration('');
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              View All Packages
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image_url || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800'}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-inter font-medium text-gray-700 capitalize">
                      {pkg.category?.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-inter">4.8</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                    {pkg.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-inter text-sm">{pkg.destination_name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-inter text-sm">{pkg.duration_days} Days</span>
                    </div>
                  </div>

                  <p className="font-inter text-gray-600 text-sm mb-6 line-clamp-3">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  {pkg.inclusions && pkg.inclusions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-inter font-semibold text-sm text-gray-900 mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                          <span
                            key={index}
                            className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-inter"
                          >
                            {inclusion}
                          </span>
                        ))}
                        {pkg.inclusions.length > 3 && (
                          <span className="text-gray-500 text-xs font-inter">
                            +{pkg.inclusions.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => handleEnquireNow(pkg)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Enquire Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}