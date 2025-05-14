import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative group">
      {/* Glossy reflection effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#97B2DE]/30 to-[#1A488E]/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border-t-4 border-t-[#1A488E] overflow-hidden">
        {/* Glossy shine effect */}
        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        
        <div className="relative z-10">
          <div className="relative overflow-hidden mb-6">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092147] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-[#092147] group-hover:text-[#1A488E] transition-colors duration-300">{member.name}</h3>
          <p className="text-gray-600 mb-4">{member.role}</p>
          <p className="text-gray-600 mb-6">{member.bio}</p>
          
          <div className="flex space-x-3 justify-center">
            {member.social.linkedin && (
              <a 
                href={member.social.linkedin} 
                className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            )}
            {member.social.twitter && (
              <a 
                href={member.social.twitter} 
                className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
              </a>
            )}
            {member.social.email && (
              <a 
                href={`mailto:${member.social.email}`} 
                className="bg-[#1A488E] hover:bg-[#97B2DE] hover:text-[#092147] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Isaiah Makau",
      role: "Chief Executive Officer",
      image: "../isaiah.jpg",
      bio: "With leadership and technology skills Isaiah leads our company's strategic vision and operations.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@securesystems.example"
      }
    },
    {
      name: "Bob Simba",
      role: "Chief Technology Officer",
      image: "../bob.png",
      bio: "Bob's expertise in all things technology helps us stay ahead of the curve.",
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
      name: "Brian",
      role: "Chief Legal Officer",
      image: "#",
      bio: "Brian specializes in legal and compliance matters.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "brian@securesystems.example"
      }
    }
  ];


  return (
    <section id="team" className="py-20 bg-[#b7d8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092147] mb-4">Our Leadership Team</h2>
          <div className="w-24 h-1 bg-[#1A488E] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the experts behind Secure Systems who are dedicated to protecting your digital assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;