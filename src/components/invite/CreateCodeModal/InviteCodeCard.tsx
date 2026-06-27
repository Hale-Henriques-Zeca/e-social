"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Hash,
} from "lucide-react";

interface InviteCodeCardProps {

  code: string;

  active?: boolean;

}

export default function InviteCodeCard({

  code,

  active = true,

}: InviteCodeCardProps) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: .9,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: .25,
      }}

      className="mt-6"

    >

      <div
        className="
        bg-gradient-to-br
        from-yellow-500/20
        to-orange-500/10

        border

        border-yellow-500/30

        rounded-3xl

        p-6

        shadow-xl
      "
      >

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[3px]
                text-yellow-400
              "
            >
              Código de Convite
            </p>

            <div
              className="
                mt-3

                flex

                items-center

                gap-3
              "
            >

              <Hash
                className="text-yellow-400"
                size={20}
              />

              <h1
                className="
                  text-4xl

                  font-black

                  tracking-[8px]

                  text-white
                "
              >
                {code}
              </h1>

            </div>

          </div>

          {active && (

            <div
              className="
                flex

                items-center

                gap-2

                bg-green-500/20

                border

                border-green-500/40

                rounded-full

                px-4

                py-2
              "
            >

              <CheckCircle2
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
                Ativo
              </span>

            </div>

          )}

        </div>

        <div
          className="
            mt-6

            grid

            grid-cols-2

            gap-4
          "
        >

          <div
            className="
              bg-black/40

              rounded-2xl

              p-4

              border

              border-white/5
            "
          >

            <p className="text-xs text-gray-500">

              Estado

            </p>

            <h3 className="mt-1 font-bold">

              {active
                ? "Em utilização"
                : "Inativo"}

            </h3>

          </div>

          <div
            className="
              bg-black/40

              rounded-2xl

              p-4

              border

              border-white/5
            "
          >

            <p className="text-xs text-gray-500">

              Tipo

            </p>

            <h3 className="mt-1 font-bold">

              Referral

            </h3>

          </div>

        </div>

      </div>

    </motion.div>

  );

}