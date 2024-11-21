import sampleResumeBg from "../../assets/sample-resume/resume-sample.png";
import Layout from "../shared/Layout";

const SampleResume = () => {
  return (
    <Layout>
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unlock Your Career Potential
        </h1>
        <p className="md:text-xl">
          Build a professional, attention-grabbing resume with our intuitive
          platform and expert-driven templates.
        </p>
      </div>
      <img
        src={sampleResumeBg}
        alt="sample resume bg"
        className="w-full object-cover relative z-10"
      />
    </Layout>
  );
};

export default SampleResume;
