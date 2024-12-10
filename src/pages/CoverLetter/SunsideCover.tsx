import Body from "../../component/CoverLetterSection/alpha/Body";
import Footer from "../../component/CoverLetterSection/sunside/Footer";
import Header from "../../component/CoverLetterSection/sunside/Header";


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
