import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative group">
      {/* Glossy reflection effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#97B2DE]/30 to-[#1A488E]/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-6 sm:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-t-[#1A488E] overflow-hidden">
        {/* Glossy shine effect */}
        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="font-bold text-lg sm:text-xl text-[#092147] group-hover:text-[#1A488E] transition-colors duration-300">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{testimonial.position}</p>
              <p className="text-[#1A488E] font-medium text-sm sm:text-base">{testimonial.company}</p>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={16} 
                  className={`${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="text-[#97B2DE] text-5xl sm:text-6xl absolute -top-6 -left-2 opacity-20">"</div>
            <p className="text-base sm:text-lg text-gray-600 italic relative z-10 leading-relaxed">{testimonial.quote}</p>
            <div className="text-[#97B2DE] text-5xl sm:text-6xl absolute -bottom-16 -right-2 opacity-20">"</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Purity Rotich",
      position: "School Director",
      company: "Elimu Bora Academy",
      quote: "Secure Systems delivered a smart, intuitive e-learning platform that elevated our training delivery. Their expertise in cybersecurity ensures our students' data remains protected while providing a seamless learning experience.",
      rating: 5
    },
    {
      name: "Alex",
      position: "IT Manager",
      company: "TechIncubators Solution",
      quote: "The team at Secure Systems transformed our cybersecurity infrastructure. Their proactive approach to security and exceptional technical support have made them an invaluable partner in protecting our digital assets.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#092147] mb-3 sm:mb-4">Client Testimonials</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#1A488E] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop view - grid */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Mobile and tablet view - carousel */}
          <div className="lg:hidden">
          <div className="max-w-[380px] sm:max-w-[380px] md:max-w-[380px] mx-auto">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white/80 hover:bg-white rounded-full p-2 text-[#092147] shadow-lg transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white/80 hover:bg-white rounded-full p-2 text-[#092147] shadow-lg transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-[#1A488E] w-4' : 'bg-[#97B2DE]'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;