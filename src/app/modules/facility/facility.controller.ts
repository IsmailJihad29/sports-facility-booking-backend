import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { facilityService } from "./facility.service";


//* create a facility
const createFacility = catchAsync(async (req, res) => {
  const facilityData = req.body;
  const result = await facilityService.createFacilityIntoDb(facilityData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Facility created successfully",
    data: result,
  });
});


//* get all facility
const getAllFacility = catchAsync(async (req, res) => {
  const result = await facilityService.getAllFacilityFromDb();
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No data found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility retrieved successfully",
    data: result,
  });
});

//* get single facility
const getSingleFacility = catchAsync(async (req, res) => {
  const result = await facilityService.getSingleFacilityFromDB(req.params.id);
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No data found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility retrieved successfully",
    data: result,
  });
});


//* update faiclity
const updateFacility = catchAsync(async (req, res) => {
  const result = await facilityService.updateFacilityIntoDB(req.params.id, req.body);
  if (!result || (Array.isArray(result) && result.length === 0)) {
    // If no data is found, send this response
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No data found",
      data: [],
    });
  }
  // If data is found, send the success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility updated successfully",
    data: result,
  });
});


//* delete facility
const deleteFacility = catchAsync(async (req, res) => {
  const result = await facilityService.deleteFacilityFromDB(req.params._id);
  if (!result || (Array.isArray(result) && result.length === 0)) {
    // If no data is found, send this response
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No data found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility Deleted successfully",
    data: result,
  });
});




// const returnCarUpdate = catchAsync(async (req, res) => {
//   const result = await facilityService.returnCarUpdateIntoDB(req.body);
//   if (!result || (Array.isArray(result) && result.length === 0)) {
//     // If no data is found, send this response
//     return sendResponse(res, {
//       statusCode: httpStatus.NOT_FOUND,
//       success: false,
//       message: "No data found",
//       data: [],
//     });
//   }
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Car returned successfully",
//     data: result,
//   });
// });
export const facilityController = {
  createFacility,
  getAllFacility,
  getSingleFacility,
  updateFacility,
  deleteFacility,
  
};
