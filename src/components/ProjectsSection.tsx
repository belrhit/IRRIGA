import { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  // Featured projects with placeholder data - will be enhanced with actual PDFs
  const projects = [
    {
      id: 1,
      title: 'Travaux de Construction Souterraine',
      category: 'Génie Civil',
      description: 'Ce projet comprend l’installation et le creusement des puits d’accès, le creusement et le renforcement des galeries à travers des étapes clés telles que le ferraillage, le coffrage et le revêtement. Il inclut également les travaux d’injection et de blocage afin d’assurer la stabilité, la sécurité et la durabilité des structures souterraines.',
      image: '/project.png',
      pdfUrl: './Photo T180.pdf', // Will be replaced with actual PDF links
      stats: { area: '50 ha', duration: '3 mois', efficiency: '+40%' }
    },
    {
      id: 2,
      
        title: 'Terrassement, Blindage et Pose de Conduite',
        category: 'Génie Civil',
        description: 'Travaux de terrassement avec blindage des parois pour la pose sécurisée d‘une conduite souterraine.',
      
      image: '/project.png',
      pdfUrl: './Photos Collecteur SUD.pdf',
      stats: { units: '120', surface: '5000 m²', delivery: '2024' }
    },
    {
      id: 3,
      title: 'Terrassement et Pose de Conduite',
      category: 'Génie Civil',
      description: 'Excavation et préparation du terrain suivies de l‘installation d‘une conduite pour le transport de fluides.',   image: '/project.png',
      pdfUrl: 'Photos Conduite DN2000.pdf',
      stats: { equipment: '500+', countries: '5', value: '2M€' }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-secondary/30 to-background" ref={sectionRef}>
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-section-title text-foreground mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Nos Projets Réalisés
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Découvrez quelques-unes de nos réalisations les plus marquantes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-card-title text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-secondary/50 rounded-lg">
                      <div className="text-sm font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => window.open(project.pdfUrl, '_blank')}
                  className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Voir Détails
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/projects')}
            className={`btn-hero group inline-flex items-center transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Voir Tous les Projets
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;