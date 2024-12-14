/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useCreateTemplatesMutation } from "../../../redux/features/template/templateApi";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileCopy } from "@mui/icons-material";

const AddTemplate = () => {
  const [image, setImage] = useState<File | null>(null);
  const [images, setImages] = useState<any>([]);
  const [, setUploadProgress] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const navigate = useNavigate();
  const [createTemplate] = useCreateTemplatesMutation();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
      setErrorMessage(null); // Clear error when a file is dropped
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrorMessage(null); // Clear error when name changes
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setErrorMessage("Please enter a template name before submitting.");
      return;
    }
    if (!image) {
      setErrorMessage("Please upload an image before submitting.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Upload image to ImageBB
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=68c40fc46fe61300befd1b168543a8b7`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total!
            ) as number;
            setImages([...images, { image, progress }]);
          },
        }
      );
      console.log(images);

      const data = await response.data;

      if (!data.success) {
        throw new Error("Image upload failed. Please try again.");
      }

      const uploadedImageUrl = data.data.url;

      // Submit template to API
      const templateData = {
        image: uploadedImageUrl,
        name,
      };

      await createTemplate({
        ...templateData,
      }).unwrap();

      // Reset form after successful submission
      setName("");
      setImage(null);
      setImagePreview(null);
      setUploadProgress(null);
      toast.success("Template uploaded successfully!");
      // navigate("/ADMIN/allTemplates");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to upload image or submit the template.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-[1024px] mx-auto bg-white shadow-md rounded-lg font-roboto mt-5 border">
      <Helmet>
        <title>Add Template - Resume Craft</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-x-10">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[30px] leading-[40px] font-bold mb-4 text-primary ">
            {" "}
            Upload Template
          </h1>
          <div className="mb-4">
            <TextField
              label="Template Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
              sx={{ mb: 2 }}
            />

            <Box
              {...getRootProps()}
              sx={{
                border: "2px dashed #ccc",
                borderRadius: "8px",
                // padding: "20px",
                width: "100%",
                height: "300px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isDragActive ? "#f0f0f0" : "transparent",
                position: "relative",
              }}
            >
              <input {...getInputProps()} />
              {imagePreview ? (
                <Box
                  sx={{
                    padding: "9px",
                    position: "absolute",
                    height: "300px",
                    width: "100%",
                  }}
                >
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="object-cover rounded-[5px] "
                    style={{
                      width: "100%",
                      height: "100%",

                      marginBottom: "10px",
                    }}
                  />
                  {/* <Typography
                    color="primary"
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon color="success" /> Image Selected:{" "}
                    {image?.name}
                  </Typography> */}
                </Box>
              ) : (
                <Box>
                  <CloudUploadIcon
                    style={{ fontSize: 40, color: "#ccc", marginBottom: 8 }}
                  />
                  <Typography>
                    {isDragActive
                      ? "Drop the file here..."
                      : "Drag and drop an image here, or click to select one"}
                  </Typography>
                </Box>
              )}
            </Box>
          </div>
        </div>

        <div className="w-full lg:w-[40%]">
          <h3 className="text-green-400 ">Uploaded Image Progress </h3>
          {images.map((ima: any, index: string) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-4">
                <FileCopy />
                <div className="w-full">
                  <h4>{ima?.image?.name}</h4>
                  <div className="">
                    <LinearProgress
                      variant="buffer"
                      value={ima.progress}
                      valueBuffer={ima.progress + 2}
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-right">
                    {ima.progress}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {errorMessage && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {errorMessage}
        </Typography>
      )}
      <div>
        <Button
          variant="contained"
          className="w-full lg:w-[60%]"
          onClick={handleSubmit}
          disabled={isSubmitting}
          sx={{ textTransform: "none", mt: 2 }}
        >
          {isSubmitting ? "Submitting..." : "Submit Template"}
        </Button>
      </div>
    </div>
  );
};

export default AddTemplate;
