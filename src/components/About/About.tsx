import featureImage1 from "../../assets/images/free.png";
import featureImage2 from "../../assets/images/data.png";
import featureImage3 from "../../assets/images/seen.png";
import teamImage from "../../assets/images/t.jpeg";
import teamImage2 from "../../assets/images/t2.jpeg";
import teamImage3 from "../../assets/images/t3.jpeg";

const About = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center md:text-left mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-[#003366] leading-snug mb-4">
            Why build my resume with Resume{" "}
            <span className="text-primary">Craft</span> ?
          </h1>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 grid gap-8 md:grid-cols-3 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={featureImage1}
              alt="Feature 1"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#003366]">
              We’re actually free
            </h3>
            <p className="text-base font-normal mt-2">
              No gimmicks, no freemium features, no joke. Get everything you
              need to build a professional resume that shows off your best
              qualities to help you land your next job.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={featureImage2}
              alt="Feature 2"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#003366]">
              Data-driven templates
            </h3>
            <p className="text-base font-normal mt-2">
              Rest assured that the templates you find on Resume.com are the
              best around. Based on data from what employers want to see in
              candidates, we’ve created our templates with hiring in mind.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={featureImage3}
              alt="Feature 3"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#003366]">Get seen</h3>
            <p className="text-base mt-2 font-normal">
              With your resume ready for top employers, easily share with
              millions of interested employers on Indeed, the world’s #1 job
              site.
            </p>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366]">
              Our Mission & Vision
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Empowering opportunities and building bridges between talent and
              success.
            </p>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative bg-white shadow-xl rounded-xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-md opacity-75 transform -translate-y-1/2 -translate-x-1/2"></div>
              <h2 className="text-2xl font-semibold text-gray-800 relative">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-4 relative">
                To simplify the job application process by providing a
                user-friendly platform for creating professional resumes. We
                strive to empower individuals in achieving their career goals
                with ease and confidence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="relative bg-white shadow-xl rounded-xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-300 rounded-full blur-md opacity-75 transform -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-2xl font-semibold text-gray-800 relative">
                Our Vision
              </h2>
              <p className="text-gray-600 mt-4 relative">
                To become the most trusted and innovative resume builder
                globally, enabling individuals to unlock their potential and
                connect with the opportunities they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-gray-800">
        {/* Our Team Section */}

        <section className="py-16 my-10 ">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Team Member Card */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 transition duration-300">
                <img
                  src={teamImage}
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full border-4 border-[#feebe4] mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#003366]">
                  John Doe
                </h3>
                <p className="text-gray-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-base	font-normal	">
                  With years of experience in leadership, John brings vision and
                  passion to our team.
                </p>
              </div>

              {/* Team Member Card */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 transition duration-300">
                <img
                  src={teamImage3}
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full border-4 border-[#EDD7DF] mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#003366]">
                  Emily Carter
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  Head of Product Design
                </p>
                <p className="text-base	font-normal	">
                  Emily's creativity ensures our products are intuitive and
                  visually stunning.
                </p>
              </div>

              {/* Team Member Card */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 transition duration-300">
                <img
                  src={teamImage2}
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full border-4 border-[#faf9da] mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#003366]">
                  James Peterson
                </h3>
                <p className="text-gray-600 font-medium mb-4">Career Coach</p>
                <p className="text-base	font-normal	">
                  James provides expert career advice and helps our users
                  succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-br from-indigo-600 to-purple-500 text-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering Careers, One Resume at a Time
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
              Discover the easiest way to build professional resumes and unlock
              opportunities for your dream career.
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
              Start Building Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
