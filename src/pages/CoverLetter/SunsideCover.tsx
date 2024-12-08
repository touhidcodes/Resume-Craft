import Body from "../../component/CoverLetterSection/Body";
import Footer from "../../component/CoverLetterSection/Footer";
import HeaderCl from "../../component/CoverLetterSection/HeaderCl";

const SunsideCover = () => {
  return (
    <div className="min-h-[590px] max-w-[800px] mx-auto rounded-[9px] border my-[20px] px-[85px] py-[54px]  ">
      <HeaderCl></HeaderCl>
      <Body />
      <Footer />
    </div>
  );
};

export default SunsideCover;
