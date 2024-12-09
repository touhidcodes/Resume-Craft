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
        "bg-white hidden group-hover/container:flex justify-center items-center size-10 absolute top-1 right-1 custom-shadow rounded-md",
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
