import mongoose from "mongoose";
import { facilitySearchableFields, TFacility } from "./facility.interface";
import { Facility } from "./facility.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";

//* create facility
const createFacilityIntoDB = async (facility: TFacility) => {
  const result = await Facility.create(facility);
  return result;
};

const getAllFacilitiesFromDB = async (query: Record<string, unknown>) => {
  // const result = await Facility.find();
  // return result;
  const facilityQuery = new QueryBuilder(Facility.find(), query)
    .search(facilitySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await facilityQuery.modelQuery;
  const meta = await facilityQuery.countTotal();
  return { result, meta };
};

const getSingleFacilityFromDB = async (id: string) => {
  const result = await Facility.find({
    _id: new mongoose.Types.ObjectId(id),
  });

  return result;
};

//* update facility
const updateFacilityInDB = async (
  id: string,
  updateData: Partial<TFacility>
) => {
  const objectId = new mongoose.Types.ObjectId(id);

  // Check if the document exists before updating
  const existingFacility = await Facility.findById(objectId);
  if (!existingFacility) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid facility ID");
  }

  const updatedProduct = await Facility.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    { $set: updateData },
    { new: true, runValidators: true }
  );

  return updatedProduct;
};


//* delete facility
const deleteFacilityFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
 
  const existingFacility = await Facility.findById(objectId);
  if (!existingFacility) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid facility ID");
  }

  const deletedFaculty = await Facility.findOneAndUpdate(
    { _id: objectId },
    { isDeleted: true },
    { new: true }
  );
  return deletedFaculty;
};

export const FacilityServices = {
  createFacilityIntoDB,
  updateFacilityInDB,
  getAllFacilitiesFromDB,
  getSingleFacilityFromDB,
  deleteFacilityFromDB,
};
