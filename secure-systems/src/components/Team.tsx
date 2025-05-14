import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  portfolio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative group w-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#97B2DE]/30 to-[#1A488E]/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-t-[#1A488E] overflow-hidden">
        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        
        <div className="relative z-10">
          <div className="relative overflow-hidden mb-4 sm:mb-6 rounded-xl">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 bg-[#ECF3F9]/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092147] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-xl"></div>
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#092147] group-hover:text-[#1A488E] transition-colors duration-300">{member.name}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{member.role}</p>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{member.bio}</p>
          
          <div className="flex justify-center">
            {member.portfolio ? (
              <a 
                href={member.portfolio}
                className="bg-[#1A488E] hover:bg-[#97B2DE] text-white hover:text-[#092147] px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More
              </a>
            ) : member.social && (
              <div className="flex space-x-3">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-3 sm:px-4 py-2 rounded-md font-medium transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-3 sm:px-4 py-2 rounded-md font-medium transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Twitter size={14} className="sm:w-4 sm:h-4" />
                  </a>
                )}
                {member.social.email && (
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-3 sm:px-4 py-2 rounded-md font-medium transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Mail size={14} className="sm:w-4 sm:h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Isaiah Makau",
      role: "Chief Executive Officer",
      image: "../isaiah.jpg",
      bio: "With leadership and technology skills Isaiah leads our company's strategic vision and operations.",
      portfolio: "#",
    },
    {
      name: "Bob Simba",
      role: "Chief Technology Officer",
      image: "../bob.png",
      bio: "Bob's expertise in all things technology helps us stay ahead of the curve.",
      portfolio: "https://bobsimba.netlify.app/", 
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@securesystems.example"
      }
    },
    {
      name: "Joseph Muema",
      role: "Chief Operations Officer",
      image: "../jose.png ",
      bio: "Joseph is our operations leader, ensuring smooth day-to-day processes and client satisfaction.",
      portfolio: "https://josephmakau.netlify.app/",
      social: {
        linkedin: "#",
        email: "joseph@securesystems.example"
      }
    },
    {
      name: "Justus Kimutai",
      role: "Chief Cloud Engineer",
      image: "../Kimutai_Potrait.png",
      bio: "Justus specializes in cloud security and infrastructure management.",
      portfolio: "#",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@securesystems.example"
      }
    },
    {
      name: "Kunga Malombe",
      role: "Chief Sales Officer",
      image: "#",
      bio: "Kunga specializes in sales and revenue generation.",
      portfolio:"#",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kunga@securesystems.example"
      }
    },
    {
      name: "Sharon",
      role: "Business Manager",
      image: "#",
      bio: "Racheal manages day-to-day operations and ensures smooth business processes.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "racheal@securesystems.example"
      }
    },
    {
      name: "Naomi",
      role: "Chief Legal Officer",
      image: "#",
      bio: "Naomi specializes in legal and compliance matters.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "naomi@securesystems.example"
      }
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5FEFD]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#092147] mb-3 sm:mb-4">Our Team</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#1A488E] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Meet our exceptional team of cybersecurity experts dedicated to protecting your digital assets.
          </p>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-screen-xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Mobile/Tablet view - carousel */}
        <div className="lg:hidden">
          <div className="max-w-[280px] sm:max-w-md md:max-w-lg mx-auto">
            <TeamCard member={teamMembers[currentIndex]} />
          </div>
          
          <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
            <button 
              onClick={prevMember}
              className="bg-gray-200 rounded-full p-1.5 sm:p-2 text-[#092147] hover:bg-[#1A488E] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={nextMember}
              className="bg-gray-200 rounded-full p-1.5 sm:p-2 text-[#092147] hover:bg-[#1A488E] hover:text-white transition-colors duration-300"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {teamMembers.map((_, index) => (
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
    </section>
  );
};

export default Team;