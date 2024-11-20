import Features from "../../component/sections/Features";
import Header from "../../component/sections/Header";
import SampleResume from "../../component/sections/SampleResume";
import TrustedCompanies from "../../component/sections/TrustedCompanies";
import WhyChooseUs from "../../component/sections/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SampleResume />
      <Features />
      <TrustedCompanies />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
