const About = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#092147] mb-3 sm:mb-4">About Secure Systems</h2>
            <div className="w-20 sm:w-24 h-1 bg-[#1A488E] mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              We are a forward-thinking software development startup dedicated to enhancing security, transparency and operational efficiency through cutting-edge technologies. Founded by Isaiah Makau, the company leverages Blockchain, Artificial Intelligence and cloud computing to build innovative solutions.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Our mission is to create reliable, scalable and intelligent systems that empower institutions and protect sensitive information.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1A488E]">20+</div>
                <div className="text-sm sm:text-base text-gray-500">Clients Protected</div>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1A488E]">98%</div>
                <div className="text-sm sm:text-base text-gray-500">Success Rate</div>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1A488E]">10+</div>
                <div className="text-sm sm:text-base text-gray-500">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1A488E]">24/7</div>
                <div className="text-sm sm:text-base text-gray-500">Support Available</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="/dist/assets/team photo.jpeg" 
                alt="Secure Systems team" 
                className="rounded-lg shadow-xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
              />
            </div>
            <div className="absolute top-6 -right-3 sm:top-10 sm:-right-5 -bottom-6 sm:-bottom-10 -left-3 sm:-left-5 bg-[#1A488E]/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;