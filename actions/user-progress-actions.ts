"use server";

// db

import db from "@/db";
// queries
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema/user-progress";

// clerk
import { auth, currentUser } from "@clerk/nextjs/server";

// next
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// updates or inserts into userProgress table based on wether there is an existing row.
// if row already exists with the database update the row - else insert a row

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("User not authorized");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  // TODO - enable once units and lessons are added
  // if (!course.units.length || !course.units[0].lessons.length) {
  // throw new Error("Course is empty")
  // }

  const existingUserProgress = await getUserProgress();

  // if user has existing row on userProgress table, update the activeCourseId - ELSE - insert a row into the userProgress table

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });
  } else {
    await db.insert(userProgress).values({
      userId,
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || ",ascot.svg",
    });
  }

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
