import React from "react";

const courses = [
  {
    image: "/images/CourseImages/Python.jpg",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Luluoch Lamperlouche",
    rating: "4.7",
    reviews: "9999",
    price: "₹3,099",
  },
  {
    image: "/images/CourseImages/WebDevelopment.jpg",
    title: "The Complete 2024 Web Development Bootcamp",
    instructor: "Gojo Satoru",
    rating: "4.7",
    reviews: "9999",
    price: "₹3,099",
  },
  {
    image: "/images/CourseImages/AWS.png",
    title: "Ultimate AWS Certified Solutions",
    instructor: "Hinata Shoyo",
    rating: "4.7",
    reviews: "9999",
    price: "₹3,099",
  },
  {
    image: "/images/CourseImages/React.jpg",
    title: "React - The Complete Guide 2024",
    instructor: "Itachi Uchiha",
    rating: "4.6",
    reviews: "9999",
    price: "₹3,699",
  },
];

const CoursesView = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Learners are viewing
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group p-4 border border-white rounded-lg shadow-md cursor-pointer hover:border-purple-500"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-xl text-white font-semibold group-hover:text-purple-500">
              {course.title}
            </h3>
            <p className="text-gray-500">{course.instructor}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-gray-700">{course.rating}</span>
              <span className="ml-2 text-gray-500">({course.reviews})</span>
            </div>
            <div className="mt-2 font-bold text-white text-lg">
              {course.price}
            </div>
            <div className="mt-2 text-sm text-green-600">Bestseller</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesView;
