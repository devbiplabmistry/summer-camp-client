
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState,  useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';



const CheckoutForm = ({ price, item }) => {
  // console.log(item);
  const { user } = useContext(AuthContext)
  // console.log(user);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState();
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState(false)
  const [axiosSecure] = useAxiosSecure()

  useEffect(() => {
    fetch("https://summer-school-server-psi.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, [price])
  // console.log(clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('error', error);
      setCardError(error.message);
    }
    else {
      setCardError('');
      console.log('PaymentMethod', paymentMethod);
    }

    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: 'service pending',
        paymentId: `${item._id}`,
        itemNames: `${item?.title}`,
        instructor: `${item?.instructor}`
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'payment sucessfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
          fetch('https://summer-school-server-psi.vercel.app/payedItem', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
          })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Item Added in Selecteed List',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })

        })
    }

  }

  return (
    <>
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
        <button type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {/* { cardError && <p className="text-red-600 ml-8">{cardError}</p> } */}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
}

export default CheckoutForm;