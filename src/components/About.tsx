import { AnimatedSection } from './AnimatedSection';
import { Zap, Shield, Lightbulb, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation constante pour des sites web rapides et scalables qui offrent une expérience utilisateur fluide.'
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Protection des données et bonnes pratiques de sécurité intégrées dès la conception de chaque projet.'
  },
  {
    icon: Lightbulb,
    title: 'Résolution de Problème',
    description: 'Analyse approfondie et solutions créatives pour transformer les défis complexes en opportunités.'
  },
  {
    icon: TrendingUp,
    title: 'Impact Mesurable',
    description: 'Solutions orientées résultats avec des métriques claires pour mesurer le succès et le retour sur investissement.'
  }
];

export const About = () => {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-center mb-16">
              À <span className="text-gradient">propos</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                  Passionné de technologie, je conçois des sites web et des applications qui allient design et performance. J'accompagne également la transformation digitale des entreprises en automatisant leurs processus pour éliminer les tâches répétitives et gagner en efficacité.
                </p>
                <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                  Ma priorité : mettre la technologie au service de votre réussite.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};