import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
const Categories = require("@/utils/models/categories.models");

DBInstance();

export async function GET(req: Request) {
  try {
    const categoriesData = await Categories.find();

    if (categoriesData.length > 0) {
      return NextResponse.json({
        message: "GET Success",
        data: categoriesData,
      });
    } else {
      return NextResponse.json(
        { message: "No categories found" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
