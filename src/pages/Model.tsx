import { Cloud, Layers, Puzzle, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import SEOHead from '@/components/SEOHead';

const modelItems = [
  {
    key: 'saas',
    icon: Cloud,
  },
  {
    key: 'multitenant',
    icon: Layers,
  },
  {
    key: 'modular',
    icon: Puzzle,
  },
  {
    key: 'scalable',
    icon: Rocket,
  },
];

const Model = () => {
  const { t } = useLanguage();
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 150);

  return (
    <Layout>
      <SEOHead
        title="Modelo de Negocio | Facil Apps Online"
        description="Conoce nuestro modelo SaaS multi-tenant, modular y escalable. Arquitectura cloud-native diseñada para el crecimiento de tu empresa."
        path="/modelo"
      />
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 opacity-0 animate-fade-in">
              {t('model.title')}
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('model.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Model Cards */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {modelItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className={`relative group transition-all duration-500 ${
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="absolute inset-0 gradient-bg rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative glass-card rounded-xl p-8 h-full hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                          {t(`model.${item.key}.title`)}
                        </h3>
                        <p className="text-muted-foreground">
                          {t(`model.${item.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Diagram */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Node */}
              <div className="flex justify-center mb-16">
                <div className="w-32 h-32 rounded-full gradient-bg flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <span className="text-primary-foreground font-display font-bold text-lg text-center px-4">
                    Facil Apps
                  </span>
                </div>
              </div>

              {/* Connecting Lines and Nodes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {modelItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary mb-4" />
                      <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-lg hover:border-primary hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <span className="mt-4 text-sm font-medium text-center">
                        {t(`model.${item.key}.title`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Model;
