"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export interface CategoryCardProps {
  title: string;

  description: string;

  href: string;

  icon: React.ReactNode;

  color?: string;

  services?: number;

  providers?: number;

  featured?: boolean;

  newCategory?: boolean;

  growth?: string;

  backgroundImage?: string;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon,
  color = "#06B6D4",
  services = 0,
  providers = 0,
  featured = false,
  newCategory = false,
  growth,
  backgroundImage,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.25,
        }}
        className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d0d0d] hover:border-cyan-500 transition-all cursor-pointer"
      >
        {/* Background */}

        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover opacity-15 group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black" />
          </>
        )}

        {/* Content */}

        <div className="relative z-10 p-7">

          {/* Top */}

          <div className="flex items-start justify-between">

            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: `${color}20`,
                color,
              }}
            >
              {icon}
            </div>

            <div className="flex flex-col items-end gap-2">

              {featured && (
                <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
                  Featured
                </span>
              )}

              {newCategory && (
                <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  NEW
                </span>
              )}

            </div>

          </div>

          {/* Title */}

          <div className="mt-6">

            <h3 className="text-xl font-bold text-white">

              {title}

            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">

              {description}

            </p>

          </div>

          {/* Stats */}

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-zinc-900/70 p-4">

              <p className="text-xs uppercase tracking-wide text-zinc-500">

                Services

              </p>

              <p className="mt-2 text-2xl font-bold text-white">

                {services.toLocaleString()}

              </p>

            </div>

            <div className="rounded-2xl bg-zinc-900/70 p-4">

              <p className="text-xs uppercase tracking-wide text-zinc-500">

                Providers

              </p>

              <p className="mt-2 text-2xl font-bold text-white">

                {providers.toLocaleString()}

              </p>

            </div>

          </div>

          {/* Growth */}

          {growth && (
            <div className="mt-6 flex items-center gap-2 text-green-400">

              <TrendingUp size={18} />

              <span className="text-sm font-semibold">

                {growth} this month

              </span>

            </div>
          )}

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">

            <span className="text-sm text-zinc-500">

              Explore category

            </span>

            <motion.div
              whileHover={{
                x: 5,
              }}
              className="flex items-center gap-2 font-semibold"
              style={{ color }}
            >
              View

              <ArrowRight size={18} />

            </motion.div>

          </div>

        </div>

        {/* Hover Glow */}

        <motion.div
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition duration-500"
          style={{
            background: color,
          }}
        />

        {/* Right Arrow */}

        <ChevronRight
          className="absolute right-5 top-5 text-zinc-700 group-hover:text-white transition"
          size={22}
        />

      </motion.div>
    </Link>
  );
}