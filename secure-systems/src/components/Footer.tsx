import { Shield, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#092147] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#97B2DE]" />
              <span className="ml-2 text-white font-bold text-lg sm:text-xl">Secure Systems</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Enhancing security and efficiency through AI, blockchain and cloud innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#97B2DE]">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Website Management</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Identity Management</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Software Development</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Data Encryption</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Cloud Security</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Cybersecurity-Audits</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#97B2DE]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#team" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#testimonials" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Operation hours */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#97B2DE]">Operation Hours</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Saturday - Sunday: 10:00 AM - 4:00 PM
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Reach out today for a consultation.
            </p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Secure Systems. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] p-1.5 sm:p-2 rounded-full transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;