const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQZN1GwToGoqJ5Kq4rGtozDDfmenFUoAA2vF5fv3Tq37yfabQDkUfhOQc99EGaQyOrpwXZgt20Aiy0uyiqpkwIj00cwtbi6Xn');

//  API

// - App config
const app = express();

// -  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -  API routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BAAAM!!! for this amount >>>", total);

    const  paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits if the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// -  Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-d81be/us-central1/api