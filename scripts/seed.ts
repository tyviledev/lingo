// dotenv
import "dotenv/config";

// orm
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { reset } from "drizzle-seed";

// schema
import * as coursesSchema from "@/db/schema/courses";
import * as userProgressSchema from "@/db/schema/user-progress";
import * as challengesSchema from "@/db/schema/challenges";
import * as challengeOptionsSchema from "@/db/schema/challenge-options";
import * as challengeProgressSchema from "@/db/schema/challenge-progress";
import * as lessonsSchema from "@/db/schema/lessons";
import * as unitsSchema from "@/db/schema/units";

const schema = {
  ...coursesSchema,
  ...userProgressSchema,
  ...challengesSchema,
  ...challengeOptionsSchema,
  ...challengeProgressSchema,
  ...unitsSchema,
  ...lessonsSchema,
};

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({
  client: sql,
  schema,
});

async function main() {
  try {
    // await db.delete(coursesSchema.courses);
    // await db.delete(userProgressSchema.userProgress);
    // await db.delete(unitsSchema.units);
    // await db.delete(lessonsSchema.lessons);
    // await db.delete(challengesSchema.challenges);
    // await db.delete(challengeOptionsSchema.challengeOptions);
    // await db.delete(challengeProgressSchema.challengeProgress);
    await reset(db, schema);

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

    await db.insert(unitsSchema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Thai",
        order: 1,
      },
    ]);

    await db.insert(lessonsSchema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Greetings",
        description: "Basic greetings in Thai",
        order: 1,
      },
    ]);

    await db.insert(challengesSchema.challenges).values({
      id: 1,
      lessonId: 1,
      type: "SELECT",
      order: 1,
      question: "Which one of these is the particle men say after greetings",
    });

    await db.insert(challengeOptionsSchema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/",
        correct: true,
        text: "khrap",
        audioSrc: "/",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/",
        correct: false,
        text: "ka",
        audioSrc: "/",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/",
        correct: false,
        text: "na",
        audioSrc: "/",
      },
    ]);
  } catch (error) {
    throw new Error("Failed to seed the database");
  }
}

main();
