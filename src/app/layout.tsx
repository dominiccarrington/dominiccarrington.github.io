import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dominic Carrington",
  description: "Full-stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-800 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
