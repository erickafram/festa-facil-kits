import { Button } from "@/components/ui/button";
import { X, Zap } from "lucide-react";
import { useState } from "react";

export const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground shadow-2xl border-t-4 border-accent">
      {/* Shimmer effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      <div className="container mx-auto px-2 py-2 sm:px-4 sm:py-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-accent drop-shadow-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xs sm:text-sm md:text-lg tracking-wider">
                  🚨 PROMOÇÃO RELÂMPAGO! 🚨
                </span>
                <span className="text-xs md:text-sm font-medium opacity-90">
                  Oferta por tempo limitado
                </span>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl font-black text-white drop-shadow-lg">15% OFF</span>
              <span className="text-sm font-semibold">em todos os kits!</span>
            </div>
            
            <div className="sm:hidden">
              <span className="text-sm font-black text-white">15% OFF</span>
            </div>
            
            {/* Countdown timer visual effect */}
            <div className="hidden md:flex items-center space-x-1 text-xs">
              <span className="bg-white/20 px-2 py-1 rounded font-bold">23h</span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded font-bold">59m</span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded font-bold">45s</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-3">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-black text-xs sm:text-sm md:text-base px-2 py-1 sm:px-6 sm:py-3 shadow-elegant transform hover:scale-105 transition-all duration-300 animate-bounce-gentle"
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="hidden sm:inline">🎯 APROVEITAR AGORA!</span>
              <span className="sm:hidden">🎯 APROVEITAR</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-white/20 rounded-full transition-colors duration-300"
              onClick={() => setIsVisible(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Bottom progress bar effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div className="h-full bg-accent" style={{width: '76%'}}></div>
        </div>
      </div>
    </div>
  );
};