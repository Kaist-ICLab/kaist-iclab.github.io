import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { GoogleAnalytics } from '@next/third-parties/google'
import TopButton from "@/components/TopButton";

import { meta, navs } from "@data/meta";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar navs={navs} />
        <main className="relative m-auto min-h-screen px-4 pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 w-full max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {children}
          <TopButton />
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
