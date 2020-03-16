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


const Car = mongoose.model("Car", carSchema);
module.exports = Car;

