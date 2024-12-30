import { Request, Response } from 'express';
import { paymentServices } from './payment.service';

const confirmationController = async (req: Request, res: Response) => {

  const result = await paymentServices.confirmationService();
  res.send(result);
};

export const paymentController = {
  confirmationController,
};
