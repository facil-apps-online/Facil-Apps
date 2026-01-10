import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object;
}

const BASE_URL = 'https://facil-apps.online';

// Schema base de la organización
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Facil Apps Online",
  "alternateName": "FAO",
  "url": BASE_URL,
  "logo": `${BASE_URL}/og-social.png`,
  "description": "Empresa de tecnología especializada en desarrollo de software empresarial bajo modelo SaaS para diferentes industrias en Latinoamérica.",
  "foundingDate": "2020",
  "areaServed": "Latinoamérica",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+573117208085",
    "url": `${BASE_URL}/contacto`,
    "availableLanguage": ["Spanish", "English"]
  }
};

// Función para generar WebPage schema
const generateWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Facil Apps Online",
    "url": BASE_URL
  },
  "publisher": organizationSchema
});

// Función para generar schema de servicios SaaS
const generateSoftwareServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Facil Apps Online - Ecosistema SaaS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "offerCount": "2"
  },
  "provider": organizationSchema,
  "hasPart": [
    {
      "@type": "SoftwareApplication",
      "name": "Glamtica",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "ERP para estéticas, salones de belleza, peluquerías y barberías",
      "url": "https://glamtica.app"
    },
    {
      "@type": "SoftwareApplication",
      "name": "TattooSuite",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "ERP para estudios de tatuajes y perforaciones",
      "url": "https://tattoosuite.app"
    }
  ]
});

// Schema para LocalBusiness (página de contacto)
const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Facil Apps Online",
  "image": `${BASE_URL}/og-social.png`,
  "url": BASE_URL,
  "telephone": "+573117208085",
  "email": "contacto@facil-apps.online",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrera 17 # 63A-26",
    "addressLocality": "Bogotá",
    "addressRegion": "Bogotá D.C.",
    "postalCode": "111321",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 4.6514685,
    "longitude": -74.0673773
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": []
});

const SEOHead = ({
  title, 
  description, 
  path = '', 
  image = '/og-social.png',
  type = 'website',
  schema 
}: SEOHeadProps) => {
  const fullUrl = `${BASE_URL}${path}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  
  // Generar schema por defecto basado en la página
  const defaultSchema = generateWebPageSchema(title, description, fullUrl);
  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Facil Apps Online" />
      <meta property="og:locale" content="es_LA" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export { SEOHead as default, organizationSchema, generateWebPageSchema, generateSoftwareServiceSchema, generateLocalBusinessSchema };
