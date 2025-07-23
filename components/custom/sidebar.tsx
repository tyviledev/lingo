import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-blue-500 lg:w-[256px] lg:fixed lg:-left-0 lg:top-0",
        className
      )}
    >
      Sidebar
    </div>
  );
};
