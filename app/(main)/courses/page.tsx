// queries
import { getCourses } from "@/db/queries";

const CoursesPage = async () => {
  const data = await getCourses();

  return (
    <div className="h-full max-w-4xl px-3 mx-auto">
      <h1 className="text-2xl font-bold text-black">Courses Page</h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default CoursesPage;
