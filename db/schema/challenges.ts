// schema
import { challengeOptions } from "@/db/schema/challenge-options";
import { challengeProgress } from "@/db/schema/challenge-progress";
import { lessons } from "@/db/schema/lessons";

// orm
import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core";

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

export const challenges = pgTable("challenges", {
  id: serial().primaryKey(),
  lessonId: integer("lesson_id")
    .references(() => lessons.id, {
      onDelete: "cascade",
    })
    .notNull(),
  type: challengesEnum("type").notNull(),
  question: text("question").notNull(),
  order: integer("order").notNull(),
});

export const challengesRelations = relations(challenges, ({ many, one }) => ({
  lessons: one(lessons, {
    fields: [challenges.lessonId],
    references: [lessons.id],
  }),
  challengeOptions: many(challengeOptions),
  challengeProgress: many(challengeProgress),
}));
