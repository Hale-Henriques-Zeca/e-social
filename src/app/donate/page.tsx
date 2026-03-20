"use client";

import DonateCard from "@/components/DonateCard";
import DonationAdminPanel from "@/components/DonationAdminPanel";

export default function DonatePage() {
  return (
    <section className="min-h-screen px-8 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Doar para a E-Social
      </h1>

      <p className="text-gray-300 max-w-2xl mb-10">
        Todas as doações são processadas por smart contracts auditáveis
        na blockchain. Transparência total, impacto real.
      </p>

      <DonateCard />
       <DonationAdminPanel />
    </section>
  );
}
