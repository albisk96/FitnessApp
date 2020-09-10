import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, workoutId, coachId }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KKyvhopuC294zHKtV44xxLg600QQZDVtez';
    const onToken = token => {
        axios.post(`/api/payment/${workoutId}/${coachId}`,
          {
              amount: priceForStripe,
              token: token
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

export default StripeCheckoutButton;