const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
  },
  arrival: {
      type: Date,
  }
})


const flightSchema = new Schema({
  airline: {
      type: String,
      required: true,
      enum: ["American", "Southwest", "United"]
  },
  airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
      default: "DEN"
  },
  flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
  },
  departs: {
      type: Date,
      default: function () {
          const defaultDate = new Date();
          defaultDate.setFullYear(defaultDate.getFullYear() + 1);
          return defaultDate();
      }
  },
  
  destinations: {
      type: [destinationSchema]
  }


},{
      timestamps: true
});