export const facilitySearchableFields = ['name', 'description', 'location'];

export type TFacility = {
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
  image?: string;
};
