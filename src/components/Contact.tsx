import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = 'Nouvelle demande de collaboration';
    const body = `Email: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:[Ton Email]?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <div className="card-premium">
                <h3 className="text-2xl font-semibold mb-8 text-accent">Envoyez-moi un message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Votre email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={cn(
                      'btn-primary w-full group',
                      'flex items-center justify-center space-x-2'
                    )}
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-accent">Contact direct</h3>
                  <a 
                    href="mailto:[Ton Email]"
                    className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">[Ton Email]</p>
                      <p className="text-sm">Réponse sous 24h</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-accent">Retrouvez-moi</h3>
                  <div className="space-y-4">
                    <a 
                      href="[Lien LinkedIn]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors glow-soft">
                        <Linkedin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">LinkedIn</p>
                        <p className="text-sm">Réseau professionnel</p>
                      </div>
                    </a>
                    
                    <a 
                      href="[Lien GitHub]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-foreground-muted hover:text-accent transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors glow-soft">
                        <Github className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">GitHub</p>
                        <p className="text-sm">Code & projets</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};