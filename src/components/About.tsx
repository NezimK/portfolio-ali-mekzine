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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-accent/30 to-gold/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-28 h-28 bg-accent/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gold/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-gradient-to-br from-gold/40 to-accent/40 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
        <AnimatedSection>
            <header className="text-center mb-16">
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
                À <span className="text-gradient">Propos</span>
              </h2>
            </header>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <div className="glass p-10 md:p-16 space-y-12 rounded-3xl border border-accent/10">
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                    Passionné par la technologie et l'innovation, mon parcours a naturellement débuté par le développement web avant de connaître une véritable révélation avec l'avènement de l'IA générative.
                  </p>
                  <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                    J'ai rapidement compris que son potentiel allait nous permettre de révolutionner notre manière de travailler. J'ai donc décidé de me spécialiser dans l'intégration de l'IA, pour optimiser ce temps qui nous est si précieux.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent h-px"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent h-px transform translate-y-1"></div>
                </div>
                
                <div className="relative bg-gradient-to-br from-accent/5 to-gold/5 p-8 rounded-2xl border border-accent/10">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-gold/20 rounded-br-3xl"></div>
                  <p className="text-xl md:text-2xl text-accent font-medium leading-relaxed italic">
                    "Ma conviction est que l'IA n'est pas un remplaçant, mais un véritable copilote. Un assistant surpuissant qui facilite la prise de décision et élimine les tâches répétitives, libérant ainsi votre énergie pour ce qui vous tient réellement à cœur."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>;
};