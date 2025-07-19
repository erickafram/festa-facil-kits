import { Card, CardContent } from "@/components/ui/card";
import { Truck, Palette, DollarSign, Phone } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Entrega Grátis",
    description: "Em toda a região metropolitana",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Montagem Simples",
    description: "Tudo organizado para facilitar sua vida",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Melhor Preço",
    description: "Qualidade premium com preço justo",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Phone,
    title: "Suporte Total",
    description: "Tire suas dúvidas antes e depois da locação",
    gradient: "from-blue-400 to-indigo-500",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Por que escolher{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Infinitos Sonhos?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidamos de cada detalhe para que sua festa seja perfeita
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-primary/10 hover:border-primary/30 text-center"
            >
              <CardContent className="p-8 space-y-4">
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};