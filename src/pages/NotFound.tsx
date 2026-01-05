import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const content = {
    es: {
      title: "Página no encontrada",
      subtitle: "Lo sentimos, la página que buscas no existe o ha sido movida.",
      home: "Ir al inicio",
      back: "Volver atrás",
      search: "Ver aplicaciones",
    },
    en: {
      title: "Page not found",
      subtitle: "Sorry, the page you're looking for doesn't exist or has been moved.",
      home: "Go home",
      back: "Go back",
      search: "View applications",
    },
  };

  const t = content[language as keyof typeof content] || content.es;

  return (
    <>
      <SEOHead
        title={`404 - ${t.title} | Facil Apps Online`}
        description={t.subtitle}
        path={location.pathname}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-display font-bold leading-none gradient-text opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center shadow-2xl animate-pulse-glow">
                <Search className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Text */}
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            {t.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gradient-bg text-secondary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 px-6"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                {t.home}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 px-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.back}
            </Button>
          </div>

          {/* Quick links */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'es' ? '¿Buscabas alguna de estas páginas?' : 'Were you looking for one of these?'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/aplicaciones" 
                className="text-sm text-primary hover:underline transition-colors"
              >
                {language === 'es' ? 'Aplicaciones' : 'Applications'}
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/modelo" 
                className="text-sm text-primary hover:underline transition-colors"
              >
                {language === 'es' ? 'Modelo' : 'Model'}
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/quienes-somos" 
                className="text-sm text-primary hover:underline transition-colors"
              >
                {language === 'es' ? 'Quiénes Somos' : 'About Us'}
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/contacto" 
                className="text-sm text-primary hover:underline transition-colors"
              >
                {language === 'es' ? 'Contacto' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
