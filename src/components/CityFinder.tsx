import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin } from "lucide-react";

const CityFinder = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF8E7]/30 to-white py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#F26B4E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#F26B4E]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge 
            className="w-fit bg-white text-[#F26B4E] hover:bg-white/80 text-[10px] font-normal mx-auto mb-4 border-[#F26B4E]" 
            variant="outline"
          >
            Find Support
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F26B4E] mb-4">
            Find Mental Health Support in Your City
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Connect with licensed therapists and counselors in major cities across Canada. In-person and virtual appointments available.
          </p>
          
          {/* City Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Toronto', 'Vancouver', 'Montreal', 'Calgary'].map((city) => (
              <Button
                key={city}
                variant="outline"
                className="bg-white hover:bg-[#F26B4E]/5 border-[#F26B4E]/20"
              >
                <MapPin className="w-4 h-4 mr-2 text-[#F26B4E]" />
                {city}
              </Button>
            ))}
          </div>

          <Button 
            className="bg-[#F26B4E] hover:bg-[#F26B4E]/90 text-white px-8 py-6 text-lg"
          >
            Find Therapists Near You
          </Button>
        </div>

        {/* City Illustrations */}
        <div className="mt-12 relative h-48 md:h-64">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
          <div className="flex justify-center gap-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-64 h-48 rounded-lg overflow-hidden">
                <Image
                  src={`/images/city-${i}.jpg`}
                  alt={`City ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityFinder; 