const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A category must have a name"],
      unique: true,
      trim: true,
    },
    totalInstructors: {
      type: Number,
      required: [true, "A category must have instructors"],
    },
    subCategories: {
      type: String,
      required: [true, "A category must have a sub-category"],
      unique: true,
      trim: true,
    },
    img: {
      type: String,
      required: [true, "A category must have an image"],
    },
  },
  {
    collection: "categories",
  }
);

const Categories =
  mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);

module.exports = Categories;
