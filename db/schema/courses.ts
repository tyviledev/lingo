// schema
import { units } from "@/db/schema/units";
import { userProgress } from "@/db/schema/user-progress";

// orm
import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial().primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}));
