"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutme" },
  { name: "Work", href: "/work" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("ENG");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-neutral-800 pb-6 w-full z-50">
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-sm tracking-widest uppercase hover:text-white transition-colors"
        >
          shykrachet.xyz
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-xs tracking-widest uppercase text-neutral-400 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
          
        
        </div>

        <button 
          onClick={toggleMenu}
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-end gap-5 mt-6 text-xs tracking-widest uppercase text-neutral-400 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-end gap-4 w-full">
              <Link 
                href={link.href} 
                onClick={closeMenu}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto pt-12 pb-8 text-xs text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 border-t border-neutral-900 w-full text-center md:text-left">
      <p>© {new Date().getFullYear()} Nattapoom Wilawan. All rights reserved.</p>
      <p>Built with Next.js & Tailwindcss</p>
    </footer>
  );
}