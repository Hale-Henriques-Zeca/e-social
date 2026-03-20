import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0B0B0B] border-b border-[#0F766E]/40 px-6 py-4 flex justify-between items-center">
      <span className="text-xl font-bold text-red-600">
        E-Social
      </span>

      <div className="flex gap-6 text-sm">
        {[
          ["Home", "/"],
          ["Doar", "/donate"],
          ["Transparência", "/dashboard"],
          ["E-Care", "/care"],
          ["GeriCare", "/gericare"],
          ["Educação", "/education"],
          ["Socialização", "/social"],
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
    </nav>
  );
}
