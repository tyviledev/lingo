"use client";

// components
import { Button } from "@/components/ui/button";
// next
import Link from "next/link";
// hooks
import { usePathname } from "next/navigation";

// icons

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export const SidebarItem = ({ label, href, icon }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? "secondary" : "secondaryOutline"}
      className="justify-start"
      asChild
    >
      <Link href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
};
