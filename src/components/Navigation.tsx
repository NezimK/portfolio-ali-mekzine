import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'glass py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('#hero')}
            className="text-xl font-bold text-gradient cursor-pointer"
          >
            [Ton Nom]
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-300 cursor-pointer',
                  'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5',
                  'after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300',
                  'hover:text-accent hover:after:scale-x-100 focus:outline-none focus:text-accent',
                  activeSection === item.href.substring(1)
                    ? 'text-accent after:scale-x-100'
                    : 'text-foreground-muted'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => handleNavClick('#contact')}
            className="btn-primary text-sm"
          >
            Travaillons ensemble
          </button>
        </div>
      </div>
    </nav>
  );
};