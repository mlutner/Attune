"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const ProviderCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] py-16 md:py-24">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
            <Image
              src="/images/Therapist with client.png"
              alt="Therapist working with a client in a professional setting"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <div className="max-w-xl">
              <Badge className="w-fit bg-white text-[#F26B4E] hover:bg-white/80 text-[10px] font-normal mb-4" variant="outline">
                For Providers
              </Badge>
              <h2 className="text-lg font-medium text-[#F26B4E] mb-4">
                Attune for private practices
              </h2>
              <h3 className="text-4xl font-medium tracking-tight mb-8">
                Are you a provider interested in reaching new clients?
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-[#F26B4E]" />
                  </div>
                  <span className="text-lg">
                    Reach clients in your area looking for a new provider
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-[#F26B4E]" />
                  </div>
                  <span className="text-lg">
                    Fill last-minute openings in your schedule
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-[#F26B4E]" />
                  </div>
                  <span className="text-lg">
                    Strengthen your online reputation with verified reviews
                  </span>
                </li>
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-[#FFE168] hover:bg-[#FFD668] text-black font-medium text-lg px-8 h-14"
              >
                <Link href="/providers/signup">
                  List your practice on Attune
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderCTA; 