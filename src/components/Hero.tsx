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
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gold/70 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-gold/60 rounded-full animate-pulse delay-500"></div>
      </div>
      {/* Enhanced glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse"></div>

      <main className="relative z-10 container mx-auto px-6 text-center">
        <AnimatedSection delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">ALI MEKZINE</span>
          </h1>
          <p className="sr-only">UX Designer et Développeur Web spécialisé en sites SEO-friendly</p>
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
      </main>

      {/* Scroll indicator */}
      <AnimatedSection delay={1000} className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-4">
        <div className="flex flex-col items-center space-y-1 md:space-y-2 animate-bounce">
          <span className="text-xs text-foreground-muted font-medium hidden sm:block">Défiler</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-accent/30 rounded-full flex justify-center items-center">
            <div className="w-0.5 md:w-1 h-2 md:h-3 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </AnimatedSection>
    </section>;
};