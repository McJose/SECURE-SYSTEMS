import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        type: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        type: 'error'
      });
      return;
    }

    // In a real application, this would send data to a server
    // For demo purposes, just show success message
    setFormStatus({
      message: 'Your message has been sent. We\'ll get back to you soon!',
      type: 'success'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Clear success message after a few seconds
    setTimeout(() => {
      setFormStatus({
        message: '',
        type: null
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092147] mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-[#1A488E] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have questions about our services or need a consultation? Reach out to us and we'll get back to you promptly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#092147] mb-6">Reach out today</h3>
            
            {formStatus.message && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  formStatus.type === 'success' 
                    ? 'bg-green-100 border border-green-300 text-green-700' 
                    : 'bg-red-100 border border-red-300 text-red-700'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A488E]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A488E]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A488E]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A488E]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-[#092147] rounded-lg shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1A488E] p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#97B2DE]">Phone</h4>
                    <p>+254 742 234-790</p>
                    <p>+254 769 312-733</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1A488E] p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#97B2DE]">Email</h4>
                    <p>info@securesystems.com</p>
                    <p>support@securesystems.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1A488E] p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#97B2DE]">Location</h4>
                    <p>40200 Kisii</p>
                    <p>Nyaribari chache, Kisii Town, Texas building</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
              <h3 className="text-2xl font-bold text-[#092147] mb-6">Operating Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <p className="text-[#1A488E] font-medium">24/7 Client Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;