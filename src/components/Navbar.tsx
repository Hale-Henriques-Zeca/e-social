import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0B0B0B] border-b border-[#0F766E]/40 px-6 py-4 flex items-center">

      {/* LEFT */}
      <div className="flex items-center gap-2 flex-1">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo-social.png"
            alt="EdenKingDom Social"
            className="h-8 w-auto"
          />
          <span className="text-sm font-semibold text-red-600 whitespace-nowrap">
            E-Social
          </span>
        </Link>
      </div>

      {/* CENTER */}
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

      {/* RIGHT */}
      <div className="flex-1 flex justify-end md:hidden">
        {/* botão mobile futuro */}
      </div>

    </nav>
  );
}