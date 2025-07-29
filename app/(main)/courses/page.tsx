// queries
import { getCourses } from "@/db/queries";

// components
import { List } from "@/app/(main)/courses/components/list";

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <div className="h-full max-w-4xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-black">Courses Page</h1>
      <List courses={courses} activeCourseId={1} />
    </div>
  );
};

export default CoursesPage;
