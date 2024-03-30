import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black mx-80 text-white">
      <body className={inter.className}>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
