import { AnimatedSection } from './AnimatedSection';
import { Zap, Shield, Lightbulb, TrendingUp } from 'lucide-react';
const pillars = [{
  icon: Zap,
  title: 'Performance',
  description: 'Optimisation constante pour des sites web rapides et scalables qui offrent une expérience utilisateur fluide.'
}, {
  icon: Shield,
  title: 'Sécurité',
  description: 'Protection des données et bonnes pratiques de sécurité intégrées dès la conception de chaque projet.'
}, {
  icon: Lightbulb,
  title: 'Résolution de Problème',
  description: 'Analyse approfondie et solutions créatives pour transformer les défis complexes en opportunités.'
}, {
  icon: TrendingUp,
  title: 'Impact Mesurable',
  description: 'Solutions orientées résultats avec des métriques claires pour mesurer le succès et le retour sur investissement.'
}];
export const About = () => {
  return <section id="about" className="section-padding bg-background-secondary relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-center mb-16">
              À <span className="text-gradient">propos</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <div className="glass p-8 md:p-12 space-y-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-gold rounded-2xl flex items-center justify-center mb-8">
                  <div className="w-8 h-8 bg-background rounded-lg"></div>
                </div>
                <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                  Passionné de technologie, je conçois des sites web et des applications qui allient design et performance. J'accompagne également la transformation digitale des entreprises en automatisant leurs processus pour éliminer les tâches répétitives et gagner en efficacité.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-6"></div>
                <p className="text-xl md:text-2xl text-accent font-semibold">
                  Ma priorité : mettre la technologie au service de votre réussite.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>;
};