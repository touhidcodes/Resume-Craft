
import Body from "../../component/CoverLetterSection/alpha/Body";
import Closing from "../../component/CoverLetterSection/alpha/Closing";
import Recipient from "../../component/CoverLetterSection/alpha/Recipient";
import Header from "../../component/sections/Header";
import TemplateWrapper from "../../component/shared/TemplateWrapper";

const Alpha = () => {
  return (
    <TemplateWrapper>
      <Header />
      <Recipient />
      <Body />
      <Closing/>
    </TemplateWrapper>
  );
};

export default Alpha;
