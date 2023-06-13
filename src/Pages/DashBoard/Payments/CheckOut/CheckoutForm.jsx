import { CardElement, useCartElementState, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";



const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useCartElementState();
  const [clientSecret, setClientSecret] = useState();
  // const [processing, setProcessing] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      
      .then(data => setClientSecret(data.clientSecret))
    }, [price])
  console.log(clientSecret);
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
    }
      console.log('PaymentMethod', paymentMethod);
    

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: 'Jenny Rosen',
          },
        },
      },
    ); 
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

  }

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
     <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default CheckoutForm;