import clsx from "clsx";
import { MdAdd } from "react-icons/md";

type TResumeAddBtnProps = {
  handleClick: () => void;
  className?: string;
};

const ResumeAddBtn = ({ handleClick, className }: TResumeAddBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${clsx(
        "bg-white flex justify-center items-center size-10",
        className
      )}`}
    >
      <div className="size-[32px] hover:bg-neutral-100 rounded flex justify-center items-center text-black">
        <MdAdd size={26} />
      </div>
    </button>
  );
};

export default ResumeAddBtn;
