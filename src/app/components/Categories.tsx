import React from "react";
import Navbar from "./Navbar";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import Cards from "./Cards";

type CategoryList = {
  title: string;
  img: string;
};
const CategoryLists: CategoryList[] = [
  {
    title: "Orange",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Tangerine",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Raspberry",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Lemon",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Avocado",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Lemon 2",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Banana",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
  {
    title: "Watermelon",
    img: "https://nextui.org/images/hero-card.jpeg",
  },
];

export default function Categories() {
  return (
    <div>
      <Navbar />
      <div className="mt-4 gap-2 grid grid-cols-2 sm:grid-cols-4">
        {CategoryLists.map((data, index) => (
          <Cards key={index} title={data.title} img={data.img} />
        ))}
      </div>
    </div>
  );
}

function Cards(data: CategoryList) {
  return (
    <div className="flex justify-center items-center h-full">
      <Card
        shadow="sm"
        // key={key}
        // isPressable
        // onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="40%"
            alt={data.title}
            className="w-full object-cover h-[140px]"
            src={data.img}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{data.title}</b>
        </CardFooter>
      </Card>
    </div>
  );
}
