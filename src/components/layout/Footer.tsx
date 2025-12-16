import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappLink = "https://api.whatsapp.com/send?phone=5544999264057&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Exata%20Assessoria%20Cont%C3%A1bil.";

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Soluções contábeis completas para empresas e pessoas físicas, com atendimento humanizado e agilidade em Maringá e região.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/exata.assessoria.contabil_?igsh=b2Fudmh6cXZvdTYz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Quem Somos', href: '/quem-somos' },
                { name: 'Serviços', href: '/servicos' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contato', href: '/contato' },
                { name: 'Localização', href: '/localizacao' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {[
                'Abertura de Empresas',
                'Planejamento Tributário',
                'Contabilidade Geral',
                'Departamento Pessoal',
                'Declaração IRPF',
                'Regularização de Obras',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/servicos"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Av. Tuiuti, 2412, Sobre Loja, Sala 17<br />
                  Jardim Pinheiros - CEP 87043-629<br />
                  Maringá - Paraná
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <a href="tel:+5544999264057" className="hover:text-primary-foreground block">(44) 99926-4057</a>
                  <a href="tel:+5544988157018" className="hover:text-primary-foreground block">(44) 98815-7018</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:exata@exatacontabilidademga.com.br"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm break-all"
                >
                  exata@exatacontabilidademga.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Seg - Sex: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} EXATA ASSESSORIA CONTÁBIL LTDA. CNPJ: 58.230.738/0001-25. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Responsáveis: Alexandre Oliveira e Tiago Nery - Contadores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
