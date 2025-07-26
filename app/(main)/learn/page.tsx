// Components
import { Header } from "@/app/(main)/learn/components/header";
import { FeedWrapper } from "@/components/custom/feed-wrapper";
import { StickyWrapper } from "@/components/custom/sticky-wrapper";

const LearnPage = () => {
  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Header title="Thai" />
        {/* <div className="h-[20000px] bg-blue-500"></div> */}
      </FeedWrapper>
      <StickyWrapper>Sticky Wrapper</StickyWrapper>
    </div>
  );
};

export default LearnPage;
