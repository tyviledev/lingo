import { drizzle } from "drizzle-orm/neon-http";
import "dotenv/config";

import * as coursesSchema from "@/db/schema/courses";
import * as userProgressSchema from "@/db/schema/user-progress";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({
  client: sql,
  schema: { ...coursesSchema, ...userProgressSchema },
});

async function main() {
  try {
    await db.delete(coursesSchema.courses);
    await db.delete(userProgressSchema.userProgress);

    await db.insert(coursesSchema.courses).values([
      {
        id: 1,
        title: "Thai",
        imageSrc: "/flag_thai.svg",
      },
      {
        id: 2,
        title: "Indonesian",
        imageSrc: "/flag_indonesia.svg",
      },
      {
        id: 3,
        title: "Laotian",
        imageSrc: "/flag_laos.svg",
      },
      {
        id: 4,
        title: "Vietnamese",
        imageSrc: "/flag_vietnam.svg",
      },
      {
        id: 5,
        title: "Phillipino",
        imageSrc: "/flag_phillipines.svg",
      },
    ]);
  } catch (error) {
    throw new Error("Failed to seed the database");
  }
}

main();
