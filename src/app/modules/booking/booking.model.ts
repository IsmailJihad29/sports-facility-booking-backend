import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking>({
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  facility: { type: Schema.Types.ObjectId, ref: 'facility', required: true },
  payableAmount: { type: Number, required: true },
  isBooked: { type: String, enum: ['confirmed', 'unconfirmed', 'canceled'], default: 'unconfirmed' },
});

export const Booking = model<TBooking>('Booking', bookingSchema);
