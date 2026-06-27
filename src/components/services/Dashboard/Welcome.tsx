"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Store,
  Building2,
  GraduationCap,
  CalendarDays,
  Laptop,
  Landmark,
  HeartPulse,
  Wheat,
  Clapperboard,
  Plane,
  Building,
  Briefcase,
  HandHeart,
  Sparkles,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

interface WelcomeProps {
  userName?: string;
}

const modules = [
  {
    title: "Online Store",
    description: "Venda produtos físicos e digitais.",
    icon: Store,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Virtual Office",
    description: "Atenda clientes online.",
    icon: Building2,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Education",
    description: "Cursos e treinamentos.",
    icon: GraduationCap,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Events",
    description: "Eventos e reservas.",
    icon: CalendarDays,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Freelancer",
    description: "Serviços profissionais.",
    icon: Laptop,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Finance",
    description: "Serviços financeiros.",
    icon: Landmark,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Health",
    description: "Saúde e clínicas.",
    icon: HeartPulse,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Agriculture",
    description: "Agro negócios.",
    icon: Wheat,
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Entertainment",
    description: "Conteúdos e mídia.",
    icon: Clapperboard,
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Tourism",
    description: "Turismo e viagens.",
    icon: Plane,
    color: "from-sky-500 to-cyan-600",
  },
  {
    title: "Real Estate",
    description: "Imóveis.",
    icon: Building,
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Jobs",
    description: "Empregos.",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Donations",
    description: "Doações.",
    icon: HandHeart,
    color: "from-rose-500 to-pink-600",
  },
];

const highlights = [
  {
    title: "Marketplace Inteligente",
    value: "15+",
    icon: Sparkles,
  },
  {
    title: "Categorias",
    value: "13",
    icon: TrendingUp,
  },
  {
    title: "Prestadores",
    value: "0",
    icon: Users,
  },
  {
    title: "Segurança",
    value: "100%",
    icon: ShieldCheck,
  },
];

export default function Welcome({
  userName = "Utilizador",
}: WelcomeProps) {
  return (
    <div className="space-y-8">

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .4,
        }}
        className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-zinc-950 to-zinc-950 p-10"
      >

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative z-10">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">

            eSocial Services

          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white">

            Bem-vindo,

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              {userName}

            </span>

          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            Descubra uma nova geração de serviços digitais.
            Venda, compre, ensine, aprenda, viaje, anuncie,
            trabalhe e desenvolva o seu negócio dentro de um
            único ecossistema inteligente.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              className="
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              font-bold
              text-black
              transition
              hover:bg-cyan-400
            "
            >
              Explorar Serviços
            </button>

            <button
              className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:border-cyan-500
            "
            >
              Criar Serviço

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </motion.section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {highlights.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-zinc-500">

                    {item.title}

                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white">

                    {item.value}

                  </h2>

                </div>

                <div className="rounded-2xl bg-cyan-500/10 p-4">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

      <section>

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">

              Serviços Disponíveis

            </h2>

            <p className="mt-2 text-zinc-500">

              Escolha um módulo para começar.

            </p>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {modules.map((module) => {

            const Icon = module.icon;

            return (

              <motion.div
                key={module.title}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition hover:border-cyan-500"
              >

                <div
                  className={`h-2 w-full bg-gradient-to-r ${module.color}`}
                />

                <div className="p-7">

                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-r ${module.color} p-4`}
                  >
                    <Icon
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">

                    {module.title}

                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">

                    {module.description}

                  </p>

                  <button
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      font-semibold
                      text-cyan-400
                      transition
                      group-hover:gap-4
                    "
                  >

                    Abrir módulo

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </section>

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-r
          from-zinc-950
          via-zinc-900
          to-zinc-950
          p-10
        "
      >

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <h2 className="text-3xl font-bold text-white">

              Um único ecossistema.

            </h2>

            <p className="mt-5 leading-8 text-zinc-400">

              O eSocial Services foi concebido para reunir
              empresas, profissionais, empreendedores,
              organizações e clientes num único ambiente.

              Cada utilizador poderá ativar apenas os módulos
              que realmente necessita, mantendo uma identidade
              única dentro da plataforma.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-zinc-900 p-6">

              <h3 className="text-4xl font-black text-cyan-400">

                15+

              </h3>

              <p className="mt-3 text-zinc-400">

                Módulos preparados.

              </p>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <h3 className="text-4xl font-black text-cyan-400">

                1

              </h3>

              <p className="mt-3 text-zinc-400">

                Perfil Inteligente.

              </p>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <h3 className="text-4xl font-black text-cyan-400">

                ∞

              </h3>

              <p className="mt-3 text-zinc-400">

                Possibilidades de crescimento.

              </p>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

              <h3 className="text-4xl font-black text-cyan-400">

                AI

              </h3>

              <p className="mt-3 text-zinc-400">

                Inteligência Artificial integrada.

              </p>

            </div>

          </div>

        </div>

      </motion.section>

    </div>
  );
}