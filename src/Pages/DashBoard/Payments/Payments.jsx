import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOut/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

import './CSS/CardCss.css'
import './CSS/CardDetails.css'
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TOKEN);

const Payments = () => {
  const id = useParams()
  const selectedClass = useSelectedClass()
  const selectedPay = selectedClass[0].find(item => item._id == id.id)
  // console.log(selectedPay);
  const price = selectedPay?.price;
  // const price =selectedClass.reduce((sum,item)=>sum+item.price,0)
  return (
    <div className="my-20 mx-auto">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} item={selectedPay } />
      </Elements>
    </div>
  )
};

export default Payments;