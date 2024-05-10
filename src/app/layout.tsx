import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";

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
        <div className="flex-column w-375pxr h-full">
          <div className="flex-center">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
