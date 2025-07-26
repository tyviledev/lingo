// next
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

// icons
import { FaArrowLeftLong } from "react-icons/fa6";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-7 flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost">
          <FaArrowLeftLong className="text-2xl stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};
