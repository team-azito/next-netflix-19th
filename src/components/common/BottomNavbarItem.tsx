"use client";
import Link from "next/link";
import * as icons from "#/icons/bottomNavbar/svg";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface BottomNavbarItemProps {
  item: "home" | "search" | "comingsoon" | "downloads" | "more";
  children: ReactNode;
}

const BottomNavbarItem = ({ item, children }: BottomNavbarItemProps) => {
  const path = usePathname();
  const isCurrentPath = path === `/${item}`;
  const textColorClass = isCurrentPath ? "text-white" : "text-gray-10";

  const Icon = icons[item];

  return (
    <div>
      <Link href={`/${item}`} className="flex-column items-center">
        <Icon className={textColorClass} />
        <span className={`text-8pxr ${textColorClass}`}>{children}</span>
      </Link>
    </div>
  );
};

export default BottomNavbarItem;
