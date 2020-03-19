const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema(
    {
        brand: {
            type: String,
            default: 'Toyota'

        },
        type: {
            type: String,
            default: 'sedan car'

        },
        isReserved: {
            type: Boolean,
            default: false

        }
    },
    {
        timestamps: true
    }
);

const stationSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: String,
    cars: [
        carSchema
        // {
        //     type: Schema.Types.ObjectId,
        //     ref: "Car"
        // }
    ],



}, { timestamps: true })

const Station = mongoose.model("Station", stationSchema);
module.exports = Station;
