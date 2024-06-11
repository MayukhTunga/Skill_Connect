"use client";
import React from "react";
import Banner from "./components/Banner";
import Topniche from "./components/Topniche";
import CoursesView from "./components/CoursesView";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black ">
      
        <Banner/>
        <Topniche/>
        <CoursesView/>

    </main>
  
  )
}
