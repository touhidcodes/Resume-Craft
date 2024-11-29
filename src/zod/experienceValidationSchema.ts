import { z } from "zod";
import dayjs from "dayjs";

export const experienceValidationSchema = z
  .object({
    companyName: z.string().min(1, "Company name is required"),
    jobTitle: z.string().min(1, "Job title is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().optional(),
    location: z.string().min(1, "Location is required"),
  })
  .refine(
    (data) => {
      if (data?.endDate) {
        // Check if startDate is earlier than endDate
        const start = dayjs(data.startDate, "MM/YYYY");
        const end = dayjs(data.endDate, "MM/YYYY");
        return start.isBefore(end);
      }

      return true;
    },
    {
      message: "Start date must be before end date.",
      path: ["startDate"], // Error will be shown for the startDate field
    }
  );
