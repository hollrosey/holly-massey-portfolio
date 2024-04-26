"use client"
import React from "react";
import Head from "next/head";
import "./globals.css";
import ResponsiveAppBar from "./_components/ResponsiveAppBar";
import Footer from "./_components/Footer";

const navLinks = [
  { name: "Contact", location: "/ContactForm" },
  { name: "Blog", location: "/Blog" },
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
            <ResponsiveAppBar links={navLinks} />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </>
  );
}
