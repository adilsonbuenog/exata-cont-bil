import { Award, Users, Building, Clock } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '15+',
    label: 'Anos de Experiência',
    description: 'No mercado contábil',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Clientes Atendidos',
    description: 'Pessoas e empresas',
  },
  {
    icon: Building,
    value: '300+',
    label: 'Empresas Abertas',
    description: 'Em todos os regimes',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Compromisso',
    description: 'Com sua satisfação',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
