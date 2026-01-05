import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  const { t, language } = useLanguage();

  const content = {
    es: {
      sections: [
        {
          title: '1. Recolección de Datos',
          content: 'Recopilamos información que usted proporciona directamente, como datos de registro, información de contacto y datos de uso de la plataforma. También recopilamos datos automáticamente a través de cookies y tecnologías similares.',
        },
        {
          title: '2. Uso de la Información',
          content: 'Utilizamos su información para proporcionar y mejorar nuestros servicios, personalizar su experiencia, comunicarnos con usted sobre actualizaciones y ofertas, y cumplir con obligaciones legales.',
        },
        {
          title: '3. Protección de Datos',
          content: 'Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos cifrado SSL/TLS y prácticas de seguridad estándar de la industria.',
        },
        {
          title: '4. Cookies',
          content: 'Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de análisis para mejorar nuestros servicios, y cookies de preferencias para recordar sus configuraciones. Puede gestionar sus preferencias de cookies en su navegador.',
        },
        {
          title: '5. Derechos del Usuario',
          content: 'Usted tiene derecho a acceder, rectificar, eliminar o portar sus datos personales. También puede oponerse al procesamiento o solicitar la limitación del tratamiento. Para ejercer estos derechos, contáctenos a través de nuestro formulario de contacto.',
        },
        {
          title: '6. Compartición de Datos',
          content: 'No vendemos su información personal. Podemos compartir datos con proveedores de servicios que nos ayudan a operar nuestras plataformas, siempre bajo estrictas obligaciones de confidencialidad.',
        },
        {
          title: '7. Retención de Datos',
          content: 'Conservamos su información personal mientras su cuenta esté activa o según sea necesario para proporcionarle servicios. Los datos se eliminan de forma segura cuando ya no son necesarios para los fines para los que fueron recopilados.',
        },
      ],
    },
    en: {
      sections: [
        {
          title: '1. Data Collection',
          content: 'We collect information you provide directly, such as registration data, contact information, and platform usage data. We also collect data automatically through cookies and similar technologies.',
        },
        {
          title: '2. Use of Information',
          content: 'We use your information to provide and improve our services, personalize your experience, communicate with you about updates and offers, and comply with legal obligations.',
        },
        {
          title: '3. Data Protection',
          content: 'We implement technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. We use SSL/TLS encryption and industry-standard security practices.',
        },
        {
          title: '4. Cookies',
          content: 'We use essential cookies for site functionality, analytics cookies to improve our services, and preference cookies to remember your settings. You can manage your cookie preferences in your browser.',
        },
        {
          title: '5. User Rights',
          content: 'You have the right to access, rectify, delete, or port your personal data. You can also object to processing or request limitation of treatment. To exercise these rights, contact us through our contact form.',
        },
        {
          title: '6. Data Sharing',
          content: 'We do not sell your personal information. We may share data with service providers who help us operate our platforms, always under strict confidentiality obligations.',
        },
        {
          title: '7. Data Retention',
          content: 'We retain your personal information while your account is active or as necessary to provide you with services. Data is securely deleted when no longer needed for the purposes for which it was collected.',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <Layout>
      <SEOHead
        title="Política de Privacidad | Facil Apps Online"
        description="Conoce cómo protegemos y tratamos tu información personal en Facil Apps Online. Tu privacidad es nuestra prioridad."
        path="/privacidad"
      />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center opacity-0 animate-fade-in">
              {t('privacy.title')}
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

            <p className="mt-12 text-center text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              {language === 'es' ? 'Última actualización: Diciembre 2024' : 'Last updated: December 2024'}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
