"use client";

import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock3,
  Heart,
  Eye,
  Verified,
  ArrowRight,
} from "lucide-react";

export interface ServiceCardProps {
  id: string | number;

  title: string;

  description: string;

  image: string;

  category: string;

  provider: string;

  providerAvatar?: string;

  location?: string;

  rating?: number;

  reviews?: number;

  price?: string;

  featured?: boolean;

  verified?: boolean;

  online?: boolean;

  views?: number;

  favorite?: boolean;

  duration?: string;

  onClick?: () => void;
}

export default function ServiceCard({
  title,
  description,
  image,
  category,
  provider,
  providerAvatar,
  location,
  rating = 5,
  reviews = 0,
  price,
  featured = false,
  verified = false,
  online = true,
  views = 0,
  favorite = false,
  duration,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d0d0d] hover:border-cyan-500 transition-all"
    >
      {/* IMAGE */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {featured && (
          <div className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
            Featured
          </div>
        )}

        <button
          className={`absolute right-4 top-4 rounded-full p-2 transition

          ${
            favorite
              ? "bg-red-500 text-white"
              : "bg-black/60 text-white hover:bg-black"
          }

          `}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>

        <div className="absolute left-4 bottom-4">

          <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white">

            {category}

          </span>

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-lg font-bold text-white">

              {title}

            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-zinc-400">

              {description}

            </p>

          </div>

        </div>

        {/* PROVIDER */}

        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            {providerAvatar ? (
              <img
                src={providerAvatar}
                alt={provider}
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-white font-bold">
                {provider.charAt(0)}
              </div>
            )}

            <div>

              <div className="flex items-center gap-2">

                <p className="text-sm font-semibold text-white">

                  {provider}

                </p>

                {verified && (
                  <Verified
                    size={16}
                    className="text-cyan-400"
                  />
                )}

              </div>

              <p className="text-xs text-zinc-500">

                {online ? "Online" : "Offline"}

              </p>

            </div>

          </div>

          {price && (
            <div className="text-right">

              <p className="text-xs text-zinc-500">

                Starting at

              </p>

              <p className="text-lg font-bold text-cyan-400">

                {price}

              </p>

            </div>
          )}

        </div>

        {/* INFO */}

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-400">

          {location && (
            <div className="flex items-center gap-1">

              <MapPin size={16} />

              {location}

            </div>
          )}

          {duration && (
            <div className="flex items-center gap-1">

              <Clock3 size={16} />

              {duration}

            </div>
          )}

        </div>

        {/* FOOTER */}

        <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5">

          <div className="flex items-center gap-4">

            <div className="flex items-center gap-1 text-yellow-400">

              <Star
                size={16}
                fill="currentColor"
              />

              <span className="text-sm">

                {rating.toFixed(1)}

              </span>

            </div>

            <span className="text-sm text-zinc-500">

              ({reviews})

            </span>

            <div className="flex items-center gap-1 text-zinc-500">

              <Eye size={16} />

              {views}

            </div>

          </div>

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="flex items-center gap-2 font-semibold text-cyan-400"
          >
            View

            <ArrowRight size={18} />
          </motion.div>

        </div>

      </div>

    </motion.div>
  );
}