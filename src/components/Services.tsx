import { AnimatedSection } from './AnimatedSection';
import { Brain, Code, Zap, Palette } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Stratégie IA',
    description: 'Intégration intelligente d\'IA pour optimiser vos processus métier et créer de la valeur.'
  },
  {
    icon: Code,
    title: 'Développement web',
    description: 'Applications sur-mesure, performantes et scalables avec les dernières technologies.'
  },
  {
    icon: Zap,
    title: 'Automatisation',
    description: 'Workflows automatisés pour éliminer les tâches répétitives et accélérer la croissance.'
  },
  {
    icon: Palette,
    title: 'UX Design',
    description: 'Interfaces intuitives et expériences utilisateur mémorables centrées sur vos objectifs.'
  }
];

const tools = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Lovable', 'N8N',
  'TypeScript', 'Figma', 'Python', 'Node.js', 'PostgreSQL'
];

export const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services & <span className="text-gradient">Compétences</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title}
              delay={200 + index * 150}
              animationType="zoom"
            >
              <div className="card-premium text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tools Band */}
        <AnimatedSection delay={800}>
          <div className="glass rounded-3xl p-8 bg-red-500 border-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-center mb-8 text-white">
              Technologies & Outils
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-xl text-sm border-2 border-green-400"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};