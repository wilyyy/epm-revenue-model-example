import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Head>
      <title>Willy's Insurance Revenue Model</title>
    </Head>
    <main
      className={`${geistSans.className} ${geistMono.className} bg-white min-h-screen`}
    >

    </main>
    </>
  );
}
