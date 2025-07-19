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
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hero rounded-full opacity-8 animate-float blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glass rounded-full opacity-5 animate-float blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-sm rounded-full border border-primary/20 shadow-soft">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
                <span className="text-sm font-medium text-primary">✨ Mais de 500 festas realizadas</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transforme sua festa em{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                  momentos inesquecíveis
                  <div className="absolute inset-0 bg-gradient-primary bg-clip-text text-transparent blur-sm opacity-50"></div>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Kits completos Pegue e Monte para decoração de mesa. 
                <span className="font-semibold text-foreground"> Prático, bonito e sem complicação!</span>
              </p>
            </div>

            {/* Enhanced Benefits Badges */}
            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group flex items-center px-4 py-3 bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-2xl shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="hero" 
                size="lg"
                className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-500 px-8 py-4 text-lg font-bold animate-bounce-gentle"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  ✨ Ver todos os kits
                </span>
                <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-gradient-glass hover:shadow-elegant transition-all duration-500"
              >
                <span className="mr-2">💬</span>
                Falar no WhatsApp
              </Button>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-3 group">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                <div className="text-foreground font-semibold">
                  <div className="text-lg font-bold">5.0</div>
                  <div className="text-xs text-muted-foreground">500+ avaliações</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="text-foreground">
                  <div className="font-semibold">Qualidade Premium</div>
                  <div className="text-xs text-muted-foreground">Garantia total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative lg:ml-10">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative z-20 transform group-hover:scale-105 transition-all duration-700">
                <img
                  src={heroImage}
                  alt="Mesa decorada com kit de festa"
                  className="w-full h-auto rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-glass rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -left-4 z-30 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-2xl shadow-elegant animate-bounce-gentle font-semibold text-sm">
                🎉 Entrega Grátis
              </div>
              
              <div className="absolute -bottom-4 -right-4 z-30 bg-accent text-accent-foreground px-4 py-2 rounded-2xl shadow-elegant animate-bounce-gentle font-semibold text-sm" style={{animationDelay: '1s'}}>
                ⚡ Montagem Fácil
              </div>
            </div>
            
            {/* Enhanced Floating elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent rounded-full opacity-15 animate-float blur-2xl" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 -right-12 w-24 h-24 bg-secondary rounded-full opacity-10 animate-float blur-xl" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};