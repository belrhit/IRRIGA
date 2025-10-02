import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search, Filter, ExternalLink, Grid, List, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Projects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // State for image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Image slider data - 24 images
  const projectImages = [
    { id: 1, url: '/images/projects/project-1.jpg', title: 'Travaux de Construction Souterraine', description: 'Projet de galeries et puits d\'accès' },
    { id: 2, url: '/images/projects/project-2.jpeg', title: 'Terrassement et Pose de Conduites', description: 'Installation de collecteurs d\'assainissement' },
    { id: 3, url: '/images/projects/project-3.jpeg', title: 'Aménagement Urbain', description: 'Infrastructures de la ville de Fès' },
    { id: 4, url: '/images/projects/project-4.jpeg', title: 'Gros Oeuvre Béton', description: 'Ferraillage et coulage des structures' },
    { id: 5, url: '/images/projects/project-5.jpeg', title: 'Réseaux d\'Assainissement', description: 'Collecteurs principaux et galeries' },
    { id: 6, url: '/images/projects/project-6.jpeg', title: 'Construction de Puits', description: 'Installation et creusement des puits d\'accès' },
    { id: 7, url: '/images/projects/project-7.jpeg', title: 'Galeries Souterraines', description: 'Creusement et renforcement des galeries' },
    { id: 8, url: '/images/projects/project-8.jpeg', title: 'Travaux de Blindage', description: 'Sécurisation des parois de fouille' },
    { id: 9, url: '/images/projects/project-9.jpeg', title: 'Pose de Conduites DN2000', description: 'Installation de conduites de grand diamètre' },
    { id: 10, url: '/images/projects/project-10.jpeg', title: 'Ferraillage et Coulage', description: 'Travaux de structure en béton armé' },
    { id: 11, url: '/images/projects/project-11.jpeg', title: 'Collecteur Miyet Amont', description: 'Travaux sur le collecteur principal' },
    { id: 12, url: '/images/projects/project-12.jpeg', title: 'Déviation Sud', description: 'Projet de déviation des collecteurs' },
    { id: 13, url: '/images/projects/project-13.jpeg', title: 'Galerie en Voûte 108', description: 'Construction de galerie voûtée' },
    { id: 14, url: '/images/projects/project-14.jpeg', title: 'Terrassement Industriel', description: 'Préparation des terrains' },
    { id: 15, url: '/images/projects/project-15.jpeg', title: 'Ouvrages d\'Art', description: 'Construction d\'ouvrages spécialisés' },
    { id: 16, url: '/images/projects/project-16.jpeg', title: 'Réseaux Hydrauliques', description: 'Installation des systèmes hydrauliques' },
    { id: 17, url: '/images/projects/project-17.jpeg', title: 'Infrastructures Urbaines', description: 'Développement des infrastructures' },
    { id: 18, url: '/images/projects/project-18.jpeg', title: 'Chantier Souterrain', description: 'Travaux en milieu confiné' },
    { id: 19, url: '/images/projects/project-19.jpeg', title: 'Génie Civil Spécialisé', description: 'Réalisation techniques complexes' },
    { id: 20, url: '/images/projects/project-20.jpeg', title: 'Assainissement Liquide', description: 'Réseaux d\'évacuation des eaux' },
    { id: 21, url: '/images/projects/project-21.jpeg', title: 'Construction de Dalots', description: 'Ouvrages de franchissement' },
    { id: 22, url: '/images/projects/project-22.jpeg', title: 'Travaux de Voûtes', description: 'Réalisation de structures voûtées' },
    { id: 23, url: '/images/projects/project-23.jpeg', title: 'Profil Techniques', description: 'Études et exécution des profils' },
    { id: 24, url: '/images/projects/project-24.jpeg', title: 'Plan Directeur', description: 'Actualisation des schémas directeurs' }
  ];

  // Auto-play slider
  useEffect(() => {
    if (isPlaying) {
      sliderRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projectImages.length);
      }, 5000);
    }

    return () => {
      if (sliderRef.current) {
        clearInterval(sliderRef.current);
      }
    };
  }, [isPlaying, projectImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const categories = [
    { id: 'all', name: 'Tous les Projets', count: 9 },
    { id: 'genie-civil', name: 'Génie Civil', count: 5 },
    { id: 'agriculture', name: 'Agriculture', count: 2 },
    { id: 'import-export', name: 'Import/Export', count: 1 },
    { id: 'immobilier', name: 'Immobilier', count: 1 }
  ];

  // Projects list with civil engineering projects first
  const allProjects = [
    // Civil Engineering Projects - First
    {
      id: 1,
      title: 'Travaux de Construction Souterraine',
      category: 'genie-civil',
      description: 'Ce projet comprend l\'installation et le creusement des puits d\'accès, le creusement et le renforcement des galeries à travers des étapes clés telles que le ferraillage, le coffrage et le revêtement. Il inclut également les travaux d\'injection et de blocage afin d\'assurer la stabilité, la sécurité et la durabilité des structures souterraines.',
      year: '2024',
      duration: '6 mois',
      client: 'Client Infrastructure',
      stats: { area: 'Complexe', galeries: 'Multiples', sécurité: 'Maximale' },
      pdfUrl: './Photo T180.pdf',
      tags: ['Souterrain', 'Ferraillage', 'Injection']
    },
    {
      id: 2,
      title: 'Terrassement, Blindage et Pose de Conduite',
      category: 'genie-civil',
      description: 'Travaux de terrassement avec blindage des parois pour la pose sécurisée d\'une conduite souterraine.',
      year: '2024',
      duration: '3 mois',
      client: 'Municipalité',
      stats: { longueur: '2.5 km', diamètre: '1200mm', profondeur: '4m' },
      pdfUrl: './Photos Collecteur SUD.pdf',
      tags: ['Terrassement', 'Blindage', 'Conduite']
    },
    {
      id: 3,
      title: 'Terrassement et Pose de Conduite',
      category: 'genie-civil',
      description: 'Excavation et préparation du terrain suivies de l\'installation d\'une conduite pour le transport de fluides.',
      year: '2023',
      duration: '2 mois',
      client: 'Société des Eaux',
      stats: { débit: '500L/s', matériau: 'HDPE', inspection: 'Robotique' },
      pdfUrl: 'Photos Conduite DN2000.pdf',
      tags: ['Excavation', 'Pose', 'Fluides']
    },
    {
      id: 4,
      title: 'Terrassement et Pose de Blindage',
      category: 'genie-civil',
      description: 'Excavation du terrain avec installation d\'un système de blindage pour sécuriser les parois de la fouille.',
      year: '2023',
      duration: '4 mois',
      client: 'Groupe BTP',
      stats: { profondeur: '8m', blindage: 'Métallique', stabilité: '100%' },
      pdfUrl: 'Photos Dalot Section 1.80.pdf',
      tags: ['Excavation', 'Blindage', 'Sécurité']
    },
    {
      id: 5,
      title: 'Terrassement, Blindage et Gros Oeuvre Béton',
      category: 'genie-civil',
      description: 'Travaux complets incluant terrassement avec blindage, suivi du ferraillage et du coulage des voiles et de la dalle en béton.',
      year: '2024',
      duration: '8 mois',
      client: 'Promoteur Immobilier',
      stats: { surface: '2500 m²', béton: '800 m³', acier: '85 tonnes' },
      pdfUrl: 'Photos Dalot Section 1.80 (1).pdf',
      tags: ['Gros Oeuvre', 'Béton', 'Ferraillage']
    },
    // Other projects
    {
      id: 6,
      title: 'Construction de Puits et Galeries Souterraines',
      category: 'genie-civil',
      description: 'Installation et creusement des puits d\'accès, creusement de galeries, suivi du ferraillage et coulage du radier et de la voûte pour structure souterraine complète.',
      year: '2024',
      duration: '3 mois',
      client: 'Coopérative Agricole Souss',
      stats: { area: '50 ha', efficiency: '+40%', cost: '500K MAD' },
      pdfUrl: 'Photos Galerie Fer à cheval section V280.pdf',
      tags: ['Goutte-à-goutte', 'Automatisation', 'Économie d\'eau']
    },
    {
      id: 7,
      title: 'Actualisation du Plan Directeur d\'Assainissement de la Ville de Fès',
      category: 'genie-civil',
      description: 'Mise à jour complète du schéma directeur des réseaux d\'assainissement pour la ville de Fès, incluant la planification stratégique et l\'optimisation des infrastructures.',
      year: '2023',
      duration: '18 mois',
      client: 'Groupe Immobilier Casa',
      stats: { units: '120', surface: '5000 m²', investment: '50M MAD' },
      pdfUrl: 'M1.1-TRACE EN PLAN - MIYET+DEVIATION SUD.pdf',
      tags: ['Résidentiel', 'Moderne', 'Espaces verts']
    },
    {
      id: 8,
      title: 'M2 - Profils Myèt Amont & Déviation Sud',
      category: 'genie-civil',
      description: 'Étude et réalisation des profils techniques pour la section Myèt Amont et les travaux de déviation Sud, incluant la conception et l\'exécution des ouvrages.',
      year: '2024',
      duration: '6 mois',
      client: 'Distributeurs Agricoles Maroc',
      stats: { equipment: '500+', countries: '5', value: '2M€' },
      pdfUrl: 'M2-PROFILS MYET AMONT& DEVIATION  SUD.pdf',
      tags: ['Import', 'Technologie', 'Distribution']
    },
    {
      id: 9,
      title: 'Assainissement Liquide de Fès - Collecteurs Principaux Lot 1',
      category: 'genie-civil',
      description: 'Travaux de réalisation des collecteurs d\'assainissement liquide pour la ville de Fès, incluant le collecteur Miyet Amont et la déviation du collecteur Sud, avec galerie en voûte 108, sous maîtrise d\'ouvrage de la RADEEF.',
      year: '2024',
      duration: '4 mois',
      client: 'Domaine Agricole Berkane',
      stats: { area: '75 ha', sensors: '200+', economy: '60%' },
      pdfUrl: 'GALERIE EN  VOUTE 108-signed.pdf',
      tags: ['IoT', 'Intelligent', 'Capteurs']
    }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Loading Bar */}
      <div className="loading-bar" style={{ width: isLoaded ? '100%' : '0%' }}></div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-width">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour à l'accueil
              </button>
            </div>
            
            <h1 className="text-hero text-foreground mb-6">
              Nos Projets Réalisés
            </h1>
            <div className="w-32 h-1 bg-primary mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Découvrez notre portfolio complet de projets réalisés avec succès dans tous nos domaines d'expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-secondary/30">
        <div className="container-width">
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher des projets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-background border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16">
        <div className="container-width">
          <div className={`mb-8 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-muted-foreground">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </p>
          </div>

          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-card border border-border rounded-xl overflow-hidden hover-lift transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <ExternalLink className="h-12 w-12 text-primary" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/90 text-foreground px-2 py-1 rounded text-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-card-title text-foreground mb-3 hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-secondary/50 rounded">
                          <div className="text-sm font-semibold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => window.open(project.pdfUrl, '_blank')}
                      className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      Voir le Projet
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Project Image */}
                    <div className="relative h-32 lg:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>

                    {/* Project Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                        <span className="text-muted-foreground text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats & Action */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(project.stats).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-secondary/50 rounded">
                            <div className="text-sm font-semibold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground">{key}</div>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => window.open(project.pdfUrl, '_blank')}
                        className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                      >
                        Voir PDF
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Aucun projet trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-secondary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-width">
          <div className={`text-center mb-12 transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Galerie de Nos Réalisations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez en images l'étendue de nos compétences et la qualité de nos réalisations
            </p>
          </div>

          {/* Slider Container */}
          <div className={`relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-700 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Slides */}
            <div className="relative h-80 md:h-96 lg:h-[500px]">
              {projectImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-6 md:p-8 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {projectImages.length}
            </div>
          </div>

          {/* Additional Info */}
          <div className={`text-center mt-8 transition-all duration-700 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-muted-foreground">
              Parcourez notre galerie pour découvrir l'ensemble de nos réalisations en génie civil et assainissement
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;