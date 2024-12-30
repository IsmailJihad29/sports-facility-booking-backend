import axios from 'axios';
import config from '../../config';

type TPaymentData = {
  transactionId: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
};

export const initialPayment = async (paymentData: TPaymentData) => {
  try {
    const response = await axios.post(config.payment_url!, {
      store_id: config.store_id,
      signature_key: config.signature_key,
      tran_id: paymentData.transactionId,
      success_url: `http://localhost:3000/api/payment/confirmation`,
      fail_url: `${config.base_url}/api/payment/confirmation?status=failed`,
      cancel_url: `${config.base_url_frontend}`,
      amount: paymentData.amount,
      currency: 'BDT',
      desc: 'Merchant Registration Payment',
      cus_name: paymentData.customerName,
      cus_email: paymentData.customerEmail,
      cus_add1: paymentData.customerAddress,
      cus_add2: 'N/A',
      cus_city: 'N/A',
      cus_state: 'N/A',
      cus_postcode: 'N/A',
      cus_country: 'N/A',
      cus_phone: paymentData.customerAddress,
      type: 'json',
    });

    return response.data;
  } catch (err) {
    throw new Error('Payment initiation failed');
  }
};
