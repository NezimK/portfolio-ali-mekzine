import { AnimatedSection } from './AnimatedSection';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const professionalProjects = [
  {
    title: 'Projet Pro 1',
    description: 'Solution IA révolutionnaire qui a augmenté la productivité client de 300% en automatisant les processus critiques.',
    tags: ['Python', 'React', 'TensorFlow', 'AWS'],
    url: 'https://quizsuras.com/index.html',
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
                <div
                  key={project.title}
                  className={cn(
                    'card-premium group cursor-pointer',
                    'animate-reveal opacity-0'
                  )}
                  style={{ 
                    animationDelay: `${400 + index * 200}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
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
                        className="px-3 py-1 bg-muted/50 text-foreground-muted text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="btn-secondary w-full group-hover:border-accent/60 transition-colors">
                    Voir en ligne
                  </button>
                </div>
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