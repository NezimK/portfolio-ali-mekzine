import { AnimatedSection } from './AnimatedSection';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import quizSurasThumbnail from '@/assets/quizsuras-thumbnail.png';

const allProjects = [
  {
    title: 'Quiz Suras - Application de Quiz Coranique',
    description: 'Application web interactive pour apprendre et tester ses connaissances sur les sourates du Coran. Interface moderne avec différents niveaux de difficulté et modes de jeu.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Quiz Engine'],
    url: 'https://quizsuras.com/index.html',
    thumbnail: '/lovable-uploads/c7e08066-ea37-4a94-8a16-ccc9d462f0f9.png',
    featured: true,
    type: 'professional'
  },
  {
    title: 'Air Sana - E-commerce Humidificateurs', 
    description: 'Plateforme e-commerce moderne spécialisée dans les humidificateurs et produits de bien-être. Interface élégante avec système de panier, paiement sécurisé et gestion des commandes.',
    tags: ['React', 'E-commerce', 'Stripe', 'Design Premium'],
    url: 'https://airsana.fr/',
    thumbnail: '/lovable-uploads/bfd6da07-62f5-4605-9985-0a82f50225a5.png',
    featured: true,
    type: 'professional'
  },
  {
    title: 'Robbie Lens - Site Photographe',
    description: 'Site web professionnel pour un photographe créé avec HTML5 et CSS3. Design moderne et responsive mettant en valeur le portfolio artistique.',
    tags: ['HTML5', 'CSS3', 'Design Responsive'],
    url: 'https://drive.google.com/file/d/1QSp5yVhxopmo1XvkPKaIgIBtr7CkiNSV/view?usp=drive_link',
    thumbnail: '/lovable-uploads/d7476752-a342-4a08-811b-52a10008dfe5.png',
    type: 'personal'
  },
  {
    title: 'ElectroPro - Site Électricité & Innovation',
    description: 'Site web professionnel pour une entreprise d\'électricité créé avec Lovable. Interface moderne avec services d\'urgence 24/7, devis en ligne et présentation des expertise techniques.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Lovable'],
    thumbnail: '/lovable-uploads/electropro-screenshot.png',
    url: 'https://spark-stride-site-43.lovable.app',
    type: 'personal'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background-secondary" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <header className="text-center mb-16">
            <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-gradient">Projets</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Sélection de mes réalisations professionnelles et personnelles.
            </p>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              project.url ? (
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
                  {/* Thumbnail Image */}
                  <div className="relative mb-4 rounded-lg overflow-hidden h-48 bg-card border border-border">
                    {project.thumbnail ? (
                      <img 
                        src={project.thumbnail} 
                        alt={`Capture d'écran du projet ${project.title} - ${project.description.slice(0, 80)}...`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <ExternalLink className="w-16 h-16" />
                      </div>
                    )}
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
                        className="px-3 py-1 text-sm rounded-full font-medium bg-accent/20 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="btn-secondary w-full group-hover:border-accent/60 transition-colors">
                    {project.type === 'professional' ? 'Visiter le site' : 'Voir le projet'}
                  </button>
                </a>
              ) : (
                <div
                  key={project.title}
                  className={cn(
                    'card-premium group opacity-100'
                  )}
                >
                  
                  <h4 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted/50 text-foreground-muted text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};