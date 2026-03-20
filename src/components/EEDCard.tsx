"use client";

import Link from "next/link";

export default function EEDCard() {
  return (
    <div className="bg-gradient-to-br from-[#0F766E]/20 to-[#B11226]/20 border border-[#0F766E]/40 rounded-2xl p-8 backdrop-blur hover:scale-[1.02] transition">

      <h3 className="text-2xl font-bold text-teal-400 mb-4">
        💼 EED — Empreendedorismo
      </h3>

      <p className="text-gray-300 mb-6">
        Capacitando visionários para construir negócios sustentáveis,
        com apoio estratégico, tecnológico e financeiro da EdenKingDom.
      </p>

      <Link
        href="/eed"
        className="block text-center w-full py-3 rounded-xl font-semibold
        bg-gradient-to-r from-[#B11226] to-[#0F766E]
        text-white hover:brightness-110 transition"
      >
        Explorar Programa
      </Link>
    </div>
  );
}