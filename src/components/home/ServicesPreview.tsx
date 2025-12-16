import { Building2, Calculator, FileText, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building2,
    title: 'Abertura e Encerramento de Empresas',
    description: 'Abertura, alteração, transferência e encerramento de empresas com acompanhamento legal completo.',
    href: '/servicos#abertura',
  },
  {
    icon: Calculator,
    title: 'Planejamento Tributário',
    description: 'Controle tributário completo para todos os regimes fiscais, garantindo economia e conformidade.',
    href: '/servicos#tributario',
  },
  {
    icon: FileText,
    title: 'Contabilidade Geral',
    description: 'Balanço patrimonial, DRE, conciliações contábeis e todas as declarações obrigatórias.',
    href: '/servicos#contabilidade',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    description: 'Folha de pagamento, admissões, rescisões, férias e todas as obrigações trabalhistas.',
    href: '/servicos#pessoal',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Soluções Contábeis Completas
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos todos os serviços necessários para a gestão contábil, fiscal e trabalhista da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                to={service.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/servicos">
            <Button size="lg" className="gap-2">
              Ver todos os serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
