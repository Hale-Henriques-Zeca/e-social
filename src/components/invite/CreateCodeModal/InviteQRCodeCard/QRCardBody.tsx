"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  Link2,
  BadgeCheck,
} from "lucide-react";
import React from "react";

interface QRCardBodyProps {
  inviteCode: string;
  inviteLink: string;
  children?: React.ReactNode;
}

export default function QRCardBody({
  inviteCode,
  inviteLink,
  children,
}: QRCardBodyProps) {

  const shortLink =
    inviteLink.length > 48
      ? inviteLink.substring(0, 48) + "..."
      : inviteLink;

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: .95,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: .35,
      }}

      className="mt-8"

    >

      <div

        className="

          rounded-3xl

          border

          border-white/10

          bg-gradient-to-b

          from-[#181818]

          to-[#0c0c0c]

          p-8

        "

      >

        <div className="flex justify-center">

          <div

            className="

              rounded-3xl

              bg-white

              p-5

              shadow-2xl

            "

          >

            {children ?? null}

          </div>

        </div>

        <div className="mt-8 text-center">

          <p className="text-xs text-gray-500">

            Código do Convite

          </p>

          <h1

            className="

              mt-2

              text-4xl

              font-black

              tracking-[0.25em]

              text-yellow-400

            "

          >

            {inviteCode}

          </h1>

        </div>

        <div

          className="

            mt-7

            rounded-2xl

            border

            border-white/10

            bg-black/30

            p-4

          "

        >

          <div className="flex gap-3">

            <Link2

              size={18}

              className="text-blue-400 mt-1"

            />

            <p

              className="

                break-all

                text-xs

                font-mono

                text-gray-300

              "

            >

              {shortLink}

            </p>

          </div>

        </div>

        <div

          className="

            mt-6

            flex

            items-center

            justify-center

            gap-3

          "

        >

          <ScanLine

            size={20}

            className="text-green-400"

          />

          <span className="text-sm text-gray-300">

            Digitalize este QR Code para participar.

          </span>

        </div>

        <div

          className="

            mt-4

            flex

            items-center

            justify-center

            gap-2

            text-xs

            text-green-400

          "

        >

          <BadgeCheck size={16} />

          Link oficial do eSocial

        </div>

      </div>

    </motion.div>

  );

}