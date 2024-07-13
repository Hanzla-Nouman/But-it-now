import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: ["Electronics", "Clothing", "Home", "Other"],
      message: "Invalid product category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    min: [0, "Stock should be a positive number"],
  },
  ratings: {
    type: Number,
    min: [1, "Rating should be between 1 and 5"],
    max: [5, "Rating should be between 1 and 5"],
    default: 0,
  },
  reviews: [
    {
      ratings: { type: Number, required: true },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now() },
    },
  ],
  createdAt: { type: Date, default: Date.now() },
});
export default mongoose.model.Product || mongoose.model('Product',productSchema)