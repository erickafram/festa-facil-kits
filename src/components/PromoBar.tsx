import { Button } from "@/components/ui/button";
import { X, Zap } from "lucide-react";
import { useState } from "react";

export const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-2xl border-t-2 border-primary-glow animate-pulse">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-accent animate-bounce" />
              <span className="font-bold text-sm md:text-base">PROMOÇÃO RELÂMPAGO!</span>
            </div>
            <div className="hidden sm:block text-sm md:text-base">
              🎉 <strong>15% OFF</strong> em todos os kits - Apenas hoje!
            </div>
            <div className="sm:hidden text-xs">
              <strong>15% OFF</strong> - Hoje!
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs md:text-sm"
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              APROVEITAR AGORA
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};