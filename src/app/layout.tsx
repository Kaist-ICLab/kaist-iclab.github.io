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
        <NavBar/>
        <main className={["relative min-h-screen w-full m-auto max-w-screen-xl px-4"
          ,"format format-sm sm:format-base md:format-lg lg:format-xl xl:format-2xl format-blue"
        ].join(" ")}> 
          {children}
          <TopButton />
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
