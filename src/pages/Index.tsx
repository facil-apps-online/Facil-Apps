import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Layers, Server, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import SEOHead from '@/components/SEOHead';
const ecosystemItems = [
  {
    key: 'erp',
    icon: Layers,
  },
  {
    key: 'platforms',
    icon: Server,
  },
  {
    key: 'cloud',
    icon: Cloud,
  },
  {
    key: 'multitenant',
    icon: Users,
  },
];

const Index = () => {
  const { t, language } = useLanguage();
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 150);

  return (
    <Layout>
      <SEOHead
        title={language === 'es' ? "Facil Apps Online | Software SaaS" : "Facil Apps Online | SaaS Software"}
        description={language === 'es' 
          ? "Software SaaS para empresas. Plataformas diseñadas para escalar negocios en Latinoamérica."
          : "SaaS software for businesses. Platforms designed to scale companies in Latin America."}
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="gradient-text">{t('hero.headline')}</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {t('hero.subheadline')}
            </p>
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Button
                asChild
                size="lg"
                className="gradient-bg text-secondary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 px-8"
              >
                <Link to="/aplicaciones">
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 px-8"
              >
                <Link to="/contacto">
                  {t('hero.cta.secondary')}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('ecosystem.title')}
            </h2>
          </div>

          <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className={`glass-card rounded-xl p-8 text-center hover-lift transition-all duration-500 ${
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {t(`ecosystem.${item.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`ecosystem.${item.key}.description`)}
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
              {t('hero.cta.primary')}
            </h2>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 px-8"
            >
              <Link to="/aplicaciones">
                {t('nav.apps')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
