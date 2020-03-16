const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const stationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    cars: [
        //  carSchema 
        {
            type: Schema.Types.ObjectId,
            ref: "Car"
        }
    ],
   


},{ timestamps: true })

const Station = mongoose.model("Station", stationSchema);
module.exports = Station;
