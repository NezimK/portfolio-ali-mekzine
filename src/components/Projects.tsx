import { AnimatedSection } from './AnimatedSection';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import quizSurasThumbnail from '@/assets/quizsuras-thumbnail.png';

const professionalProjects = [
  {
    title: 'Quiz Suras - Application de Quiz Coranique',
    description: 'Application web interactive pour apprendre et tester ses connaissances sur les sourates du Coran. Interface moderne avec différents niveaux de difficulté et modes de jeu.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Quiz Engine'],
    url: 'https://quizsuras.com/index.html',
    thumbnail: '/lovable-uploads/c7e08066-ea37-4a94-8a16-ccc9d462f0f9.png',
    featured: true
  },
  {
    title: 'Air Sana - E-commerce Humidificateurs', 
    description: 'Plateforme e-commerce moderne spécialisée dans les humidificateurs et produits de bien-être. Interface élégante avec système de panier, paiement sécurisé et gestion des commandes.',
    tags: ['React', 'E-commerce', 'Stripe', 'Design Premium'],
    url: 'https://airsana.fr/',
    thumbnail: '/lovable-uploads/bfd6da07-62f5-4605-9985-0a82f50225a5.png',
    featured: true
  }
];

const personalProjects = [
  {
    title: 'Perso 1',
    description: 'Problème: Gestion manuelle chronophage → Approche: Automatisation intelligente → Résultat: 80% de temps économisé',
    tags: ['Vue.js', 'Node.js', 'Redis']
  },
  {
    title: 'Perso 2',
    description: 'Problème: UX fragmentée → Approche: Design system unifié → Résultat: +150% engagement utilisateur',
    tags: ['Figma', 'React', 'Storybook']
  },
  {
    title: 'Perso 3',
    description: 'Problème: Analytics dispersées → Approche: Dashboard centralisé → Résultat: Décisions 5x plus rapides',
    tags: ['D3.js', 'Python', 'FastAPI']
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-gradient">Réalisations</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Sélection de projets professionnels et personnels.
            </p>
          </div>
        </AnimatedSection>

        {/* Professional Projects */}
        <AnimatedSection delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-accent mb-8">Projets professionnels</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalProjects.map((project, index) => (
                 <a
                   href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   key={project.title}
                    className={cn(
                      'card-premium group cursor-pointer block overflow-hidden',
                      'hover-scale opacity-100'
                    )}
                  >
                     {/* Thumbnail Image - Display for all projects with fallback */}
                     <div className="relative mb-4 rounded-lg overflow-hidden h-48 bg-card border border-border">
                       {project.thumbnail ? (
                         <img 
                           src={project.thumbnail} 
                           alt={`Aperçu de ${project.title}`}
                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                           onLoad={() => console.log('Image loaded successfully:', project.title)}
                           onError={(e) => console.error('Image failed to load:', project.title, e)}
                         />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                           <ExternalLink className="w-16 h-16" />
                         </div>
                       )}
                       <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                         Projet Live
                       </div>
                     </div>
                   
                   <div className="flex justify-between items-start mb-4">
                     <h4 className="text-xl font-semibold group-hover:text-accent transition-colors">
                       {project.title}
                     </h4>
                     <ExternalLink className="w-5 h-5 text-foreground-muted group-hover:text-accent transition-colors" />
                   </div>
                   
                   <p className="text-foreground-muted mb-6 leading-relaxed">
                     {project.description}
                   </p>
                   
                   <div className="flex flex-wrap gap-2 mb-6">
                     {project.tags.map((tag) => (
                       <span
                         key={tag}
                         className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium"
                       >
                         {tag}
                       </span>
                     ))}
                   </div>
                   
                    <button className="btn-secondary w-full group-hover:border-accent/60 transition-colors">
                      Visiter le site
                    </button>
                 </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Personal Projects */}
        <AnimatedSection delay={600}>
          <div>
            <h3 className="text-2xl font-bold text-accent mb-8">Projets personnels</h3>
            <div className="grid-projects">
              {personalProjects.map((project, index) => (
                <div
                  key={project.title}
                   className={cn(
                     'card-premium group opacity-100'
                   )}
                 >
                  <h4 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-foreground-muted mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted/50 text-foreground-muted text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};