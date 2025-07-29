import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as coursesSchema from "@/db/schema/courses";
import * as userProgressSchema from "@/db/schema/user-progress";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({
  client: sql,
  schema: { ...coursesSchema, ...userProgressSchema },
});

export default db;
