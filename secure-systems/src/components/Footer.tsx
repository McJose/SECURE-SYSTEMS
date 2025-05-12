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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-[#97B2DE]" />
              <span className="ml-2 text-white font-bold text-xl">Secure Systems</span>
            </div>
            <p className="text-gray-300 mb-6">
              Enhancing security and efficiency through AI, blockchain and cloud innovation..
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#97B2DE] transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#97B2DE]">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Website Management</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Identity Management</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Software Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Data Encryption</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Cloud Security</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Cybersecurity-Audits</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#97B2DE]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#97B2DE]">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest security updates and news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Secure Systems. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] p-2 rounded-full transition-colors duration-300"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;