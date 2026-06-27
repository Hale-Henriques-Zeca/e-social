"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface QRCardBrandProps {
  title?: string;
  subtitle?: string;
  verified?: boolean;
}

export default function QRCardBrand({
  title = "E SOCIAL",
  subtitle = "CONVIDE AMIGOS",
  verified = true,
}: QRCardBrandProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="text-center"
    >
      {/* Glow */}
      <div
        className="
          mx-auto
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-yellow-400
          via-orange-500
          to-red-500
          shadow-[0_0_35px_rgba(250,204,21,.35)]
        "
      >
        <Sparkles
          size={30}
          className="text-white"
        />
      </div>

      <h1
        className="
          text-3xl
          font-black
          tracking-[0.30em]
          text-white
        "
      >
        {title}
      </h1>

      <div
        className="
          mt-2
          flex
          items-center
          justify-center
          gap-2
        "
      >
        <p
          className="
            text-yellow-400
            text-sm
            font-bold
            tracking-[0.25em]
          "
        >
          {subtitle}
        </p>

        {verified && (
          <ShieldCheck
            size={18}
            className="text-green-400"
          />
        )}
      </div>

      <div
        className="
          mt-5
          mx-auto
          h-px
          w-36
          bg-gradient-to-r
          from-transparent
          via-yellow-500
          to-transparent
        "
      />
    </motion.div>
  );
}