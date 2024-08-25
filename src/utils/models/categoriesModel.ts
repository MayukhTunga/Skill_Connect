// import Categories from "../../pages/Categories";
// const mongoose = require("mongoose");

// const categoriesSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "A category must have a name"],
//       unique: true,
//       trim: true,
//     },
//     totalInstructors: {
//       type: Number,
//       required: [true, "A category must have instructors"],
//     },
//     subCategories: {
//       type: String,
//       required: [true, "A category must have a sub-categories"],
//       unique: true,
//       trim: true,
//     },
//     img: {
//       type: String,
//       required: [true, "A category must have an image"],
//     },
//   },
//   {
//     collection: "categories",
//   }
// );

// const Categories =
//   mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);
export type CategoryList = {
  title: string;
  totalInstructors: number;
  subCategories: string;
  img: string;
};

export const Categories: CategoryList[] = [
  {
    title: "Programming",
    totalInstructors: 69,
    subCategories: "Python, C++, Rust.........",
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    totalInstructors: 420,
    subCategories: "HTML, CSS, JavaScript.........",
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    totalInstructors: 69,
    subCategories: "AWS, Azure, GCP.........",
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "JavaScript Frameworks",
    totalInstructors: 420,
    subCategories: "React, Angular, Vue.........",
    img: "/images/CourseImages/React.jpg",
  },
  {
    title: "Programming",
    totalInstructors: 69,
    subCategories: "Python, C++, Rust.........",
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    totalInstructors: 420,
    subCategories: "HTML, CSS, JavaScript.........",
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    totalInstructors: 69,
    subCategories: "AWS, Azure, GCP.........",
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "JavaScript Frameworks",
    totalInstructors: 420,
    subCategories: "React, Angular, Vue.........",
    img: "/images/CourseImages/React.jpg",
  },
  {
    title: "Programming",
    totalInstructors: 69,
    subCategories: "Python, C++, Rust.........",
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    totalInstructors: 420,
    subCategories: "HTML, CSS, JavaScript.........",
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    totalInstructors: 69,
    subCategories: "AWS, Azure, GCP.........",
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "JavaScript Frameworks",
    totalInstructors: 420,
    subCategories: "React, Angular, Vue.........",
    img: "/images/CourseImages/React.jpg",
  },
  {
    title: "Programming",
    totalInstructors: 69,
    subCategories: "Python, C++, Rust.........",
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    totalInstructors: 420,
    subCategories: "HTML, CSS, JavaScript.........",
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    totalInstructors: 69,
    subCategories: "AWS, Azure, GCP.........",
    img: "/images/CourseImages/AWS.png",
  },
];

// module.exports = Categories;
