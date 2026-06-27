"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Inbox,
  PlusCircle,
} from "lucide-react";
import { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;

  description?: string;

  icon?: ReactNode;

  buttonLabel?: string;

  buttonHref?: string;

  onAction?: () => void;
}

export default function EmptyState({
  title = "Nada encontrado",

  description = "Ainda não existe conteúdo disponível nesta área.",

  icon,

  buttonLabel = "Criar Agora",

  buttonHref,

  onAction,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0c0c0c] px-8 py-20 text-center"
    >
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="mb-8 rounded-full bg-cyan-500/10 p-6"
      >
        {icon ?? (
          <Inbox
            size={60}
            className="text-cyan-400"
          />
        )}
      </motion.div>

      <h2 className="text-3xl font-bold text-white">

        {title}

      </h2>

      <p className="mt-4 max-w-xl text-zinc-400 leading-7">

        {description}

      </p>

      {(buttonHref || onAction) && (

        buttonHref ? (

          <Link
            href={buttonHref}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black"
            >
              <PlusCircle size={20} />

              {buttonLabel}

            </motion.button>
          </Link>

        ) : (

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
            onClick={onAction}
            className="mt-8 flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black"
          >
            <PlusCircle size={20} />

            {buttonLabel}

          </motion.button>

        )

      )}

    </motion.div>
  );
}