"use client";
import { usePathname } from "next/navigation";
import BottomNavbarItem from "./BottomNavbarItem";

const BottomNavbar = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <nav className="fixed inset-x-0pxr bottom-0pxr max-w-375pxr mx-auto z-50 bg-black h-48pxr flex-center">
      <ul className="w-full px-26pxr flex items-center justify-between">
        <BottomNavbarItem item="home">Home</BottomNavbarItem>
        <BottomNavbarItem item="search">Search</BottomNavbarItem>
        <BottomNavbarItem item="comingsoon">Coming soon</BottomNavbarItem>
        <BottomNavbarItem item="downloads">Downloads</BottomNavbarItem>
        <BottomNavbarItem item="more">More</BottomNavbarItem>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
