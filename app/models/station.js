const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stationSchema = new Schema({
  name: { type: String, required: true },
  location: String,
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car"
    }
  ]
  
});

const Station = mongoose.model("Station", stationSchema);
module.exports = Station;
