import { Dispatch } from "react";
import TextEditor from "../shared/TextEditor";

type BodyFormProps = {
  body: string;
  setBody: Dispatch<React.SetStateAction<string>>;
};

const BodyForm = ({ body, setBody }: BodyFormProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="p-5 col-span-7 space-y-5">
          <div>
            <p className="font-medium mb-3">
              Introduce yourself to the employers.
            </p>
            <TextEditor value={body} setValue={setBody} />
          </div>
        </div>
        <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
          <h2 className="text-lg font-semibold">Tips</h2>
          <div className="text-sm mt-5 space-y-6">
            <p>
              Include the date and address of the hiring manager/company first.
            </p>
            <p>
              If you do not know a specific name, you can address it to the
              department/team; it’s sometimes mentioned in the job description
              ("Dear Product Innovation Team,").
            </p>
            <p>
              Highlight key skills, qualifications, and accomplishments that are
              most relevant to the role you are seeking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyForm;
