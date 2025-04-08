"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import spiralAnimation from "@/animations/spiral-line.json";
import { Badge } from "@/components/ui/badge";

const AppPromo = () => {
  // Log to verify animation data is loaded
  console.log("Spiral Animation Data:", spiralAnimation);

  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] py-4 md:py-6">
      {/* Coral semicircle background */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-[#F26B4E]/10 rounded-tl-full" />
      
      <div className="container relative">
        <div className="mb-4">
          <Badge className="w-fit bg-[#FFF8E7] text-[#F26B4E] hover:bg-[#FFF8E7]/80 text-[10px] font-normal mb-4" variant="outline">
            Mobile App
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Mental health care,
            <br />
            <span className="text-[#F26B4E]">simplified.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="relative z-10 max-w-xl">
            <p className="text-xl mb-8 text-gray-700">
              Book and manage your therapy appointments with ease. Find the right mental health provider 
              and start your wellness journey today.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-lg mb-4 font-medium">Download the Attune app to get started</p>
                <div className="bg-white p-4 rounded-[5px] inline-block shadow-lg">
                  <Image
                    src="/images/qr code.jpg"
                    alt="QR Code to download Attune app"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-[5px]"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="transition-transform hover:scale-105">
                  <Image
                    src="/images/app store.png"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto rounded-[5px]"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <Image
                    src="/images/google play.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto rounded-[5px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Phone Image Column */}
          <div className="relative h-[480px] lg:h-[560px]">
            {/* Single test animation first */}
            <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px]">
              <Lottie
                animationData={spiralAnimation}
                loop={true}
                className="w-full h-full"
                onLoadedImages={() => console.log("Lottie animation loaded")}
              />
            </div>

            <div className="absolute right-0 top-[60%] -translate-y-1/2 transform rotate-[-12deg] relative z-10">
              <Image
                src="/images/Attune phone.svg"
                alt="Attune app preview showing provider booking interface"
                width={460}
                height={920}
                className="w-auto h-[644px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo; 