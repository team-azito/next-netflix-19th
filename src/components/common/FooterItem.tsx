"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface FooterItemProps {
  item: "home" | "search" | "comingsoon" | "downloads" | "more";
  children: ReactNode;
}

const FooterItem = ({ item, children }: FooterItemProps) => {
  const path = usePathname();
  const isCurrentPath = path === `/${item}`;
  const textColorClass = isCurrentPath ? "text-white" : "text-gray-10";

  return (
    <div>
      <Link href={`/${item}`} className="flex-column items-center">
        <Image
          src={isCurrentPath ? `/icons/footer/${item}.svg` : `/icons/footer/${item}-gray.svg`}
          alt={item}
          width={24}
          height={24}
        />
        <span className={`text-8pxr ${textColorClass}`}>{children}</span>
      </Link>
    </div>
  );
};

export default FooterItem;
