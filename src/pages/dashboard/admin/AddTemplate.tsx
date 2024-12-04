import { useState } from "react";
import { Button, TextField } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useCreateTemplatesMutation } from "../../../redux/features/template/templateApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddTemplate = () => {
    const [image, setImage] = useState<File | null>(null);
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const [createTemplate] = useCreateTemplatesMutation();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setImage(file || null);
        setErrorMessage(null); // Clear error when a file is selected
    };

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
            setErrorMessage(null);
            toast.success("Template Upload successfully");
            navigate("/ADMIN/allTemplates")
            //   alert("Template submitted successfully!");
        } catch (error) {
            console.error(error);
            setErrorMessage("Failed to upload image or submit the template.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">Add Template</h1>
            <div className="mb-4">
                <TextField
                    label="Template Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                    sx={{ mb: 2 }}
                />
                <label htmlFor="templateImage" style={{ display: "block" }}>
                    <input
                        type="file"
                        id="templateImage"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        component="span"
                        startIcon={<UploadFileIcon />}
                        sx={{ textTransform: "none" }}
                    >
                        {image ? `Selected: ${image.name}` : "Upload Template Image"}
                    </Button>
                </label>
            </div>
            {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
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

export default AddTemplate;
