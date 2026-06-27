"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Store,
  Building2,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Plane,
  Home,
  CalendarDays,
  Gift,
  BadgeCheck,
  Star,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import Badge from "@/components/services/Shared/Badge";

interface ActivityItem {
  id: number;
  title: string;
  description: string;
  category: string;
  type:
    | "store"
    | "office"
    | "education"
    | "business"
    | "health"
    | "tourism"
    | "realestate"
    | "events"
    | "donation"
    | "verified"
    | "review";
  time: string;
  badge?: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Loja Tech World",
    description: "Publicou um novo smartphone em promoção.",
    category: "Online Store",
    type: "store",
    time: "Agora",
    badge: "Promotion",
  },
  {
    id: 2,
    title: "Clínica Vida",
    description: "Recebeu uma avaliação de 5 estrelas.",
    category: "Health",
    type: "review",
    time: "5 min",
    badge: "Featured",
  },
  {
    id: 3,
    title: "Hotel Paradise",
    description: "Criou uma nova campanha de férias.",
    category: "Tourism",
    type: "tourism",
    time: "18 min",
    badge: "New",
  },
  {
    id: 4,
    title: "Imobiliária Prime",
    description: "Publicou um novo apartamento disponível.",
    category: "Real Estate",
    type: "realestate",
    time: "32 min",
  },
  {
    id: 5,
    title: "Academia eLearning",
    description: "Novo curso React Premium disponível.",
    category: "Education",
    type: "education",
    time: "1 hora",
    badge: "Premium",
  },
  {
    id: 6,
    title: "Business Hub Africa",
    description: "Novo parceiro aderiu ao Marketplace.",
    category: "Business",
    type: "business",
    time: "2 horas",
    badge: "Verified",
  },
  {
    id: 7,
    title: "Eden Conference",
    description: "Novo evento publicado.",
    category: "Events",
    type: "events",
    time: "Hoje",
  },
  {
    id: 8,
    title: "Hope Foundation",
    description: "Nova campanha solidária criada.",
    category: "Donations",
    type: "donation",
    time: "Hoje",
  },
];

const icons = {
  store: Store,
  office: Building2,
  education: GraduationCap,
  business: Briefcase,
  health: HeartPulse,
  tourism: Plane,
  realestate: Home,
  events: CalendarDays,
  donation: Gift,
  verified: BadgeCheck,
  review: Star,
};

export default function ActivityFeed() {
  return (
    <section className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15">

              <Activity className="h-6 w-6 text-cyan-400" />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                Marketplace Activity
              </h2>

              <p className="text-sm text-gray-400">
                Acompanhe tudo o que acontece em tempo real no ecossistema
                eSocial Services.
              </p>

            </div>

          </div>

        </div>

        <button className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20">

          Ver todas

          <ArrowRight className="h-4 w-4" />

        </button>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl overflow-hidden">

        <div className="border-b border-white/10 px-8 py-5">

          <h3 className="text-lg font-semibold text-white">
            Atividades Recentes
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Eventos publicados pelos serviços da plataforma.
          </p>

        </div>

        <div className="relative px-8 py-6">

          <div className="absolute left-[37px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent" />

          <div className="space-y-8">

            {activities.slice(0, 4).map((item, index) => {

              const Icon = icons[item.type];

              return (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="relative flex gap-5"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-8 ring-[#0F172A]">

                    <Icon className="h-5 w-5 text-cyan-400" />

                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <div>

                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-gray-400">
                          {item.description}
                        </p>

                      </div>

                      {item.badge && (
                        <Badge
                          label={item.badge}
                          variant="custom"
                        />
                      )}

                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">

                      <span>{item.category}</span>

                      <span>•</span>

                      <span>{item.time}</span>

                    </div>

                  </div>

                </motion.div>

              );

            })}

                        {activities.slice(4).map((item, index) => {
              const Icon = icons[item.type];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: (index + 4) * 0.05,
                  }}
                  className="relative flex gap-5"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-8 ring-[#0F172A]">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>

                      {item.badge && (
                        <Badge
                          label={item.badge}
                          variant="custom"
                        />
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span>{item.category}</span>

                      <span>•</span>

                      <span>{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6"
        >
          <h3 className="text-lg font-bold text-white">
            Marketplace Health
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Estado geral do ecossistema baseado na atividade das últimas 24
            horas.
          </p>

          <div className="mt-8 space-y-5">

            <div>
              <div className="mb-2 flex justify-between text-sm text-gray-300">
                <span>Serviços Ativos</span>
                <span>94%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[94%] rounded-full bg-emerald-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm text-gray-300">
                <span>Satisfação</span>
                <span>97%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[97%] rounded-full bg-cyan-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm text-gray-300">
                <span>Performance</span>
                <span>91%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[91%] rounded-full bg-violet-400" />
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-[#111827] p-6"
        >
          <h3 className="text-lg font-bold text-white">
            Estatísticas Rápidas
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex items-center justify-between">
              <span className="text-gray-400">Eventos Hoje</span>
              <span className="font-bold text-white">126</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">Novos Serviços</span>
              <span className="font-bold text-white">38</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">Avaliações</span>
              <span className="font-bold text-white">482</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">Novos Parceiros</span>
              <span className="font-bold text-white">14</span>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-blue-500/10 p-6"
        >
          <MessageSquare className="h-10 w-10 text-cyan-400" />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Explore o Marketplace
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            Descubra milhares de serviços, profissionais, empresas,
            imóveis, produtos, eventos e oportunidades disponíveis na
            plataforma eSocial.
          </p>

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-400">
            Explorar Marketplace

            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Atividade nas últimas 24h
              </span>

              <span className="font-bold text-emerald-400">
                +18%
              </span>
            </div>

            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-2 w-4/5 rounded-full bg-cyan-400" />
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}