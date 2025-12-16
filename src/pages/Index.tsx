import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import StatsSection from '@/components/home/StatsSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Exata Assessoria Contábil | Contabilidade em Maringá</title>
        <meta name="description" content="Escritório de contabilidade em Maringá. Serviços contábeis completos: abertura de empresa, planejamento tributário, departamento pessoal e muito mais. Atendimento humanizado." />
        <meta name="keywords" content="contabilidade em Maringá, contador em Maringá, escritório contábil, abertura de empresa Maringá, contabilidade tributária, departamento pessoal Maringá" />
        <link rel="canonical" href="https://exatacontabilidademga.com.br" />
      </Helmet>

      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <BenefitsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
