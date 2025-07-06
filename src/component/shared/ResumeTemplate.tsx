import ResumeNameModal from "../Modal/ResumeNameModal";

export type TTemplate = {
  id: string;
  image: string;
  name: string;
  usageCount: number;
};

type ResumeTemplateProps = {
  template: TTemplate;
  canCreate: boolean;
};

const ResumeTemplate = ({ template, canCreate }: ResumeTemplateProps) => {
  return (
    <div className="relative group">
      {/* Resume Template Preview */}
      <div>
        <div className="bg-[#F4F4FF] p-5 mb-3 cursor-pointer border border-neutral-200">
          <img
            src={template.image}
            alt="user's resume"
            className="object-center h-[240px] w-full"
          />
        </div>
        <h3 className="font-medium">{template.name}</h3>
        <p className="text-xs text-neutral-500">
          ({template.usageCount}) users use this
        </p>
      </div>

      {/* Hover Button Section */}
      <div className="bg-transparent absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300">
        <div className="flex flex-col justify-center items-center h-full px-3">
          {/* Check if user can create more resumes */}

          <ResumeNameModal template={template} disabled={!canCreate} />
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
