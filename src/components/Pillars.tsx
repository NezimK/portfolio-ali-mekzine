import { AnimatedSection } from './AnimatedSection';
import { Zap, Shield, Lightbulb, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation constante pour des sites web rapides et scalables qui offrent une expérience utilisateur fluide.',
    color: 'from-yellow-400/20 to-orange-400/20'
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Protection des données et bonnes pratiques de sécurité intégrées dès la conception de chaque projet.',
    color: 'from-blue-400/20 to-cyan-400/20'
  },
  {
    icon: Lightbulb,
    title: 'Résolution de Problème',
    description: 'Analyse approfondie et solutions créatives pour transformer les défis complexes en opportunités.',
    color: 'from-purple-400/20 to-pink-400/20'
  },
  {
    icon: TrendingUp,
    title: 'Impact Mesurable',
    description: 'Solutions orientées résultats avec des métriques claires pour mesurer le succès et le retour sur investissement.',
    color: 'from-green-400/20 to-emerald-400/20'
  }
];

export const Pillars = () => {
  return (
    <section id="pillars" className="section-padding bg-background-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-gradient">Piliers</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Les valeurs fondamentales qui guident chaque projet et garantissent l'excellence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection 
              key={pillar.title}
              delay={200 + index * 150}
              animationType="zoom"
            >
              <div className="card-premium text-center group h-full">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-10 h-10 text-accent" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {pillar.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};