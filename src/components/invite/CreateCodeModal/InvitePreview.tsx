"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Link2,
  ShieldCheck,
} from "lucide-react";

interface InvitePreviewProps {

  inviteCode: string;

  baseUrl?: string;

}

export default function InvitePreview({

  inviteCode,

  baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://esocial.edenkingdom.org",

}: InvitePreviewProps) {

  const inviteLink =
    `${baseUrl}/social/invite?code=${inviteCode}`;

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .25,
      }}

      className="mt-8"

    >

      <div
        className="

        rounded-3xl

        border

        border-blue-500/20

        bg-gradient-to-br

        from-blue-500/10

        to-cyan-500/5

        p-6

        shadow-xl

      "

      >

        <div className="flex items-center gap-3">

          <Globe

            className="text-blue-400"

            size={22}

          />

          <div>

            <h2 className="font-bold">

              Link do Convite

            </h2>

            <p className="text-sm text-gray-400">

              Este será o link enviado aos teus convidados.

            </p>

          </div>

        </div>

        <div
          className="

          mt-6

          rounded-2xl

          bg-black/40

          border

          border-white/10

          p-5

          "

        >

          <div className="flex items-start gap-3">

            <Link2

              className="text-blue-400 mt-1"

              size={18}

            />

            <p

              className="

              break-all

              select-all

              text-sm

              text-gray-200

              font-mono

              "

            >

              {inviteLink}

            </p>

          </div>

        </div>

        <div className="mt-5 flex items-center gap-2">

          <ShieldCheck

            size={18}

            className="text-green-400"

          />

          <p className="text-xs text-gray-400">

            Apenas quem utilizar este link poderá ser associado ao teu código.

          </p>

        </div>

      </div>

    </motion.div>

  );

}