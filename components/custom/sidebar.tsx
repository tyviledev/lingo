// utils
import { cn } from "@/lib/utils";

// next
import Image from "next/image";
import Link from "next/link";

// components
import { SidebarItem } from "@/components/custom/sidebar-item";

// clerk
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

// icons
import { FaGlobeAsia, FaSketch } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full lg:w-[256px] lg:fixed lg:-left-0 lg:top-0 p-4",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo_one.svg"
            alt="Lingo Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-2xl font-extrabold text-emerald-500 tracking-wide">
            Lingo
          </h1>
          <h1 className="text-2xl font-bold text-white">Lingo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="learn"
          href="/learn"
          icon={<FaGlobeAsia className="w-12 h-12" />}
        />
        <SidebarItem
          label="leaderboard"
          href="/leaderboard"
          icon={<MdLeaderboard className="w-12 h-12" />}
        />
        <SidebarItem
          label="quests"
          href="/quests"
          icon={<FaSketch className="w-12 h-12" />}
        />
        <SidebarItem
          label="shop"
          href="/shop"
          icon={<FaShop className="w-12 h-12" />}
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
