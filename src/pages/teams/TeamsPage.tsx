import { Button } from "@mui/material";
import {
  Cloud,
  Code,
  Crown,
  Handshake,
  Lightbulb,
  Palette,
  Rocket,
  Shield,
  Target,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamsPage = () => {
  const teamMembers = [
    {
      name: "Touhidur Zaman",
      role: "Team Leader & GitHub Manager",
      email: "touhidcodes@gmail.com",
      phone: "01939924424",
      expertise: ["Full-Stack Development", "Project Management", "DevOps"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      description:
        "Leading the team with vision and technical excellence, ensuring smooth project delivery and team coordination.",
      icon: <Crown className="text-2xl" />,
      achievements: [
        "2+ Years Experience",
        "3+ Projects Led",
        "Team of 6 Developers",
      ],
    },
    {
      name: "MD Rifat",
      role: "Co-Leader & Backend Developer",
      email: "md.rifat.taluckdar@gmail.com",
      phone: "01755481526",
      expertise: ["Node.js", "Database Design", "API Development"],
      color: "bg-gradient-to-br from-green-500 to-green-600",
      description:
        "Architecting robust backend solutions and supporting team leadership with innovative technical approaches.",
      icon: <Terminal className="text-2xl" />,
      achievements: ["Backend Expert", "Database Specialist", "API Architect"],
    },
    {
      name: "Imtiaz Tamim",
      role: "Backend Developer",
      email: "itamim12202@gmail.com",
      phone: "01799664358",
      expertise: ["Node Expert", "API Management", "Security"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      description:
        "Specializing in secure backend development and cloud infrastructure management.",
      icon: <Shield className="text-2xl" />,
      achievements: ["Security Expert", "Cloud Specialist", "Node Developer"],
    },
    {
      name: "Emon Ahmed",
      role: "Frontend Developer",
      email: "imonshomon@gmail.com",
      phone: "01921837900",
      expertise: ["React.js", "UI/UX Design", "Next Js"],
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      description:
        "Creating intuitive user experiences with modern frontend technologies and responsive design.",
      icon: <Palette className="text-2xl" />,
      achievements: [
        "UI/UX Expert",
        "React Specialist",
        "Performance Optimizer",
      ],
    },
    {
      name: "Rakib Ahmed",
      role: "Frontend Developer",
      email: "sujonahmed45a4@gmail.com",
      phone: "01829218489",
      expertise: ["Next.Js", "Design Systems", "Performance"],
      color: "bg-gradient-to-br from-red-500 to-red-600",
      description:
        "Building scalable frontend applications with focus on performance optimization and design systems.",
      icon: <Zap className="text-2xl" />,
      achievements: [
        "Next.Js Expert",
        "Performance Optimizer",
        "Design Systems",
      ],
    },
    {
      name: "Nur Muhammad",
      role: "Frontend Developer",
      email: "nurmuhammadd2003@gmail.com",
      phone: "01741119114",
      expertise: ["React.Js", "TypeScript", "Testing"],
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      description:
        "Developing robust frontend solutions with strong emphasis on testing and code quality.",
      icon: <Cloud className="text-2xl" />,
      achievements: [
        "React.Js Expert",
        "TypeScript Specialist",
        "Testing Advocate",
      ],
    },
  ];

  const collaborationValues = [
    {
      icon: <Users className="text-3xl" />,
      title: "Team Collaboration",
      description:
        "We believe in the power of teamwork and open communication to deliver exceptional results.",
      color: "bg-blue-500",
    },
    {
      icon: <Lightbulb className="text-3xl" />,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and methodologies to stay ahead in the industry.",
      color: "bg-yellow-500",
    },
    {
      icon: <Target className="text-3xl" />,
      title: "Goal-Oriented",
      description:
        "Focused on achieving project milestones and delivering value to our clients and users.",
      color: "bg-green-500",
    },
    {
      icon: <Handshake className="text-3xl" />,
      title: "Trust & Respect",
      description:
        "Building strong relationships based on mutual trust, respect, and professional growth.",
      color: "bg-purple-500",
    },
  ];

  const stats = [
    { number: "6", label: "Team Members", icon: <Users /> },
    { number: "3+", label: "Projects Completed", icon: <Rocket /> },
    { number: "2", label: "Years Experience", icon: <Code /> },
    { number: "100%", label: "Client Satisfaction", icon: <Target /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-8 lg:py-[90px] bg-gradient-to-br from-blue-50 to-purple-50 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Passionate developers and innovators working together to build the
            future of digital solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 text-2xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-8 lg:py-[90px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Collaboration Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our team's success and drive our
              commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 ${value.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-8 lg:py-[90px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Amazing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who make our projects successful
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Card Header */}
                <div className={`${member.color} p-6 text-white relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                      {member.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-80">Team Member</div>
                      <div className="text-lg font-bold">#{index + 1}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      Key Achievements:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaEnvelope className="mr-3 text-blue-500" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPhone className="mr-3 text-green-500" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-[120px] bg-gradient-to-br from-blue-50 to-purple-50 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate and bring your ideas to life with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              component={Link}
              to="/user/resumes"
              variant="contained"
              size="large"
              className="bg-white text-blue-600 hover:bg-blue-500 font-semibold py-3 px-8 rounded-lg"
            >
              Start Building Now - It's Free!
            </Button>
            <Button
              component={Link}
              to="/templates"
              variant="outlined"
              size="large"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg"
            >
              View Templates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
