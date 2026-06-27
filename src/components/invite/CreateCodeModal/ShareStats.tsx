"use client";

import { motion } from "framer-motion";
import {
  Share2,
  MousePointerClick,
  UserPlus,
  TrendingUp,
  Trophy,
} from "lucide-react";

interface ShareStatsProps {

  totalShares?: number;

  totalClicks?: number;

  totalRegistrations?: number;

  conversionRate?: number;

  bestPlatform?: string;

}

function StatCard({

  title,

  value,

  icon: Icon,

  color,

}: any) {

  return (

    <motion.div

      whileHover={{
        scale: 1.02,
      }}

      className="
        rounded-2xl
        border
        border-white/10
        bg-[#111]
        p-5
      "

    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-xs text-gray-400">

            {title}

          </p>

          <h2 className="text-3xl font-black mt-2">

            {value}

          </h2>

        </div>

        <div

          className="rounded-xl p-3"

          style={{

            backgroundColor: `${color}20`,

            border: `1px solid ${color}55`,

          }}

        >

          <Icon

            size={24}

            style={{
              color,
            }}

          />

        </div>

      </div>

    </motion.div>

  );

}

export default function ShareStats({

  totalShares = 0,

  totalClicks = 0,

  totalRegistrations = 0,

  conversionRate = 0,

  bestPlatform = "—",

}: ShareStatsProps) {

  return (

    <div className="space-y-6">

      <div>

        <h2 className="text-3xl font-black">

          Estatísticas de Partilha

        </h2>

        <p className="text-gray-400 mt-2">

          Acompanha o desempenho dos teus convites.

        </p>

      </div>

      <div

        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5
          gap-5
        "

      >

        <StatCard

          title="Total de Partilhas"

          value={totalShares}

          icon={Share2}

          color="#3B82F6"

        />

        <StatCard

          title="Cliques"

          value={totalClicks}

          icon={MousePointerClick}

          color="#06B6D4"

        />

        <StatCard

          title="Registos"

          value={totalRegistrations}

          icon={UserPlus}

          color="#22C55E"

        />

        <StatCard

          title="Conversão"

          value={`${conversionRate.toFixed(1)}%`}

          icon={TrendingUp}

          color="#FACC15"

        />

        <StatCard

          title="Melhor Plataforma"

          value={bestPlatform}

          icon={Trophy}

          color="#A855F7"

        />

      </div>

      <div

        className="
          rounded-3xl
          border
          border-white/10
          bg-[#111]
          p-6
        "

      >

        <h3 className="text-xl font-bold mb-4">

          Resumo de Conversão

        </h3>

        <div className="h-4 rounded-full bg-black overflow-hidden">

          <motion.div

            initial={{
              width: 0,
            }}

            animate={{
              width: `${Math.min(conversionRate, 100)}%`,
            }}

            transition={{
              duration: 1,
            }}

            className="
              h-full
              bg-gradient-to-r
              from-green-500
              via-yellow-500
              to-red-500
            "

          />

        </div>

        <div className="flex justify-between mt-3 text-sm">

          <span className="text-gray-400">

            Conversão

          </span>

          <span className="text-yellow-400 font-bold">

            {conversionRate.toFixed(1)}%

          </span>

        </div>

      </div>

    </div>

  );

}