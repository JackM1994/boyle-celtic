import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import Logo from '../../images/boyle-logo.png';
import  '../dashboard/payButton.css';
const CURRENCY = 'EUR';

const fromEuroToCent = amount => parseInt(amount * 100);

const successPayment = data => {
    console.log(data);
    alert('Payment Successful. Congratulations and best of luck this Season');
    window.location.replace('http://localhost:3000/success');
};

const errorPayment = data => {
    console.log(data);
    alert('Payment Error');
    window.location.replace('http://localhost:3000/payment-error');
};


const onToken = (amount, description) => token =>
    axios.post('http://localhost:5000/api/payment/',
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromEuroToCent(amount)
        })
        .then(successPayment)
        .catch(errorPayment);

const Payment = ({ name, description, amount}) =>
        <StripeCheckout 
            name={name}
            description={description}
            amount={fromEuroToCent(amount)}
            token={onToken(amount, description)}
            image={Logo}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
            email
            allowRememberMe
        >
        <button className="payButton">
            Pay Now
        </button>
        </StripeCheckout>
export default Payment;
