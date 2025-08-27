import { AnimatedSection } from './AnimatedSection';

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

          <AnimatedSection delay={200}>
            <div className="text-center space-y-6">
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
        </div>
      </div>
    </section>
  );
};