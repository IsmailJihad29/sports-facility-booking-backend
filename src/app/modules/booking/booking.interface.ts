import   { Types } from "mongoose";

export interface TBooking {
  date: Date;
  startTime: string; // e.g., "10:00"
  endTime: string; // e.g., "13:00"
  user:  Types.ObjectId;// User ID reference
  facility:  Types.ObjectId;// Facility ID reference
  payableAmount: number; // Amount calculated for the booking
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled'; // Status of the booking
}
