"use client";

import { motion } from "framer-motion";

export default function HeroSocial() {
  return (
    <div className="flex flex-col items-center justify-center text-center">

      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex justify-center mb-6"
      >
        <img
          src="/logo-social.png"
          alt="EdenKingDom Social"
          className="h-32 md:h-40"
        />
      </motion.div>

      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-8"
      >
        <span className="text-teal-400">EdenKingDom </span>
        <span className="text-white">Social</span>
      </motion.h1>

    </div>
  );
}