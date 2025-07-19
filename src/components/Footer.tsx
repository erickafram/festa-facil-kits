import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  empresa: [
    { name: "Sobre nós", href: "#sobre" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Nossos kits", href: "#produtos" },
    { name: "Depoimentos", href: "#depoimentos" },
  ],
  categorias: [
    { name: "Infantil Feminino", href: "#infantil-feminino" },
    { name: "Infantil Masculino", href: "#infantil-masculino" },
    { name: "Festa Adulto", href: "#festa-adulto" },
    { name: "Chá Revelação", href: "#cha-revelacao" },
  ],
  suporte: [
    { name: "Central de Ajuda", href: "#ajuda" },
    { name: "Políticas", href: "#politicas" },
    { name: "Termos de Uso", href: "#termos" },
    { name: "Privacidade", href: "#privacidade" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Fique por dentro das{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                novidades
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Receba em primeira mão nossos lançamentos e promoções exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1"
              />
              <Button variant="default" className="sm:w-auto">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Infinitos Sonhos
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transformamos suas celebrações em momentos inesquecíveis com nossos 
                kits completos de decoração para festa. Qualidade, praticidade e 
                beleza em cada detalhe.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@infinitossonhos.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo - SP</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-green-500 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Infinitos Sonhos. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#termos" className="text-muted-foreground hover:text-primary transition-colors">
                Termos
              </a>
              <a href="#privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};