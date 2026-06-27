"use client";

import { motion } from "framer-motion";
import {
  Search,
  Plus,
  Bell,
  MessageCircle,
  ChevronRight,
  LayoutGrid,
  UserCircle2,
} from "lucide-react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  category?: string;
  onCreate?: () => void;
}

export default function Header({
  title = "Services",
  subtitle = "Marketplace Inteligente da eSocial",
  category = "Todos os Serviços",
  onCreate,
}: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .4 }}
      className="w-full bg-[#0c0c0c] border border-zinc-800 rounded-3xl p-6 shadow-xl"
    >
      {/* Top */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

        {/* Esquerda */}
        <div>

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-zinc-400">

            <LayoutGrid size={15} />

            <span>Services</span>

            <ChevronRight size={15} />

            <span className="text-cyan-400 font-medium">
              {title}
            </span>

          </div>

          <h1 className="text-4xl font-bold mt-3 text-white">
            {title}
          </h1>

          <p className="text-zinc-400 mt-2">
            {subtitle}
          </p>

        </div>

        {/* Direita */}

        <div className="flex flex-wrap items-center gap-3">

          <button
            onClick={onCreate}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 text-black font-semibold"
          >
            <Plus size={18} />
            Criar Serviço
          </button>

          <button className="w-12 h-12 rounded-xl border border-zinc-700 hover:border-cyan-500 flex items-center justify-center transition">
            <Bell size={20} className="text-zinc-300" />
          </button>

          <button className="w-12 h-12 rounded-xl border border-zinc-700 hover:border-cyan-500 flex items-center justify-center transition">
            <MessageCircle size={20} className="text-zinc-300" />
          </button>

          <button className="w-12 h-12 rounded-xl border border-zinc-700 hover:border-cyan-500 flex items-center justify-center transition">
            <UserCircle2 size={22} className="text-zinc-300" />
          </button>

        </div>

      </div>

      {/* Pesquisa */}

      <div className="grid lg:grid-cols-[1fr_250px] gap-5 mt-8">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Pesquisar serviços, empresas, profissionais, produtos..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl pl-14 pr-4 py-4 text-white outline-none focus:border-cyan-500 transition"
          />

        </div>

        <select
          defaultValue={category}
          className="bg-zinc-900 border border-zinc-700 rounded-2xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition"
        >
          <option>Todos os Serviços</option>

          <option>Online Store</option>

          <option>Virtual Office</option>

          <option>Education</option>

          <option>Business Hub</option>

          <option>Health</option>

          <option>Finance</option>

          <option>Agriculture</option>

          <option>Entertainment</option>

          <option>Events</option>

          <option>Freelancer</option>

          <option>Tourism</option>

          <option>Real Estate</option>

          <option>Jobs</option>

          <option>Donations</option>

        </select>

      </div>

      {/* Estatísticas */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        <StatCard
          title="Categorias"
          value="15"
          color="text-cyan-400"
        />

        <StatCard
          title="Profissionais"
          value="0"
          color="text-emerald-400"
        />

        <StatCard
          title="Serviços"
          value="0"
          color="text-orange-400"
        />

        <StatCard
          title="Empresas"
          value="0"
          color="text-pink-400"
        />

      </div>

    </motion.header>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
    >
      <p className="text-zinc-500 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </motion.div>
  );
}