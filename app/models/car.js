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
      default: ""
    }
  },
  {
    timestamps: true
  }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
