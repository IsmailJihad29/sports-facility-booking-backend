import { Types } from 'mongoose';

export const BookingSearchableFields = ['name', 'description', 'location'];


export type TBooking = {
  date: string;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  facility: Types.ObjectId;
  payableAmount?: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  transactionId: string;
};

export type TSchedule = {
  date: string;
  startTime: string;
  endTime: string;
};

export type TUserAuth = {
  userEmail: string;
  role: 'user' | 'admin';
  iat: number;
  exp: number;
};
