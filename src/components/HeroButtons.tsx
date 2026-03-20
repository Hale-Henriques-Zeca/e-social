"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaChartLine,
  FaBalanceScale,
  FaGlobe,
} from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";

export default function HeroButtons() {

  const goldGradient = "from-[#D4AF37] via-[#F8E07D] to-[#D4AF37]";
  const goldGlow = "shadow-[0_0_30px_rgba(212,175,55,0.6)]";
  const goldIcon = "text-[#F8E07D]";

  const cards = [
    {
      title: "E-Share • Acionistas & Participação",
      desc:
        "Política oficial de participação pública.\n" +
        "Modelo Buy Your Seat.\n" +
        "Sistema transparente e auditável.",
      href: "https://eshare.edenkingdom.org",
      icon: "📊",
      gradient: "from-[#708238] via-[#708238] to-[#708238]",
      glow: "shadow-[0_0_25px_rgba(34,211,238,0.5)]",
      iconColor: "text-cyan-400",
    },

    {
      title: "E-LAw • Estrutura Jurídica",
      desc:
        "Base legal e organizacional da EdenKingDom.\n" +
        "Governança global.\n" +
        "Estrutura institucional sólida.",
      href: "https://elaw.edenkingdom.org",
      icon: "⚖️",
      gradient: "from-[#9ca3af] via-[#9ca3af] to-[#9ca3af]",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.5)]",
      iconColor: "text-purple-400",
    },

    {
      title: "EFC • EdenKingDom Fried Chicken",
      desc:
        "Divisão oficial de alimentação.\n" +
        "Pagamentos com E-Coin.\n" +
        "Expansão internacional.\n\n" +
        "We Don’t Just Fry — We EdenKingDom.",
      href: "https://efc.edenkingdom.org",
      icon: "🍗",
      gradient: "from-[#ff7b00] via-[#ffae00] to-[#ff7b00]",
      glow: "shadow-[0_0_25px_rgba(255,140,0,0.45)]",
      iconColor: "text-[#ffae00]",
    },

    {
      title: "E-Marketing • Promoção de Marcas, Produtos e serviços da EdenKingDom",
      desc:
        "Marketing institucional global.\n" +
        "Branding e campanhas.\n" +
        "Expansão estratégica.",
      href: "https://emarketing.edenkingdom.org",
      icon: "📢",
      gradient: "from-pink-500 via-pink-400 to-pink-500",
      glow: goldGlow,
      iconColor: goldIcon,
    },

    {
      title: "E-Farm+",
      desc:
        "Divisão agroindustrial oficial com produção integrada\n" +
        "Geração de trabalho interno na EdenKingDom.\n" +
        "Trabalho ocupacional para: E-Hope, E-Rise e Praticas para EdenKingDom Social Schools (ESS).",
      href: "https://efarm.edenkingdom",
      icon: "🌾",
      gradient: "from-green-500 via-green-400 to-green-500",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.5)]",
      iconColor: "text-[#ffae00]",
    },
  ];

  return (
    <section className="w-full py-10 px-4 bg-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-xl p-5 border border-white/10 bg-gradient-to-b from-[#0b0b0b]/90 to-[#1a1a1a]/90 backdrop-blur-xl ${card.glow} transition-all duration-700`}
          >

            {/* brilho */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Ícone */}
            <motion.div
              className={`relative z-10 text-3xl mb-3 ${card.iconColor}`}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {card.icon}
            </motion.div>

            {/* Título */}
            <motion.h3
              className={`relative z-10 text-sm font-extrabold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              {card.title}
            </motion.h3>

            {/* Descrição */}
            <p className="relative z-10 text-gray-400 text-xs mt-2 whitespace-pre-line leading-relaxed">
              {card.desc}
            </p>

            {/* Botão */}
            <motion.div whileHover={{ scale: 1.08 }} className="mt-4">
              <Link
                href={card.href}
                target="_blank"
                className={`block text-center py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${card.gradient} text-black hover:brightness-125 transition`}
              >
                Acessar
              </Link>
            </motion.div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}