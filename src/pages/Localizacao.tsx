import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Localizacao = () => {
  const whatsappLink = "https://wa.me/5544999264057?text=Olá! Gostaria de agendar uma visita ao escritório.";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Avenida+Tuiuti+2412+Maringá+PR";

  return (
    <Layout>
      <Helmet>
        <title>Localização | Exata Assessoria Contábil - Maringá PR</title>
        <meta name="description" content="Encontre a Exata Assessoria Contábil em Maringá. Av. Tuiuti, 2412, Sobre Loja, Sala 17 - Jardim Pinheiros. Mapa e direções para chegar." />
        <meta name="keywords" content="localização contabilidade Maringá, endereço escritório contábil, como chegar exata contabilidade" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Localização</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Onde Estamos
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Visite nosso escritório em Maringá e conheça nossa estrutura.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.9999147851445!2d-51.9354857!3d-23.4145556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd71a1f799999%3A0x9999999999999999!2sAv.%20Tuiuti%2C%202412%20-%20Jardim%20Pinheiros%2C%20Maring%C3%A1%20-%20PR%2C%2087043-629!5e0!3m2!1spt-BR!2sbr!4v1703001234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Exata Assessoria Contábil"
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Nosso Endereço
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Endereço Completo</h3>
                      <p className="text-muted-foreground">
                        Av. Tuiuti, 2412<br />
                        Sobre Loja, Sala 17<br />
                        Jardim Pinheiros<br />
                        CEP 87043-629<br />
                        Maringá - Paraná
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta<br />
                        8h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefones</h3>
                      <a href="tel:+5544999264057" className="text-muted-foreground block hover:text-primary transition-colors">
                        (44) 99926-4057
                      </a>
                      <a href="tel:+5544988157018" className="text-muted-foreground block hover:text-primary transition-colors">
                        (44) 98815-7018
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Navigation className="w-5 h-5" />
                    Abrir no Google Maps
                  </Button>
                </a>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full gap-2 bg-green-500 hover:bg-green-600">
                    <MessageCircle className="w-5 h-5" />
                    Agendar Visita pelo WhatsApp
                  </Button>
                </a>
              </div>

              {/* Info Box */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Como Chegar
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nosso escritório está localizado na Avenida Tuiuti, uma das principais vias de Maringá. 
                  O prédio possui estacionamento nas proximidades e é de fácil acesso por transporte público.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Atendemos Maringá e toda região
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Mesmo que você não esteja em Maringá, podemos atendê-lo remotamente. 
            Entre em contato e saiba como podemos ajudar sua empresa.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Fale com a Exata
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Localizacao;
