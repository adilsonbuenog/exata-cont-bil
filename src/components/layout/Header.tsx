import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
    { name: 'Localização', href: '/localizacao' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const whatsappLink = "https://wa.me/5544999264057?text=Olá! Gostaria de saber mais sobre os serviços da Exata Assessoria Contábil.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-exata.jpeg"
            alt="Exata Assessoria Contábil"
            className="h-16 sm:h-18 w-auto object-contain"
          />
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+5544999264057">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                (44) 99926-4057
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 bg-primary hover:bg-navy-light">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-2 ${
                    isActive(item.href) ? 'text-primary bg-secondary rounded' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a href="tel:+5544999264057">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    (44) 99926-4057
                  </Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 bg-primary hover:bg-navy-light">
                    <MessageCircle className="w-4 h-4" />
                    Fale pelo WhatsApp
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
