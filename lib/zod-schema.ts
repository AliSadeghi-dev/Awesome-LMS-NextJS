import { z } from "zod";

export const courseLevel = ["Beginner", "Intermediate", "Advanced"];
export const courseStatus = ["Draft", "Published", "Archived"];

export const courseCategory = [
  "Web Development",
  "Mobile Development",
  "AI",
  "Data Science",
  "DevOps",
  "Cybersecurity",
  "Game Development",
  "UI/UX Design",
  "Product Management",
  "Other",
];

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" })
    .max(1000, { message: "Description must be at most 1000 characters long" }),
  fileKey: z.string().min(1, { message: "File key is required" }),
  price: z.coerce
    .number()
    .min(1, { message: "Price must be a positive number" }),
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be 1 hour" })
    .max(500, { message: "Duration must be at most 500 hours" }),
  level: z.enum(courseLevel, { message: "Level is required" }),
  category: z.enum(courseCategory, { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(3, { message: "Small description must be at least 3 characters long" })
    .max(200, {
      message: "Small description must be at most 200 characters long",
    }),
  status: z.enum(courseStatus, { message: "Status is required" }),
  slug: z.string().min(3).max(100),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
