import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./utils/LenisProvider";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "The Future of Social Media",
  description:
    "A new way to connect, create, and engage. Experience a social media platform that goes beyond likes—built for real connections, privacy, and engagemen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
