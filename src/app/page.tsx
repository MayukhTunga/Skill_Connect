"use client";
import React from "react";
import Banner from "./components/Banner";
import Topniche from "./components/Topniche";
import CourseCards from "./components/CourseCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 ">
      
        <Banner/>
        <h1 className="text-white text-4xl font-bold ">Top Niches in 2024</h1>
        <Topniche/>
        <h1 className="text-white text-2xl font-bold ">Courses</h1>
        <CourseCards/>

    </main>
  
  )
}
