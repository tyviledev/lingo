"use client";

// components
import { Card } from "@/app/(main)/courses/components/card";

// db
import { courses } from "@/db/schema/courses";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="pt-6 grid gap-4 grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(1fr)]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
