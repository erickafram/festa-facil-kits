import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "Mais Alugado" | "Lançamento" | "Promoção";
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
    });

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case "Mais Alugado":
        return "bg-primary text-primary-foreground";
      case "Lançamento":
        return "bg-accent text-accent-foreground";
      case "Promoção":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-primary/10 hover:border-primary/30 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {product.badge && (
          <Badge 
            className={`absolute top-3 left-3 ${getBadgeVariant(product.badge)}`}
          >
            {product.badge}
          </Badge>
        )}

        {product.originalPrice && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          
          {product.rating && (
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${
                      i < product.rating! 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    }`} 
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">
                ({product.rating}/5)
              </span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => {
              // Scroll to product details or open modal
              toast({
                title: "Ver detalhes",
                description: "Funcionalidade em desenvolvimento.",
              });
            }}
          >
            Ver Detalhes
          </Button>
          
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};