"use client";

import { motion } from "framer-motion";

import Welcome from "./Welcome";
import Statistics from "./Statistics";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedServices from "./FeaturedServices";
import ActivityFeed from "./ActivityFeed";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="space-y-10"
    >
      {/* Welcome */}
      <Welcome />

      {/* Estatísticas */}
      <Statistics />

      {/* Categorias */}
      <FeaturedCategories />

      {/* Serviços em Destaque */}
      <FeaturedServices />

      {/* Feed de Atividades */}
      <ActivityFeed />
    </motion.div>
  );
}