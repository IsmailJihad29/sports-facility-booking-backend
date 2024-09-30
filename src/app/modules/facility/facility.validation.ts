import { z } from "zod";

// Define Zod schema for car validation
const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
const createFacilityValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Description is required" }),

  pricePerHour: z
    .number({ required_error: "Price per hour is required" })
    .positive({ message: "Price must be a positive number" }),

  isDeleted: z.boolean().optional(),
});

const updateFacilityValidationSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),

  pricePerHour: z
    .number({ required_error: "Price per hour is required" })
    .positive({ message: "Price must be a positive number" })
    .optional(),
  isDeleted: z.boolean().optional(),
});
const returnValidationSchema = z.object({
  bookingId: z.string().min(1, "Booking ID is required").optional(),
  startTime: z
    .string({
      required_error: "Start time is required",
      invalid_type_error: "Start time must be a string",
    })
    .regex(timeRegex, "Start time must be in the format HH:MM"),
});

export const facilityValidation = {
  createFacilityValidationSchema,
  updateFacilityValidationSchema,
  returnValidationSchema,
};
