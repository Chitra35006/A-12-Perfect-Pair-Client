import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'; // Correct import
import CheckOutPage from './CheckOutPage';

// TODO: Add your Stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();

  // Access `id` from location state
  const { id, totalPrice = 5 } = location.state || { totalPrice: 5 };

  return (
    <div className='my-20 w-10/12 mx-auto'>
            <h1 className="text-xl font-bold mb-4 text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1">Payment Details</h1>

      {/* Display contact ID if available */}
      {id ? <p className='my-10'>Contact Request For Id: {id}</p> : <p>No data received.</p>}
      <p>Total Price: {totalPrice}USD</p>

      {/* Wrap the checkout page inside the correct `Elements` component */}
      <Elements stripe={stripePromise}>
        <CheckOutPage contactId={id}
        totalPrice={totalPrice}
        />
      </Elements>
    </div>
  );
};

export default Payment;
