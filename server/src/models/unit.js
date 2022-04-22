import mongoose from "mongoose";

const UnitSchema = {
  name: {
    type: String,
    required: [true, "please add a name"]
  },
  description: String
};

const Unit = mongoose.model("Unit", UnitSchema);

export { Unit };
