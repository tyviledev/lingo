// schema
import { challenges } from "@/db/schema/challenges";

// orm
import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const challengeOptions = pgTable("challenge_options", {
  id: serial().primaryKey(),
  challengeId: integer("challenge_id")
    .references(() => challenges.id, {
      onDelete: "cascade",
    })
    .notNull(),
  text: text("text").notNull(),
  correct: boolean("correct").notNull(),
  imageSrc: text("image_src"),
  audioSrc: text("audio_src"),
});

export const challengeOptionsRelations = relations(
  challengeOptions,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengeOptions.challengeId],
      references: [challenges.id],
    }),
  })
);
