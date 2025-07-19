import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const navigation = [
  { name: "Infantil Feminino", href: "#infantil-feminino" },
  { name: "Infantil Masculino", href: "#infantil-masculino" },
  { name: "Festa Adulto", href: "#festa-adulto" },
  { name: "Chá Revelação", href: "#cha-revelacao" },
  { name: "Chá de Bebê", href: "#cha-bebe" },
  { name: "Temáticos", href: "#tematicos" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Infinitos Sonhos
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4" />
              Contato
            </Button>
            
            <Button variant="cart" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Carrinho</span>
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button variant="outline" className="w-full mb-2">
                  <Phone className="w-4 h-4" />
                  Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};