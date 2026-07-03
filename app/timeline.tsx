"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/headerfooter";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-24">

        {/* --- Header / Navigation --- */}
        <Header />

        {/* --- พื้นที่เนื้อหาตรงกลาง (ลบออกหมดแล้วเหลือเฉพาะโครงสร้าง) --- */}
        <main className="min-h-[40vh] flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-2xl font-medium tracking-tight text-neutral-200">
            Timeline
          </h1>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            พื้นที่สำหรับใส่เนื้อหาหรือเส้นทางผลงานของคุณในอนาคต
          </p>
        </main>

        {/* --- Footer --- */}
        <footer className="pt-12 text-xs text-neutral-600 flex justify-between items-center border-t border-neutral-900">
          <p>© {new Date().getFullYear()} Nattapoom Wilawan. All rights reserved.</p>
          <p>Built with Next.js</p>
        </footer>

      </div>
    </div>
  );
}