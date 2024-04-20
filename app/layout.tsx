import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Holly Massey Portfolio",
  description: "Exmaple here",
};

const navLinks = [
  { name: "Contact", location: "/ContactForm" },
  { name: "Projects", location: "/Projects" },
  { name: "About", location: "/AboutMe" },
  { name: "Home", location: "/" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <main>
            <Navbar links={navLinks} />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </>
  );
}
