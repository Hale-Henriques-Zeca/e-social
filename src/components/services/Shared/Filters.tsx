"use client";

import { motion } from "framer-motion";
import {
  Filter,
  Star,
  BadgeCheck,
  Tag,
  ArrowUpDown,
  Globe,
  Building2,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

export interface FiltersValue {
  verified: boolean;
  promotion: boolean;
  onlineOnly: boolean;
  minRating: number;
  sort: string;
}

interface FiltersProps {
  onChange?: (filters: FiltersValue) => void;
}

export default function Filters({
  onChange,
}: FiltersProps) {
  const [filters, setFilters] = useState<FiltersValue>({
    verified: false,
    promotion: false,
    onlineOnly: false,
    minRating: 0,
    sort: "popular",
  });

  function update(values: Partial<FiltersValue>) {
    const newFilters = {
      ...filters,
      ...values,
    };

    setFilters(newFilters);

    onChange?.(newFilters);
  }

  function resetFilters() {
    const initial = {
      verified: false,
      promotion: false,
      onlineOnly: false,
      minRating: 0,
      sort: "popular",
    };

    setFilters(initial);

    onChange?.(initial);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Filter
            className="text-cyan-400"
            size={22}
          />

          <div>

            <h2 className="font-bold text-white text-lg">

              Advanced Filters

            </h2>

            <p className="text-sm text-zinc-500">

              Refine your search results

            </p>

          </div>

        </div>

        <button
          onClick={resetFilters}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-cyan-500 hover:text-white transition"
        >
          <RotateCcw size={16} />

          Reset

        </button>

      </div>

      {/* Grid */}

      <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* VERIFIED */}

        <FilterButton
          active={filters.verified}
          icon={<BadgeCheck size={18} />}
          title="Verified"
          subtitle="Verified providers only"
          onClick={() =>
            update({
              verified: !filters.verified,
            })
          }
        />

        {/* PROMOTION */}

        <FilterButton
          active={filters.promotion}
          icon={<Tag size={18} />}
          title="Promotions"
          subtitle="Discounts & offers"
          onClick={() =>
            update({
              promotion: !filters.promotion,
            })
          }
        />

        {/* ONLINE */}

        <FilterButton
          active={filters.onlineOnly}
          icon={<Globe size={18} />}
          title="Online"
          subtitle="Online services only"
          onClick={() =>
            update({
              onlineOnly: !filters.onlineOnly,
            })
          }
        />

      </div>

      {/* Rating */}

      <div className="mt-8">

        <h3 className="text-white font-semibold mb-4">

          Minimum Rating

        </h3>

        <div className="flex flex-wrap gap-3">

          {[0,1,2,3,4,5].map((rating)=>(
            <motion.button
              key={rating}
              whileHover={{
                y:-2,
              }}
              onClick={()=>
                update({
                  minRating: rating,
                })
              }
              className={`flex items-center gap-2 rounded-xl px-4 py-3 transition

              ${
                filters.minRating===rating
                ? "bg-cyan-500 text-black"
                : "bg-zinc-900 border border-zinc-700 text-white"
              }

              `}
            >

              <Star
                size={16}
                fill="currentColor"
              />

              {rating}+

            </motion.button>
          ))}

        </div>

      </div>

      {/* Sort */}

      <div className="mt-8">

        <h3 className="text-white font-semibold mb-4">

          Sort Results

        </h3>

        <div className="relative">

          <ArrowUpDown
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />

          <select
            value={filters.sort}
            onChange={(e)=>
              update({
                sort:e.target.value,
              })
            }
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 py-4 pl-14 pr-4 text-white outline-none focus:border-cyan-500"
          >

            <option value="popular">

              Most Popular

            </option>

            <option value="rating">

              Highest Rating

            </option>

            <option value="newest">

              Newest

            </option>

            <option value="price-low">

              Lowest Price

            </option>

            <option value="price-high">

              Highest Price

            </option>

            <option value="distance">

              Nearest

            </option>

          </select>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-8 rounded-2xl bg-zinc-900 border border-zinc-800 p-5">

        <div className="flex items-center gap-3">

          <Building2
            className="text-cyan-400"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">

              Filters Ready

            </h3>

            <p className="text-sm text-zinc-500">

              Ready for integration with Supabase and APIs.

            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

interface FilterButtonProps{
  active:boolean;
  icon:React.ReactNode;
  title:string;
  subtitle:string;
  onClick:()=>void;
}

function FilterButton({
  active,
  icon,
  title,
  subtitle,
  onClick,
}:FilterButtonProps){

  return(

    <motion.button

      whileHover={{
        y:-3,
      }}

      onClick={onClick}

      className={`rounded-2xl border p-5 text-left transition

      ${
        active
        ? "border-cyan-500 bg-cyan-500/10"
        : "border-zinc-700 bg-zinc-900"
      }

      `}

    >

      <div className="flex items-center gap-3">

        <div className={`rounded-xl p-3

        ${
          active
          ? "bg-cyan-500 text-black"
          : "bg-zinc-800 text-zinc-300"
        }

        `}>

          {icon}

        </div>

        <div>

          <h4 className="font-semibold text-white">

            {title}

          </h4>

          <p className="text-sm text-zinc-500">

            {subtitle}

          </p>

        </div>

      </div>

    </motion.button>

  );

}