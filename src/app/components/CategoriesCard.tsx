import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

// type CategoryList = {
//   title: string;
//   totalInstructors: number;
//   subCategories: string;
//   img: string;
// };
// const CategoryLists: CategoryList[] = [
//   {
//     title: "Programming",
//     totalInstructors: 69,
//     subCategories: "Python, C++, Rust.........",
//     img: "/images/CourseImages/Python.jpg",
//   },
//   {
//     title: "Web Development",
//     totalInstructors: 420,
//     subCategories: "HTML, CSS, JavaScript.........",
//     img: "/images/CourseImages/WebDevelopment.jpg",
//   },
//   {
//     title: "Cloud Computing",
//     totalInstructors: 69,
//     subCategories: "AWS, Azure, GCP.........",
//     img: "/images/CourseImages/AWS.png",
//   },
//   {
//     title: "JavaScript Frameworks",
//     totalInstructors: 420,
//     subCategories: "React, Angular, Vue.........",
//     img: "/images/CourseImages/React.jpg",
//   },
//   {
//     title: "Programming",
//     totalInstructors: 69,
//     subCategories: "Python, C++, Rust.........",
//     img: "/images/CourseImages/Python.jpg",
//   },
//   {
//     title: "Web Development",
//     totalInstructors: 420,
//     subCategories: "HTML, CSS, JavaScript.........",
//     img: "/images/CourseImages/WebDevelopment.jpg",
//   },
//   {
//     title: "Cloud Computing",
//     totalInstructors: 69,
//     subCategories: "AWS, Azure, GCP.........",
//     img: "/images/CourseImages/AWS.png",
//   },
//   {
//     title: "JavaScript Frameworks",
//     totalInstructors: 420,
//     subCategories: "React, Angular, Vue.........",
//     img: "/images/CourseImages/React.jpg",
//   },
//   {
//     title: "Programming",
//     totalInstructors: 69,
//     subCategories: "Python, C++, Rust.........",
//     img: "/images/CourseImages/Python.jpg",
//   },
//   {
//     title: "Web Development",
//     totalInstructors: 420,
//     subCategories: "HTML, CSS, JavaScript.........",
//     img: "/images/CourseImages/WebDevelopment.jpg",
//   },
//   {
//     title: "Cloud Computing",
//     totalInstructors: 69,
//     subCategories: "AWS, Azure, GCP.........",
//     img: "/images/CourseImages/AWS.png",
//   },
//   {
//     title: "JavaScript Frameworks",
//     totalInstructors: 420,
//     subCategories: "React, Angular, Vue.........",
//     img: "/images/CourseImages/React.jpg",
//   },
//   {
//     title: "Programming",
//     totalInstructors: 69,
//     subCategories: "Python, C++, Rust.........",
//     img: "/images/CourseImages/Python.jpg",
//   },
//   {
//     title: "Web Development",
//     totalInstructors: 420,
//     subCategories: "HTML, CSS, JavaScript.........",
//     img: "/images/CourseImages/WebDevelopment.jpg",
//   },
//   {
//     title: "Cloud Computing",
//     totalInstructors: 69,
//     subCategories: "AWS, Azure, GCP.........",
//     img: "/images/CourseImages/AWS.png",
//   },
// ];

// export default function Categories() {
//   return (
//     <div>
//       <h1 className="text-white text-center text-4xl font-bold my-8 ">
//         Top <span className="text-purple-600">Categories</span> in 2024
//       </h1>
//       <div className="flex items-start justify-center my-8">
//         <div className="mt-4 gap-24 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
//           {CategoryLists.map((data, index) => (
//             <Cards
//               key={index}
//               title={data.title}
//               totalInstructors={data.totalInstructors}
//               subCategories={data.subCategories}
//               img={data.img}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function CategoriesCards(data) {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="group py-4 bg-gray-900 bg-opacity-66 p-4 rounded-xl border border-white text-white cursor-pointer hover:border-purple-500">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold group-hover:text-purple-500">
            {data.title}
          </p>
          <small className="text-default-500">
            {data.totalInstructors} Instructors
          </small>
          <h6 className="font-bold text-large">{data.subCategories}</h6>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl z-10"
            src={data.img}
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
}
