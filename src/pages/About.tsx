import { Target, Eye, Lightbulb, Heart, Users, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import SEOHead from '@/components/SEOHead';

const values = [
  { key: 'innovation', icon: Lightbulb },
  { key: 'commitment', icon: Heart },
  { key: 'collaboration', icon: Users },
  { key: 'excellence', icon: Rocket },
];

const About = () => {
  const { t } = useLanguage();
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 150);

  return (
    <Layout>
      <SEOHead
        title="Quiénes Somos | Facil Apps Online"
        description="Conoce la misión, visión y valores de Facil Apps Online. Empresa de tecnología especializada en software SaaS empresarial para Latinoamérica."
        path="/quienes-somos"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">{t('aboutPage.title')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {t('aboutPage.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  {t('aboutPage.mission.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('aboutPage.mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                  <Eye className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  {t('aboutPage.vision.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('aboutPage.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('aboutPage.values.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('aboutPage.values.subtitle')}
            </p>
          </div>

          <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.key}
                  className={`glass-card rounded-xl p-8 text-center hover-lift transition-all duration-500 ${
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {t(`aboutPage.values.${value.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`aboutPage.values.${value.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              {t('aboutPage.cta.title')}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {t('aboutPage.cta.description')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
