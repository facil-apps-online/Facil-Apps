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
    'nav.about': 'Nosotros',
    'nav.apps': 'Aplicaciones',
    'nav.model': 'Modelo',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    'nav.admin': 'Portal Admin',
    
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
    
    // About Page
    'aboutPage.title': 'Quiénes Somos',
    'aboutPage.description': 'Facil Apps Online es una empresa de tecnología especializada en el desarrollo de software empresarial bajo modelo SaaS. Creamos soluciones modernas, escalables y parametrizables para diferentes industrias en Latinoamérica y otros mercados.',
    'aboutPage.mission.title': 'Misión',
    'aboutPage.mission.description': 'Desarrollar software empresarial innovador y accesible que permita a las empresas de Latinoamérica optimizar sus operaciones, aumentar su productividad y crecer de manera sostenible mediante soluciones tecnológicas de alta calidad.',
    'aboutPage.vision.title': 'Visión',
    'aboutPage.vision.description': 'Ser la empresa líder en desarrollo de software SaaS en Latinoamérica, reconocida por la excelencia de nuestras soluciones, la innovación constante y el impacto positivo en el crecimiento de nuestros clientes.',
    'aboutPage.values.title': 'Nuestros Valores',
    'aboutPage.values.subtitle': 'Los principios que guían cada decisión y acción en nuestra empresa.',
    'aboutPage.values.innovation.title': 'Innovación',
    'aboutPage.values.innovation.description': 'Buscamos constantemente nuevas formas de resolver problemas y mejorar nuestras soluciones.',
    'aboutPage.values.commitment.title': 'Compromiso',
    'aboutPage.values.commitment.description': 'Nos dedicamos completamente al éxito de nuestros clientes y sus negocios.',
    'aboutPage.values.collaboration.title': 'Colaboración',
    'aboutPage.values.collaboration.description': 'Trabajamos en equipo con nuestros clientes para crear las mejores soluciones.',
    'aboutPage.values.excellence.title': 'Excelencia',
    'aboutPage.values.excellence.description': 'Nos esforzamos por superar las expectativas en cada proyecto.',
    'aboutPage.cta.title': '¿Listo para transformar tu negocio?',
    'aboutPage.cta.description': 'Únete a las empresas que ya confían en nuestras soluciones tecnológicas.',
    
    // Team
    'aboutPage.team.title': 'Nuestro Equipo',
    'aboutPage.team.subtitle': 'Profesionales apasionados por la tecnología y la innovación.',
    'aboutPage.team.ceo.name': 'José V. Zapata',
    'aboutPage.team.ceo.role': 'CEO & Fundador',
    'aboutPage.team.ceo.bio': 'Más de 15 años liderando proyectos de transformación digital.',
    'aboutPage.team.cto.name': 'Ana García',
    'aboutPage.team.cto.role': 'CTO',
    'aboutPage.team.cto.bio': 'Experta en arquitectura de software y soluciones cloud.',
    'aboutPage.team.lead.name': 'Miguel Torres',
    'aboutPage.team.lead.role': 'Lead Developer',
    'aboutPage.team.lead.bio': 'Especialista en desarrollo full-stack y metodologías ágiles.',
    'aboutPage.team.design.name': 'Laura Ramírez',
    'aboutPage.team.design.role': 'UX/UI Designer',
    'aboutPage.team.design.bio': 'Diseñadora enfocada en crear experiencias intuitivas.',

    // Footer
    'footer.tagline': 'Creando software que impulsa negocios en toda Latinoamérica.',
    'footer.links': 'Enlaces',
    'footer.legal': 'Legal',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Legal pages
    'terms.title': 'Términos de Servicio',
    'privacy.title': 'Política de Privacidad',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.apps': 'Applications',
    'nav.model': 'Model',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin Portal',
    
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
    
    // About Page
    'aboutPage.title': 'About Us',
    'aboutPage.description': 'Facil Apps Online is a technology company specialized in developing enterprise software under the SaaS model. We create modern, scalable, and customizable solutions for different industries in Latin America and other markets.',
    'aboutPage.mission.title': 'Mission',
    'aboutPage.mission.description': 'To develop innovative and accessible enterprise software that enables Latin American companies to optimize their operations, increase productivity, and grow sustainably through high-quality technological solutions.',
    'aboutPage.vision.title': 'Vision',
    'aboutPage.vision.description': 'To be the leading SaaS software development company in Latin America, recognized for the excellence of our solutions, constant innovation, and positive impact on our clients\' growth.',
    'aboutPage.values.title': 'Our Values',
    'aboutPage.values.subtitle': 'The principles that guide every decision and action in our company.',
    'aboutPage.values.innovation.title': 'Innovation',
    'aboutPage.values.innovation.description': 'We constantly seek new ways to solve problems and improve our solutions.',
    'aboutPage.values.commitment.title': 'Commitment',
    'aboutPage.values.commitment.description': 'We are fully dedicated to the success of our clients and their businesses.',
    'aboutPage.values.collaboration.title': 'Collaboration',
    'aboutPage.values.collaboration.description': 'We work as a team with our clients to create the best solutions.',
    'aboutPage.values.excellence.title': 'Excellence',
    'aboutPage.values.excellence.description': 'We strive to exceed expectations in every project.',
    'aboutPage.cta.title': 'Ready to transform your business?',
    'aboutPage.cta.description': 'Join the companies that already trust our technological solutions.',
    
    // Team
    'aboutPage.team.title': 'Our Team',
    'aboutPage.team.subtitle': 'Professionals passionate about technology and innovation.',
    'aboutPage.team.ceo.name': 'José V. Zapata',
    'aboutPage.team.ceo.role': 'CEO & Founder',
    'aboutPage.team.ceo.bio': 'Over 15 years leading digital transformation projects.',
    'aboutPage.team.cto.name': 'Ana García',
    'aboutPage.team.cto.role': 'CTO',
    'aboutPage.team.cto.bio': 'Expert in software architecture and cloud solutions.',
    'aboutPage.team.lead.name': 'Miguel Torres',
    'aboutPage.team.lead.role': 'Lead Developer',
    'aboutPage.team.lead.bio': 'Specialist in full-stack development and agile methodologies.',
    'aboutPage.team.design.name': 'Laura Ramírez',
    'aboutPage.team.design.role': 'UX/UI Designer',
    'aboutPage.team.design.bio': 'Designer focused on creating intuitive experiences.',

    // Footer
    'footer.tagline': 'Creating software that drives businesses across Latin America.',
    'footer.links': 'Links',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.faq': 'FAQ',
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
