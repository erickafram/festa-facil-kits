import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Wrench, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-party-table.jpg";

const benefits = [
  { icon: Truck, text: "Entrega Grátis" },
  { icon: Wrench, text: "Montagem Fácil" },
  { icon: Star, text: "Mais de 50 temas" },
  { icon: Award, text: "Qualidade Premium" },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative py-8 md:py-12 flex items-center overflow-hidden bg-gray-50">
      {/* Clean Background Elements - Subtle and Mobile Friendly */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 md:w-72 md:h-72 rounded-full opacity-30 animate-float blur-2xl" style={{ backgroundColor: 'rgba(98, 78, 131, 0.1)' }}></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 md:w-96 md:h-96 rounded-full opacity-20 animate-float blur-2xl" style={{ backgroundColor: 'rgba(98, 78, 131, 0.05)', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-6 md:space-y-10 animate-fade-in text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full border shadow-sm" style={{ backgroundColor: 'rgba(98, 78, 131, 0.1)', borderColor: 'rgba(98, 78, 131, 0.3)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse mr-2" style={{ backgroundColor: 'rgb(98, 78, 131)' }}></div>
                <span className="text-xs md:text-sm font-medium" style={{ color: 'rgb(98, 78, 131)' }}>✨ Mais de 1000 festas realizadas</span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Transforme sua festa em{" "}
                <span className="relative" style={{ color: 'rgb(98, 78, 131)' }}>
                  momentos inesquecíveis
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Kits completos Pegue e Monte para decoração de mesa.
                <span className="font-semibold text-gray-900"> Prático, bonito e sem complicação!</span>
              </p>
            </div>

            {/* Clean Benefits Badges */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center mr-2 md:mr-3" style={{ backgroundColor: 'rgb(98, 78, 131)' }}>
                    <benefit.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'rgb(98, 78, 131)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(88, 68, 121)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(98, 78, 131)'}
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ✨ Ver todos os kits
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300"
              >
                💬 Falar no WhatsApp
              </Button>
            </div>

            {/* Clean Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-gray-900 font-semibold">
                  <div className="text-base md:text-lg font-bold">5.0</div>
                  <div className="text-xs text-gray-500">500+ avaliações</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgb(98, 78, 131)' }}>
                  <Award className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <div className="text-gray-900">
                  <div className="font-semibold text-sm md:text-base">Qualidade Premium</div>
                  <div className="text-xs text-gray-500">Garantia total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Hero Image - Only visible on desktop */}
          <div className="hidden lg:block relative mt-8 lg:mt-0 lg:ml-10">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-20">
                <img
                  src={heroImage}
                  alt="Mesa decorada com kit de festa"
                  className="w-full h-auto rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>

              {/* Clean Floating Badges - Only visible on desktop (md and up) */}
              <div className="absolute -top-4 -left-4 z-30 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
                🎉 Entrega Grátis
              </div>

              <div className="absolute -bottom-4 -right-4 z-30 text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm" style={{ backgroundColor: 'rgb(98, 78, 131)' }}>
                ⚡ Montagem Fácil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};