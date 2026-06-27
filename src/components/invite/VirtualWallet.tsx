"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Coins,
  Clock3,
  TrendingUp,
  CircleDollarSign,
  ArrowUpRight,
} from "lucide-react";

interface VirtualWalletProps {
  available?: number;
  pending?: number;
  received?: number;
  claimed?: number;

  nextLevel?: number;

  onClaim?: () => void;
}

export default function VirtualWallet({

  available = 0,

  pending = 0,

  received = 0,

  claimed = 0,

  nextLevel = 100,

  onClaim,

}: VirtualWalletProps) {

  const progress = Math.min(
    (received / nextLevel) * 100,
    100
  );

  function Card({

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

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs text-gray-400">

              {title}

            </p>

            <h2 className="mt-2 text-2xl font-black">

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

  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">

            Carteira Virtual

          </h2>

          <p className="text-gray-400 mt-2">

            Saldo das conquistas por Convidar membros da eSocial.

          </p>

        </div>

        <Wallet
          className="text-yellow-400"
          size={38}
        />

      </div>

      <div

        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-5
        "

      >

        <Card

          title="Saldo Disponível"

          value={`${available.toFixed(2)} ECOIN`}

          icon={Coins}

          color="#FACC15"

        />

        <Card

          title="Saldo Pendente"

          value={`${pending.toFixed(2)} ECOIN`}

          icon={Clock3}

          color="#3B82F6"

        />

        <Card

          title="Total Recebido"

          value={`${received.toFixed(2)} ECOIN`}

          icon={TrendingUp}

          color="#22C55E"

        />

        <Card

          title="Total Resgatado"

          value={`${claimed.toFixed(2)} ECOIN`}

          icon={CircleDollarSign}

          color="#EF4444"

        />

      </div>

      <div

        className="
          rounded-2xl
          border
          border-white/10
          bg-[#111]
          p-6
        "

      >

        <div className="flex justify-between mb-3">

          <span className="font-semibold">

            Progresso para o próximo nível

          </span>

          <span className="text-yellow-400">

            {progress.toFixed(0)}%

          </span>

        </div>

        <div className="h-3 rounded-full bg-black overflow-hidden">

          <motion.div

            initial={{
              width: 0,
            }}

            animate={{
              width: `${progress}%`,
            }}

            transition={{
              duration: .8,
            }}

            className="
              h-full
              bg-gradient-to-r
              from-yellow-500
              via-orange-500
              to-red-500
            "

          />

        </div>

        <p className="text-xs text-gray-400 mt-3">

          Próximo objetivo:

          {" "}

          {nextLevel.toFixed(2)}

          {" "}

          ECOIN.

        </p>

      </div>

      <motion.button

        whileHover={{
          scale: 1.02,
        }}

        whileTap={{
          scale: .98,
        }}

        onClick={onClaim}

        className="
          w-full
          rounded-2xl
          bg-green-600
          hover:bg-green-700
          py-5
          font-bold
          text-lg
          flex
          items-center
          justify-center
          gap-3
        "

      >

        <ArrowUpRight />

        Resgatar E-Coin

      </motion.button>

    </div>

  );

}