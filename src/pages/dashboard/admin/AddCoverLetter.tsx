import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDropzone } from "react-dropzone";
import { useCreateCoverLetterTemplateMutation } from "../../../redux/features/template/templateApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddCoverLetter = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [createTemplate] = useCreateCoverLetterTemplateMutation();

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

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=68c40fc46fe61300befd1b168543a8b7`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

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
      toast.success("Template uploaded successfully!");
      navigate("/ADMIN/allTemplates");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to upload image or submit the template.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <Helmet>
        <title>Add Template - Resume Craft</title>
      </Helmet>
      <h1 className="text-xl font-bold mb-4">Add Cover Letter Template</h1>
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
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: isDragActive ? "#f0f0f0" : "transparent",
            position: "relative",
          }}
        >
          <input {...getInputProps()} />
          {imagePreview ? (
            <Box>
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "150px",
                  marginBottom: "10px",
                }}
              />
              <Typography
                color="primary"
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CheckCircleIcon color="success" /> Image Selected: {image?.name}
              </Typography>
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

      {errorMessage && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {errorMessage}
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        disabled={isSubmitting}
        sx={{ textTransform: "none", mt: 2 }}
      >
        {isSubmitting ? "Submitting..." : "Submit Template"}
      </Button>
    </div>
  );
};

export default AddCoverLetter;
