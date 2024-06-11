
import React from "react";
import Banner from "./components/Banner";
import Topniche from "./components/Topniche";
import CoursesView from "./components/CoursesView";
import Navbar from "./components/Navbar";


export default function Home() {
  return (<div>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-black ">
        <Banner/>
        <Topniche/>
        <CoursesView/>

    </main>
    </div>
  )
}
