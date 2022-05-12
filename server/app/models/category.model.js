import mongoose from "mongoose";

const SourceSchema = {
  title: {
    type: String
    // required: [true, "please add a value"]
  },
  url: {
    type: String
    // required: [true, "please add a unit"]
  },
  year: {
    type: Number
    // required: [true, "please add a approximated"]
  }
};

const Co2eqSchema = {
  value: {
    type: Number
    // required: [true, "please add a value"]
  },
  unit: {
    type: String
    // required: [true, "please add a unit"]
  },
  approximated: {
    type: Boolean
    // required: [true, "please add a approximated"]
  },
  details: String,
  min: {
    type: Number
    // required: [true, "please add a value"]
  },
  max: {
    type: Number
    // required: [true, "please add a value"]
  },
  standardDeviation: {
    type: Number
    // required: [true, "please add a value"]
  },
  source: SourceSchema
};

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
  children: [
    {
      type: String
    }
  ],
  childrenIds: [
    {
      type: Number
    }
  ],
  co2eq: Co2eqSchema
};

const Category = mongoose.model("Category", CategorySchema);

export { Category };
