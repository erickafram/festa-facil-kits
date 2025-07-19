import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ProductsSection = () => {
  const highlightedProducts = useMemo(() => {
    // Pega produtos mais alugados e lançamentos
    const mostRented = products.filter(product => product.badge === "Mais Alugado").slice(0, 5);
    const newProducts = products.filter(product => product.badge === "Lançamento").slice(0, 3);

    // Combina os dois arrays e limita a 8 produtos
    return [...mostRented, ...newProducts].slice(0, 8);
  }, []);

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Products */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nossos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Destaques
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Os favoritos dos nossos clientes e novidades que chegaram para encantar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlightedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Quer ver mais opções?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore nosso catálogo completo com todos os kits disponíveis
            </p>
            <Link to="/catalog">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Catálogo Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};