import mongoose from "mongoose";

const Co2Schema = {
  name: {
    type: String,
    required: [true, "please add a name"]
  },
  description: String,
  value: {
    type: Number,
    required: [true, "please add a value"]
  },
  unit: {
    type: String,
    required: [true, "please add a unit"]
  },
  isCalculated: {
    type: Boolean,
    default: false
  }
};

const Co2eq = mongoose.model("Co2eq", Co2Schema);

export { Co2eq };
