import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: {
    es: string;
    en: string;
  };
  answer: {
    es: string;
    en: string;
  };
}

const faqs: FAQItem[] = [
  {
    question: {
      es: '¿Qué es Facil Apps Online?',
      en: 'What is Facil Apps Online?',
    },
    answer: {
      es: 'Facil Apps Online es una empresa de tecnología especializada en el desarrollo de software empresarial bajo modelo SaaS (Software como Servicio). Creamos soluciones modernas, escalables y parametrizables para diferentes industrias en Latinoamérica.',
      en: 'Facil Apps Online is a technology company specialized in developing enterprise software under the SaaS (Software as a Service) model. We create modern, scalable, and customizable solutions for different industries in Latin America.',
    },
  },
  {
    question: {
      es: '¿Qué aplicaciones ofrecen actualmente?',
      en: 'What applications do you currently offer?',
    },
    answer: {
      es: 'Actualmente tenemos en producción Glamtica (ERP para salones de belleza, estéticas y barberías) y TattooSuite (ERP para estudios de tatuajes y perforaciones). También estamos desarrollando soluciones para el sector automotriz, veterinarias, odontología y más.',
      en: 'We currently have Glamtica (ERP for beauty salons and barbershops) and TattooSuite (ERP for tattoo and piercing studios) in production. We are also developing solutions for the automotive sector, veterinary clinics, dentistry, and more.',
    },
  },
  {
    question: {
      es: '¿Cómo funciona el modelo SaaS?',
      en: 'How does the SaaS model work?',
    },
    answer: {
      es: 'El modelo SaaS significa que pagas una suscripción mensual o anual para usar nuestro software. No necesitas instalar nada, accedes desde cualquier navegador web. Incluye actualizaciones automáticas, soporte técnico y respaldos de información.',
      en: 'The SaaS model means you pay a monthly or annual subscription to use our software. You don\'t need to install anything, you access it from any web browser. It includes automatic updates, technical support, and data backups.',
    },
  },
  {
    question: {
      es: '¿Mis datos están seguros?',
      en: 'Is my data secure?',
    },
    answer: {
      es: 'Sí, utilizamos arquitectura multitenant con aislamiento completo de datos. Esto significa que tus datos están completamente separados de otros clientes. Además, realizamos respaldos diarios y usamos encriptación de nivel bancario.',
      en: 'Yes, we use multitenant architecture with complete data isolation. This means your data is completely separated from other customers. Additionally, we perform daily backups and use bank-level encryption.',
    },
  },
  {
    question: {
      es: '¿Puedo probar el software antes de comprarlo?',
      en: 'Can I try the software before buying?',
    },
    answer: {
      es: 'Sí, ofrecemos periodos de prueba gratuitos para que puedas evaluar nuestras plataformas. Contáctanos y te configuramos una cuenta de demostración sin compromiso.',
      en: 'Yes, we offer free trial periods so you can evaluate our platforms. Contact us and we\'ll set up a demo account for you with no obligation.',
    },
  },
  {
    question: {
      es: '¿Qué incluye el soporte técnico?',
      en: 'What does technical support include?',
    },
    answer: {
      es: 'El soporte técnico incluye asistencia por WhatsApp, email y chat en vivo durante horario laboral (Lunes a Viernes, 8am - 6pm). También ofrecemos capacitación inicial y documentación completa de cada plataforma.',
      en: 'Technical support includes assistance via WhatsApp, email, and live chat during business hours (Monday to Friday, 8am - 6pm). We also offer initial training and complete documentation for each platform.',
    },
  },
  {
    question: {
      es: '¿Pueden personalizar el software para mi negocio?',
      en: 'Can you customize the software for my business?',
    },
    answer: {
      es: 'Nuestras plataformas son altamente parametrizables. Puedes configurar categorías, servicios, precios, impuestos, reportes y muchas otras opciones. Para personalizaciones más específicas, contáctanos para evaluar tu caso.',
      en: 'Our platforms are highly customizable. You can configure categories, services, prices, taxes, reports, and many other options. For more specific customizations, contact us to evaluate your case.',
    },
  },
  {
    question: {
      es: '¿Trabajan con empresas fuera de Colombia?',
      en: 'Do you work with companies outside Colombia?',
    },
    answer: {
      es: 'Sí, nuestras plataformas están diseñadas para escalar por país e idioma. Actualmente atendemos clientes en varios países de Latinoamérica y estamos expandiendo nuestra presencia continuamente.',
      en: 'Yes, our platforms are designed to scale by country and language. We currently serve clients in several Latin American countries and are continuously expanding our presence.',
    },
  },
];

// Generate FAQ Schema
const generateFAQSchema = (language: 'es' | 'en') => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question[language],
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer[language]
    }
  }))
});

const FAQ = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={language === 'es' 
          ? "Preguntas Frecuentes | Facil Apps Online" 
          : "Frequently Asked Questions | Facil Apps Online"}
        description={language === 'es' 
          ? "Encuentra respuestas a las preguntas más comunes sobre nuestras soluciones SaaS, modelo de trabajo y soporte técnico."
          : "Find answers to the most common questions about our SaaS solutions, work model, and technical support."}
        path="/faq"
        schema={generateFAQSchema(language)}
      />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 opacity-0 animate-fade-in">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {language === 'es' 
                ? 'Encuentra respuestas a las dudas más comunes sobre nuestras soluciones'
                : 'Find answers to the most common questions about our solutions'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-none opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {faq.question[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer[language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6 opacity-0 animate-fade-in" />
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {language === 'es' 
                ? '¿No encontraste lo que buscabas?' 
                : "Didn't find what you were looking for?"}
            </h2>
            <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {language === 'es'
                ? 'Nuestro equipo está listo para ayudarte con cualquier pregunta adicional.'
                : 'Our team is ready to help you with any additional questions.'}
            </p>
            <Link to="/contacto">
              <Button size="lg" className="gradient-bg opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {t('hero.cta.secondary')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
