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
      <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-t-[#1A488E] overflow-hidden">
        {/* Glossy shine effect */}
        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        
        <div className="relative z-10">
          <div className="bg-gradient-to-br from-[#97B2DE]/30 to-[#1A488E]/30 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-[#1A488E]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#092147] group-hover:text-[#1A488E] transition-colors duration-300">{title}</h3>
          <p className="text-gray-600">{description}</p>
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
      title: "Network Security",
      description: "Secure your infrastructure with enterprise-grade firewall protection and intrusion detection systems."
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
      title: "Security Audits",
      description: "Thorough assessment of your systems to identify vulnerabilities and provide remediation strategies."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092147] mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A488E] to-[#97B2DE] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover our comprehensive range of cybersecurity solutions designed to protect your business in today's digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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