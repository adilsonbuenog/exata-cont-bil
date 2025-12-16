import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Building2, Calculator, FileText, Users, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'abertura',
    icon: Building2,
    title: 'Abertura e Encerramento de Empresas',
    description: 'Cuidamos de todo o processo burocrático para você iniciar ou encerrar seu negócio com segurança e agilidade.',
    items: [
      'Abertura de empresas em todos os regimes',
      'Alterações contratuais e societárias',
      'Transferência de sede e filiais',
      'Encerramento e baixa de empresas',
      'Emissão e desembaraço de certidões',
      'Regularização de obras (INSS)',
      'Acompanhamento legal completo',
      'Consultoria para escolha do regime tributário',
    ],
  },
  {
    id: 'tributario',
    icon: Calculator,
    title: 'Planejamento Tributário e Fiscal',
    description: 'Análise estratégica para reduzir a carga tributária da sua empresa de forma legal e segura.',
    items: [
      'Controle e aplicação das normas fiscais',
      'Escrituração IPI, ICMS, ISS',
      'Emissão de guias de recolhimento',
      'Planejamento tributário estratégico',
      'Enquadramento no melhor regime',
      'Recuperação de créditos tributários',
      'Controle de obrigações acessórias',
      'Orientação fiscal contínua',
    ],
  },
  {
    id: 'contabilidade',
    icon: FileText,
    title: 'Contabilidade Geral',
    description: 'Serviços contábeis completos para manter sua empresa organizada e em conformidade com a legislação.',
    items: [
      'Conciliações contábeis mensais',
      'Controle de ativo imobilizado',
      'Lançamentos contábeis',
      'Balanço patrimonial',
      'Demonstração de Resultado (DRE)',
      'Notas explicativas',
      'Livros Diário e Razão',
      'DCTFWEB, DIRF, ECD, ECF, IRPF e mais',
    ],
  },
  {
    id: 'pessoal',
    icon: Users,
    title: 'Departamento Pessoal',
    description: 'Gestão completa das rotinas trabalhistas e previdenciárias da sua empresa.',
    items: [
      'Registro e admissão de empregados',
      'Folha de pagamento mensal',
      'Cálculo de pró-labore',
      '13° salário e férias',
      'Rescisões contratuais',
      'CAGED e obrigações do eSocial',
      'Informes de rendimento',
      'Obrigações trabalhistas e previdenciárias',
    ],
  },
];

const Servicos = () => {
  const whatsappLink = "https://wa.me/5544999264057?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.";

  return (
    <Layout>
      <Helmet>
        <title>Serviços Contábeis | Exata Assessoria Contábil - Maringá</title>
        <meta name="description" content="Serviços contábeis completos em Maringá: abertura de empresas, planejamento tributário, contabilidade geral, departamento pessoal, declaração IRPF e muito mais." />
        <meta name="keywords" content="serviços contábeis Maringá, abertura de empresa, planejamento tributário, departamento pessoal, IRPF, contabilidade empresarial" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Nossos Serviços</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Soluções Contábeis Completas
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Oferecemos todos os serviços necessários para a gestão contábil, fiscal e trabalhista da sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Solicitar Orçamento
                    </Button>
                  </a>
                </div>

                <div className={`bg-secondary rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-display font-semibold text-foreground mb-6">O que inclui:</h3>
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Precisa de um serviço específico?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco. Nossa equipe está pronta para entender suas necessidades 
              e oferecer a solução ideal para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp - Atendimento Imediato
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
