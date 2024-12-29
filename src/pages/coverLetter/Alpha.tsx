
import Body from "../../component/CoverLetterSection/alpha/Body";
import Closing from "../../component/CoverLetterSection/alpha/Closing";
import Header from "../../component/CoverLetterSection/alpha/Header";
import Recipient from "../../component/CoverLetterSection/alpha/Recipient";

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
