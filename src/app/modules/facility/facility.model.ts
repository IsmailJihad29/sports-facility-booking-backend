import { model, Schema } from "mongoose";
import { TFacility } from "./facility.interface";

const facilitySchema = new Schema<TFacility>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    pricePerHour: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

facilitySchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
facilitySchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
facilitySchema.pre("findOneAndUpdate", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
facilitySchema.pre("findOneAndDelete", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Facility = model<TFacility>("facility", facilitySchema);

