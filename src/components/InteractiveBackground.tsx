import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollOffsetRef = useRef(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 60 + 30, // Gold/accent range
        });
      }
      particlesRef.current = particles;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
      setScrollOffset(window.scrollY);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const scrollOffset = scrollOffsetRef.current;

      particles.forEach((particle, index) => {
        // Apply scroll effect - particles drift based on scroll
        const scrollInfluence = scrollOffset * 0.02;
        particle.x += Math.sin(scrollInfluence) * 0.1;
        particle.y += Math.cos(scrollInfluence) * 0.05;

        // Enhanced mouse interaction with larger detection radius
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          // Stronger repulsion force
          particle.vx -= (dx / distance) * force * 0.03;
          particle.vy -= (dy / distance) * force * 0.03;
          
          // Add visual feedback - increase size and brightness when near mouse
          particle.size = Math.min(particle.size + force * 2, 6);
          particle.opacity = Math.min(particle.opacity + force * 0.3, 0.9);
        } else {
          // Return to original size and opacity when mouse is away
          particle.size = Math.max(particle.size - 0.02, 1);
          particle.opacity = Math.max(particle.opacity - 0.01, 0.1);
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add some friction and subtle random movement
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        
        // Add gentle random drift
        particle.vx += (Math.random() - 0.5) * 0.002;
        particle.vy += (Math.random() - 0.5) * 0.002;

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections with dynamic opacity based on scroll
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.save();
            const baseOpacity = (150 - distance) / 150 * 0.15;
            const scrollEffect = Math.sin(scrollOffset * 0.01) * 0.1 + 1;
            ctx.globalAlpha = baseOpacity * scrollEffect;
            ctx.strokeStyle = `hsl(45, 70%, 60%)`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        transform: `translateY(${scrollOffset * 0.2}px)`
      }}
    />
  );
};