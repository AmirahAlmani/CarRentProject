const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        defult: ''
    },
    type: {
        type: String,
        defult: ''
    }


}, {
    timestamps: true,
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car;