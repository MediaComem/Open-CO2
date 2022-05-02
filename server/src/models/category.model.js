import mongoose from "mongoose";

const Co2eqSchema = mongoose.Schema({
  co2eq: {
    value: {
      type: Number,
      required: [true, "please add a value"]
    },
    unit: {
      type: String,
      required: [true, "please add a unit"]
    },
    approximated: {
      type: Boolean,
      required: [true, "please add a approximated"]
    },
    details: String
  }
});

const CategorySchema = {
  categoryId: {
    type: Number,
    required: [true, "please add a categoryId"]
  },
  title: {
    type: String,
    required: [true, "please add a title"]
  },
  name: {
    type: String,
    required: [true, "please add a name"]
  },
  path: {
    type: String,
    required: [true, "please add a path"]
  },
  fullPath: {
    type: String,
    required: [true, "please add a fullPath"]
  },
  details: String,
  childrens: [
    {
      type: String
    }
  ],
  childrenIds: [
    {
      type: Number
    }
  ],
  co2eqs: [Co2eqSchema]
};

const Category = mongoose.model("Category", CategorySchema);

export { Category };
