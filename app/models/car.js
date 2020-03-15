const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    brand: {
      type: String,
      default: ""
    },
    type: {

        type: String,
        defult: ''
    },
    available: {
        available: Boolean,
        defult: false
    }
  },
  {
    timestamps: true
  }
);


const Car = mongoose.model("Car", carSchema);
module.exports = Car;

