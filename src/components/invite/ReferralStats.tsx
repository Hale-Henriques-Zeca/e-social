"use client";

import { motion } from "framer-motion";
import {
  Users,
  Coins,
  Link2,
  Star,
  Wallet,
  Globe,
} from "lucide-react";

interface ReferralStatsProps {
  totalInvites?: number;
  totalRewards?: number;
  totalCodes?: number;
  activeCode?: string;
  totalClaimed?: number;
  userCountry?: string; // Adicionado para receber o país do usuário
  level?: string;
}

// Dicionário de moedas e taxas aproximadas por 1 eCoin
const currencyRates: Record<string, { symbol: string; rate: number; name: string }> = {
  "Mozambique": { symbol: "MT", rate: 120.00, name: "Metical" },
  "Brazil": { symbol: "R$", rate: 5.20, name: "Real" },
  "South Africa": { symbol: "R", rate: 18.50, name: "Rand" },
  "Tanzania": { symbol: "TSh", rate: 2600, name: "Shilling" },
  "Angola": { symbol: "Kz", rate: 850, name: "Kwanza" },
  "China": { symbol: "¥", rate: 7.20, name: "Yuan" },
  "United States": { symbol: "$", rate: 1.00, name: "Dollar" },
};

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: any;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-white/10 bg-[#111] p-5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">{title}</p>
          <h2 className="mt-2 text-2xl font-black">{value}</h2>
        </div>
        <div
          className="rounded-xl p-3"
          style={{
            backgroundColor: `${color}20`,
            border: `1px solid ${color}55`,
          }}
        >
          <Icon size={24} style={{ color }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ReferralStats({
  totalInvites = 0,
  totalRewards = 0,
  totalCodes = 1,
  activeCode = "-",
  totalClaimed = 0,
  userCountry = "Mozambique", // Padrão se não achar
  level = "Leader",
}: ReferralStatsProps) {

  // Resolve os dados da moeda do usuário de forma flexível
  const currencyData = currencyRates[userCountry] || currencyRates["Mozambique"];
  const localValue = (1 * currencyData.rate).toFixed(2);
  const conversionString = `1 eCoin = ${localValue} ${currencyData.symbol}`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">Meu Painel</h2>
          <p className="text-gray-400 mt-2">Estatísticas do programa de convites.</p>
        </div>
        <div className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-5 py-2">
          <span className="text-yellow-400 font-bold">{level}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        <StatCard title="Convidados" value={totalInvites} icon={Users} color="#3B82F6" />
        <StatCard title="E-Coin Ganhos" value={`${totalRewards.toFixed(2)} eCoin`} icon={Coins} color="#FACC15" />
        <StatCard title="Códigos Criados" value={totalCodes} icon={Link2} color="#22C55E" />
        <StatCard title="Código Ativo" value={activeCode} icon={Star} color="#A855F7" />
        <StatCard title="Resgatado" value={`${totalClaimed.toFixed(2)} eCoin`} icon={Wallet} color="#EF4444" />
        
        {/* CARD RETIFICADO PARA INDICAR VALOR DO ECOIN POR PAÍS */}
        <StatCard 
          title={`Câmbio Local (${currencyData.name})`} 
          value={conversionString} 
          icon={Globe} 
          color="#06B6D4" 
        />
      </div>
    </div>
  );
}