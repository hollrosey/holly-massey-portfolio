import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";


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
      <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </Head>
      <body>{children}</body>
    </html>
    </>
  );
}
