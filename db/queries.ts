// react
import { cache } from "react";

// db
import db from "@/db/index";
import { eq } from "drizzle-orm";

// clerk
import { auth } from "@clerk/nextjs/server";

// schema
import { userProgress } from "@/db/schema/user-progress";

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  // finds the first row in the userProgress table where the user id is equal to the logged in user id and returns the relational active courses
  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
