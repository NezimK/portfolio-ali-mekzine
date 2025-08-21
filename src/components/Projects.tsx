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
    thumbnail: quizSurasThumbnail,
    featured: true
  },
  {
    title: 'Projet Pro 2', 
    description: 'Plateforme SaaS complète générant 2M€ ARR, servant 50k+ utilisateurs avec 99.9% uptime.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Vercel'],
    url: '[URL projet 2]',
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
                     'animate-reveal opacity-0 hover-scale'
                   )}
                   style={{ 
                     animationDelay: `${400 + index * 200}ms`,
                     animationFillMode: 'forwards'
                   }}
                 >
                   {/* Thumbnail Image */}
                   {project.thumbnail && (
                     <div className="relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                       <img 
                         src={project.thumbnail} 
                         alt={`Aperçu de ${project.title}`}
                         className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                         Projet Live
                       </div>
                     </div>
                   )}
                   
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
                   
                   <div className="btn-secondary w-full group-hover:border-accent/60 transition-colors text-center py-3">
                     Visiter le site
                   </div>
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
                    'card-premium group',
                    'animate-reveal opacity-0'
                  )}
                  style={{ 
                    animationDelay: `${800 + index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
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