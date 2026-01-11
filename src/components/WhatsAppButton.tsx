import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PHONE_NUMBER = '573117208085';

const WhatsAppButton = () => {
  const { language } = useLanguage();
  
  const message = language === 'es' 
    ? 'Hola, me gustaría obtener más información sobre sus soluciones SaaS.'
    : 'Hello, I would like to get more information about your SaaS solutions.';
  
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label={language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-card text-foreground text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {language === 'es' ? 'Escríbenos' : 'Chat with us'}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
