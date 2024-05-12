"use client";
import { usePathname } from "next/navigation";
import BottomNavbarItem from "./BottomNavbarItem";

const BottomNavbar = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    // fixed 속성으로 인해 부모 width 영향 X. 직접 설정해줌 -> 개선할 방법 있는지 찾기
    <nav className="w-375pxr z-50 bg-black h-48pxr flex-center fixed bottom-0">
      <ul className="w-full px-26pxr flex items-center justify-between">
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
