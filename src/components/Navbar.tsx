import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#0B0B0B] border-b border-[#0F766E]/40 px-6 py-4 flex justify-between items-center">
      
{/* LEFT — LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-social.png"
              alt="EdenKingDom Social"
              className="h-8 w-auto"
            />
            <span className="text-sm font-semibold text-red-600">
               E-Social
            </span>
          </Link>
        </div>
      <div className="hidden md:flex gap-6 text-sm">
        {[
          ["Home", "/"],
          ["S", "/social"],
          ["Doar", "/donate"],
          ["Transparência", "/dashboard"],
          ["E-Care", "/care"],
          ["Geriatria", "/gericare"],
          ["Educação", "/education"],
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
      <div className="md:hidden">
  {/* menu simples ou botão hamburger */}
</div>
    </nav>
  );
}
