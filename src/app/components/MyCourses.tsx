"use client";

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaMoneyBill, FaCamera, FaRegHeart } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BiMath, BiCategory } from "react-icons/bi";
import { IoSearchOutline, IoAccessibility } from "react-icons/io5";
import {
  RiProgress8Line,
  RiProgress4Line,
  RiProgress1Line,
  RiSortAlphabetAsc,
  RiSortAlphabetDesc,
} from "react-icons/ri";
import { MdJoinInner } from "react-icons/md";

import { useAutoAnimate } from "@formkit/auto-animate/react";

type MyCourseList = {
  title: string;
  instructor: string;
  progress: number;
  img: string;
};
const MyCourseLists: MyCourseList[] = [
  {
    title: "Programming",
    instructor: "s1834",
    progress: 69,
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    instructor: "Mayukh Tunga",
    progress: 96,
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    instructor: "Pratyush prashob",
    progress: 66,
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "Programming",
    instructor: "s1834",
    progress: 69,
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    instructor: "Mayukh Tunga",
    progress: 96,
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    instructor: "Pratyush prashob",
    progress: 66,
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "Programming",
    instructor: "s1834",
    progress: 69,
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    instructor: "Mayukh Tunga",
    progress: 96,
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    instructor: "Pratyush prashob",
    progress: 66,
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "Programming",
    instructor: "s1834",
    progress: 69,
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    instructor: "Mayukh Tunga",
    progress: 96,
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    instructor: "Pratyush prashob",
    progress: 66,
    img: "/images/CourseImages/AWS.png",
  },
  {
    title: "Programming",
    instructor: "s1834",
    progress: 69,
    img: "/images/CourseImages/Python.jpg",
  },
  {
    title: "Web Development",
    instructor: "Mayukh Tunga",
    progress: 96,
    img: "/images/CourseImages/WebDevelopment.jpg",
  },
  {
    title: "Cloud Computing",
    instructor: "Pratyush prashob",
    progress: 66,
    img: "/images/CourseImages/AWS.png",
  },
];

type list = {
  label: string;
  link?: string;
};
const lists: list[] = [
  { label: "All Courses", link: "#" },
  { label: "My Lists", link: "#" },
  { label: "Wishlist", link: "#" },
  { label: "Archived", link: "#" },
  { label: "Learning Tools", link: "#" },
];

type sortFilter = {
  label: string;
  link?: string;
  children?: NavItem[];
  icon?: IconType;
};

const sortFilters: sortFilter[] = [
  {
    label: "Recently Accessed",
    link: "#",
    children: [
      {
        label: "Recently Accessed",
        link: "#",
        icon: IoAccessibility,
      },
      {
        label: "Recently Enrolled",
        link: "#",
        icon: MdJoinInner,
      },
      {
        label: "Title: A-to-Z",
        link: "#",
        icon: RiSortAlphabetAsc,
      },
      {
        label: "Title: Z-to-A",
        link: "#",
        icon: RiSortAlphabetDesc,
      },
    ],
  },
  {
    label: "Categories",
    link: "#",
    children: [
      {
        label: "Favourites",
        link: "#",
        icon: FaRegHeart,
      },
      {
        label: "All Categories",
        link: "#",
        icon: BiCategory,
      },
      {
        label: "Web Development",
        link: "#",
        icon: CgWebsite,
      },
      {
        label: "Finance and Accounting",
        link: "#",
        icon: FaMoneyBill,
      },
      {
        label: "Mathematics",
        link: "#",
        icon: BiMath,
      },
      {
        label: "Photography & Video",
        link: "#",
        icon: FaCamera,
      },
      {
        label: "More.........",
        link: "#",
        icon: IoIosArrowForward,
      },
    ],
  },
  {
    label: "Progress",
    link: "#",
    children: [
      {
        label: "Completed",
        link: "#",
        icon: RiProgress8Line,
      },
      {
        label: "In Progress",
        link: "#",
        icon: RiProgress4Line,
      },
      {
        label: "Not Started",
        link: "#",
        icon: RiProgress1Line,
      },
    ],
  },
  {
    label: "Instructor",
    link: "#",
    children: [
      {
        label: "s1834",
        link: "#",
      },
      {
        label: "Mayukh Tunga",
        link: "#",
      },
      {
        label: "Pratyush Prashob",
        link: "#",
      },
    ],
  },
];

export default function MyCourses() {
  const [animationParent] = useAutoAnimate();

  return (
    <div>
      <div className="flex flex-col w-full bg-gray-700 z-40">
        <h1 className="flex w-full text-white text-left text-4xl font-bold my-8">
          My <span className="text-purple-600"> Courses</span>
        </h1>
        <hr className="w-full top-0 border-t-2 border-gray-700" />
        <section className="flex items-start w-full gap-10">
          <div className="flex items-left gap-4 transition-all">
            {lists.map((data, index) => (
              <Link
                key={index}
                href={data.link ?? "#"}
                className="relative group px-2 py-3 transition-all"
              >
                <p className="flex cursor-pointer items-center gap-2 text-white group-hover:text-purple-400">
                  <span>{data.label}</span>
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="flex w-full z-40 p-4">
        <section
          ref={animationParent}
          className="flex items-center w-full gap-4"
        >
          <h6 className="text-white font-bold">Sort & Filter by</h6>
          <div className="flex md:flex-row sm:flex-col items-center gap-4 transition-all z-40">
            {sortFilters.map((data, index) => (
              <Link
                key={index}
                href={data.link ?? "#"}
                className="relative group px-2 py-3 transition-all border border-white"
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-white">
                  <span>{data.label}</span>
                  {data.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
                {/* dropdown */}
                {data.children && (
                  <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                    {data.children.map((child, ind) => (
                      <Link
                        key={ind}
                        href={child.link ?? "#"}
                        className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                      >
                        {/* logo */}
                        {child.icon && <child.icon />}
                        {/* item */}
                        <span className="whitespace-nowrap pl-3">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
          <button className="text-neutral-400 transition-all hover:text-white/90">
            Reset
          </button>
          <label className="relative block w-full max-w-xs">
            <span className="sr-only">Search my courses</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <IoSearchOutline className="h-5 w-5 text-slate-400" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-700 focus:ring-violet-700 focus:ring-1 sm:text-sm"
              placeholder="Search my courses"
              type="text"
              name="search"
            />
          </label>
        </section>
      </div>

      <div className="flex items-start justify-center my-8">
        <div className="mt-4 gap-24 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {MyCourseLists.map((data, index) => (
            <Cards
              key={index}
              title={data.title}
              instructor={data.instructor}
              progress={data.progress}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cards(data: MyCourseList) {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="group py-4 bg-gray-900 bg-opacity-66 p-4 rounded-xl border border-white text-white cursor-pointer hover:border-purple-500">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold group-hover:text-purple-500">
            {data.title}
          </p>
          <h6 className="font-bold text-large">{data.instructor}</h6>
          <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-1 rounded-full dark:bg-purple-500"
              style={{ width: `${data.progress}%` }}
            ></div>
          </div>
          <small className="text-default-500">{data.progress}% complete</small>
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
