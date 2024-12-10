import Body from "../../component/coverLetterSection/alpha/Body";
import Closing from "../../component/coverLetterSection/alpha/Closing";
import Header from "../../component/coverLetterSection/alpha/Header";
import Recipient from "../../component/coverLetterSection/alpha/Recipient";
import TemplateWrapper from "../../component/shared/TemplateWrapper";

const Alpha = () => {
  return (
    <TemplateWrapper>
      <Header />
      <Recipient />
      <Body />
      <Closing />
    </TemplateWrapper>
  );
};

export default Alpha;
