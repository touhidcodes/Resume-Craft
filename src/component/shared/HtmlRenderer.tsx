import parse from "html-react-parser";

type THtmlRendererProps = {
  text: string;
  textColor?: string;
};
// const textColor = "#000";

const HtmlRenderer = ({ text, textColor }: THtmlRendererProps) => {
  return (
    <div
      className={`max-w-full prose prose-ol:list-outside prose-ul:list-outside text-[13px] prose-ul:leading-[11px] prose-ol:leading-[11px] prose-p:leading-[18px] prose-p:my-0.5 ${
        textColor ? `text-[${textColor}]` : "text-[#6E6E6E] "
      }`}
    >
      {parse(text)}
    </div>
  );
};

export default HtmlRenderer;
