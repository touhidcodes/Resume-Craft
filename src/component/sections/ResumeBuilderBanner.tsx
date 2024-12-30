import dublin from "../../assets/resume-builder-banner/dublin-resume-templates.jpg";
import amsterdam from "../../assets/resume-builder-banner/amsterdam-resume-templates.jpg";
import stockholm from "../../assets/resume-builder-banner/stockholm-resume-templates.jpg";
import Layout from "../shared/Layout";
import ChooseResumeTemplate from "../Modal/ChooseResumeTemplate";
import ChooseCoverLetterTemplate from "../Modal/ChooseCoverLetterTemplate";

const ResumeBuilderBanner = () => {
  return (
    <div className="bg-[#EFF2F9]">
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-5 pt-20 pb-10 md:py-20">
          <div className="lg:col-span-7 relative h-[150px] sm:h-[250px] md:h-[400px]">
            <img
              src={dublin}
              alt="resume image"
              className="w-1/3 lg:w-auto absolute left-[26%] bottom-20 -rotate-[20deg] origin-bottom-right z-10 rounded-md shadow-[0px_0px_3px_#ddd]"
            />
            <img
              src={stockholm}
              alt="resume image"
              className="w-1/3 lg:w-auto absolute left-[32%] bottom-14 -rotate-[5deg] origin-bottom-right z-20 rounded-md shadow-[0px_0px_3px_#ddd]"
            />
            <img
              src={amsterdam}
              alt="resume image"
              className="w-1/3 lg:w-auto absolute left-[42%] bottom-10 sm:bottom-6 lg:-bottom-8 rotate-[10deg] z-30 rounded-md shadow-[0px_0px_3px_#ddd]"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-3xl lg:text-[46px] leading-[58px] font-bold">
              Try our professional Resume builder now!
            </h2>
            <p className="mt-7">
              Save time with our easy 3-step resume builder. No more writer’s
              block or formatting difficulties in Word. Rapidly make a perfect
              resume employers love.
            </p>
            <div className="flex  flex-col w-[64%] sm:w-full gap-3  sm:flex-row mt-6">
              <ChooseResumeTemplate
                variant="contained"
                size="medium"
                label="Create New Resume"
              />
              <ChooseCoverLetterTemplate
                variant="outlined"
                size="medium"
                label="Create Cover Letter"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ResumeBuilderBanner;
