// Components
import { Header } from "@/app/(main)/learn/components/header";
import { FeedWrapper } from "@/components/custom/feed-wrapper";
import { StickyWrapper } from "@/components/custom/sticky-wrapper";
import { UserProgress } from "@/components/custom/user-progress";

// queries
import { getUserProgress } from "@/db/queries";

// next
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressPromise = getUserProgress();

  const [userProgressData] = await Promise.all([userProgressPromise]);

  if (!userProgressData || !userProgressData.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Header title="Thai" />
        {/* <div className="h-[20000px] bg-blue-500"></div> */}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          hasActiveSubscription={false}
          activeCourse={{ title: "Spanish", imageSrc: "/flag_thai.svg" }}
          hearts={0}
          points={0}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
