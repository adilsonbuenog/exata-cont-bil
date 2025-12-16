import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Target, Eye, CheckCircle2, Users, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const values = [
  { icon: Shield, title: 'Ética', description: 'Atuamos com integridade em todas as relações profissionais.' },
  { icon: Award, title: 'Integridade', description: 'Honestidade e transparência em cada serviço prestado.' },
  { icon: CheckCircle2, title: 'Responsabilidade', description: 'Comprometimento total com os prazos e obrigações.' },
  { icon: Target, title: 'Precisão', description: 'Atenção aos detalhes em cada lançamento e relatório.' },
  { icon: Users, title: 'Agilidade', description: 'Respostas rápidas e soluções eficientes para você.' },
];

const QuemSomos = () => {
  const whatsappLink = "https://wa.me/5544999264057?text=Olá! Gostaria de conhecer melhor os serviços da Exata.";

  return (
    <Layout>
      <Helmet>
        <title>Quem Somos | Exata Assessoria Contábil - Contabilidade em Maringá</title>
        <meta name="description" content="Conheça a Exata Assessoria Contábil. Escritório contábil em Maringá com anos de experiência em soluções tributárias e financeiras para empresas e pessoas físicas." />
        <meta name="keywords" content="escritório contábil Maringá, contador Maringá, contabilidade empresarial, assessoria contábil" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Quem Somos</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Sua Parceira em Contabilidade
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Conhecimento, dedicação e compromisso para o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tradição e Inovação em Contabilidade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">EXATA ASSESSORIA CONTÁBIL LTDA</strong> é um escritório contábil 
                  que oferece soluções tributárias e financeiras completas para empresas e pessoas físicas em Maringá e região.
                </p>
                <p>
                  Nossa trajetória é marcada pelo compromisso, transparência e dedicação, refletidos no crescente 
                  número de clientes satisfeitos que confiam em nosso trabalho ao longo dos anos.
                </p>
                <p>
                  Atendemos com clareza, objetividade e responsabilidade, ajudando nossos clientes a tomarem 
                  decisões seguras e estruturarem um crescimento sustentável para seus negócios.
                </p>
                <p>
                  Trabalhamos lado a lado com cada cliente para garantir controle financeiro, cumprimento de 
                  obrigações e apoio estratégico em todas as etapas da jornada empresarial.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-primary" />
                <h3 className="font-display text-2xl font-bold text-foreground">Nossa Missão</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed border-l-4 border-accent pl-6">
                "Ser o parceiro estratégico que impulsiona o crescimento sustentável dos nossos clientes 
                através de soluções contábeis eficientes e transparentes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Nossos Valores</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Princípios que Nos Guiam
            </h2>
            <p className="text-muted-foreground text-lg">
              Nossa atuação é fundamentada em valores sólidos que garantem a qualidade e confiabilidade dos nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Nossa Equipe</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Profissionais Qualificados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: 'Alexandre Oliveira', role: 'Contador' },
              { name: 'Tiago Nery', role: 'Contador' },
            ].map((person) => (
              <div 
                key={person.name}
                className="bg-secondary rounded-xl p-8 text-center"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-3xl font-display font-bold">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-6">
            Pronto para crescer com a Exata?
          </h2>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Fale Conosco
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default QuemSomos;
