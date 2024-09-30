import express from "express";
import validateRequest from "../middleware/validateRequest";
import { auth } from "../middleware/auth";
import { user_role } from "../user/user.constants";
import { facilityValidation } from "./facility.validation";
import { facilityController } from "./facility.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(facilityValidation.createFacilityValidationSchema),
  auth(user_role.admin),
  facilityController.createFacility
);

router.get("/", facilityController.getAllFacility);

router.get("/:id", facilityController.getSingleFacility);

router.put(
  "/:id",
  validateRequest(facilityValidation.updateFacilityValidationSchema),
  auth(user_role.admin),
  facilityController.updateFacility
);

router.delete("/:id",
  //  auth(user_role.admin), 
   facilityController.deleteFacility);

// router.put(
//   "/return",
//   auth(user_role.admin),
//   // validateRequest(carValidation.returnValidationSchema),
//   facilityController.returnCarUpdate
// );

export const FacilityRoutes = router;
