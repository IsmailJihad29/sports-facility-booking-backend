import { join } from "path";
import { Booking } from "../Booking/booking.model";
import { readFileSync } from "fs";

const confirmationService = async () => {
  let message = "";

  const filePath = join(__dirname, "../../../public/confirmation.html");
  let template = readFileSync(filePath, "utf-8");

  template = template.replace(/{{message}}/g, message);

  return template;
};

export const paymentServices = {
  confirmationService,
};
