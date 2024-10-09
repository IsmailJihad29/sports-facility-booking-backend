import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';
import { JwtPayload } from 'jsonwebtoken';
import { Request, Response } from 'express';


//* create booking
const createBooking = catchAsync(async (req, res) => {
  const { userEmail } = req.user;

  const result = await BookingServices.createBookingIntoDB(userEmail, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully',
    data: result,
  });
});


//* get all bookings by admin
const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: result,
  });
});


//* get all bookings by user
const getAllBookingByUser = catchAsync(async (req, res) => {
  const user: JwtPayload = req.user;
  const result = await BookingServices.getAllBookingByUserFromDB(
    user,
    req.query,
  );



  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: result,
  });
});


//* delete bookings
const deleteBookingByUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: JwtPayload = req.user;
  const result = await BookingServices.deleteBookingByUserFromDB(id, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking cancelled successfully',
    data: result,
  });
});


//* check ability
const checkAvailability = catchAsync(async (req, res) => {
  const { date, facility } = req.query;

  const result = await BookingServices.checkAvailabilityByDateAndFacilityIntoDB(
    date as string,
    facility as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Availability checked successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBooking,
  checkAvailability,
  getAllBookingByUser,
  deleteBookingByUser,
};
