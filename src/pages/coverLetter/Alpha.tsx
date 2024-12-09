import Body from "../../component/coverLetterSection/alpha/Body";
import Closing from "../../component/coverLetterSection/alpha/Closing";
import Header from "../../component/coverLetterSection/alpha/Header";
import Recipient from "../../component/coverLetterSection/alpha/Recipient";

const Alpha = () => {
  return (
    <div className="border p-10 space-y-8">
      <Header />
      <Recipient />
      <Body />
      <Closing />
    </div>
  );
};

export default Alpha;
