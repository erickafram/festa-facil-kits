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
    <footer className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 border-t border-purple-500 text-white">


      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Decorae
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transformamos suas celebrações em momentos inesquecíveis com nossos 
                kits completos de decoração para festa. Qualidade, praticidade e 
                beleza em cada detalhe.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5 text-yellow-300" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5 text-yellow-300" />
                <span>contato@decorae.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <span>São Paulo - SP</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-yellow-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categorias</h4>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-yellow-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-yellow-300 transition-colors duration-200"
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
      <div className="border-t border-purple-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 Decorae. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#termos" className="text-white/70 hover:text-yellow-300 transition-colors">
                Termos
              </a>
              <a href="#privacidade" className="text-white/70 hover:text-yellow-300 transition-colors">
                Privacidade
              </a>
              <a href="#cookies" className="text-white/70 hover:text-yellow-300 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};