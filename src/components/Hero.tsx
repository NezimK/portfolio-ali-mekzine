import { AnimatedSection } from './AnimatedSection';
import { cn } from '@/lib/utils';
export const Hero = () => {
  const handleExploreClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute inset-0 opacity-30">
          {/* Subtle particles animation */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold/60 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gold/50 rounded-full animate-pulse delay-500"></div>
        </div>
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <AnimatedSection delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">ALI MEKZINE</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-foreground-muted max-w-4xl mx-auto leading-relaxed">
            J'accompagne <span className="text-accent font-semibold">entreprises et indépendants</span> dans la création de{' '}
            <span className="text-accent font-semibold">sites SEO-friendly</span>. De la conception à la mise en ligne, je privilégie{' '}
            <span className="text-accent font-semibold">l'expérience utilisateur et l'efficacité visuelle</span> pour fournir des solutions modernes et adaptées aux besoins réels.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <button onClick={handleExploreClick} className={cn('btn-primary text-lg group relative overflow-hidden', 'transform hover:scale-105 transition-all duration-300')}>
            <span className="relative z-10">Explorer mes projets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <AnimatedSection delay={1000} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-foreground-muted font-medium">Défiler</span>
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </AnimatedSection>
    </section>;
};