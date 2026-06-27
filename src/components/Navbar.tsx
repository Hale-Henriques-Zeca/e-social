"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0B0B0B] border-b border-[#0F766E]/40 px-4 py-3 flex items-center relative">

      {/* LEFT */}
      <div className="flex items-center gap-2 flex-1">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo-social.png"
            alt="E-Social"
            className="h-8 w-auto"
          />
          <span className="text-sm font-semibold text-red-600 whitespace-nowrap">
            eSocial
          </span>
        </Link>
      </div>

      {/* CENTER (DESKTOP) */}
      <div className="hidden md:flex justify-center gap-6 text-sm flex-1">
        {[
          ["Home", "/"],
          ["S", "/social"],
          ["Doar", "/donate"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-[#14b8a6] hover:text-[#5eead4] transition font-medium"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* RIGHT (MOBILE BUTTONS) */}
      <div className="flex items-center gap-3 flex-1 justify-end md:hidden">

        {/* 🌍 Idioma */}
        <button className="text-xs border border-gray-600 px-3 py-1 rounded text-gray-300">
          PT
        </button>

        {/* ☰ Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0B0B0B] border-t border-gray-800 flex flex-col items-center py-4 gap-4 md:hidden z-50">

          {[
            ["Home", "/"],
            ["Social", "/social"],
            ["Doar", "/donate"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[#14b8a6] text-sm hover:text-[#5eead4]"
            >
              {label}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}