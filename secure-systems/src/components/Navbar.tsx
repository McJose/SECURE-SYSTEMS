import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                    src="../dist/assets/logo.png" 
                    alt="Secure Systems Logo"
                    className='h-26 w-26 object-contain md:h24 md:w-24'
                    onError={(e) =>{
                      const img = e.target as HTMLImageElement;
                  img.src = '../logo.png';
                 }} />  
                </div>
                <span className="ml-3 text-white font-bold text-xl">Secure Systems</span>
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
                Get in Touch
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
        <div className="md:hidden bg-[#092147] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white block px-3 py-2 rounded-md text-base font-medium my-2"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;