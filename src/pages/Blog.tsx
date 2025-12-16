import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'escolher-escritorio-contabilidade',
    title: 'Como escolher o escritório de contabilidade ideal para sua empresa',
    excerpt: 'Descubra os critérios essenciais para selecionar um escritório contábil que atenda às necessidades do seu negócio com qualidade e segurança.',
    category: 'Gestão',
    date: '2024-12-10',
    readTime: '5 min',
  },
  {
    id: 'simples-lucro-real-presumido',
    title: 'Diferença entre Simples Nacional, Lucro Real e Lucro Presumido',
    excerpt: 'Entenda as características de cada regime tributário e saiba qual é o mais adequado para sua empresa economizar impostos legalmente.',
    category: 'Tributário',
    date: '2024-12-05',
    readTime: '7 min',
  },
  {
    id: 'planejamento-tributario',
    title: 'Planejamento tributário: por que toda empresa precisa fazer?',
    excerpt: 'Conheça os benefícios do planejamento tributário e como ele pode ajudar sua empresa a pagar menos impostos de forma legal.',
    category: 'Tributário',
    date: '2024-11-28',
    readTime: '6 min',
  },
  {
    id: 'obrigacoes-contabeis-anuais',
    title: 'Obrigações contábeis anuais: o que você precisa saber',
    excerpt: 'Confira o calendário das principais obrigações contábeis e fiscais que sua empresa deve cumprir ao longo do ano.',
    category: 'Contabilidade',
    date: '2024-11-20',
    readTime: '8 min',
  },
  {
    id: 'contabilidade-crescimento-empresarial',
    title: 'Como a contabilidade pode ajudar no crescimento empresarial',
    excerpt: 'Descubra como uma contabilidade estratégica pode impulsionar o crescimento sustentável da sua empresa.',
    category: 'Gestão',
    date: '2024-11-15',
    readTime: '5 min',
  },
];

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Exata Assessoria Contábil - Artigos sobre Contabilidade</title>
        <meta name="description" content="Blog da Exata Assessoria Contábil com artigos sobre contabilidade, planejamento tributário, gestão empresarial e dicas para empreendedores em Maringá." />
        <meta name="keywords" content="blog contabilidade, artigos contábeis, dicas tributárias, gestão empresarial, planejamento fiscal" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Blog</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Artigos e Dicas Contábeis
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Conteúdo de qualidade para ajudar você a tomar decisões mais seguras para seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={article.id}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </div>
                    <Link 
                      to={`/blog/${article.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Quer receber mais conteúdos?
          </h2>
          <p className="text-muted-foreground mb-6">
            Siga-nos no Instagram para ficar por dentro das novidades contábeis.
          </p>
          <a 
            href="https://www.instagram.com/exata.assessoria.contabil_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
          >
            Seguir no Instagram
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
