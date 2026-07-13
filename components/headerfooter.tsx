"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    subItems: [
      { name: "AboutMe", href: "/aboutme" },
      { name: "osu!", href: "https://osu.ppy.sh/users/12852613" }
    ] 
  },
  { name: "Work", href: "/work" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // แก้ไขตรงนี้: เติม <string | null> เข้าไป
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="border-b border-neutral-800 pb-6 w-full z-50 relative">
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
              <div key={link.name} className="relative py-2">
                {link.subItems ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(link.name)}
                      className={`hover:text-white transition-colors flex items-center gap-2 uppercase ${openDropdown === link.name ? "text-white" : ""}`}
                    >
                      {link.name}
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Desktop Dropdown Box */}
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-4 flex flex-col bg-neutral-950 border border-neutral-800 p-6 rounded-lg shadow-2xl min-w-[200px] gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {link.subItems.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="hover:text-white transition-colors block w-full"
                            onClick={closeMenu}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                )}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-end gap-6 mt-6 text-xs tracking-widest uppercase text-neutral-400 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-end w-full">
              {link.subItems ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className={`hover:text-white transition-colors flex items-center gap-2 uppercase py-2 ${openDropdown === link.name ? "text-white" : ""}`}
                  >
                    <svg 
                      className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {link.name}
                  </button>
                  
                  {/* Mobile Submenu Items */}
                  {openDropdown === link.name && (
                    <div className="flex flex-col items-end gap-6 mt-4 pr-4 border-r-2 border-neutral-800 w-full mb-2">
                      {link.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          onClick={closeMenu}
                          className="hover:text-white transition-colors block py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  href={link.href} 
                  onClick={closeMenu}
                  className="hover:text-white transition-colors py-2"
                >
                  {link.name}
                </Link>
              )}
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