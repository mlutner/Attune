import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProviderSearch from "@/components/ProviderSearch";
import MentalHealthSpecialties from "@/components/MentalHealthSpecialties";
import ProviderCTA from "@/components/ProviderCTA";
import AppPromo from "@/components/AppPromo";
import WhyAttune from "@/components/WhyAttune";
import CityFinder from "@/components/CityFinder";
import TherapyMatch from "@/components/TherapyMatch";

export default function Home() {
  const popularSpecialties = [
    "Anxiety",
    "Depression",
    "ADHD",
    "Trauma",
    "Relationships",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-16">
        <div className="container relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8 items-center">
            {/* Text Content */}
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none">
              <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Find Your Path to{' '}
                <span className="text-[#F26B4E] font-semibold">
                  Mental Wellness
                </span>
                {' '}with Attune
              </h1>
              <p className="mt-6 text-lg text-muted-foreground font-normal">
                Connect with qualified mental health professionals who understand your unique journey. 
                Our platform makes it easy to find the right therapist, counselor, or psychologist for you.
              </p>
              <div className="mt-8 lg:mt-10">
                <ProviderSearch className="mb-6" />
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative mt-8 lg:col-span-6 lg:mt-0">
              <div className="relative mx-auto max-w-3xl lg:max-w-none">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/2]">
                  <Image
                    src="/images/hero.svg"
                    alt="Mental health illustration"
                    fill
                    className="object-contain scale-115"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attune Section */}
      <WhyAttune />

      {/* Specialties Section */}
      <MentalHealthSpecialties />

      {/* Therapy Match Section */}
      <TherapyMatch />

      {/* App Promo Section */}
      <AppPromo />

      {/* City Finder Section */}
      <CityFinder />

      {/* Provider CTA Section */}
      <ProviderCTA />
    </div>
  );
}
