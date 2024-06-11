import React from "react";
import Banner from "./components/Banner";
import Topniche from "./components/Topniche";
import CoursesView from "./components/CoursesView";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-20 bg-black ">
        <Banner />
        <Topniche />
        <CoursesView />
      </main>
    </div>
  );
}
