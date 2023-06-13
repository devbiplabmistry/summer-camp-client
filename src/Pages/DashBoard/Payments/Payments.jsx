import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOut/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

import './CSS/CardCss.css'
import './CSS/CardDetails.css'
import useSelectedClass from "../../../Hooks/useSelectedClass";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TOKEN);

const Payments = () => {
  const [selectedClass ]=useSelectedClass()
  const price =selectedClass.reduce((sum,item)=>sum+item.price,0)
 
  return (
  <div className="my-20 mx-auto">
    <Elements stripe={stripePromise}>
      <CheckoutForm price={price} />
    </Elements>
    </div>
  )
};

export default Payments;