import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Askify",
  description:
    "Askify is a Stack Overflow clone made by yousef tarek a full stack developer using NextJs",
  icons: "/assets/images/site-logo.svg",
};

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className="h1-bold">This is a test font</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
