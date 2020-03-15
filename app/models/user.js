const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: Number,
    email: String,
    password: Number,
    // payment: {
    //     cardNmuber: { type: Number, required: true },
    //     cardName: { type: String, required: true },
    //     cardExpiredDate: { type: Number, required: true },
    //     cvv: { type: Number, required: true },

    // }


}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)
module.exports = User;