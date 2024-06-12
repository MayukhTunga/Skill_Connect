"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaMoneyBill,
  FaCamera,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BiMath } from "react-icons/bi";
import { IconType } from "react-icons";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  icon?: IconType;
};

const navItems: NavItem[] = [
  {
    label: "Teach",
    link: "#",
  },
  {
    label: "Explore",
    link: "#",
    children: [
      {
        label: "React",
        link: "#",
        icon: FaReact,
      },
      {
        label: "Angular",
        link: "#",
        icon: FaAngular,
      },
      {
        label: "Vue",
        link: "#",
        icon: FaVuejs,
      },
      {
        label: "NodeJS",
        link: "#",
        icon: FaNodeJs,
      },
    ],
  },
  {
    label: "Categories",
    link: "#",
    children: [
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
    label: "My Courses",
    link: "#",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <header className="flex fixed top-0 w-full bg-black/70 z-50">
      <div className="mx-auto flex w-full justify-between px-4 py-5 text-sm bg-gray-950">
        {/* left side */}
        <section
          ref={animationParent}
          className="flex items-center w-full gap-10"
        >
          {/* logo */}
          <div className="text-left text-white font-bold text-base">
            Skill<span className="text-violet-700">Connect</span>
          </div>

          {/* mobile-view  */}
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((data, index) => (
              <Link
                key={index}
                href={data.link ?? "#"}
                className="relative group px-2 py-3 transition-all"
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-white">
                  <span>{data.label}</span>
                  {data.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
                {/* dropdown */}
                {data.children && (
                  <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3  shadow-md transition-all group-hover:flex">
                    {data.children.map((child, ind) => (
                      <Link
                        key={ind}
                        href={child.link ?? "#"}
                        className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                      >
                        {/* logo */}
                        {child.icon && <child.icon />}
                        {/* item  */}
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
          {/* nav-items */}
        </section>

        {/* right side data */}
        <section className="hidden md:flex w-full items-center justify-end gap-8">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <IoSearchOutline className="h-5 w-5 text-slate-400" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-700 focus:ring-violet-700 focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
          <button className="h- fit text-neutral-400 transition-all hover:text-white/90">
            Login
          </button>
          <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-violet-700 hover:text-white/90">
            Register
          </button>
        </section>

        <div className="flex gap-4 justify-end">
          {/* <IoSearchOutline
            //onClick={}
            className="cursor-pointer text-3xl md:hidden text-white"
          /> */}
          <label className="relative block md:hidden">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <IoSearchOutline className="h-5 w-5 text-slate-400" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-700 focus:ring-violet-700 focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
          <FiMenu
            onClick={openSideMenu}
            className="cursor-pointer text-4xl md:hidden text-white"
          />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-50">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((data, index) => (
            <SingleNavItem
              key={index}
              label={data.label}
              icon={data.icon}
              link={data.link}
            >
              {data.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h- fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(data: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={data.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{data.label}</span>
        {data.children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>
      {/* dropdown */}
      {isItemOpen && data.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all">
          {data.children.map((child, ind) => (
            <Link
              key={ind}
              href={child.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* logo */}
              {child.icon && <child.icon />}
              {/* item  */}
              <span className="whitespace-nowrap pl-3">{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
