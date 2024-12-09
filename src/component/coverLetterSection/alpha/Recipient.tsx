import { useAppSelector } from "../../../redux/hooks";

const Recipient = () => {
  const recipient = useAppSelector(
    (state) => state.coverLetter.coverLetter?.recipient
  );

  return (
    <div className="text-sm cursor-pointer hover:bg-primary/[0.02] border border-transparent hover:border-dashed hover:border-primary relative group/container">
      <p>{recipient?.name}</p>
      <p>{recipient?.position}</p>
      <p>{recipient?.companyName}</p>
      <p>{recipient?.address}</p>
    </div>
  );
};

export default Recipient;
