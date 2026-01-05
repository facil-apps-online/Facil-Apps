import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  const { t, language } = useLanguage();

  const content = {
    es: {
      sections: [
        {
          title: '1. Uso de la Plataforma',
          content: 'Al acceder y utilizar cualquier plataforma de Facil Apps Online, usted acepta cumplir con estos términos de servicio. Nuestras plataformas están diseñadas para uso empresarial y deben ser utilizadas de acuerdo con las leyes aplicables y las buenas prácticas comerciales.',
        },
        {
          title: '2. Responsabilidades del Usuario',
          content: 'Los usuarios son responsables de mantener la confidencialidad de sus credenciales de acceso, asegurar la veracidad de la información ingresada, cumplir con las políticas de uso aceptable, y notificar inmediatamente cualquier uso no autorizado de su cuenta.',
        },
        {
          title: '3. Propiedad Intelectual',
          content: 'Todo el contenido, código, diseño y funcionalidades de nuestras plataformas son propiedad exclusiva de Facil Apps Online. Queda prohibida la reproducción, distribución o modificación sin autorización expresa.',
        },
        {
          title: '4. Limitación de Responsabilidad',
          content: 'Facil Apps Online no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestras plataformas. Nuestras soluciones se proporcionan "tal cual" sin garantías implícitas.',
        },
        {
          title: '5. Modificaciones del Servicio',
          content: 'Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento. Los cambios significativos serán notificados con antelación razonable.',
        },
        {
          title: '6. Terminación',
          content: 'Podemos suspender o terminar el acceso a nuestros servicios si detectamos violaciones a estos términos o comportamiento que pueda perjudicar a otros usuarios o a la integridad de la plataforma.',
        },
      ],
    },
    en: {
      sections: [
        {
          title: '1. Platform Usage',
          content: 'By accessing and using any Facil Apps Online platform, you agree to comply with these terms of service. Our platforms are designed for business use and must be used in accordance with applicable laws and good business practices.',
        },
        {
          title: '2. User Responsibilities',
          content: 'Users are responsible for maintaining the confidentiality of their access credentials, ensuring the accuracy of entered information, complying with acceptable use policies, and immediately notifying any unauthorized use of their account.',
        },
        {
          title: '3. Intellectual Property',
          content: 'All content, code, design, and functionalities of our platforms are the exclusive property of Facil Apps Online. Reproduction, distribution, or modification without express authorization is prohibited.',
        },
        {
          title: '4. Limitation of Liability',
          content: 'Facil Apps Online shall not be liable for indirect, incidental, or consequential damages arising from the use of our platforms. Our solutions are provided "as is" without implied warranties.',
        },
        {
          title: '5. Service Modifications',
          content: 'We reserve the right to modify, suspend, or discontinue any aspect of the service at any time. Significant changes will be notified with reasonable advance notice.',
        },
        {
          title: '6. Termination',
          content: 'We may suspend or terminate access to our services if we detect violations of these terms or behavior that could harm other users or the integrity of the platform.',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <Layout>
      <SEOHead
        title="Términos y Condiciones | Facil Apps Online"
        description="Lee los términos y condiciones de uso de las plataformas de Facil Apps Online. Conoce tus derechos y responsabilidades."
        path="/terminos"
      />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center opacity-0 animate-fade-in">
              {t('terms.title')}
            </h1>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h2 className="text-xl font-display font-semibold mb-4 text-primary">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {language === 'es' ? 'Última actualización: Diciembre 2024' : 'Last updated: December 2024'}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
