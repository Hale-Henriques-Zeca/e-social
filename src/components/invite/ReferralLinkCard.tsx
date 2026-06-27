"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Archive,
  Link2,
  CalendarDays,
} from "lucide-react";

import InviteQRCode from "./CreateCodeModal/InviteQRCode";
import CopyInviteButton from "./CreateCodeModal/CopyInviteButton";
import NativeShareButton from "./CreateCodeModal/NativeShareButton";

interface ReferralLinkCardProps {

  inviteCode: string;

  active?: boolean;

  createdAt?: string;

  totalInvites?: number;

  baseUrl?: string;

}

export default function ReferralLinkCard({

  inviteCode,

  active = true,

  createdAt,

  totalInvites = 0,

  baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://esocial.edenkingdom.org",

}: ReferralLinkCardProps) {

  const inviteLink =
    `${baseUrl}/social/invite?code=${inviteCode}`;

  return (

    <motion.div

      whileHover={{
        y: -3,
      }}

      className="

        rounded-3xl

        border

        border-white/10

        bg-[#111]

        p-6

        space-y-6

      "

    >

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">

            {inviteCode}

          </h2>

          <p className="text-gray-400 text-sm mt-1">

            Código de Referência

          </p>

        </div>

        {active ? (

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

            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span className="text-green-300 text-sm">

              Ativo

            </span>

          </div>

        ) : (

          <div

            className="

              flex

              items-center

              gap-2

              rounded-full

              bg-gray-500/10

              border

              border-gray-500/30

              px-4

              py-2

            "

          >

            <Archive
              size={18}
            />

            <span className="text-gray-400 text-sm">

              Arquivado

            </span>

          </div>

        )}

      </div>

      <div

        className="

          rounded-2xl

          bg-black/30

          border

          border-white/10

          p-4

        "

      >

        <div className="flex gap-2">

          <Link2
            size={18}
            className="text-blue-400 mt-1"
          />

          <p

            className="

              text-sm

              break-all

              font-mono

              text-gray-300

            "

          >

            {inviteLink}

          </p>

        </div>

      </div>

      <InviteQRCode

        inviteCode={inviteCode}

        baseUrl={baseUrl}

      />

      <div

        className="

          grid

          md:grid-cols-2

          gap-4

        "

      >

        <CopyInviteButton

          link={inviteLink}

        />

        <NativeShareButton

          url={inviteLink}

          title="Convite eSocial"

          text="Junte-se ao eSocial utilizando o meu convite."

        />

      </div>

      <div

        className="

          grid

          md:grid-cols-2

          gap-4

        "

      >

        <div

          className="

            rounded-2xl

            bg-black/30

            p-4

          "

        >

          <p className="text-xs text-gray-400">

            Convites Recebidos

          </p>

          <h2 className="text-2xl font-black mt-2">

            {totalInvites}

          </h2>

        </div>

        <div

          className="

            rounded-2xl

            bg-black/30

            p-4

          "

        >

          <div className="flex items-center gap-2">

            <CalendarDays size={18} />

            <span className="text-xs text-gray-400">

              Criado em

            </span>

          </div>

          <p className="mt-2 font-bold">

            {createdAt || "-"}

          </p>

        </div>

      </div>

    </motion.div>

  );

}