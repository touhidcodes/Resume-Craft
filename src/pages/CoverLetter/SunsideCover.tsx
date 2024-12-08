import Body from "../../component/coverLetterSection/sunside/Body";
import Footer from "../../component/coverLetterSection/sunside/Footer";
import Header from "../../component/coverLetterSection/sunside/Header";

const SunsideCover = () => {
  return (
    <div className="min-h-[590px] max-w-[800px] mx-auto rounded-[9px] border my-[20px] px-[85px] py-[54px]">
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
};

export default SunsideCover;
