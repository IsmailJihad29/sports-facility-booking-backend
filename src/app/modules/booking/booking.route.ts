import express from 'express';
import { BookingValidation } from './booking.validation';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.interface';

const router = express.Router();

router.post(
  '/bookings',
  auth(USER_ROLE.user),
  validateRequest(BookingValidation.createBooking),
  BookingControllers.createBooking,
);

router.get(
  '/bookings',
  auth(USER_ROLE.admin),
  BookingControllers.getAllBooking,
);
router.get(
  '/bookings/user',
  auth(USER_ROLE.user),
  BookingControllers.getAllBookingByUser,
);

router.delete(
  '/bookings/:id',
  auth(USER_ROLE.user),
  BookingControllers.deleteBookingByUser,
);

router.get('/check-availability', BookingControllers.checkAvailability);

export const BookingRoutes = router;
