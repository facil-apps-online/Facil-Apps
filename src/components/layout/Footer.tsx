import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logoRectangular from '@/assets/FAO_Rectangular.png';

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoRectangular}
                alt="Facil Apps Online"
                className="h-10"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aplicaciones"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.apps')}
                </Link>
              </li>
              <li>
                <Link
                  to="/modelo"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.model')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terminos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidad"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Facil Apps Online. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
