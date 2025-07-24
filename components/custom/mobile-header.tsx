// components
import { MobileSidebar } from "@/components/custom/mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-emerald-500 top-0 w-full fixed z-50">
      <MobileSidebar />
    </nav>
  );
};
