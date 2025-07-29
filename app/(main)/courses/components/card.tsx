// schema
import { courses } from "@/db/schema/courses";

// utils
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  id,
  title,
  imageSrc,
  onClick,
  disabled,
  active,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2- rounded-md border-b-4 bg-emerald-100 hover:bg-emerald-200 cursor-pointer activeLborder-b-2 flex flex-col items-center justify-between p-3 pb-6",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="min-h-6 w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-emerald-500 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-4 h-4 w-4" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        height={60}
        width={60}
        alt={title}
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <p className="font-bold text-center">{title}</p>
    </div>
  );
};
