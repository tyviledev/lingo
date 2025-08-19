import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as coursesSchema from "@/db/schema/courses";
import * as userProgressSchema from "@/db/schema/user-progress";
import * as challengeOptionsSchema from "@/db/schema/challenge-options";
import * as challengeProgressSchema from "@/db/schema/challenge-progress";
import * as challengesSchema from "@/db/schema/challenges";
import * as unitsSchema from "@/db/schema/units";
import * as lessonsSchema from "@/db/schema/lessons";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({
  client: sql,
  schema: {
    ...coursesSchema,
    ...userProgressSchema,
    ...challengeOptionsSchema,
    ...challengeProgressSchema,
    ...challengesSchema,
    ...unitsSchema,
    ...lessonsSchema,
  },
});

export default db;
