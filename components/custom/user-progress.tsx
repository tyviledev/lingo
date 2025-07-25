// next
import Link from "next/link";
import Image from "next/image";

// components
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded md-border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            alt="Points"
            className="mr-2"
            width={28}
            height={28}
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            alt="Hearts"
            className="mr-2"
            width={28}
            height={28}
          />
          {hasActiveSubscription ? <InfinityIcon /> : hearts}
        </Button>
      </Link>
    </div>
  );
};
