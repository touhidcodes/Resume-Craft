import { Helmet } from "react-helmet-async";
import FAQ from "../../component/sections/FAQ";
import Features from "../../component/sections/Features";
import Header from "../../component/sections/Header";
import ResumeBuilderBanner from "../../component/sections/ResumeBuilderBanner";
import SampleResume from "../../component/sections/SampleResume";
import TrustedCompanies from "../../component/sections/TrustedCompanies";
import WhyChooseUs from "../../component/sections/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="font-roboto">
      <Helmet>
        <title>Resume Craft</title>
      </Helmet>
      <Header />
      <SampleResume />
      <Features />
      <TrustedCompanies />
      <WhyChooseUs />
      <ResumeBuilderBanner />
      <FAQ />
    </div>
  );
};

export default HomePage;
