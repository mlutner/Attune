import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      title: "Quick Assessment",
      description: "Share your concerns, goals, and preferences through a brief questionnaire.",
      icon: "✓",
      color: "#F26B4E"
    },
    {
      title: "Smart Analysis",
      description: "Our algorithm considers your specific needs, preferred approaches, practical requirements, and cultural factors.",
      icon: "✓",
      color: "#F26B4E"
    },
    {
      title: "Personalized Results",
      description: "Receive a curated selection of well-matched therapists, with clear explanations of why each might be right for you.",
      icon: "✓",
      color: "#F26B4E"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            How Attune Connects You
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F26B4E]/10 flex items-center justify-center mt-1"
                >
                  <span className="text-[#F26B4E] text-sm">{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#F26B4E] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px]">
          <Image
            src="/images/therapy-illustration.png"
            alt="Therapy illustration showing people in consultation"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 