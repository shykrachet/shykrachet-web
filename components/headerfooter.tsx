"use client";

import React from "react";
import Link from "next/link";

// --- Component: Header ---
export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800 pb-6 w-full">
      <Link href="/" className="font-bold text-sm tracking-widest uppercase hover:text-neutral-400 transition-colors">
        shykrachet.xyz
      </Link>
      <nav className="flex gap-6 text-xs tracking-widest uppercase text-neutral-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/header-and-footer/aboutme" className="hover:text-white transition-colors">About</Link>
        <Link href="/header-and-footer/timeline" className="hover:text-white transition-colors">Timeline</Link>
        <Link href="/header-and-footer/contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>
    </header>
  );
}

// --- Component: Footer ---
export function Footer() {
  return (
    <footer className="pt-12 text-xs text-neutral-600 flex justify-between items-center border-t border-neutral-900 w-full">
      <p>© {new Date().getFullYear()} Nattapoom Wilawan. All rights reserved.</p>
      <p>Built with Next.js & Tailwindcss</p>
    </footer>
  );
}