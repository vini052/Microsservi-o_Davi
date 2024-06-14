'use strict';

const db = require('../db');
const { collection, addDoc } = require('firebase/firestore');
const Payment = require('../models/payment');

const processPayment = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, cardNumber, cardExpiration, cardOwner, cvv } = req.body;
        const paymentData = new Payment(firstName, lastName, email, phone, cardNumber, cardExpiration, cardOwner, cvv);

        await addDoc(collection(db, 'pagamentos'), {
            firstName: paymentData.firstName,
            lastName: paymentData.lastName,
            email: paymentData.email,
            phone: paymentData.phone,
            cardNumber: paymentData.cardNumber,
            cardExpiration: paymentData.cardExpiration,
            cardOwner: paymentData.cardOwner,
            cvv: paymentData.cvv
        });

        res.send({ message: 'Pagamento Bem Efetuado' });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    processPayment,
}
