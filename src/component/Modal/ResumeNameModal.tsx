import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TTemplate } from "../shared/ResumeTemplate";
import { useNavigate } from "react-router-dom";
import { useCreateResumeMutation } from "../../redux/features/resume/resumeApi";
import ButtonSpinner from "../shared/ButtonSpinner";

type TResumeName = {
  resumeName: string;
};

const ResumeNameModal = ({ template }: { template: TTemplate }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TResumeName>();
  const [createResume, { isLoading }] = useCreateResumeMutation();

  function open() {
    console.log("hello");
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit: SubmitHandler<TResumeName> = async (data) => {
    try {
      const res = await createResume({
        templateId: template.id,
        name: data.resumeName,
      }).unwrap();
      navigate(`/resume-builder/${res.data.templateId}?resume=${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={open}
        variant={"contained"}
        size="small"
        fullWidth
        sx={{ fontSize: [10, 14] }}
      >
        Use This Template
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-[9999] focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/45">
            <DialogPanel
              transition
              className="w-full max-h-[calc(100svh_-_100px)] max-w-sm h-64 rounded-lg backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-white flex flex-col justify-between"
            >
              <DialogTitle
                as="h3"
                className="flex justify-between items-center border-b py-3 px-5"
              >
                <h3 className="text-xl font-semibold">Resume name</h3>
                <Close onClick={close} sx={{ cursor: "pointer" }} />
              </DialogTitle>

              <div className="h-full px-5 py-3 flex justify-center items-center">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 w-full"
                >
                  <div>
                    <Controller
                      name="resumeName"
                      control={control}
                      rules={{ required: "Resume name is required" }}
                      render={({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          label="Resume name"
                          fullWidth
                          size="medium"
                          placeholder="Full Stack Developer"
                        />
                      )}
                    />
                    <p className="text-xs text-red-500 mt-1">
                      {errors?.resumeName?.message as string}
                    </p>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
                    variant="contained"
                  >
                    {isLoading ? <ButtonSpinner /> : "Continue"}
                  </Button>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ResumeNameModal;
