import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const particlesContainer = particlesRef.current;
      particlesContainer.innerHTML = '';
      
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-[#97B2DE] opacity-60 rounded-full';
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation duration and delay
        const duration = Math.random() * 8 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video backgroud */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-[#092147] opacity-80 z-10 overflow-hidden"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="../herovideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40 "></div>
      </div>
      
      {/* Particles effect */}
      <div ref={particlesRef} className="absolute inset-0 z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fadeInUp">
          <span className="text-[#97B2DE]"></span>Secure <span className="text-[#97B2DE]">Systems</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 opacity-0 animate-fadeInUp animation-delay-300">
          Securing the future with blockchain and AI
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fadeInUp animation-delay-600">
          <a href="#services" className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-lg">
            Explore Services
          </a>
          <a href="#contact" className="border-2 border-[#97B2DE] text-white hover:bg-[#97B2DE] hover:text-[#092147] px-8 py-3 rounded-md font-medium transition-colors duration-300 text-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;