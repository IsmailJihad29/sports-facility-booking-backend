// import httpStatus from 'http-status';
// import catchAsync from '../utils/catchAsync';
// import sendResponse from '../utils/sendResponse';
// import { bookingService } from './booking.service';
// import { createBookingSchema } from './booking.validation';

// const createBooking = catchAsync(async (req, res) => {
//   const validatedData = createBookingSchema.parse(req.body);
//   const result = await bookingService.createBookingIntoDB(req.user?._id, validatedData);
//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: 'Booking created successfully',
//     data: result,
//   });
// });

// // Other controllers (view bookings, check availability, etc.) can be added similarly.

// export const BookingController = {
//   createBooking,
// };
