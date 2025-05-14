import { Shield, Lock, Server, Database, Cloud, FileCode } from 'lucide-react';

const ServicesCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="relative group">
      {/* Glossy reflection effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#97B2DE]/30 to-[#1A488E]/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Card content with glassmorphism */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-t-[#1A488E] overflow-hidden">
        {/* Glossy shine effect */}
        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        
        <div className="relative z-10">
          <div className="bg-gradient-to-br from-[#97B2DE]/30 to-[#1A488E]/30 backdrop-blur-sm w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#1A488E]" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#092147] group-hover:text-[#1A488E] transition-colors duration-300">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Website Management",
      description: "Website management services from our crucial team"
    },
    {
      icon: Lock,
      title: "Identity Management",
      description: "Advanced authentication and authorization systems to ensure only authorized access to your resources."
    },
    {
      icon: Server,
      title: "Software Development",
      description: "enterprise level services for designing secure, custom software solutions."
    },
    {
      icon: Database,
      title: "Data Encryption",
      description: "Keep your sensitive data protected with state-of-the-art encryption technologies and protocols."
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure cloud environments with continuous monitoring and compliance enforcement."
    },
    {
      icon: FileCode,
      title:"Cybersecurity Audits",
      description: "Thorough assessment of your systems to identify vulnerabilities and provide remediation strategies."
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5FEFD]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#092147] mb-3 sm:mb-4">Our Services</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#1A488E] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive security solutions to protect your digital assets and ensure your peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;