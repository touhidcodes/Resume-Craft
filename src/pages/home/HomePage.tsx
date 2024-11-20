import FAQ from "../../component/sections/FAQ";
import Features from "../../component/sections/Features";
import Header from "../../component/sections/Header";
import ResumeBuilderBanner from "../../component/sections/ResumeBuilderBanner";
import SampleResume from "../../component/sections/SampleResume";
import TrustedCompanies from "../../component/sections/TrustedCompanies";
import WhyChooseUs from "../../component/sections/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Header />
      <SampleResume />
      <Features />
      <TrustedCompanies />
      <WhyChooseUs />
      <ResumeBuilderBanner />
      <FAQ />
    </>
  );
};

export default HomePage;
