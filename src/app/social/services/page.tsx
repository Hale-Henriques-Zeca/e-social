"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Header from "@/components/services/Shared/Header";
import Sidebar from "@/components/services/Shared/Sidebar";
import SearchBar from "@/components/services/Shared/SearchBar";
import Filters from "@/components/services/Shared/Filters";

import Dashboard from "@/components/services/Dashboard/Dashboard";

export default function ServicesPage() {
  const [activeModule, setActiveModule] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#020817] text-white">

      <Header />

      <div className="flex">

      <Sidebar
    active={activeModule}
    onChange={setActiveModule}
    />

        <main className="flex-1 overflow-hidden">

          <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >

              <SearchBar />

              <Filters />

            </motion.div>

            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >

              {activeModule === "dashboard" && <Dashboard />}

              {activeModule !== "dashboard" && (
                <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-16 text-center">

                  <h2 className="text-3xl font-bold">
                    {activeModule}
                  </h2>

                  <p className="mt-4 text-gray-400">
                    Este módulo será desenvolvido nas próximas etapas.
                  </p>

                </div>
              )}

            </motion.div>

          </div>

        </main>

      </div>

    </div>
  );
}