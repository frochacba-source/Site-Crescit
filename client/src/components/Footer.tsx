import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
              CRESCIT<span className="text-secondary">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Contabilidade digital inteligente para empresas que buscam crescimento seguro e sem burocracia.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Nossos Serviços</a></li>
              <li><a href="#features" className="hover:text-secondary transition-colors">Diferenciais</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-secondary transition-colors">Abertura de Empresas</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contabilidade Completa</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Gestão Fiscal</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">BPO Financeiro</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Consultoria Tributária</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <span>contato@crescit.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Crescit Contabilidade. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
