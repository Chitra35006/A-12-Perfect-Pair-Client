import { ArrowRightOutlined } from '@ant-design/icons';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = ({ contactId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const totalPrice = 5;
  const navigate = useNavigate();

  // Generate the payment intent when the totalPrice is valid
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: totalPrice })
        .then((res) => {
          console.log('Client Secret:', res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.error('Payment Intent Error:', err));
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if stripe and elements are loaded
    if (!stripe || !elements) {
      console.log('Stripe or Elements not loaded');
      return;
    }
  
    const card = elements.getElement(CardElement);
    if (card === null) {
      console.log('CardElement not found');
      return;
    }
  
    // Create Payment Method
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
  
    if (paymentMethodError) {
      console.log('Payment Error:', paymentMethodError);
      setError(paymentMethodError.message);
      return;
    }
  
    setError('');
  
    // Confirm Payment Intent
    if (clientSecret) {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id, // Use payment method ID
      });
  
      // Handle the result of the payment confirmation
      if (confirmError) {
        console.log('Confirm Error:', confirmError);
        setError(confirmError.message); // Display the error message
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment Successful:', paymentIntent);
        setTransactionId(paymentIntent.id); // Store transaction ID
        const payment={
            email: user.email,
            price:totalPrice,
            id:contactId,
            tId:paymentIntent.id,
            date:new Date().toISOString(),
            status:'pending'
        }
        const res = await axiosSecure.post('/payments', payment);
        console.log('payment saved', res.data);
       
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment Successful",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/myContactReq')}
      } else {
        console.log('Payment Failed:', paymentIntent);
        setError('Payment failed. Please try again.');
      }
    } else {
      console.log('No client secret available');
      setError('No client secret available. Please try again later.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        style={{
          backgroundColor: 'transparent',
          color: '#365314',
          borderBottom: '4px solid #84cc16',
          fontWeight: 'bold',
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease',
          marginTop: '40px',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'teal';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.borderBottom = '4px solid teal';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#365314';
          e.currentTarget.style.borderBottom = '4px solid #84cc16';
        }}
      >
        Pay $5
      </button>
      <p className="text-red-600 my-2">{error}</p>
      {transactionId && (
        <p className="text-green-600">
          Payment Successful! Transaction ID: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckOutPage;
