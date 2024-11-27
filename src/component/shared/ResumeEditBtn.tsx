import { Edit } from "@mui/icons-material";

type TResumeEditBtnProps = {
  handleClick: () => void;
};

const ResumeEditBtn = ({ handleClick }: TResumeEditBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className="hidden bg-white custom-shadow group-hover:flex justify-center items-center rounded-lg absolute top-1 right-1 duration-100 ease-in-out transition-all p-1"
    >
      <span className="hover:bg-neutral-100 inline-block p-1.5 rounded-lg">
        <Edit />
      </span>
    </button>
  );
};

export default ResumeEditBtn;
