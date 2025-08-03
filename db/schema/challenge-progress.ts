// schema
import { challenges } from "@/db/schema/challenges";

// orm
import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const challengeProgress = pgTable("challenge_progress", {
  id: serial().primaryKey(),
  userId: text("user_id").notNull(), // TODO - confirm this doesn't break
  challengeId: integer("challenge_id")
    .references(() => challenges.id, {
      onDelete: "cascade",
    })
    .notNull(),
  completed: boolean("completed").notNull().default(false),
});

export const challengeProgressRelations = relations(
  challengeProgress,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengeProgress.challengeId],
      references: [challenges.id],
    }),
  })
);
