"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Sparkles,
  CalendarDays,
} from "lucide-react";

interface QRCardHeaderProps {

  inviteCode?: string;

  userName?: string;

  campaign?: string;

  description?: string;

  showDate?: boolean;

}

export default function QRCardHeader({

  campaign = "Convide Amigos",

  description =
    "Convide novos utilizadores e ganhe recompensas em E-Coin.",

  showDate = false,

}: QRCardHeaderProps) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: -20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .30,
      }}

      className="space-y-5"

    >

      <div className="flex items-center justify-between">

        <div>

          <h2
            className="
              text-2xl
              font-black
              text-white
            "
          >
            {campaign}
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-gray-400
            "
          >
            {description}
          </p>

        </div>

        <div

          className="

            flex

            items-center

            gap-2

            rounded-full

            bg-green-500/10

            border

            border-green-500/30

            px-4

            py-2

          "

        >

          <Gift

            size={18}

            className="text-green-400"

          />

          <span

            className="
              text-sm
              font-semibold
              text-green-300
            "

          >

            AIRDROP

          </span>

        </div>

      </div>

      <div

        className="

          rounded-2xl

          border

          border-yellow-500/20

          bg-gradient-to-r

          from-yellow-500/10

          to-orange-500/5

          p-4

        "

      >

        <div className="flex items-center gap-3">

          <Sparkles

            className="text-yellow-400"

            size={20}

          />

          <div>

            <h3 className="font-bold">

              Até 5 E-Coin por novo utilizador

            </h3>

            <p className="text-xs text-gray-400 mt-1">

              Cada novo utilizador registado através do teu convite
              aumenta automaticamente o teu saldo virtual.

            </p>

          </div>

        </div>

      </div>

      {showDate && (

        <div

          className="
            flex
            items-center
            gap-2
            text-xs
            text-gray-500
          "

        >

          <CalendarDays size={15} />

          {new Date().toLocaleDateString()}

        </div>

      )}

    </motion.div>

  );

}