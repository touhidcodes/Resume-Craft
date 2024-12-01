import { Edit } from "@mui/icons-material";

type TResumeEditBtnProps = {
  handleClick: () => void;
};

const ResumeEditBtn = ({ handleClick }: TResumeEditBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-white custom-shadow group-hover:flex justify-center items-center rounded-lg p-1"
    >
      <span className="hover:bg-neutral-100 inline-block p-1 rounded-lg">
        <Edit sx={{ fontSize: "23px" }} />
      </span>
    </button>
  );
};

export default ResumeEditBtn;
