import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingBag, Truck, PartyPopper, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Escolha o Kit",
    description: "Navegue pelos temas e escolha o ideal para sua festa",
    color: "from-pink-400 to-purple-500",
  },
  {
    icon: ShoppingBag,
    title: "Faça o Pedido",
    description: "Selecione data e endereço de entrega",
    color: "from-purple-400 to-blue-500",
  },
  {
    icon: Truck,
    title: "Receba em Casa",
    description: "Entregamos tudo limpo e organizado",
    color: "from-blue-400 to-green-500",
  },
  {
    icon: PartyPopper,
    title: "Monte e Celebre",
    description: "Siga o manual simples de montagem",
    color: "from-green-400 to-yellow-500",
  },
  {
    icon: RotateCcw,
    title: "Devolvemos",
    description: "Coletamos no dia seguinte",
    color: "from-yellow-400 to-red-500",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Como{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              funciona?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e descomplicado para sua festa perfeita
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-primary/10 hover:border-primary/30 text-center bg-background"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Step number */}
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden mt-12">
          <div className="flex flex-col items-center space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center w-full max-w-md">
                {index < steps.length - 1 && (
                  <div className="w-full h-px bg-gradient-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};