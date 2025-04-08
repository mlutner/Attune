"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";
import { useState } from "react";

const CitySelector = () => {
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);

  const cities = [
    {
      province: "Ontario",
      cities: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
      animation: "/animations/map-location.json"
    },
    {
      province: "British Columbia",
      cities: ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond"],
      animation: "/animations/map-location.json"
    },
    {
      province: "Alberta",
      cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"],
      animation: "/animations/map-location.json"
    },
    {
      province: "Quebec",
      cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"],
      animation: "/animations/map-location.json"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <Lottie
          animationData={require("/public/animations/spiral-dots.json")}
          loop={true}
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <Lottie
          animationData={require("/public/animations/spiral-dots.json")}
          loop={true}
          className="w-full h-full"
        />
      </div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-[#F26B4E]">
            Find Mental Health Support in Your City
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with licensed therapists and counselors in major cities across Canada. 
            In-person and virtual appointments available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cities.map((region) => (
            <div key={region.province} className="space-y-4">
              <button
                onClick={() => setExpandedProvince(
                  expandedProvince === region.province ? null : region.province
                )}
                className="w-full"
              >
                <div className="flex items-center justify-between bg-[#FFF8E7] p-4 rounded-lg group hover:bg-[#FFF8E7]/80 transition-colors">
                  <h3 className="font-medium text-lg">{region.province}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6">
                      <Lottie
                        animationData={require("/public/animations/map-pin.json")}
                        loop={false}
                        autoplay={expandedProvince === region.province}
                        className="w-full h-full"
                      />
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-[#F26B4E] transition-transform duration-200 ${
                        expandedProvince === region.province ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>
              <div 
                className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                  expandedProvince === region.province ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {region.cities.map((city) => (
                  <button
                    key={city}
                    className="block w-full text-left py-2 text-gray-600 hover:text-[#F26B4E] transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-[#F26B4E] hover:bg-[#F26B4E]/90 text-white group relative overflow-hidden"
          >
            <span className="relative z-10">View All Locations</span>
            <div className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
              <Lottie
                animationData={require("/public/animations/location-pulse.json")}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CitySelector; 