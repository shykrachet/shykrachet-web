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

          <div className="flex justify-center w-full group">
            <div className="relative w-full flex flex-col items-center p-2 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05] hover:border-white/20">
              <div className="absolute inset-0 bg-neutral-600 rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <Image
                src={bannerosu}
                alt="osu! Banner"
                className="relative rounded-xl object-cover w-full h-auto z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 border-l-2 border-white/20 pl-5 py-1 transition-all duration-300 hover:border-white/50">
            <h2 className="text-white text-lg font-semibold tracking-wide flex items-baseline gap-2">
              About Me <span className="text-neutral-500 text-sm font-normal">with osu!</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              <strong className="text-neutral-200 font-medium">I'm haerinforever. </strong>
              I play osu!mania and previously represented Thailand in the osu!mania 7K World Cup 2025.
              I am also an experienced tournament staff member. Currently, I'm reducing my workload to focus on my future,
              though I still play osu! regularly. You can still contact me for tournament staffing opportunities!
            </p>
          </div>

          {/* สร้าง div มาครอบปุ่มและจัดเรียงเป็นแนวนอน (flex flex-row) พร้อมเว้นระยะห่าง (gap-4) */}
          <div className="flex flex-row gap-4 flex-wrap">
            <a
              href="https://osu.ppy.sh/users/12852613"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-5 py-2.5 border border-neutral-800 text-neutral-300 font-medium rounded hover:border-white hover:text-white transition-colors">
              osu!Profile
            </a>

            <a
              href="/osu/tournament"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-5 py-2.5 border border-neutral-800 text-neutral-300 font-medium rounded hover:border-white hover:text-white transition-colors">
              tournament
            </a>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}