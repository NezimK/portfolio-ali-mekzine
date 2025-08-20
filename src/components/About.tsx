import { AnimatedSection } from './AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const pillars = [
  'Stratégie IA',
  'Design systémique', 
  'Automatisation',
  'Delivery'
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
                <div className="space-y-4">
                  {pillars.map((pillar, index) => (
                    <div 
                      key={pillar}
                      className="flex items-center space-x-3 opacity-0 animate-reveal"
                      style={{ 
                        animationDelay: `${600 + index * 120}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{pillar}</span>
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