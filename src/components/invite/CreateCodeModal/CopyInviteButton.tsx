"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
} from "lucide-react";

interface CopyInviteButtonProps {

  link: string;

  className?: string;

  onCopied?: () => void;

}

export default function CopyInviteButton({

  link,

  className = "",

  onCopied,

}: CopyInviteButtonProps) {

  const [copied, setCopied] = useState(false);

  async function handleCopy() {

    try {

      await navigator.clipboard.writeText(link);

      setCopied(true);

      onCopied?.();

      setTimeout(() => {

        setCopied(false);

      }, 2500);

    } catch (error) {

      console.error(error);

      alert("Não foi possível copiar o link.");

    }

  }

  return (

    <motion.button

      whileHover={{
        scale: 1.02,
      }}

      whileTap={{
        scale: .98,
      }}

      onClick={handleCopy}

      className={`
        w-full

        bg-green-600

        hover:bg-green-700

        rounded-2xl

        py-4

        px-6

        font-bold

        transition-all

        flex

        items-center

        justify-center

        gap-3

        ${className}
      `}

    >

      <AnimatePresence mode="wait">

        {copied ? (

          <motion.div

            key="copied"

            initial={{
              opacity: 0,
              y: -10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: 10,
            }}

            className="flex items-center gap-2"

          >

            <Check
              size={20}
            />

            Copiado!

          </motion.div>

        ) : (

          <motion.div

            key="copy"

            initial={{
              opacity: 0,
              y: -10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: 10,
            }}

            className="flex items-center gap-2"

          >

            <Copy
              size={20}
            />

            Copiar Link

          </motion.div>

        )}

      </AnimatePresence>

    </motion.button>

  );

}