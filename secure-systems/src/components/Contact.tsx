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
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5FEFD]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#092147] mb-3 sm:mb-4">Get in Touch</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#1A488E] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A488E] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A488E] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A488E] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A488E] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your message"
                />
              </div>

              {formStatus.message && (
                <div className={`p-3 rounded-md text-sm sm:text-base ${
                  formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#1A488E] text-white px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-[#97B2DE] hover:text-[#092147] transition-colors duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={16} className="inline-block" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#97B2DE]/30 to-[#1A488E]/30 p-3 rounded-full">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A488E]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#092147] mb-1">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+254 700 000 000</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#97B2DE]/30 to-[#1A488E]/30 p-3 rounded-full">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A488E]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#092147] mb-1">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">info@securesystems.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#97B2DE]/30 to-[#1A488E]/30 p-3 rounded-full">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A488E]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#092147] mb-1">Location</h3>
                  <p className="text-sm sm:text-base text-gray-600">Nairobi, Kenya</p>
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