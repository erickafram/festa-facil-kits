import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Kits Básicos",
    price: "200",
    description: "Perfeito para festas intimistas",
    features: ["8-10 pessoas", "Decoração essencial", "Fácil montagem"],
    gradient: "from-pink-100 to-purple-100",
  },
  {
    title: "Kits Premium",
    price: "280",
    description: "Decoração completa e sofisticada",
    features: ["12-15 pessoas", "Itens premium", "Suporte incluso"],
    gradient: "from-purple-100 to-blue-100",
    popular: true,
  },
  {
    title: "Decoração Completa",
    price: "400",
    description: "Experiência premium total",
    features: ["20+ pessoas", "Decoração luxo", "Montagem assistida"],
    gradient: "from-blue-100 to-green-100",
  },
  {
    title: "Chá Revelação",
    price: "280",
    description: "Momento mágico garantido",
    features: ["Surpresa especial", "Cores personalizadas", "Foto perfeita"],
    gradient: "from-yellow-100 to-orange-100",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Escolha o kit ideal para sua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              celebração
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferentes opções para tornar sua festa única e especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-primary/10 hover:border-primary/30"
            >
              {category.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Mais Popular
                </Badge>
              )}
              
              <CardContent className="p-6 space-y-6">
                <div className={`h-2 w-full bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    R$ {category.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    a partir de
                  </div>
                </div>

                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="category" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Ver kits
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};