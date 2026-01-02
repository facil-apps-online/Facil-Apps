import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.apps': 'Aplicaciones',
    'nav.model': 'Modelo',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.headline': 'Creamos software que impulsa negocios',
    'hero.subheadline': 'Plataformas SaaS diseñadas para escalar empresas en diferentes industrias.',
    'hero.cta.primary': 'Ver nuestras aplicaciones',
    'hero.cta.secondary': 'Contáctanos',
    
    // About
    'about.title': '¿Quiénes somos?',
    'about.description': 'Facil Apps Online es una empresa de tecnología especializada en el desarrollo de software empresarial bajo modelo SaaS. Creamos soluciones modernas, escalables y parametrizables para diferentes industrias en Latinoamérica y otros mercados.',
    
    // Ecosystem
    'ecosystem.title': 'Nuestro ecosistema',
    'ecosystem.erp.title': 'ERPs verticales',
    'ecosystem.erp.description': 'Soluciones especializadas para cada industria con funcionalidades únicas.',
    'ecosystem.platforms.title': 'Plataformas especializadas',
    'ecosystem.platforms.description': 'Herramientas diseñadas para resolver problemas específicos de negocio.',
    'ecosystem.cloud.title': 'Soluciones en la nube',
    'ecosystem.cloud.description': 'Acceso desde cualquier lugar, en cualquier momento, sin instalaciones.',
    'ecosystem.multitenant.title': 'Arquitectura multitenant',
    'ecosystem.multitenant.description': 'Infraestructura compartida con datos completamente aislados.',
    
    // Applications
    'apps.title': 'Nuestras Aplicaciones',
    'apps.subtitle': 'Descubre nuestro ecosistema de soluciones empresariales',
    'apps.filter.all': 'Todas',
    'apps.filter.production': 'En Producción',
    'apps.filter.development': 'En Desarrollo',
    'apps.filter.planning': 'En Planeación',
    'apps.status.production': 'En Producción',
    'apps.status.development': 'En Desarrollo',
    'apps.status.planning': 'Próximamente',
    'apps.cta.visit': 'Ir a la plataforma',
    'apps.cta.soon': 'Próximamente',
    
    // Model
    'model.title': 'Modelo de Trabajo',
    'model.subtitle': 'Nuestra arquitectura está diseñada para escalar',
    'model.saas.title': 'Desarrollo SaaS',
    'model.saas.description': 'Software como servicio con actualizaciones continuas y soporte incluido.',
    'model.multitenant.title': 'Multitenant',
    'model.multitenant.description': 'Una sola instancia sirve a múltiples clientes con datos aislados.',
    'model.modular.title': 'Modular',
    'model.modular.description': 'Activa solo los módulos que necesitas, crece a tu ritmo.',
    'model.scalable.title': 'Escalable',
    'model.scalable.description': 'Por país, idioma y tipo de negocio. Sin límites de crecimiento.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Quieres una solución a la medida o conocer más sobre nuestras plataformas? Escríbenos.',
    'contact.form.name': 'Nombre',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.success': '¡Mensaje enviado correctamente!',
    'contact.info': 'Información de contacto',
    'contact.address': 'Dirección',
    
    // Footer
    'footer.tagline': 'Creando software que impulsa negocios en toda Latinoamérica.',
    'footer.links': 'Enlaces',
    'footer.legal': 'Legal',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Legal pages
    'terms.title': 'Términos de Servicio',
    'privacy.title': 'Política de Privacidad',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.apps': 'Applications',
    'nav.model': 'Model',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'We create software that drives businesses',
    'hero.subheadline': 'SaaS platforms designed to scale companies across different industries.',
    'hero.cta.primary': 'View our applications',
    'hero.cta.secondary': 'Contact us',
    
    // About
    'about.title': 'Who are we?',
    'about.description': 'Facil Apps Online is a technology company specialized in developing enterprise software under the SaaS model. We create modern, scalable, and customizable solutions for different industries in Latin America and other markets.',
    
    // Ecosystem
    'ecosystem.title': 'Our ecosystem',
    'ecosystem.erp.title': 'Vertical ERPs',
    'ecosystem.erp.description': 'Specialized solutions for each industry with unique functionalities.',
    'ecosystem.platforms.title': 'Specialized platforms',
    'ecosystem.platforms.description': 'Tools designed to solve specific business problems.',
    'ecosystem.cloud.title': 'Cloud solutions',
    'ecosystem.cloud.description': 'Access from anywhere, anytime, without installations.',
    'ecosystem.multitenant.title': 'Multitenant architecture',
    'ecosystem.multitenant.description': 'Shared infrastructure with completely isolated data.',
    
    // Applications
    'apps.title': 'Our Applications',
    'apps.subtitle': 'Discover our ecosystem of business solutions',
    'apps.filter.all': 'All',
    'apps.filter.production': 'In Production',
    'apps.filter.development': 'In Development',
    'apps.filter.planning': 'In Planning',
    'apps.status.production': 'In Production',
    'apps.status.development': 'In Development',
    'apps.status.planning': 'Coming Soon',
    'apps.cta.visit': 'Go to platform',
    'apps.cta.soon': 'Coming Soon',
    
    // Model
    'model.title': 'Work Model',
    'model.subtitle': 'Our architecture is designed to scale',
    'model.saas.title': 'SaaS Development',
    'model.saas.description': 'Software as a service with continuous updates and included support.',
    'model.multitenant.title': 'Multitenant',
    'model.multitenant.description': 'A single instance serves multiple clients with isolated data.',
    'model.modular.title': 'Modular',
    'model.modular.description': 'Activate only the modules you need, grow at your pace.',
    'model.scalable.title': 'Scalable',
    'model.scalable.description': 'By country, language, and business type. No growth limits.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Want a custom solution or learn more about our platforms? Write to us.',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.success': 'Message sent successfully!',
    'contact.info': 'Contact information',
    'contact.address': 'Address',
    
    // Footer
    'footer.tagline': 'Creating software that drives businesses across Latin America.',
    'footer.links': 'Links',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    
    // Legal pages
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'es' || saved === 'en') return saved;
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'en' ? 'en' : 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
