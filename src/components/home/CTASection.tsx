import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const whatsappLink = "https://wa.me/5544999264057?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.";

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Maringá e toda região
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Atendemos Maringá e toda região com excelência contábil
            </h2>
            
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Seja para abrir sua empresa, organizar suas finanças ou simplesmente ter mais tempo para focar no que importa, 
              a Exata está pronta para ajudar você.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 py-6 text-base">
                  <MessageCircle className="w-5 h-5" />
                  Falar com um Contador Agora
                </Button>
              </a>
              <a href="tel:+5544999264057">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 px-8 py-6 text-base">
                  <Phone className="w-5 h-5" />
                  (44) 99926-4057
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
