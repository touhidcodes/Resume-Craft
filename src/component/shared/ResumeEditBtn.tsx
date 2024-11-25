import { Edit } from "@mui/icons-material";

type TResumeEditBtnProps = {
  handleClick: () => void;
};

const ResumeEditBtn = ({ handleClick }: TResumeEditBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className="hidden w-[40px] h-[40px] bg-[#FFFF] custom-shadow group-hover:flex justify-center items-center rounded-lg absolute top-1 right-1 duration-100 ease-in-out transition-all"
    >
      <Edit />
    </button>
  );
};

export default ResumeEditBtn;
