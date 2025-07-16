import { Button, Chip } from "@mui/material";
import {
  CheckCircleIcon,
  DownloadIcon,
  EditIcon,
  ShareIcon,
  ShieldCheckIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import featureImage2 from "../../assets/images/data.png";
import featureImage1 from "../../assets/images/free.png";
import featureImage3 from "../../assets/images/seen.png";
import AboutUsSlider from "../../component/slider/AboutSlider";

const About = () => {
  const features = [
    {
      icon: featureImage1,
      title: "Professional Templates",
      description:
        "Access 50+ ATS-friendly resume templates designed by career experts. No hidden fees, no premium locks - everything you need to create a standout resume.",
      highlights: ["ATS-Optimized", "50+ Templates", "Industry-Specific"],
    },
    {
      icon: featureImage2,
      title: "Real-time Editing",
      description:
        "See your changes instantly with our live preview editor. Built with modern technology to ensure your resume looks perfect across all devices and formats.",
      highlights: ["Live Preview", "Auto-Save", "Mobile Responsive"],
    },
    {
      icon: featureImage3,
      title: "Expert Guidance",
      description:
        "Get AI-powered suggestions and tips from career professionals. Share your completed resume directly with top employers and job boards worldwide.",
      highlights: ["AI-Powered Tips", "Career Advice", "Direct Sharing"],
    },
  ];

  const stats = [
    { number: "100K+", label: "Resumes Created", icon: TrendingUpIcon },
    { number: "95%", label: "Success Rate", icon: ShieldCheckIcon },
    { number: "50+", label: "Template Designs", icon: UsersIcon },
    { number: "4.9/5", label: "User Rating", icon: StarIcon },
  ];

  const benefits = [
    {
      text: "100% Free - No hidden costs or premium features",
      icon: CheckCircleIcon,
    },
    {
      text: "ATS-Compliant templates that pass employer screening",
      icon: CheckCircleIcon,
    },
    {
      text: "Export to PDF, Word, or share online instantly",
      icon: DownloadIcon,
    },
    { text: "Real-time collaboration with mentors and peers", icon: EditIcon },
    { text: "Direct integration with major job boards", icon: ShareIcon },
    {
      text: "24/7 customer support and career guidance",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>About Us - Resume Craft | Professional Resume Builder</title>
        <meta
          name="description"
          content="Learn about Resume Craft - the free, professional resume builder trusted by 100K+ users. Create ATS-friendly resumes with expert guidance."
        />
      </Helmet>

      <AboutUsSlider />

      <div className="bg-gray-50 font-roboto">
        {/* Hero Section */}
        <section className="py-10 lg:py-[90px] bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Why build your resume with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Resume Craft
              </span>
              ?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join over 100,000 professionals who've landed their dream jobs
              using our AI-powered resume builder
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 lg:py-[90px] bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Your Success
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to create a professional resume that gets
                you noticed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {feature.highlights.map((highlight, idx) => (
                      <Chip
                        key={idx}
                        label={highlight}
                        size="small"
                        className="bg-blue-50 text-blue-700"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-10 lg:py-[90px] bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering careers and building bridges between talent and
                opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="relative bg-white shadow-xl rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-md opacity-75 transform -translate-y-1/2 -translate-x-1/2"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed relative">
                  To democratize career opportunities by providing a completely
                  free, professional resume builder that empowers individuals to
                  showcase their talents effectively. We believe everyone
                  deserves access to quality career tools, regardless of their
                  background or financial situation.
                </p>
                <div className="mt-6 relative">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">
                      100% Free Forever
                    </span>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="relative bg-white shadow-xl rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-300 rounded-full blur-md opacity-75 transform -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed relative">
                  To become the world's most trusted and innovative resume
                  platform, where technology meets human potential. We envision
                  a future where career success is determined by talent and
                  dedication, not by access to expensive tools or resources.
                </p>
                <div className="mt-6 relative">
                  <div className="flex items-center space-x-2">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-700">Global Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-10 lg:py-[90px] bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Resume Craft?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to helping you succeed in your career journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <benefit.icon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50 text-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Craft Your Perfect Resume?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join thousands of professionals who've transformed their careers
              with Resume Craft
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
            <p className="text-sm mt-4 opacity-75">
              No credit card required • No hidden fees • Start in seconds
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
