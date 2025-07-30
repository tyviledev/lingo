// queries
import { getCourses, getUserProgress } from "@/db/queries";

// components
import { List } from "@/app/(main)/courses/components/list";
import { redirect } from "next/navigation";

const CoursesPage = async () => {
  const coursesPromise = getCourses();
  const userProgressPromise = getUserProgress();

  const [coursesData, userProgressData] = await Promise.all([
    coursesPromise,
    userProgressPromise,
  ]);

  return (
    <div className="h-full max-w-4xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-black">Courses Page</h1>
      <List
        courses={coursesData}
        activeCourseId={userProgressData?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
