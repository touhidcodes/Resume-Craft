import { Dispatch } from "react";
import TextEditor from "../shared/TextEditor";
type BodyFormProps = {
  closeCover: string;
  setCloseCover: Dispatch<React.SetStateAction<string>>;
};

const CloseForm = ({ closeCover, setCloseCover }: BodyFormProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 ">
        <div className="p-5 col-span-7 space-y-5">
          <div>
            <p className="font-medium mb-3">How do you want to close?</p>
            <TextEditor value={closeCover} setValue={setCloseCover} />
          </div>
        </div>
        {/* <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
          <h2 className="text-lg font-semibold">Tips</h2>
          <div className="text-sm mt-5 space-y-6">
            <p>
              It pays to be picky about the academic accomplishments that you
              list on your resume. Employers want to see a maximum of three
              education entries in a resume.* If you have more academic
              achievements, consider listing them under one of your main
              education entries.
            </p>
            <p>
              Listing your education shows that you meet any necessary
              prerequisites to employment and allows you to showcase your book
              smarts if you’re a little short on actual experience.
            </p>
            <p>
              *Indeed survey conducted with Lucid, N=2661 employers among 10
              industries.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CloseForm;
