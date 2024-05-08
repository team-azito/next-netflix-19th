import type { Metadata } from "next";
import "./globals.css";

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
        <div className="flex-center w-375pxr h-full">{children}</div>
      </body>
    </html>
  );
}
