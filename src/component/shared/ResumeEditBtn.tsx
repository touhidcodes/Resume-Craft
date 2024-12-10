import clsx from "clsx";
import { MdOutlineEdit } from "react-icons/md";

type TResumeEditBtnProps = {
  handleClick: () => void;
  className?: string;
};

const ResumeEditBtn = ({ handleClick, className }: TResumeEditBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${clsx(
        "bg-white flex justify-center items-center size-10",
        className
      )}`}
    >
      <div className="size-[32px] hover:bg-neutral-100 rounded-= flex justify-center items-center text-black">
        <MdOutlineEdit size={22} />
      </div>
    </button>
  );
};

export default ResumeEditBtn;
