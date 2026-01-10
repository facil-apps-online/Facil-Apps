import { useState } from 'react';
import { 
  ExternalLink, 
  Clock, 
  Sparkles, 
  Car, 
  Stethoscope, 
  PawPrint, 
  Briefcase, 
  BarChart3, 
  FileText, 
  MessageCircle, 
  ClipboardCheck,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEOHead, { generateSoftwareServiceSchema } from '@/components/SEOHead';

import logoGlamtica from '@/assets/logo-glamtica.png';
import logoTattoosuite from '@/assets/logo-tattoosuite.png';

type AppStatus = 'production' | 'development' | 'planning';

interface AppItem {
  name: string;
  description: {
    es: string;
    en: string;
  };
  status: AppStatus;
  url?: string;
  icon?: LucideIcon;
  logo?: string;
}

const applications: AppItem[] = [
  {
    name: 'Glamtica',
    description: {
      es: 'ERP para estéticas, salones de belleza, peluquerías y barberías',
      en: 'ERP for beauty salons, hair salons, and barbershops',
    },
    status: 'production',
    url: 'https://glamtica.app',
    logo: logoGlamtica,
  },
  {
    name: 'TattooSuite',
    description: {
      es: 'ERP para estudios de tatuajes y perforaciones',
      en: 'ERP for tattoo and piercing studios',
    },
    status: 'production',
    url: 'https://tattoosuite.app',
    logo: logoTattoosuite,
  },
  {
    name: 'Autopartia',
    description: {
      es: 'ERP para el sector autopartista desde importadoras hasta talleres',
      en: 'ERP for the auto parts sector from importers to workshops',
    },
    status: 'development',
    icon: Car,
  },
  {
    name: 'Odontología',
    description: {
      es: 'ERP con RIPS para consultorios odontológicos',
      en: 'ERP with RIPS for dental offices',
    },
    status: 'planning',
    icon: Stethoscope,
  },
  {
    name: 'VeteZooft',
    description: {
      es: 'ERP para veterinarias',
      en: 'ERP for veterinary clinics',
    },
    status: 'planning',
    icon: PawPrint,
  },
  {
    name: 'Facil ERP',
    description: {
      es: 'ERP genérico para todo tipo de negocio',
      en: 'Generic ERP for all types of businesses',
    },
    status: 'planning',
    icon: Briefcase,
  },
  {
    name: 'Report Labs',
    description: {
      es: 'Sistema de reportes personalizados para empresas',
      en: 'Custom reporting system for companies',
    },
    status: 'planning',
    icon: BarChart3,
  },
  {
    name: 'Documenta',
    description: {
      es: 'Sistema de gestión documental',
      en: 'Document management system',
    },
    status: 'planning',
    icon: FileText,
  },
  {
    name: 'Conéctate',
    description: {
      es: 'Sistema de comunicaciones para colegios',
      en: 'Communication system for schools',
    },
    status: 'planning',
    icon: MessageCircle,
  },
  {
    name: 'Gestion.app',
    description: {
      es: 'Sistema para controlar dotaciones, certificados, cursos, firmas de empleados y más',
      en: 'System to manage uniforms, certificates, courses, employee signatures, and more',
    },
    status: 'planning',
    icon: ClipboardCheck,
  },
];

const statusColors: Record<AppStatus, string> = {
  production: 'bg-green-500/10 text-green-600 border-green-500/20',
  development: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  planning: 'bg-primary/10 text-primary border-primary/20',
};

const Applications = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<AppStatus | 'all'>('all');

  const filteredApps = applications.filter(
    (app) => filter === 'all' || app.status === filter
  );

  const filters: { key: AppStatus | 'all'; label: string }[] = [
    { key: 'all', label: t('apps.filter.all') },
    { key: 'production', label: t('apps.filter.production') },
    { key: 'development', label: t('apps.filter.development') },
    { key: 'planning', label: t('apps.filter.planning') },
  ];

  return (
    <Layout>
      <SEOHead
        title={language === 'es' ? "Aplicaciones SaaS | Facil Apps Online" : "SaaS Applications | Facil Apps Online"}
        description={language === 'es' 
          ? "Ecosistema de apps SaaS: Glamtica, TattooSuite y más soluciones empresariales."
          : "SaaS app ecosystem: Glamtica, TattooSuite and more business solutions."}
        path="/aplicaciones"
        schema={generateSoftwareServiceSchema()}
      />
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 opacity-0 animate-fade-in">
              {t('apps.title')}
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('apps.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/80 backdrop-blur-xl z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <Button
                key={f.key}
                variant={filter === f.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(f.key)}
                className={`transition-all duration-300 ${
                  filter === f.key ? 'gradient-bg shadow-lg' : ''
                }`}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => {
              const isProduction = app.status === 'production' && app.url;
              
              const CardWrapper = isProduction ? 'a' : 'div';
              const cardProps = isProduction
                ? {
                    href: app.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {};

              return (
                <CardWrapper
                  key={`${filter}-${app.name}`}
                  {...cardProps}
                  className={`glass-card rounded-xl p-6 flex flex-col hover-lift transition-all duration-500 group opacity-0 animate-fade-in ${
                    isProduction ? 'cursor-pointer' : ''
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    {isProduction && app.logo ? (
                      <div 
                        className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/20 shadow-md flex-shrink-0 group-hover:border-primary/40 transition-colors"
                        aria-hidden="true"
                      >
                        <img 
                          src={app.logo} 
                          alt={`Logo de ${app.name}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : app.icon ? (
                      <div 
                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        <app.icon className="w-7 h-7 text-primary" />
                      </div>
                    ) : null}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors truncate">
                          {app.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`${statusColors[app.status]} text-xs flex-shrink-0`}
                        >
                          {app.status === 'production' && t('apps.status.production')}
                          {app.status === 'development' && t('apps.status.development')}
                          {app.status === 'planning' && t('apps.status.planning')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm flex-grow mb-6">
                    {app.description[language]}
                  </p>
                  <div className="mt-auto">
                    {isProduction ? (
                      <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                        {t('apps.cta.visit')}
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    ) : app.status === 'development' ? (
                      <Button disabled variant="outline" className="w-full">
                        <Clock className="mr-2 h-4 w-4" />
                        {t('apps.status.development')}
                      </Button>
                    ) : (
                      <Button disabled variant="outline" className="w-full">
                        <Sparkles className="mr-2 h-4 w-4" />
                        {t('apps.cta.soon')}
                      </Button>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Applications;
