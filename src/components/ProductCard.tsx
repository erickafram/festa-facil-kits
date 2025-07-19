import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      description: `${product.name} foi adicionado ao carrinho. Clique no carrinho para finalizar a compra.`,
      duration: 3000,
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
    <Card className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-card backdrop-blur-sm">
      <div className="relative overflow-hidden">
        {/* Image with overlay effect */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-soft ${getBadgeVariant(product.badge)} animate-bounce-gentle`}>
              {product.badge === "Mais Alugado" && "🔥 "}
              {product.badge === "Lançamento" && "✨ "}
              {product.badge === "Promoção" && "⚡ "}
              {product.badge}
            </div>
          )}
        </div>

        {product.originalPrice && (
          <div className="absolute top-3 right-3">
            <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold shadow-soft animate-pulse">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          </div>
        )}

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-gradient-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant font-bold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          
          {product.rating && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < product.rating! 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300"
                      } transition-colors duration-300`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  ({product.rating}/5)
                </span>
              </div>
              <div className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
                {product.category}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline space-x-3">
            <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <div className="text-xs text-green-600 font-semibold">
              Economize {formatPrice(product.originalPrice - product.price)}
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-semibold text-xs text-primary-foreground"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};