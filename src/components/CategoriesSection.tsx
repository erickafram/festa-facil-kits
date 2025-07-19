import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Kits Básicos",
    price: "200",
    description: "Perfeito para festas intimistas",
    features: ["8-10 pessoas", "Decoração essencial", "Fácil montagem"],
    gradient: "from-blue-400 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    icon: "🎈",
  },
  {
    title: "Kits Premium",
    price: "280",
    description: "Decoração completa e sofisticada",
    features: ["12-15 pessoas", "Itens premium", "Suporte incluso"],
    gradient: "from-purple-400 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    popular: true,
    icon: "✨",
  },
  {
    title: "Decoração Completa",
    price: "400",
    description: "Experiência premium total",
    features: ["20+ pessoas", "Decoração luxo", "Montagem assistida"],
    gradient: "from-green-400 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    icon: "🏆",
  },
  {
    title: "Chá Revelação",
    price: "280",
    description: "Momento mágico garantido",
    features: ["Surpresa especial", "Cores personalizadas", "Foto perfeita"],
    gradient: "from-pink-400 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100",
    icon: "🎭",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-5 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full opacity-5 animate-float blur-3xl" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-sm rounded-full border border-primary/20 shadow-soft mb-6">
            <span className="text-sm font-medium text-primary">🎯 Escolha Perfeita</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o kit ideal para sua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              celebração
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diferentes opções para tornar sua festa única e especial, com tudo que você precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-700 transform hover:-translate-y-4 border-0 bg-gradient-card backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {category.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full shadow-elegant font-bold text-sm animate-bounce-gentle">
                    🔥 Mais Popular
                  </div>
                </div>
              )}
              
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Icon and Gradient Line */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{category.icon}</div>
                    <div className="w-12 h-1 bg-gradient-primary rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                  
                  <div className={`h-3 w-full bg-gradient-to-r ${category.gradient} rounded-full shadow-soft`}></div>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>

                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    R$ {category.price}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    a partir de
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mr-3 shadow-soft">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="category" 
                  className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow transform group-hover:scale-105 transition-all duration-500 py-3 text-base font-semibold"
                >
                  <span className="mr-2">🛍️</span>
                  Ver kits disponíveis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};