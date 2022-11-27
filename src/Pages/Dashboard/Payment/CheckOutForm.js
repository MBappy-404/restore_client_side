import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';


const CheckOutForm = ({ order }) => {
     const stripe = useStripe()
     const elements = useElements();
     const [cardError, setCardError] = useState();
     const [success, setSuccess] = useState();
     const [trxId, setTrxId] = useState();
     const [clientSecret, setClientSecret] = useState("");

     const { product_price, email, name, _id, product_id } = order;


     useEffect(() => {
          // Create PaymentIntent as soon as the page loads
          fetch("http://localhost:5000/create-payment-intent", {
               method: "POST",
               headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               },
               body: JSON.stringify({ product_price }),
          })
               .then((res) => res.json())
               .then((data) => {
                    console.log('client', data.clientSecret);
                    setClientSecret(data.clientSecret)
               });
     }, [product_price]);



     const handleSubmit = async (event) => {
          event.preventDefault();
          if (!stripe || !elements) {
               return;

          }

          const card = elements.getElement(CardElement);
          if (card === null) {
               return;
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: 'card',
               card

          })
          if (error) {

               console.log(error);
               setCardError(error.message)
          }
          else {
               setCardError(' ')
          }

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
               clientSecret,
               {
                    payment_method: {
                         card: card,
                         billing_details: {
                              name: name,
                              email: email
                         },
                    },
               },
          );

          if (confirmError) {
               setCardError(confirmError.message);
               return;
          }

          if (paymentIntent.status === "succeeded") {



               const paymentData = {
                    product_price,
                    trxId,
                    email,
                    orderId: _id,
               }

               fetch('http://localhost:5000/payments', {
                    method: "POST",
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(paymentData)
               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data);
                         if (data.insertedId) {

                              setSuccess("Congratulation! Payment Done ")
                              setTrxId(paymentIntent.id)

                              //update productCollection sold status
                              fetch(`http://localhost:5000/category/soldOut/${product_id}`, {
                                   method: "PUT",
                              })
                                   .then(res => res.json())
                                   .then(data => {
                                        console.log('soldout', data);
                                   })
                         }
                    })
          }      
     }

     return (
          <form onSubmit={handleSubmit}>
               <CardElement
                    options={{
                         style: {
                              base: {
                                   fontSize: '20px',
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
               <button className='btn btn-sm btn-primary mt-3' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
               </button>
               <br />
               <p className='text-warning text-bold'>{cardError}</p>
               <br />
               {
                    success && <div>
                         <p className='text-green-500 font-semibold'>{success}</p>
                         <p className='text-green-500 w-full font-bold' >Your TransactionId: <span className='text-teal-400 inline'>{trxId}</span></p>
                    </div>
               }
          </form>
     );
};

export default CheckOutForm;