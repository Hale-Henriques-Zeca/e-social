"use client";

import { motion } from "framer-motion";
import HeroButtons from "@/components/HeroButtons";


export default function SocialHeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

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
          className="h-28 md:h-36"
        />
      </motion.div>

      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-6xl font-extrabold mb-10"
      >
        <span className="text-teal-400">EdenKingDom </span>
        <span className="text-white">Social</span>
      </motion.h1>

      {/* BOTÕES (CARDS) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full"
      >
        <HeroButtons />
      </motion.div>

      {/* INFO PANEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full mt-16"
      >
       
      </motion.div>

    </section>
  );
}