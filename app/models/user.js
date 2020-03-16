const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: Number,
    email: String,
    password: Number,
    payment: {
        cardNmuber: Number,
        cardName: String,
        cardExpiredDate: Date,
        cvv: Number

    }


}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)
module.exports = User;