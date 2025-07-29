// queries
import { getCourses, getUserProgress } from "@/db/queries";

// components
import { List } from "@/app/(main)/courses/components/list";
import { redirect } from "next/navigation";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="h-full max-w-4xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-black">Courses Page</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
