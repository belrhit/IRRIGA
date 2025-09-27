import { useState, useEffect, useRef } from 'react';
import { Droplets, Wrench, Package, Building } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceCount, setExperienceCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Droplets,
      title: 'Irrigation Agricole',
      description: 'Solutions complètes d\'irrigation pour optimiser vos rendements agricoles avec des systèmes modernes et efficaces.',
      features: ['Irrigation goutte à goutte', 'Systèmes d\'aspersion', 'Automatisation', 'Maintenance']
    },
    {
      icon: Wrench,
      title: 'Travaux Divers',
      description: 'Services de construction et rénovation adaptés à vos besoins spécifiques avec une qualité professionnelle.',
      features: ['Construction', 'Rénovation', 'Maintenance', 'Consulting']
    },
    {
      icon: Package,
      title: 'Import/Export',
      description: 'Facilitation du commerce international avec une expertise logistique et douanière approfondie.',
      features: ['Logistique', 'Douanes', 'Transport', 'Documentation']
    },
    {
      icon: Building,
      title: 'Promotion Immobilière',
      description: 'Développement de projets immobiliers innovants et rentables dans les meilleures localisations.',
      features: ['Développement', 'Investissement', 'Gestion', 'Commercialisation']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate experience counter
          let start = 0;
          const end = 5;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setExperienceCount(end);
              clearInterval(timer);
            } else {
              setExperienceCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-secondary/30" ref={sectionRef}>
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-section-title text-foreground mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Nos Services
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Découvrez notre gamme complète de services professionnels adaptés à vos besoins
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-card-title text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Experience Counter */}
        <div className="text-center">
          <div className={`inline-flex items-center justify-center bg-primary/10 rounded-2xl px-8 py-6 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {experienceCount}+
              </div>
              <div className="text-muted-foreground font-medium">
                Années d'Expérience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-3 pointer-events-none"></div>
    </section>
  );
};

export default ServicesSection;