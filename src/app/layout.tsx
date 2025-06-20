import React from "react";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"]
})


export const metadata: Metadata = {
  title: "Misael Lima",
  description: "Misael Lima's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rubik.className}
      >
        {children}
      </body>
    </html>
  );
}
