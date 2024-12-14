import { join } from 'path';
import { Booking } from '../Booking/booking.model';
import { readFileSync } from 'fs';

const confirmationService = async (transactionId: string, status: string) => {
  let message = '';

  // Find the booking associated with this transactionId
  const booking = await Booking.findOne({ transactionId });
  console.log(booking); 
  console.log(status); 

  if (!booking) {
    message = 'Booking not found for the given transaction ID';
    console.log(message);
    return message;
  }

  // Automatically mark the payment as successful
 
    await Booking.findOneAndUpdate({ transactionId },{ paymentStatus: 'paid'});
    message = 'Successful Paid';
 

  const filePath = join(__dirname, '../../../public/confirmation.html');
  let template = readFileSync(filePath, 'utf-8');

  template = template.replace(/{{message}}/g, message);

  return template;
};


export const paymentServices = {
  confirmationService,
};
