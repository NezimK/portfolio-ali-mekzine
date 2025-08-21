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
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              À <span className="text-gradient">propos</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                  Fort d'un parcours axé sur l'innovation et l'excellence technique, j'accompagne mes clients 
                  dans la transformation digitale en plaçant l'expérience utilisateur au cœur de chaque solution.
                </p>
                <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                  Mon approche combine vision stratégique, maîtrise technique et obsession du détail pour 
                  livrer des produits qui génèrent un impact mesurable et durable.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-accent">Mes piliers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pillars.map((pillar, index) => (
                    <div 
                      key={pillar.title}
                      className="opacity-100"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <pillar.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold text-sm mb-1">{pillar.title}</h4>
                          <p className="text-foreground-muted text-xs leading-relaxed">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};