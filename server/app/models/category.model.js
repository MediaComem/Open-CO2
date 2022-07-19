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

const CalculationSchema = {
  mean: {
    type: Number
  },
  count: {
    type: Number
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  standardDeviation: {
    type: Number
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
  source: SourceSchema,
  calculationDetails: CalculationSchema
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
