"use client";

import { motion } from "framer-motion";
import {
  Loader2,
  Sparkles,
} from "lucide-react";

interface LoadingProps {
  title?: string;
  description?: string;
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Loading({
  title = "Loading...",
  description = "Please wait while we prepare everything for you.",
  fullScreen = false,
  size = "md",
}: LoadingProps) {
  const spinnerSize =
    size === "sm"
      ? 36
      : size === "lg"
      ? 72
      : 52;

  const container = fullScreen
    ? "fixed inset-0 z-50"
    : "w-full h-full min-h-[320px]";

  return (
    <div
      className={`${container} flex items-center justify-center bg-[#090909]`}
    >
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
        className="flex max-w-md flex-col items-center text-center"
      >
        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.35, .6, .35],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute h-40 w-40 rounded-full bg-cyan-500 blur-[90px]"
        />

        {/* Spinner */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
          className="relative z-10"
        >
          <Loader2
            size={spinnerSize}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Icon */}

        <motion.div
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-8 rounded-2xl bg-cyan-500/10 p-4"
        >
          <Sparkles
            size={28}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Text */}

        <h2 className="mt-6 text-2xl font-bold text-white">

          {title}

        </h2>

        <p className="mt-3 text-zinc-400 leading-7">

          {description}

        </p>

        {/* Progress */}

        <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-zinc-800">

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="h-full w-1/3 rounded-full bg-cyan-400"
          />

        </div>

      </motion.div>
    </div>
  );
}