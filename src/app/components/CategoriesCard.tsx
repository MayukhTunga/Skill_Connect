import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

type CategoriesCardProps = {
  title: string;
  totalInstructors: number;
  subCategories: string;
  img: string;
};

export default function CategoriesCard({
  title,
  totalInstructors,
  subCategories,
  img,
}: CategoriesCardProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="group py-4 bg-gray-900 bg-opacity-66 p-4 rounded-xl border border-white text-white cursor-pointer hover:border-purple-500">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold group-hover:text-purple-500">
            {title}
          </p>
          <small className="text-default-500">
            {totalInstructors} Instructors
          </small>
          <h6 className="font-bold text-large">{subCategories}</h6>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl z-10"
            src={img}
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
}
