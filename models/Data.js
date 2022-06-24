import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    itemNo: {
      type: Number,
      required: true,
    },
    noOfItems: {
      type: Number,
      required: true,
    },

    itemPrice: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
    },
    totalPriceBeforeTax: {
      type: Number,
    },
    totalPriceAfterTax: {
      type: Number,
    },
    rate: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Data", DataSchema);
