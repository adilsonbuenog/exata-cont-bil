import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, ArrowLeft, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const articlesContent: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  'escolher-escritorio-contabilidade': {
    title: 'Como escolher o escritório de contabilidade ideal para sua empresa',
    excerpt: 'Descubra os critérios essenciais para selecionar um escritório contábil que atenda às necessidades do seu negócio.',
    category: 'Gestão',
    date: '2024-12-10',
    readTime: '5 min',
    content: `
      <p>Escolher o escritório de contabilidade certo é uma decisão crucial para o sucesso do seu negócio. Um contador competente não é apenas alguém que faz a escrituração dos livros, mas um parceiro estratégico que pode ajudar sua empresa a crescer de forma sustentável.</p>

      <h2>1. Experiência e Especialização</h2>
      <p>O primeiro critério a considerar é a experiência do escritório no seu segmento de atuação. Empresas de diferentes setores têm necessidades específicas, e um contador familiarizado com seu ramo de atividade pode oferecer orientações mais precisas.</p>

      <h2>2. Estrutura e Tecnologia</h2>
      <p>Verifique se o escritório utiliza sistemas modernos de gestão contábil. A tecnologia adequada garante mais agilidade no processamento das informações e reduz a chance de erros.</p>

      <h2>3. Atendimento Personalizado</h2>
      <p>Um bom escritório contábil deve oferecer atendimento próximo e acessível. Avalie como é a comunicação, se as dúvidas são respondidas rapidamente e se você tem um profissional dedicado à sua conta.</p>

      <h2>4. Reputação no Mercado</h2>
      <p>Pesquise a reputação do escritório. Peça referências, leia avaliações online e converse com outros clientes se possível. A experiência de outros empresários pode revelar muito sobre a qualidade do serviço.</p>

      <h2>5. Custo-Benefício</h2>
      <p>O preço não deve ser o único fator decisivo, mas é importante que os honorários estejam alinhados com a qualidade dos serviços prestados e com o seu orçamento.</p>

      <h2>Conclusão</h2>
      <p>A escolha do escritório de contabilidade ideal requer análise cuidadosa de diversos fatores. A Exata Assessoria Contábil reúne todos esses critérios, oferecendo experiência, tecnologia e atendimento humanizado para empresas em Maringá e região.</p>
    `,
  },
  'simples-lucro-real-presumido': {
    title: 'Diferença entre Simples Nacional, Lucro Real e Lucro Presumido',
    excerpt: 'Entenda as características de cada regime tributário e saiba qual é o mais adequado para sua empresa.',
    category: 'Tributário',
    date: '2024-12-05',
    readTime: '7 min',
    content: `
      <p>A escolha do regime tributário é uma das decisões mais importantes para qualquer empresa. Cada regime tem suas características, vantagens e limitações. Conhecê-los bem é fundamental para pagar menos impostos de forma legal.</p>

      <h2>Simples Nacional</h2>
      <p>O Simples Nacional é um regime simplificado destinado a microempresas (ME) e empresas de pequeno porte (EPP). Unifica oito tributos em uma única guia (DAS) e tem alíquotas progressivas conforme o faturamento.</p>
      <ul>
        <li>Faturamento máximo: R$ 4,8 milhões/ano</li>
        <li>Pagamento unificado de tributos</li>
        <li>Menor burocracia</li>
        <li>Alíquotas que variam conforme a atividade</li>
      </ul>

      <h2>Lucro Presumido</h2>
      <p>No Lucro Presumido, a base de cálculo do IRPJ e CSLL é determinada por uma margem de lucro pré-fixada pela legislação, independente do lucro real da empresa.</p>
      <ul>
        <li>Faturamento máximo: R$ 78 milhões/ano</li>
        <li>Margens presumidas por atividade</li>
        <li>Indicado para empresas com margens superiores à presunção</li>
        <li>Apuração trimestral dos tributos</li>
      </ul>

      <h2>Lucro Real</h2>
      <p>O Lucro Real calcula o IRPJ e CSLL sobre o lucro efetivo da empresa, após todos os ajustes legais. É obrigatório para alguns segmentos e empresas com faturamento acima de R$ 78 milhões.</p>
      <ul>
        <li>Base de cálculo: lucro contábil ajustado</li>
        <li>Pode gerar créditos de PIS/COFINS</li>
        <li>Maior complexidade contábil</li>
        <li>Indicado para empresas com margens baixas</li>
      </ul>

      <h2>Qual escolher?</h2>
      <p>A escolha do regime ideal depende de diversos fatores: faturamento, atividade, despesas dedutíveis, folha de pagamento, entre outros. Por isso, é fundamental contar com uma assessoria contábil especializada para fazer essa análise.</p>
    `,
  },
  'planejamento-tributario': {
    title: 'Planejamento tributário: por que toda empresa precisa fazer?',
    excerpt: 'Conheça os benefícios do planejamento tributário e como ele pode ajudar sua empresa.',
    category: 'Tributário',
    date: '2024-11-28',
    readTime: '6 min',
    content: `
      <p>O planejamento tributário é uma ferramenta estratégica que permite às empresas organizar suas operações de forma a pagar menos impostos dentro da legalidade. No Brasil, com uma das cargas tributárias mais complexas do mundo, isso se torna ainda mais relevante.</p>

      <h2>O que é planejamento tributário?</h2>
      <p>É o conjunto de ações legais realizadas pela empresa com o objetivo de reduzir, postergar ou eliminar a incidência de tributos. Não se trata de sonegação, mas de inteligência fiscal.</p>

      <h2>Benefícios do planejamento tributário</h2>
      <ul>
        <li><strong>Redução de custos:</strong> pagar apenas o necessário em impostos</li>
        <li><strong>Maior competitividade:</strong> recursos economizados podem ser reinvestidos</li>
        <li><strong>Segurança jurídica:</strong> operações dentro da lei</li>
        <li><strong>Melhor gestão financeira:</strong> previsibilidade de gastos com tributos</li>
      </ul>

      <h2>Quando fazer?</h2>
      <p>O planejamento tributário deve ser revisado anualmente, preferencialmente no último trimestre do ano, para que as mudanças entrem em vigor no exercício seguinte. Também deve ser reavaliado em momentos de mudança na empresa.</p>

      <h2>Como a Exata pode ajudar</h2>
      <p>Nossa equipe analisa detalhadamente a situação da sua empresa, considerando regime tributário, atividades desenvolvidas, estrutura de custos e projeções de crescimento para indicar as melhores estratégias fiscais.</p>
    `,
  },
  'obrigacoes-contabeis-anuais': {
    title: 'Obrigações contábeis anuais: o que você precisa saber',
    excerpt: 'Confira o calendário das principais obrigações contábeis e fiscais que sua empresa deve cumprir.',
    category: 'Contabilidade',
    date: '2024-11-20',
    readTime: '8 min',
    content: `
      <p>Manter as obrigações contábeis em dia é fundamental para evitar multas, penalidades e problemas com o fisco. Conheça as principais obrigações anuais que sua empresa precisa cumprir.</p>

      <h2>DIRF - Declaração do Imposto de Renda Retido na Fonte</h2>
      <p>Obrigatória para empresas que pagaram rendimentos com retenção de IR. Prazo: geralmente até fevereiro.</p>

      <h2>ECF - Escrituração Contábil Fiscal</h2>
      <p>Substitui a DIPJ e é obrigatória para empresas tributadas pelo Lucro Real, Presumido e Arbitrado. Prazo: julho.</p>

      <h2>ECD - Escrituração Contábil Digital</h2>
      <p>Livro diário e auxiliares em formato digital. Prazo: maio, para empresas do Lucro Real.</p>

      <h2>DEFIS - Declaração de Informações Socioeconômicas e Fiscais</h2>
      <p>Obrigatória para empresas optantes pelo Simples Nacional. Prazo: março.</p>

      <h2>RAIS - Relação Anual de Informações Sociais</h2>
      <p>Declaração com informações trabalhistas. Prazo: março/abril.</p>

      <h2>IRPF - Declaração de Imposto de Renda Pessoa Física</h2>
      <p>Obrigatória para sócios e administradores com rendimentos acima do limite. Prazo: abril/maio.</p>

      <h2>Mantenha-se em dia</h2>
      <p>A Exata Assessoria Contábil cuida de todas essas obrigações para sua empresa, garantindo que você nunca perca um prazo e evite problemas com o fisco.</p>
    `,
  },
  'contabilidade-crescimento-empresarial': {
    title: 'Como a contabilidade pode ajudar no crescimento empresarial',
    excerpt: 'Descubra como uma contabilidade estratégica pode impulsionar o crescimento sustentável da sua empresa.',
    category: 'Gestão',
    date: '2024-11-15',
    readTime: '5 min',
    content: `
      <p>Muitos empresários ainda veem a contabilidade apenas como uma obrigação legal. No entanto, quando utilizada estrategicamente, ela se torna uma poderosa ferramenta de gestão e crescimento.</p>

      <h2>Tomada de decisões baseada em dados</h2>
      <p>Relatórios contábeis como DRE, Balanço Patrimonial e Fluxo de Caixa fornecem informações valiosas sobre a saúde financeira da empresa, permitindo decisões mais assertivas.</p>

      <h2>Identificação de oportunidades</h2>
      <p>Uma análise contábil bem feita pode revelar oportunidades de redução de custos, identificar produtos mais rentáveis e apontar áreas que precisam de atenção.</p>

      <h2>Planejamento financeiro</h2>
      <p>Com base nos dados contábeis, é possível fazer projeções financeiras mais precisas, planejar investimentos e definir metas de crescimento realistas.</p>

      <h2>Acesso a crédito</h2>
      <p>Empresas com contabilidade organizada têm mais facilidade para obter financiamentos e linhas de crédito junto a bancos e instituições financeiras.</p>

      <h2>Compliance e credibilidade</h2>
      <p>Uma empresa com todas as obrigações em dia transmite mais confiança para clientes, fornecedores e investidores.</p>

      <h2>Parceria estratégica</h2>
      <p>Na Exata, mais do que cumprir obrigações, trabalhamos como parceiros do crescimento dos nossos clientes, oferecendo orientação estratégica baseada em dados reais.</p>
    `,
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesContent[slug] : null;
  const whatsappLink = "https://wa.me/5544999264057?text=Olá! Li o artigo no blog e gostaria de mais informações.";

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-primary hover:text-accent">
            Voltar para o blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{article.title} | Exata Assessoria Contábil</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <article className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>

          {/* Header */}
          <header className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('pt-BR')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de leitura
                </span>
              </div>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {article.title}
            </h1>
          </header>

          {/* Content */}
          <div 
            className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 bg-secondary rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Precisa de ajuda com sua contabilidade?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar sua empresa a crescer com segurança e eficiência.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar com um Contador
              </Button>
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogArticle;
