import express from 'express';
import { FacilityValidation } from './facility.validation';
import { FacilityControllers } from './facility.controller';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.interface';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(FacilityValidation.createFacility),
  FacilityControllers.createFacility,
);
router.get('/', FacilityControllers.getAllFacilities);
router.get('/:facilityId', FacilityControllers.getSingleFacility);


//* update facility
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(FacilityValidation.updateFacility),
  FacilityControllers.updateFacility,
);

//* delete facility
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  FacilityControllers.deleteFacility,
);

export const FacilityRoutes = router;
