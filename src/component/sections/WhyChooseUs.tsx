import Layout from "../shared/Layout";
import imgOne from "../../assets/why-choose-us/img-1.png";
import imgTwo from "../../assets/why-choose-us/img-2.png";
import imgThree from "../../assets/why-choose-us/img-3.png";

const data = [
  {
    id: 1001,
    image: imgOne,
    title: "We’re actually free",
    description:
      "No gimmicks, no freemium features, no joke. Get everything you need to build a professional resume that shows off your best qualities to help you land your next job.",
  },
  {
    id: 1002,
    image: imgTwo,
    title: "Data-driven templates",
    description:
      "Rest assured that the templates you find on Resume.com are the best around. Based on data from what employers want to see in candidates, we’ve created our templates with hiring in mind.",
  },
  {
    id: 1003,
    image: imgThree,
    title: "Get seen",
    description:
      "With your resume ready for top employers, easily share with millions of interested employers on Indeed, the world’s #1 job site.",
  },
];

const WhyChooseUs = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Why build my resume with Resume Craft?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data.map((item, index) => (
          <div key={item.id * index} className="p-4 pl-0 md:p-12 md:pl-0">
            <img src={item.image} alt="why choose us image" />
            <h2 className="text-xl font-bold mt-7 mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
