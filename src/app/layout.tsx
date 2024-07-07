import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { mainSEO, navs } from "@data/meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = mainSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar navs={navs} />
        <main className="m-auto min-h-screen px-4 pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 w-full max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
