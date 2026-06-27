"use client";

import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  X,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;

  categories?: string[];

  onSearch?: (
    search: string,
    category: string,
    location: string
  ) => void;
}

export default function SearchBar({
  placeholder = "Pesquisar serviços, empresas, profissionais, produtos...",
  categories = [
    "Todos",
    "Online Store",
    "Virtual Office",
    "Education",
    "Business Hub",
    "Agriculture",
    "Health",
    "Finance",
    "Events",
    "Entertainment",
    "Freelancer",
    "Tourism",
    "Real Estate",
    "Jobs",
    "Donations",
  ],
  onSearch,
}: SearchBarProps) {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState(categories[0]);

  const [location, setLocation] =
    useState("");

  const handleSearch = () => {
    onSearch?.(
      search,
      category,
      location
    );
  };

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
      <div className="grid xl:grid-cols-[2fr_1fr_1fr_auto] gap-4">

        {/* Pesquisa */}

        <div className="relative">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            size={20}
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder={placeholder}
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 py-4 pl-14 pr-5 text-white outline-none transition focus:border-cyan-500"
          />

          {search && (

            <button
              onClick={() =>
                setSearch("")
              }
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              <X
                size={18}
                className="text-zinc-500 hover:text-white"
              />
            </button>

          )}

        </div>

        {/* Categoria */}

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="rounded-2xl border border-zinc-700 bg-zinc-900 px-4 text-white outline-none focus:border-cyan-500"
        >
          {categories.map((cat) => (

            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>

          ))}
        </select>

        {/* Localização */}

        <div className="relative">

          <MapPin
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />

          <input
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            placeholder="Localização"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
          />

        </div>

        {/* Botão */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .97,
          }}
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-7 text-black font-bold hover:bg-cyan-400 transition"
        >
          <Filter size={18} />

          Pesquisar

        </motion.button>

      </div>

      {/* Sugestões */}

      <div className="mt-6 flex flex-wrap gap-3">

        <Suggestion text="Online Store" />

        <Suggestion text="Doctor" />

        <Suggestion text="Restaurant" />

        <Suggestion text="Hotels" />

        <Suggestion text="Lawyer" />

        <Suggestion text="Courses" />

        <Suggestion text="Freelancer" />

        <Suggestion text="Real Estate" />

        <Suggestion text="Events" />

      </div>

    </motion.div>
  );
}

interface SuggestionProps {
  text: string;
}

function Suggestion({
  text,
}: SuggestionProps) {
  return (
    <motion.button
      whileHover={{
        y: -2,
      }}
      className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:border-cyan-500 hover:text-white transition"
    >
      <Sparkles
        size={14}
        className="text-cyan-400"
      />

      {text}

    </motion.button>
  );
}