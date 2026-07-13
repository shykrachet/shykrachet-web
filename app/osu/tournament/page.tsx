import React from "react";
import Image from "next/image";
import { Header, Footer } from "@/components/headerfooter";
import bannerosu from "@/app/assets/no-banner.png";

export default function MinimalistPortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-white selection:text-black antialiased flex flex-col relative overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-3xl h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto px-6 py-16 md:py-24 flex flex-col flex-grow justify-between gap-12 relative z-10">
        <Header />

        <main className="flex-grow flex flex-col gap-10">
        </main>

        <Footer />
      </div>
    </div>
  );
}