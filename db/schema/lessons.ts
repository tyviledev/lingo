// schema
import { challenges } from "@/db/schema/challenges";
import { units } from "@/db/schema/units";

// orm
import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const lessons = pgTable("lessons", {
  id: serial().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  unitId: integer("unit_id")
    .references(() => units.id, {
      onDelete: "cascade",
    })
    .notNull(),
  order: integer("order").notNull(),
});

export const lessonsRelations = relations(lessons, ({ many, one }) => ({
  unit: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  challenges: many(challenges),
}));
