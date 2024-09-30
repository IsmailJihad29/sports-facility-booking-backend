import { z } from 'zod';

export const createBookingSchema = z.object({
  date: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Invalid date format",
  }),
  user: z.string().min(1, "User ID is required").optional(),
  startTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format. Use HH:MM."),
  endTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format. Use HH:MM."),
  facility: z.string().min( 1, "Invalid facility ID"),
});


