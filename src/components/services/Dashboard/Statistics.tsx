"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Store,
  Users,
  ShoppingBag,
  DollarSign,
  Building2,
  Activity,
  BadgeCheck,
  Globe,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

interface StatisticsProps {
  totalServices?: number;
  totalProviders?: number;
  totalCustomers?: number;
  totalTransactions?: number;
}

const statisticsCards = [
  {
    title: "Serviços",
    value: "0",
    growth: "+0%",
    positive: true,
    icon: ShoppingBag,
    color: "cyan",
  },
  {
    title: "Prestadores",
    value: "0",
    growth: "+0%",
    positive: true,
    icon: Store,
    color: "emerald",
  },
  {
    title: "Clientes",
    value: "0",
    growth: "+0%",
    positive: true,
    icon: Users,
    color: "blue",
  },
  {
    title: "Transações",
    value: "$0",
    growth: "+0%",
    positive: true,
    icon: DollarSign,
    color: "amber",
  },
];

const marketplaceStats = [
  {
    title: "Online Store",
    value: "0",
    icon: Store,
  },
  {
    title: "Virtual Office",
    value: "0",
    icon: Building2,
  },
  {
    title: "Marketplace",
    value: "100%",
    icon: Globe,
  },
  {
    title: "Serviços Verificados",
    value: "0",
    icon: BadgeCheck,
  },
];

export default function Statistics({
  totalServices = 0,
  totalProviders = 0,
  totalCustomers = 0,
  totalTransactions = 0,
}: StatisticsProps) {
  return (
    <div className="space-y-8">

      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="flex flex-wrap items-center justify-between"
      >

        <div>

          <h2 className="text-3xl font-bold text-white">

            Marketplace Statistics

          </h2>

          <p className="mt-2 text-zinc-500">

            Indicadores gerais da plataforma.

          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-black
            hover:bg-cyan-400
            transition
          "
        >

          <Activity size={18} />

          Ver Analytics

        </button>

      </motion.div>

      {/* KPI Cards */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {statisticsCards.map((card) => {

          const Icon = card.icon;

          return (

            <motion.div
              key={card.title}
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-zinc-500">

                    {card.title}

                  </p>

                  <h3 className="mt-3 text-4xl font-black text-white">

                    {card.value}

                  </h3>

                </div>

                <div className="rounded-2xl bg-cyan-500/10 p-4">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

              </div>

              <div className="mt-8 flex items-center justify-between">

                <div
                  className={`flex items-center gap-2 ${
                    card.positive
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >

                  {card.positive ? (
                    <TrendingUp size={18} />
                  ) : (
                    <TrendingDown size={18} />
                  )}

                  <span>

                    {card.growth}

                  </span>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-zinc-600"
                />

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* Marketplace Indicators */}

      <div className="grid gap-5 lg:grid-cols-2">

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
        >

          <h3 className="text-2xl font-bold text-white">

            Marketplace Overview

          </h3>

          <div className="mt-8 space-y-5">

            {marketplaceStats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-2xl bg-zinc-900 p-5"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-cyan-500/10 p-3">

                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>

                      <p className="text-white font-semibold">

                        {item.title}

                      </p>

                    </div>

                  </div>

                  <span className="text-2xl font-bold text-cyan-400">

                    {item.value}

                  </span>

                </div>

              );

            })}

          </div>

        </motion.div>

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
        >

          <h3 className="text-2xl font-bold text-white">

            Financial Summary

          </h3>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-zinc-900 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500">

                    Receita Total

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    ${totalTransactions}

                  </h2>

                </div>

                <div className="rounded-2xl bg-emerald-500/10 p-4">

                  <Wallet
                    size={30}
                    className="text-emerald-400"
                  />

                </div>

              </div>

            </div>

                        <div className="rounded-2xl bg-zinc-900 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500">

                    Prestadores

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {totalProviders}

                  </h2>

                </div>

                <div className="rounded-2xl bg-cyan-500/10 p-4">

                  <Store
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500">

                    Clientes

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {totalCustomers}

                  </h2>

                </div>

                <div className="rounded-2xl bg-blue-500/10 p-4">

                  <Users
                    size={30}
                    className="text-blue-400"
                  />

                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500">

                    Serviços Ativos

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {totalServices}

                  </h2>

                </div>

                <div className="rounded-2xl bg-emerald-500/10 p-4">

                  <ShoppingBag
                    size={30}
                    className="text-emerald-400"
                  />

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Growth & Charts */}

      <div className="grid gap-5 xl:grid-cols-2">

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
        >

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-bold text-white">

                Crescimento

              </h3>

              <p className="mt-2 text-zinc-500">

                Evolução do Marketplace.

              </p>

            </div>

            <TrendingUp
              size={32}
              className="text-emerald-400"
            />

          </div>

          <div className="mt-10 h-72 rounded-2xl border border-dashed border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent flex items-center justify-center">

            <div className="text-center">

              <Activity
                size={56}
                className="mx-auto text-cyan-400"
              />

              <h4 className="mt-5 text-xl font-bold text-white">

                Área preparada para Recharts

              </h4>

              <p className="mt-2 text-zinc-500">

                Revenue • Serviços • Clientes • Prestadores

              </p>

            </div>

          </div>

        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
        >

          <h3 className="text-2xl font-bold text-white">

            Marketplace Health

          </h3>

          <div className="mt-8 space-y-6">

            {[
              {
                title: "Disponibilidade",
                value: "99.9%",
              },
              {
                title: "Serviços Verificados",
                value: "100%",
              },
              {
                title: "Segurança",
                value: "Excelente",
              },
              {
                title: "Performance",
                value: "Ótima",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl bg-zinc-900 p-5"
              >

                <span className="text-zinc-400">

                  {item.title}

                </span>

                <span className="font-bold text-cyan-400">

                  {item.value}

                </span>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

      {/* KPIs */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >

        {[
          {
            title: "Conversão",
            value: "0%",
          },
          {
            title: "Satisfação",
            value: "★★★★★",
          },
          {
            title: "Marketplace Score",
            value: "A+",
          },
          {
            title: "Status",
            value: "Operational",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-zinc-950 p-6 text-center"
          >

            <p className="text-zinc-500">

              {item.title}

            </p>

            <h2 className="mt-4 text-3xl font-black text-cyan-400">

              {item.value}

            </h2>

          </div>

        ))}

      </motion.div>

    </div>
  );
}