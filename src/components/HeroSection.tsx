import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import logoImage from '@/assets/irriga-med-logo.png';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    'IRRIGA MED',
    'Solutions Intégrées',
    'Depuis 5 Ans'
  ];

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < texts.length) {
        const targetText = texts[currentIndex];
        
        if (isTyping) {
          if (currentText.length < targetText.length) {
            setCurrentText(targetText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsTyping(false), 1500);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setIsTyping(true);
          }
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping, texts]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="container-width relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Logo/Icon */}
          <div className="mb-8 animate-fade-up">
            <div className="w-56 h-48 mx-auto flex items-center justify-center mb-6 hover-glow">
              <img 
                src={logoImage} 
                alt="IRRIGA MED Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Typewriter Heading */}
          <div className="mb-6 animate-fade-up animate-fade-up-delay-1">
            <h1 className="text-hero text-foreground mb-4">
              <span className="typewriter">{currentText}</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up animate-fade-up-delay-2 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour l'irrigation agricole, les travaux divers, 
            l'import/export et la promotion immobilière au Maroc
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up animate-fade-up-delay-3">
            <a 
              href="#services" 
              className="btn-hero group inline-flex items-center"
            >
              Nos Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="btn-secondary group inline-flex items-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Contactez-Nous
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up animate-fade-up-delay-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Années d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Client</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;