// components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/custom/sidebar";
import { VisuallyHidden } from "radix-ui";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>

      <SheetContent className="p-0 z-[100] lg:w-[256px]" side="left">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle>Sidebar</SheetTitle>
          </SheetHeader>
        </VisuallyHidden.Root>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
