import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/irriga-med-logo.png';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-12 flex items-center">
              <img 
                src={logoImage} 
                alt="IRRIGA MED Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-hero"
                onClick={() => setIsOpen(false)}
              >
                Contactez-Nous
              </a>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6">
              <a 
                href="#contact" 
                className="btn-hero w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                Contactez-Nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;