import type { Metadata } from "next";
import "./globals.css";
import BottomNavbar from "@/components/common/BottomNavbar";
import Providers from "@/app/ReactQueryProvider";

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
      <body className="align-center flex min-h-screen justify-center bg-black">
        <Providers>
          <div className="flex-column w-375pxr">
            <div className="pb-48pxr">{children}</div>
            <BottomNavbar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
