import { CardElement, useCartElementState, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useCartElementState();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure()
  const [processing,setProcessing]=useState(false)
  useEffect(() => {
    // fetch("http://localhost:5000/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({price}),
    // })
    console.log(price);
    axiosSecure.post('/create-payment-intent',{price})
      .then(data => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret)
      })
  }, []);

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
    else {
      console.log('PaymentMethod', paymentMethod);
    }

setProcessing(true)
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
setProcessing(false)

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
      <button type="submit" className="p-4 bg-green-600 rounded-lg btn-outline" disabled={!stripe || !clientSecret || processing}>
        <h4 className="text-white uppercase mx-auto text-center">pay</h4>
      </button>
    </form>
  );
};

export default CheckoutForm;