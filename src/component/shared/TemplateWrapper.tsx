import { ReactNode, useRef } from "react";
import useDimensions from "../../hooks/useDimension";

type TTemplateWrapperProps = {
  children: ReactNode;
};

const TemplateWrapper = ({ children }: TTemplateWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);
  return (
    <div
      id="resumeContainer"
      ref={containerRef}
      className="h-fit w-full py-[30px] px-[50px] rounded-[9px] border my-[20px] aspect-[210/297]"
    >
      <div
        className={`${!width && "invisible"} space-y-3`}
        style={{
          zoom: (1 / 794) * width,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TemplateWrapper;
