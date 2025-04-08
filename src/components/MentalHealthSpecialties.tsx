"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface SpecialtyCardProps {
  imageSrc: string;
  title: string;
  className?: string;
  isLargeIcon?: boolean;
}

const SpecialtyCard = ({
  imageSrc,
  title,
  className,
  isLargeIcon = false,
}: SpecialtyCardProps) => {
  return (
    <div
      className={cn(
        "border w-full rounded-md overflow-hidden h-full",
        "bg-[#FFFDF7]",
        "border-border",
        "p-6 flex flex-col items-center justify-center gap-4",
        "transition-all duration-200 ease-in-out",
        "hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      <div className={cn(
        "relative flex items-center justify-center",
        isLargeIcon ? "h-[7.2rem] w-[7.2rem]" : "h-[6.25rem] w-[6.25rem]"
      )}>
        <Image
          src={imageSrc}
          alt={`${title} icon`}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-medium text-foreground text-center">
        {title}
      </h3>
    </div>
  );
};

interface SpecialtyGridProps {
  className?: string;
}

const SpecialtyGrid = ({ className }: SpecialtyGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const specialties = [
    {
      title: "Specialized Therapist",
      imageSrc: "/images/Therapist.svg",
      isLargeIcon: true
    },
    {
      title: "Counsellor",
      imageSrc: "/images/counsellor.svg",
      isLargeIcon: true
    },
    {
      title: "Psychologist",
      imageSrc: "/images/psychologist.svg",
    },
    {
      title: "Social Worker",
      imageSrc: "/images/social worker.svg",
    },
    {
      title: "Psychiatrist",
      imageSrc: "/images/psychiatrist.svg",
    },
    {
      title: "Support Group",
      imageSrc: "/images/support group.svg",
    },
  ];

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {specialties.map((specialty, idx) => (
          <div
            key={idx}
            className="relative h-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-primary/5 block rounded-md z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <SpecialtyCard
              imageSrc={specialty.imageSrc}
              title={specialty.title}
              isLargeIcon={specialty.isLargeIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MentalHealthSpecialties = () => {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="text-center mb-4">
        <Badge className="w-fit bg-[#FFF8E7] text-[#F26B4E] hover:bg-[#FFF8E7]/80 text-[10px] font-normal mx-auto mb-4" variant="outline">
          Specialties
        </Badge>
        <h2 className="text-3xl font-bold text-[#F26B4E] mb-2">
          Top-searched specialties
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with qualified mental health professionals who can provide the support and guidance you need.
        </p>
      </div>
      <SpecialtyGrid />
    </section>
  );
};

export default MentalHealthSpecialties; 