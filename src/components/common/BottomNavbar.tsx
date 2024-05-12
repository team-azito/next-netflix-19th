"use client";
import { usePathname } from "next/navigation";
import BottomNavbarItem from "./BottomNavbarItem";

const BottomNavbar = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <nav className="z-50 bg-black h-48pxr fixed bottom-0 w-full flex-center">
      <ul className="flex-center gap-40pxr">
        <li>
          <BottomNavbarItem item="home">Home</BottomNavbarItem>
        </li>
        <li>
          <BottomNavbarItem item="search">Search</BottomNavbarItem>
        </li>
        <li>
          <BottomNavbarItem item="comingsoon">Coming soon</BottomNavbarItem>
        </li>
        <li>
          <BottomNavbarItem item="downloads">Downloads</BottomNavbarItem>
        </li>
        <li>
          <BottomNavbarItem item="more">More</BottomNavbarItem>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
