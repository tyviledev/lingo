// react
import { cache } from "react";

// db
import db from "@/db/index";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
