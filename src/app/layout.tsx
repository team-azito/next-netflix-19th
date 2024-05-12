import type { Metadata } from "next";
import "./globals.css";
import BottomNavbar from "@/components/common/BottomNavbar";

export const metadata: Metadata = {
  title: "Netflix",
  description: "나현이와 유담이의 넷플릭스 클론코딩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex-center bg-black min-h-screen">
        <div className="flex-column flex-center w-375pxr">
          <div className="w-full">{children}</div>
          <BottomNavbar />
        </div>
      </body>
    </html>
  );
}
