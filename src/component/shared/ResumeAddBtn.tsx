import { Add } from "@mui/icons-material";

type TResumeAddBtnProps = {
  handleClick: () => void;
};

const ResumeAddBtn = ({ handleClick }: TResumeAddBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-white custom-shadow group-hover:flex justify-center items-center rounded-lg p-1"
    >
      <span className="hover:bg-neutral-100 inline-block p-1 rounded-lg">
        <Add />
      </span>
    </button>
  );
};

export default ResumeAddBtn;
