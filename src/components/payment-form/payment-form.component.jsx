

import { useState } from "react"

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import { useSelector } from "react-redux"
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import { PaymentFormContainer, FormContainer } from "./payment-form.styles"

const PaymentForm = () => {
    const stripe = useStripe();
const elements = useElements();
const amount = useSelector(selectCartTotal);
const currentUser = useSelector(selectCurrentUser);
const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        
        return;
    }

    const response = await fetch('/.netifly/functions/create-payment-intent.js',{

          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount: 10000})

    }).then(res => res.json())


const { 
    paymentIntent: { client_secret }, 
} = response;

const paymentResult = await stripe.confirmCardPayment(client_secret, {

    payment_method: {

        card: elements.getElement(CardElement),

        billing_details: {
          name: currentUser ? currentUser.displayName: 'Guest',
        },
    },
});
   

if (paymentResult.error) {
    alert(paymentResult.error)
} else {
    if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful')
    }
}

    };
  
return(

    <PaymentFormContainer>
    <FormContainer onSubmit={paymentHandler}>
    <h2>Credit Card Payment:</h2>
        <CardElement />
      <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>{' '} Pay now{' '} </Button>
    </FormContainer>
    </PaymentFormContainer>
)



}
export default PaymentForm;