import type { Metadata } from "next";
import React from 'react';
import Head from 'next/head';
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Holly Massey Portfolio",
  description: "Exmaple here",
};

const navLinks = [
  { name: "ContactForm", location: "/ContactForm"},
  { name: "Projects", location: "/Projects"},
  { name: "About", location: "/AboutMe"},
  { name: "Home", location: "/"}
  
]

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
        <Navbar links={navLinks} />
          {children}
        </main>
        </body>
    </html>
    </>
  );
}
