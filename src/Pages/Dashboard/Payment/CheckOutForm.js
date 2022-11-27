import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../../AuthProvider/Auth';


const CheckOutForm = ({ order }) => {
     const { loading, setLoading } = useContext(AuthContext);
     const stripe = useStripe()
     const elements = useElements();
     const [cardError, setCardError] = useState();
     const [success, setSuccess] = useState();
     const [trxId, setTrxId] = useState();
     const [clientSecret, setClientSecret] = useState("");
     const MySwal = withReactContent(Swal);

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
                                        // console.log(data);
                                        MySwal.fire({
                                             title: 'Payment Success',
                                             timer: 1500,
                                             showConfirmButton: false,
                                             icon: 'success',

                                        });

                                        setLoading(false)
                                   })
                         }
                    })
          }
     }



     return (
          <form onSubmit={handleSubmit}>
               <CardElement className=''
                    options={{
                         style: {
                              base: {
                                   fontSize: '18px',
                                   color: '#722F37',
                                   '::placeholder': {
                                        color: '#986868',
                                   },
                              },
                              invalid: {
                                   color: '#FF0000',
                              },
                         },
                    }}
               />




               {
                    loading ?
                         <button className=' mt-8 mt-3block ml-2 w-full btn loading max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold mr-1' type="submit" disabled={!stripe || !clientSecret}>Processing</button> :
                         <button className=' mt-8 mt-3block ml-2 w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold mr-1' type="submit" disabled={!stripe || !clientSecret}>
                              Pay
                         </button>
               }


               <br />
               <p className='text-red-500 text-bold'>{cardError}</p>
               <br />
               {
                    success && <div className='text-center'>
                         <p className='text-indigo-600 font-semibold'>{success}</p>
                         <p className='text-indigo-600 w-full font-bold' >Your TransactionId: <span className='text-teal-800 inline'>{trxId}</span></p>
                    </div>
               }


          </form>


     );
};

export default CheckOutForm;