"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoriesCard from "../components/CategoriesCard";
import Navbar from "../components/Navbar";

export default function Page() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-20 bg-black">
        <h1 className="text-white text-center text-4xl font-bold my-8 ">
          Top <span className="text-purple-600">Categories</span> in 2024
        </h1>
        <div className="flex items-start justify-center my-8">
          <div className="mt-4 gap-24 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {categories.length > 0 ? (
              categories.map((category: any, index: number) => (
                <CategoriesCard key={index} {...category} />
              ))
            ) : (
              <p className="text-white">Loading...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
