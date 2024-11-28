import { z } from "zod";
import dayjs from "dayjs";

export const experienceValidationSchema = z
  .object({
    companyName: z.string().min(1, "Company name is required"),
    jobTitle: z.string().min(1, "Job title is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    location: z.string().min(1, "Location is required"),
  })
  .refine(
    (data) => {
      // Check if startDate is earlier than endDate
      const start = dayjs(data.startDate, "MM/YYYY");
      const end = dayjs(data.endDate, "MM/YYYY");
      return start.isBefore(end); // Ensure start date is earlier than end date
    },
    {
      message: "Start date must be earlier than end date",
      path: ["startDate"], // Error will be shown for the startDate field
    }
  );
