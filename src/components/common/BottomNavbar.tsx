"use client";
import { usePathname } from "next/navigation";
import FooterItem from "./BottomNavbarItem";

const BottomNavbar = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <nav className="z-50 bg-black h-48pxr fixed bottom-0 w-full flex-center">
      <ul className="flex-center gap-40pxr">
        <li>
          <FooterItem item="home">Home</FooterItem>
        </li>
        <li>
          <FooterItem item="search">Search</FooterItem>
        </li>
        <li>
          <FooterItem item="comingsoon">Coming soon</FooterItem>
        </li>
        <li>
          <FooterItem item="downloads">Downloads</FooterItem>
        </li>
        <li>
          <FooterItem item="more">More</FooterItem>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
