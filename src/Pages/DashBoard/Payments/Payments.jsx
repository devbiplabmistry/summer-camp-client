import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOut/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

import './CSS/CardCss.css'
import './CSS/CardDetails.css'


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TOKEN);

const Payments = () => {
const total =100;
 
  return (
  <div className="my-20 mx-auto">
    <Elements stripe={stripePromise}>
      <CheckoutForm price={total} />
    </Elements>
    </div>
  )
};

export default Payments;