import Certificates from "../../../component/ResumeSection/Templeate1/Certificates";
import Education from "../../../component/ResumeSection/Templeate1/Education";
import Expricence from "../../../component/ResumeSection/Templeate1/Expricence";
import Header from "../../../component/ResumeSection/Templeate1/Header";
import Languages from "../../../component/ResumeSection/Templeate1/Languages";
import Skill from "../../../component/ResumeSection/Templeate1/Skill";
import Summery from "../../../component/ResumeSection/Templeate1/Summery";

const Templateone = () => {
  return (
    <div className="min-h-[590px] max-w-[750px] mx-auto py-[30px] px-[50px] rounded-[9px] border my-[20px]">
      <Header />
      <Summery />
      <Expricence />
      <Skill />
      <Education />
      <Languages />
      <Certificates />
    </div>
  );
};

export default Templateone;
