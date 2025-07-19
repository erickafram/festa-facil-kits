import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingCart, Phone, User, LogOut, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";

// Função para scroll suave para seções
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Menus principais para landing page com scroll
const mainMenuItems = [
  { name: "Infantil", sectionId: "produtos" },
  { name: "Festas", sectionId: "produtos" },
  { name: "Temáticos", sectionId: "produtos" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-[#624e83]">
                Decorae
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {/* Menu Principal Simplificado */}
              {mainMenuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-foreground hover:text-[#624e83] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center hover:text-[#624e83] hover:border-[#624e83]">
              <Phone className="w-4 h-4" />
              <span className="ml-2 hidden md:inline">Contato</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="relative flex items-center hover:text-[#624e83] hover:border-[#624e83]"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-2 hidden md:inline">Carrinho</span>
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-[#624e83] text-white">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-[#624e83] text-white">
                        {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline ml-2">{user.name.split(' ')[0]}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => navigate(user.role === 'admin' ? '/admin' : '/dashboard')}>
                    <User className="w-4 h-4 mr-2" />
                    {user.role === 'admin' ? 'Painel Admin' : 'Minha Conta'}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center hover:text-[#624e83] hover:border-[#624e83]"
                onClick={() => navigate('/login')}
              >
                <User className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Entrar</span>
              </Button>
            )}

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
              {/* Menu Mobile Simplificado */}
              {mainMenuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    setMobileMenuOpen(false);
                  }}
                  className="text-foreground hover:text-[#624e83] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 pb-2">
                <Button variant="outline" className="w-full mb-2 flex items-center justify-center hover:text-[#624e83] hover:border-[#624e83]">
                  <Phone className="w-4 h-4" />
                  <span className="ml-2">Contato</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};