import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative group">
      {/* Glossy reflection effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#97B2DE]/30 to-[#1A488E]/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-t-[#1A488E] overflow-hidden">
        {/* Glossy shine effect */}
        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 border-2 border-[#1A488E]"
              />
              <div>
                <h4 className="font-bold text-base sm:text-lg text-[#092147] group-hover:text-[#1A488E] transition-colors duration-300">{testimonial.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.position}</p>
                <p className="text-[#1A488E] font-medium text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={14} 
                  className={`${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="text-[#97B2DE] text-4xl sm:text-6xl absolute -top-4 sm:-top-6 -left-1 sm:-left-2 opacity-20">"</div>
            <p className="text-sm sm:text-base text-gray-600 italic relative z-10">{testimonial.quote}</p>
            <div className="text-[#97B2DE] text-4xl sm:text-6xl absolute -bottom-12 sm:-bottom-16 -right-1 sm:-right-2 opacity-20">"</div>
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
      position: "School director",
      company: "Elimu bora",
      image: "#",
      quote: " Secure systems delivered a smart, intuitive e-learning platform that elevated our training delivery. their tech expertise stands cout",
      rating: 5
    },
    {
      name: " ",
      position: " ",
      company: " ",
      image: " ",
      quote: " ",
      rating: 5
    },
    {
      name: " ",
      position: " ",
      company: " ",
      image: " ",
      quote: " ",
      rating: 5
    },
    {
      name: " ",
      position: " ",
      company: " ",
      image: " ",
      quote: " ",
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
            Hear what our clients have to say about our security solutions and services.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop view - grid */}
          <div className="hidden lg:grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Mobile and tablet view - carousel */}
          <div className="lg:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            
            <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-gray-200 rounded-full p-1.5 sm:p-2 text-[#092147] hover:bg-[#1A488E] hover:text-white transition-colors duration-300"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-gray-200 rounded-full p-1.5 sm:p-2 text-[#092147] hover:bg-[#1A488E] hover:text-white transition-colors duration-300"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full ${
                    index === currentIndex ? 'bg-[#1A488E]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;