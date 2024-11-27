import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ResumeEditBtn from "../shared/ResumeEditBtn";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import MultipleSelect from "../builder/MultipleSelect";

const CertificateEditModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [certificates, setCertificates] = useState<string[]>([]);

  const handleRemoveCertificate = (certificate: string) => {
    const filteredCertificate = certificates.filter(
      (item) => item !== certificate
    );
    setCertificates(filteredCertificate);
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <ResumeEditBtn handleClick={open} />

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-[999] focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/45">
            <DialogPanel
              transition
              className="w-full max-h-[calc(100svh_-_100px)] max-w-[950px] rounded-lg backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-white flex flex-col justify-between"
            >
              <DialogTitle
                as="h3"
                className="flex justify-between items-center border-b py-3 px-5"
              >
                <h3 className="text-xl font-semibold">Certificates</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="p-5 col-span-7 space-y-5">
                    <h2 className="font-semibold">
                      Show your certificates, licenses, and training in your
                      field.
                    </h2>
                    <MultipleSelect
                      label="Select Certificate"
                      setValue={setCertificates}
                    />
                    <div className="mt-5 flex items-center gap-4 flex-wrap">
                      {certificates.map((certificate) => (
                        <button className="flex items-center gap-x-3 text-sm border rounded-md py-1.5 px-3 cursor-default">
                          <span>{certificate}</span>
                          <Close
                            fontSize="small"
                            onClick={() => handleRemoveCertificate(certificate)}
                            sx={{ cursor: "pointer" }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 bg-primary/[0.03] hidden md:block col-span-5">
                    <h2 className="text-lg font-semibold">Tips</h2>
                    <div className="text-sm mt-5">
                      <p>
                        Professional certifications are a great way to stand out
                        from the crowd in your job search. Some jobs require
                        specific certifications, and including certifications
                        can help showcase your skills and abilities with an
                        objective measure. Extra certifications can also be a
                        great way to show your interests and proficiencies
                        outside of work. Press enter to save and add another.
                        Although online courses don’t always offer
                        certification, you can still list non-certification
                        classes on your resume to demonstrate proficiency.
                        Include name of certification, certifying organization
                        and date received. List job-critical certifications at
                        the top of the list, and consider adding them in your
                        resume summary and work experience as well. For extra or
                        ‘bonus’ certifications, keep them lower on the list and
                        limit to your most impressive achievements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialog footer */}
              <div className="py-4 px-5 space-x-5 flex justify-end border-t">
                <Button variant="outlined" autoFocus onClick={close}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  //   onClick={handleClose}
                  autoFocus
                >
                  Save
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CertificateEditModal;
