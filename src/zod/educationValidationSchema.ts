import { z } from "zod";

export const educationValidationSchema = z.object({
  school: z.string().min(1, "School name is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  graduationDate: z.string().min(1, "Graduation date is required"),
  location: z.string().min(1, "Location is required"),
});
