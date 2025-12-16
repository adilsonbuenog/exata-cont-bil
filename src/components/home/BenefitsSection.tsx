import { Shield, TrendingUp, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Segurança e Conformidade',
    description: 'Mantenha sua empresa em dia com todas as obrigações fiscais e trabalhistas, evitando multas e penalidades.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Sustentável',
    description: 'Planejamento tributário estratégico que permite economia de impostos e reinvestimento no seu negócio.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Atendimento',
    description: 'Respostas rápidas e soluções eficientes para todas as suas demandas contábeis.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description: 'Tratamos cada cliente de forma única, entendendo suas necessidades específicas.',
  },
];

const features = [
  'Declarações entregues no prazo',
  'Relatórios gerenciais completos',
  'Suporte via WhatsApp',
  'Consultoria personalizada',
  'Todos os regimes tributários',
  'Experiência comprovada',
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Por que escolher a Exata</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Benefícios de uma Contabilidade Profissional
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Uma contabilidade bem estruturada é fundamental para o sucesso do seu negócio. 
              Com a Exata, você tem a tranquilidade de saber que sua empresa está em boas mãos.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-secondary rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
