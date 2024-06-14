class Payment {
    constructor(firstName, lastName, email, phone, cardNumber, cardExpiration, cardOwner, cvv) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.cardNumber = cardNumber;
        this.cardExpiration = cardExpiration;
        this.cardOwner = cardOwner;
        this.cvv = cvv;
    }
}

module.exports = Payment;
