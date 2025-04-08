import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Benefits = () => {
  const benefits = [
    {
      icon: "/icons/heart-hands.svg",
      title: "Better Outcomes",
      description: "Clients who feel well-matched with their therapist experience better outcomes"
    },
    {
      icon: "/icons/sun-smile.svg",
      title: "Save Time & Energy",
      description: "The right match saves time, money, and emotional energy"
    },
    {
      icon: "/icons/people-group.svg",
      title: "Remove Barriers",
      description: "Thoughtful matching removes critical barriers to accessing appropriate care"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-[#FFF8E7]/30 py-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F26B4E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F26B4E]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge 
            className="w-fit bg-white text-[#F26B4E] hover:bg-white/80 text-[10px] font-normal mx-auto mb-4 border-[#F26B4E]" 
            variant="outline"
          >
            Why Attune
          </Badge>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Better Matching, Better Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our thoughtful matching process ensures you find the right therapist for your unique needs
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                <div className="relative w-full h-full">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={80}
                    height={80}
                    className="w-full h-full drop-shadow-lg"
                  />
                  {/* Hover Effect Circle */}
                  <div className="absolute inset-0 bg-[#F26B4E]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
              <h3 className="text-[#F26B4E] text-xl font-medium mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[280px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 