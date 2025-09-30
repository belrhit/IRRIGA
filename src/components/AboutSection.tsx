import { useState, useEffect, useRef } from 'react';
import { MapPin, Award, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Engagement envers la qualité et l\'innovation dans tous nos projets'
    },
    {
      icon: Users,
      title: 'Équipe Expert',
      description: 'Professionnels qualifiés avec une expertise sectorielle approfondie'
    },
    {
      icon: Target,
      title: 'Solutions Sur-Mesure',
      description: 'Approche personnalisée pour répondre aux besoins spécifiques de chaque client'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-section-title text-foreground mb-6">
                À Propos d'IRRIGA MED
              </h2>
              <div className="w-24 h-1 bg-primary mb-8 rounded-full"></div>
            </div>

            <div className={`space-y-6 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis 5 ans, <strong className="text-foreground">IRRIGA MED</strong> s'impose comme 
                un acteur de référence dans le domaine des solutions intégrées au Maroc. Notre expertise 
                couvre l'irrigation agricole, les travaux divers, l'import/export et la promotion immobilière.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Basée à Casablanca, notre société combine innovation technologique et savoir-faire 
                traditionnel marocain pour offrir des solutions durables et performantes à nos clients.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className={`flex items-start space-x-4 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Location */}
            <div className={`bg-secondary/50 rounded-xl p-6 border border-border transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Notre Localisation</h3>
                  <p className="text-muted-foreground">
                   N° bureau A62<br />
                   CASABLANCA, MAROC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map/Visual */}
          <div className="order-1 lg:order-2">
            <div className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative">
                {/* Map Container */}
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border hover-lift">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Moroccan Pattern Background */}
                    <div className="absolute inset-0 moroccan-pattern opacity-20"></div>
                    
                    {/* Map Placeholder with Morocco outline */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <MapPin className="h-16 w-16 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Casablanca</h3>
                      <p className="text-muted-foreground">Centre Économique du Maroc</p>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-4 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Ans d'Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;