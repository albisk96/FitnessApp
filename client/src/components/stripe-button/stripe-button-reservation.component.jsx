import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { format } from 'date-fns';

const StripeCheckoutButtonReservation = ({ price, id, date }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KKyvhopuC294zHKtV44xxLg600QQZDVtez';
    console.log(price)
    const onToken = token => {
        axios.post(`/api/payment/${id}`,
          {
              amount: priceForStripe,
              token: token,
              date: date
          })
            .then(response => {
              window.location.reload();
            })
            .catch(error => {
              console.log('Payment Error: ', error);
              alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
              );
            });
        };
    return(
        <StripeCheckout
            label='Pay Now'
            name='Ftiness App.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButtonReservation;