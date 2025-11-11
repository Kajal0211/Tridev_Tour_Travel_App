'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MapPin, Calendar, Clock, Users, Car, Shield, Star, Phone } from 'lucide-react';

export default function TaxiBookingPage() {
  const [formData, setFormData] = useState({
    pickup_location: '',
    drop_location: '',
    pickup_datetime: '',
    taxi_service_id: '',
    passenger_name: '',
    passenger_phone: '',
    passenger_email: ''
  });

  const queryClient = useQueryClient();

  const { data: taxiServices = [], isLoading } = useQuery({
    queryKey: ['taxi-services'],
    queryFn: async () => {
      const response = await fetch('/api/taxi-services');
      if (!response.ok) {
        throw new Error('Failed to fetch taxi services');
      }
      const result = await response.json();
      return result.data;
    },
  });

  const enquiryMutation = useMutation({
    mutationFn: async (enquiryData) => {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }
      return response.json();
    },
    onSuccess: () => {
      alert('Enquiry submitted successfully! We will contact you shortly.');
      setFormData({
        pickup_location: '',
        drop_location: '',
        pickup_datetime: '',
        taxi_service_id: '',
        passenger_name: '',
        passenger_phone: '',
        passenger_email: ''
      });
    },
    onError: () => {
      alert('Failed to submit enquiry. Please try again.');
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.pickup_location || !formData.drop_location || !formData.pickup_datetime || 
        !formData.taxi_service_id || !formData.passenger_name || !formData.passenger_phone) {
      alert('Please fill in all required fields');
      return;
    }

    const selectedService = taxiServices.find(service => service.id === formData.taxi_service_id);
    const message = `Taxi Booking Request:
    - From: ${formData.pickup_location}
    - To: ${formData.drop_location}
    - Date & Time: ${formData.pickup_datetime}
    - Vehicle: ${selectedService?.vehicle_name}
    - Passenger: ${formData.passenger_name}
    - Phone: ${formData.passenger_phone}
    - Email: ${formData.passenger_email}`;

    enquiryMutation.mutate({
      name: formData.passenger_name,
      email: formData.passenger_email,
      phone: formData.passenger_phone,
      service_type: 'taxi_booking',
      message: message
    });
  };

  const handleQuickCall = () => {
    window.open('tel:+919634347223', '_self');
  };

  const handleWhatsAppEnquiry = () => {
    const message = `Hi, I would like to enquire about taxi booking services`;
    window.open(`https://wa.me/919634347223?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            Taxi Booking
          </h1>
          <p className="font-inter text-white/90 max-w-2xl text-lg">
            Book reliable and comfortable taxi services for your travel needs across North India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
              Book Your Taxi
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="font-inter font-semibold text-lg text-gray-800">Trip Details</h3>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-green-500" />
                  <input
                    type="text"
                    name="pickup_location"
                    placeholder="Pickup Location"
                    value={formData.pickup_location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-red-500" />
                  <input
                    type="text"
                    name="drop_location"
                    placeholder="Drop Location"
                    value={formData.drop_location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="datetime-local"
                    name="pickup_datetime"
                    value={formData.pickup_datetime}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Vehicle Selection */}
              <div className="space-y-4">
                <h3 className="font-inter font-semibold text-lg text-gray-800">Select Vehicle</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {isLoading ? (
                    [...Array(3)].map((_, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 animate-pulse">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    ))
                  ) : (
                    taxiServices.map((service) => (
                      <label
                        key={service.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                          formData.taxi_service_id === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="taxi_service_id"
                          value={service.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-inter font-semibold text-gray-900">{service.vehicle_name}</h4>
                            <p className="font-inter text-sm text-gray-600 capitalize">{service.vehicle_type}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="font-inter text-sm text-gray-600">{service.capacity} Passengers</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-inter font-semibold text-blue-600">₹{service.base_rate_per_km}/km</p>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="font-inter text-sm text-gray-600">4.8</span>
                            </div>
                          </div>
                        </div>
                        {service.features && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {service.features.map((feature, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-inter"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}
                      </label>
                    ))
                  )}
                </div>
              </div>

              {/* Passenger Details */}
              <div className="space-y-4">
                <h3 className="font-inter font-semibold text-lg text-gray-800">Passenger Details</h3>
                
                <input
                  type="text"
                  name="passenger_name"
                  placeholder="Full Name *"
                  value={formData.passenger_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />

                <input
                  type="tel"
                  name="passenger_phone"
                  placeholder="Phone Number *"
                  value={formData.passenger_phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />

                <input
                  type="email"
                  name="passenger_email"
                  placeholder="Email Address (Optional)"
                  value={formData.passenger_email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={enquiryMutation.isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enquiryMutation.isLoading ? 'Submitting...' : 'Book Now'}
              </button>
            </form>
          </div>

          {/* Quick Contact & Features */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-6">
                Need Immediate Assistance?
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={handleQuickCall}
                  className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +91 96343 47223</span>
                </button>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <span>💬</span>
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-6">
                Why Choose Our Taxi Service?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-gray-900">Safe & Reliable</h4>
                    <p className="font-inter text-sm text-gray-600">Verified drivers and well-maintained vehicles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-gray-900">24/7 Service</h4>
                    <p className="font-inter text-sm text-gray-600">Available round the clock for your convenience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-gray-900">Fleet Options</h4>
                    <p className="font-inter text-sm text-gray-600">Sedan, SUV, and Tempo Traveller available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-gray-900">Rated 4.8/5</h4>
                    <p className="font-inter text-sm text-gray-600">Trusted by thousands of happy customers</p>
                  </div>
                </div>
              </div>
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


