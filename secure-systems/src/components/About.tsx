const About = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092147] mb-4">About Secure Systems</h2>
            <div className="w-24 h-1 bg-[#1A488E] mb-6"></div>
            <p className="text-gray-600 mb-6">
              We are a forward-thinking software development startup dedicated to enhancing security, transparency and operational efficiency through cutting-edge technologies. Founded by Isaiah Makau, the company leverages Blockchain, Artificial Intelligence and cloud computing to build innovative solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to create reliable,scalable and intelligent systems that empower institutions and protect sensitive information.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-3xl font-bold text-[#1A488E]">20+</div>
                <div className="text-gray-500">Clients Protected</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-3xl font-bold text-[#1A488E]">98%</div>
                <div className="text-gray-500">Success Rate</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-3xl font-bold text-[#1A488E]">10+</div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#1A488E]">
                <div className="text-3xl font-bold text-[#1A488E]">24/7</div>
                <div className="text-gray-500">Support Available</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="../src/team photo.jpeg" 
                alt="Secure Systems team" 
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
            </div>
            <div className="absolute top-10 -right-5 -bottom-10 -left-5 bg-[#1A488E]/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;