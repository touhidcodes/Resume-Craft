import { useAppSelector } from "../../../redux/hooks";
import RecipientEditModal from "../../Modal/coverLetter/RecipientEditModal";

const Recipient = () => {
  const recipient = useAppSelector(
    (state) => state.coverLetter.coverLetter?.recipient
  );

  return (
    <div className="text-sm cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group">
      <p>{recipient?.name}</p>
      <p>{recipient?.position}</p>
      <p>{recipient?.companyName}</p>
      <p>{recipient?.address}</p>
      <div className="hidden group-hover:block absolute top-1 right-1 duration-100 ease-in-out transition-all">
        <RecipientEditModal recipient={recipient} />
      </div>
    </div>
  );
};

export default Recipient;
