import Layout from "../shared/Layout";
import featureOne from "../../assets/feature-section-img/img1.webp";
import featureTwo from "../../assets/feature-section-img/img2.webp";
import featureThree from "../../assets/feature-section-img/img3.webp";
import featureFour from "../../assets/feature-section-img/img4.webp";
import featureFive from "../../assets/feature-section-img/img5.webp";
import featureSix from "../../assets/feature-section-img/img6.webp";

const featureData = [
  {
    id: 101,
    title: "100% Free download",
    image: featureOne,
    description:
      "Ability to download and print resumes in PDF and plain text formatting. Unlimited sharing over email and social media.",
  },
  {
    id: 102,
    title: "Pre-written examples, boost quality",
    image: featureTwo,
    description:
      "Over 100+ job-tailored examples to kickstart your resume with ease and inspiration.",
  },
  {
    id: 103,
    title: "Intuitive to use",
    image: featureThree,
    description:
      "Easily organize and customize your resume sections with drag-and-drop simplicity.",
  },
  {
    id: 104,
    image: featureFour,
    title: "Know your progress",
    description: "Stay on track throughout the resume-building process.",
  },
  {
    id: 105,
    title: "Useful tips, help at hand",
    image: featureFive,
    description:
      "Crafted by professional writers to help you start and refine your resume.",
  },
  {
    id: 106,
    title: "Upload existing resume",
    image: featureSix,
    description:
      "Upload and enhance your existing resume with our advanced tools.",
  },
];

const Features = () => {
  return (
    <div className="bg-[#F8F8FA]">
      <Layout>
        <div className="md:w-4/5 mx-auto space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Build your resume with the best resume builder online
          </h1>
          <p className="md:text-xl text-center">
            The Resume.com resume builder stands out from the rest, but not only
            because we’re the only truly free resume builder out there. We also
            offer:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {featureData.map((feature) => (
            <div key={feature.id}>
              <img src={feature.image} alt="feature image" className="w-full" />
              <div className="mt-5 space-y-3">
                <h1 className="text-xl font-bold">{feature.title}</h1>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Features;
