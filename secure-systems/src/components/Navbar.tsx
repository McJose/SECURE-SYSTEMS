import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        if (isOpen) setIsOpen(false);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#092147] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 border-white/50 z-0"></div>
                  <img
                    src="../logo.png" 
                    alt="Secure Systems Logo"
                    className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
                    onError={(e) =>{
                      const img = e.target as HTMLImageElement;
                      img.src = '../logo.png';
                    }} 
                  />  
                </div>
                <span className="ml-2 sm:ml-3 text-white font-bold text-lg sm:text-xl lg:text-2xl">Secure Systems</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#97B2DE] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#092147] shadow-lg absolute top-20 left-4 right-4 rounded-lg overflow-hidden">
          <div className="py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-white block px-4 py-2 text-sm font-medium hover:bg-[#1A488E]/20 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2 pb-2 mt-2 border-t border-[#1A488E]/20">
              <a
                href="#contact"
                className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white block px-4 py-2 rounded-md text-sm font-medium text-center transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;