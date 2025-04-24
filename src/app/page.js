"use client";

import Head from "next/head";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Digital Marketing Agency</title>
        <meta
          name="description"
          content="Your go-to digital marketing agency for growth."
        />
        {/* Add other meta tags */}
      </Head>

      <main>
        <HeroSection />
      </main>
    </div>
  );
}
