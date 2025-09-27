import { useState, useEffect } from 'react';
import { ArrowLeft, Search, Filter, ExternalLink, Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Projects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Tous les Projets', count: 12 },
    { id: 'agriculture', name: 'Agriculture', count: 5 },
    { id: 'construction', name: 'Travaux Divers', count: 3 },
    { id: 'import-export', name: 'Import/Export', count: 2 },
    { id: 'immobilier', name: 'Immobilier', count: 2 }
  ];

  // Extended project list with more examples
  const allProjects = [
    {
      id: 1,
      title: 'Système d\'Irrigation Goutte-à-Goutte - Région Souss',
      category: 'agriculture',
      description: 'Installation complète d\'un système d\'irrigation moderne pour 50 hectares de cultures maraîchères dans la région du Souss.',
      year: '2024',
      duration: '3 mois',
      client: 'Coopérative Agricole Souss',
      stats: { area: '50 ha', efficiency: '+40%', cost: '500K MAD' },
      pdfUrl: '#',
      tags: ['Goutte-à-goutte', 'Automatisation', 'Économie d\'eau']
    },
    {
      id: 2,
      title: 'Complexe Résidentiel Al-Andalus',
      category: 'immobilier',
      description: 'Développement d\'un complexe résidentiel moderne avec 120 unités d\'habitation et espaces verts paysagers.',
      year: '2023',
      duration: '18 mois',
      client: 'Groupe Immobilier Casa',
      stats: { units: '120', surface: '5000 m²', investment: '50M MAD' },
      pdfUrl: '#',
      tags: ['Résidentiel', 'Moderne', 'Espaces verts']
    },
    {
      id: 3,
      title: 'Import Équipements Agricoles Européens',
      category: 'import-export',
      description: 'Importation et distribution d\'équipements agricoles de haute technologie en provenance d\'Europe.',
      year: '2024',
      duration: '6 mois',
      client: 'Distributeurs Agricoles Maroc',
      stats: { equipment: '500+', countries: '5', value: '2M€' },
      pdfUrl: '#',
      tags: ['Import', 'Technologie', 'Distribution']
    },
    {
      id: 4,
      title: 'Rénovation Centre Commercial Maarif',
      category: 'construction',
      description: 'Rénovation complète et modernisation d\'un centre commercial de 3000m² au quartier Maarif.',
      year: '2023',
      duration: '8 mois',
      client: 'Société Maarif Plaza',
      stats: { surface: '3000 m²', shops: '45', budget: '8M MAD' },
      pdfUrl: '#',
      tags: ['Rénovation', 'Commercial', 'Modernisation']
    },
    {
      id: 5,
      title: 'Système d\'Irrigation Intelligente - Berkane',
      category: 'agriculture',
      description: 'Installation d\'un système d\'irrigation intelligent avec capteurs IoT pour optimiser la consommation d\'eau.',
      year: '2024',
      duration: '4 mois',
      client: 'Domaine Agricole Berkane',
      stats: { area: '75 ha', sensors: '200+', economy: '60%' },
      pdfUrl: '#',
      tags: ['IoT', 'Intelligent', 'Capteurs']
    },
    {
      id: 6,
      title: 'Villa de Luxe Ain Diab',
      category: 'immobilier',
      description: 'Construction d\'une villa de luxe avec piscine et jardin paysager face à l\'océan à Ain Diab.',
      year: '2023',
      duration: '12 mois',
      client: 'Client Privé',
      stats: { surface: '800 m²', rooms: '8', garden: '1200 m²' },
      pdfUrl: '#',
      tags: ['Luxe', 'Océan', 'Paysager']
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

      <Footer />
    </div>
  );
};

export default Projects;