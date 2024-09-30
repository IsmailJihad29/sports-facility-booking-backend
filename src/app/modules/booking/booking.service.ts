// import { Booking } from './booking.model';
// import { TBooking } from './booking.interface';
// import { ObjectId, Types } from 'mongoose';

// const createBookingIntoDB = async (userId: Types.ObjectId, payload: TBooking) => {
//   const bookingData: TBooking = {
//     ...payload,
//     user: userId,
//     payableAmount: calculatePayableAmount(payload), // Add a function to calculate this
//   };

//   const newBooking = await Booking.create(bookingData);
//   return newBooking;
// };

// const calculatePayableAmount = (booking: TBooking): number => {
//   const startTime = new Date(`1970-01-01T${booking.startTime}:00`);
//   const endTime = new Date(`1970-01-01T${booking.endTime}:00`);
//   const durationInHours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
//   return durationInHours * booking.pricePerHour; // Ensure to fetch `pricePerHour` from the facility model
// };

// // Other service methods (view all bookings, cancel booking, etc.) can be added similarly.

// export const bookingService = { createBookingIntoDB };
