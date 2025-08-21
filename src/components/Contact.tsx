import { AnimatedSection } from './AnimatedSection';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travaillons <span className="text-gradient">ensemble</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Prêt à transformer vos idées en solutions innovantes ? Discutons de votre projet.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact */}
            <AnimatedSection delay={200}>
              <div className="glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-6 text-accent">Contact direct</h3>
                <div className="space-y-4">
                  <a href="mailto:alimekzine7@gmail.com" className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">alimekzine7@gmail.com</p>
                      <p className="text-sm">Réponse sous 24h</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/33645541319?text=Bonjour%20Ali%2C%20je%20veux%20parler%20d%27un%20projet%20et%20fixer%20un%20rendez-vous." target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm">+33 6 45 54 13 19</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={400}>
              <div className="glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-6 text-accent">Retrouvez-moi</h3>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/in/alimekzine" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors glow-soft">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm">in/alimekzine</p>
                    </div>
                  </a>
                  
                  <a href="https://github.com/NezimK" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors glow-soft">
                      <Github className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-sm">@NezimK</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};