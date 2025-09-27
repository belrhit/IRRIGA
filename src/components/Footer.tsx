import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Irrigation Agricole',
    'Travaux Divers',
    'Import/Export',
    'Promotion Immobilière'
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Moroccan Pattern Background */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="container-width relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">IM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-background">IRRIGA MED</h3>
                <p className="text-background/70">Solutions Intégrées pour l'Agriculture et Au-Delà</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Depuis 5 ans, nous sommes votre partenaire de confiance pour l'irrigation agricole, 
              les travaux divers, l'import/export et la promotion immobilière au Maroc.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  GROUPE ATTAKKADDOUM GH2 17, 2EME ETAGE SIDI BERNOUSSI, CASABLANCA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">+212 5XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">contact@irrigamed.ma</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80 text-sm block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 IRRIGA MED. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-background/60 text-sm">5+ Années d'Excellence</span>
              <button
                onClick={scrollToTop}
                className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-lg transition-all duration-300 hover:scale-105"
                aria-label="Retour en haut"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;