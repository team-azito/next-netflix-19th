import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "아지토 최고",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex-center bg-black min-h-screen">
        <div className="flex-center w-[37.5rem] h-full">{children}</div>
      </body>
    </html>
  );
}
