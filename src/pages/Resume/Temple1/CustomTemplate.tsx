import Certificates from "../../../component/ResumeSection/CustomTemplate/Certificates";
import Education from "../../../component/ResumeSection/CustomTemplate/Education";
import Experience from "../../../component/ResumeSection/CustomTemplate/Experience";
import Header from "../../../component/ResumeSection/CustomTemplate/Header";
import Languages from "../../../component/ResumeSection/CustomTemplate/Languages";
import Skill from "../../../component/ResumeSection/CustomTemplate/Skill";
import Summery from "../../../component/ResumeSection/CustomTemplate/Summery";

const CustomTemplate = () => {
  return (
    <div className="min-h-[590px] w-full py-[30px] px-[50px] rounded-[9px] border my-[20px]">
      <Header />
      <Summery />
      <Experience />
      <Skill />
      <Education />
      <Languages />
      <Certificates />
    </div>
  );
};

export default CustomTemplate;
