import Headbar from "./headbar";
import Navbar from "./navbar";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className={`relative flex h-screen overflow-hidden`}>
        <Headbar />
        <Navbar />
        <main
          className={`${geistSans.className} ${geistMono.className}bg-primary mt-24 flex h-[calc(100dvh-6rem)] max-h-[calc(100dvh-6rem)] flex-col overflow-y-auto ps-0 transition-all duration-500 ease-in-out md:mt-16 md:h-[calc(100dvh-4rem)] md:max-h-[calc(100dvh-4rem)] md:ps-2 lg:ms-64 lg:ps-0`}
        >
          {children}
        </main>
      </section>
    </>
  );
}
