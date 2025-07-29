import { userProgress } from "@/db/schema/user-progress";
import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial().primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

export const courseRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
}));
