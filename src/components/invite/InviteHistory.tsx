"use client";

import { motion } from "framer-motion";
import {
  User,
  CalendarDays,
  Coins,
  Tag,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export interface InviteHistoryItem {

  id: string;

  guest: string;

  date: string;

  inviteCode: string;

  reward: number;

  status:
    | "pending"
    | "completed"
    | "rejected";

}

interface InviteHistoryProps {

  invites: InviteHistoryItem[];

}

function StatusBadge({

  status,

}: {

  status: InviteHistoryItem["status"];

}) {

  switch (status) {

    case "completed":

      return (

        <div
          className="
            flex
            items-center
            gap-2
            text-green-400
          "
        >

          <CheckCircle2 size={18} />

          Concluído

        </div>

      );

    case "rejected":

      return (

        <div
          className="
            flex
            items-center
            gap-2
            text-red-400
          "
        >

          <XCircle size={18} />

          Rejeitado

        </div>

      );

    default:

      return (

        <div
          className="
            flex
            items-center
            gap-2
            text-yellow-400
          "
        >

          <Clock3 size={18} />

          Pendente

        </div>

      );

  }

}

export default function InviteHistory({

  invites,

}: InviteHistoryProps) {

  return (

    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#111]
        p-6
      "
    >

      <div className="mb-6">

        <h2 className="text-2xl font-black">

          Histórico de Convites

        </h2>

        <p className="text-gray-400 mt-2">

          Todos os utilizadores registados através dos teus códigos.

        </p>

      </div>

      <div className="space-y-4">

        {invites.length === 0 && (

          <div
            className="
              rounded-2xl
              bg-black/30
              border
              border-white/10
              p-8
              text-center
              text-gray-400
            "
          >

            Ainda não existem convites registados.

          </div>

        )}

        {invites.map((invite) => (

          <motion.div

            key={invite.id}

            whileHover={{
              scale: 1.01,
            }}

            className="
              rounded-2xl
              border
              border-white/10
              bg-black/30
              p-5
            "

          >

            <div className="grid lg:grid-cols-5 gap-4">

              <div>

                <div className="flex items-center gap-2">

                  <User
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-xs text-gray-400">

                    Utilizador

                  </span>

                </div>

                <p className="mt-2 font-semibold">

                  {invite.guest}

                </p>

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <CalendarDays
                    size={18}
                    className="text-green-400"
                  />

                  <span className="text-xs text-gray-400">

                    Data

                  </span>

                </div>

                <p className="mt-2">

                  {invite.date}

                </p>

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <Coins
                    size={18}
                    className="text-yellow-400"
                  />

                  <span className="text-xs text-gray-400">

                    Recompensa

                  </span>

                </div>

                <p className="mt-2 font-bold">

                  {invite.reward.toFixed(2)} ECOIN

                </p>

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <Tag
                    size={18}
                    className="text-purple-400"
                  />

                  <span className="text-xs text-gray-400">

                    Código

                  </span>

                </div>

                <p className="mt-2 font-mono">

                  {invite.inviteCode}

                </p>

              </div>

              <div>

                <div className="text-xs text-gray-400 mb-2">

                  Estado

                </div>

                <StatusBadge
                  status={invite.status}
                />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}