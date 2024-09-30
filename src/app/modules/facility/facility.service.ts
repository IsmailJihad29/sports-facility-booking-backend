import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

//* create new Facility
const createFacilityIntoDb = async (payload: TFacility) => {
  const newFacility = await Facility.create(payload);
  return newFacility;
};

//* get all facility
const getAllFacilityFromDb = async () => {
  const result = await Facility.find();
  return result;
};

//* get single facility
const getSingleFacilityFromDB = async (id: string) => {
  const result = await Facility.findOne({ _id: id });
  return result;
};

//* update facility
const updateFacilityIntoDB = async (
  id: string,
  payload: Partial<TFacility>
) => {
  const result = await Facility.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

//* delete facility
const deleteFacilityFromDB = async (id: string) => {
  const deleteInfo = {
    isDeleted: true,
  };
  const result = await Facility.findOneAndUpdate({ id }, deleteInfo, {
    new: true,
  });
  return result;
};

// const returnCarUpdateIntoDB = async (payload: any) => {
//   const bookingId = payload.bookingId;



//   // Function to convert time strings to hours
//   const convertToHours = (time: string) => {
//     const [hours, minutes] = time.split(":").map(Number);
//     return hours + minutes / 60;
//   };

//   // Convert the startTime and endTime to hours
//   const startHour = convertToHours(startTime);
//   const endHour = convertToHours(endTime);

//   // Calculate the duration in hours
//   const duration = endHour - startHour;

//   // Access pricePerHour from the populated carId
//   const pricePerHour = allBook.carId.pricePerHour;

//   // Calculate total cost: duration (hours) * pricePerHour
//   const totalCost = duration * pricePerHour;

//   // Update the booking object with the new values
//   allBook.endTime = endTime; // Update the end time
//   allBook.totalCost = totalCost; // Update the total cost
//   allBook.carId.status = "available";
//   // Save the updated document back to the database
//   const updatedBook = await allBook.save();

//   return updatedBook;
// };

export const facilityService = {
  createFacilityIntoDb,
  getAllFacilityFromDb,
  getSingleFacilityFromDB,
  updateFacilityIntoDB,
  deleteFacilityFromDB,
};
