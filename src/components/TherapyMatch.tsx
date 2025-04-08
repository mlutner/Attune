import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const TherapyMatch = () => {
  return (
    <section className="w-full bg-white">
      {/* Main content section */}
      <div className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.02]" />
        
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Column */}
            <div className="flex gap-12 flex-col max-w-xl">
              <div className="flex gap-6 flex-col">
                <Badge className="w-fit bg-[#FFF8E7] text-[#F26B4E] hover:bg-[#FFF8E7]/80 text-xs font-normal" variant="outline">Find Your Match</Badge>
                <div className="flex gap-4 flex-col">
                  <h2 className="text-4xl lg:text-5xl tracking-tight font-medium">
                    Finding Your Perfect
                    <br />
                    Therapy Match
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    How Attune Connects You
                  </p>
                </div>
              </div>

              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Image
                      src="/images/check mark.svg"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-medium text-[#F26B4E]">Quick Assessment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Share your concerns, goals, and preferences through a brief questionnaire.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Image
                      src="/images/check mark.svg"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-medium text-[#F26B4E]">Smart Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our algorithm considers your specific needs, preferred approaches, practical requirements, and cultural factors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Image
                      src="/images/check mark.svg"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-medium text-[#F26B4E]">Personalized Results</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Receive a curated selection of well-matched therapists, with clear explanations of why each might be right for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration Column */}
            <div className="relative h-full flex items-center justify-center lg:justify-end translate-y-[15%]">
              <div className="relative w-full max-w-[680px] aspect-square">
                <Image
                  src="/images/perfect match. svg.svg"
                  alt="Perfect therapy match illustration"
                  fill
                  className="object-contain scale-125"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Matching Matters section */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Badge className="w-fit bg-[#FFF8E7] text-[#F26B4E] hover:bg-[#FFF8E7]/80 mx-auto mb-6 text-xs font-normal" variant="outline">Why It Works</Badge>
            <h3 className="text-3xl lg:text-4xl font-medium mb-5 text-[#F26B4E]">Why Matching Matters</h3>
            <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
              The right therapeutic relationship is the foundation of successful mental health care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 flex items-center justify-center mb-6">
                <Image
                  src="/images/better outcomes.svg"
                  alt="Better outcomes icon"
                  width={138}
                  height={138}
                  className="object-contain hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-xl font-medium text-[#F26B4E]">Better Outcomes</h4>
                <p className="text-base text-muted-foreground/90 max-w-[260px] leading-relaxed">
                  Clients who feel well-matched with their therapist experience better outcomes
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 flex items-center justify-center mb-6">
                <Image
                  src="/images/save energy.svg"
                  alt="Time and money savings icon"
                  width={138}
                  height={138}
                  className="object-contain hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-xl font-medium text-[#F26B4E]">Save Time & Energy</h4>
                <p className="text-base text-muted-foreground/90 max-w-[260px] leading-relaxed">
                  The right match saves time, money, and emotional energy
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 flex items-center justify-center mb-6">
                <Image
                  src="/images/accesibility.svg"
                  alt="Accessibility icon"
                  width={138}
                  height={138}
                  className="object-contain hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-xl font-medium text-[#F26B4E]">Remove Barriers</h4>
                <p className="text-base text-muted-foreground/90 max-w-[260px] leading-relaxed">
                  Thoughtful matching removes critical barriers to accessing appropriate care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapyMatch; 