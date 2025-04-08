import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check, Stethoscope, Shield, Users, Search } from "lucide-react";

const valueProps = [
  {
    title: ["Smart", "Matching"],
    description: "Connect with therapists who truly fit your needs, eliminating trial and error.",
    icon: Stethoscope
  },
  {
    title: ["Verified", "Professionals"],
    description: "Every provider is verified, ensuring trust in your mental health journey.",
    icon: Shield
  },
  {
    title: ["Culturally", "Responsive Care"],
    description: "Find therapists who understand your cultural background and experiences.",
    icon: Users
  },
  {
    title: ["Simplified", "Navigation"],
    description: "Filter by key criteria to easily find the right support for you.",
    icon: Search
  },
];

export default function WhyAttune() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] py-16 md:py-24">
      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <Badge 
            className="w-fit bg-white/80 text-[#F26B4E] hover:bg-white text-xs tracking-wide uppercase mx-auto mb-5 border-[#F26B4E]/20 px-4 py-1.5" 
            variant="outline"
          >
            Why Attune
          </Badge>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F26B4E] mb-5 tracking-tight max-w-3xl mx-auto leading-[1.15]">
            Finding Mental Health Support Made Simple
          </h2>
          <p className="text-gray-600/90 max-w-2xl mx-auto text-lg font-normal leading-relaxed">
            We're transforming how people connect with mental health professionals
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Running People Illustration */}
          <div className="relative md:-ml-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/people running.svg"
                alt="People supporting each other on their mental health journey"
                fill
                className="object-contain relative z-10 scale-125 transform md:hover:scale-[1.3] transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Right: Value Props Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl relative z-10">
              {valueProps.map((prop, index) => (
                <div key={index} className="group h-full">
                  <div className="flex items-start gap-5 bg-[#FFF8E7] rounded-3xl p-6 border border-[#FFE168] shadow-sm hover:shadow-md transition-all duration-200 h-full">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFE168]">
                        <prop.icon className="w-6 h-6 text-[#F26B4E]" />
                      </div>
                    </div>
                    <div className="min-h-[120px] flex flex-col">
                      <h3 className="text-xl font-medium text-[#F26B4E] mb-2.5 leading-tight">
                        {prop.title[0]}<br />{prop.title[1]}
                      </h3>
                      <p className="text-[#475467] text-base leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 