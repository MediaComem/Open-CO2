import mongoose from "mongoose";

const CategorySchema = {
  name: {
    type: String,
    required: [true, "please add a name"]
  },
  description: String,
  categories: [
    {
      type: String
    }
  ],
  co2eqs: [
    {
      type: String
    }
  ]
};

const Category = mongoose.model("Category", CategorySchema);

export { Category };
