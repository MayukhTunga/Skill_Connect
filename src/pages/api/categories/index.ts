"use client";

import type { NextApiRequest, NextApiResponse } from "next";
import DBInstance from "@/utils/db/server";
import { Categories } from "@/utils/models/categoriesModel";

DBInstance();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { current } = req.query;
      const categoriesData = Categories;

      if (categoriesData.length > 0) {
        res.status(200).json({
          message: "GET Success",
          data: categoriesData,
        });
      }
    } else {
      res.status(406).json({ message: "failure" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

const fetchEvents = async (current?: string) => {
  try {
    const categories = await Categories.find();
    console.log("done");
    return categories;
  } catch (err) {
    console.log("notdone");
    throw err;
  }
};
