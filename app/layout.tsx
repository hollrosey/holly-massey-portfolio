import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Holly Massey Portfolio",
  description: "Exmaple here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body>
        <main>
        <Navbar />
          {children}
        </main>
        </body>
    </html>
    </>
  );
}
