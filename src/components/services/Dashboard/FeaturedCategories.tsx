"use client";

import { motion } from "framer-motion";
import {
  Store,
  Building2,
  GraduationCap,
  CalendarDays,
  Briefcase,
  Landmark,
  HeartPulse,
  Wheat,
  Clapperboard,
  Plane,
  Building,
  HandHeart,
  ArrowRight,
} from "lucide-react";

import CategoryCard from "@/components/services/Shared/CategoryCard";

const categories = [
  {
    title: "Online Store",
    description: "Venda produtos físicos e digitais.",
    icon: Store,
    services: 0,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Virtual Office",
    description: "Atendimento profissional online.",
    icon: Building2,
    services: 0,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Education",
    description: "Cursos, treinamentos e escolas.",
    icon: GraduationCap,
    services: 0,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Events",
    description: "Eventos, reservas e ingressos.",
    icon: CalendarDays,
    services: 0,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Business Hub",
    description: "Empresas e negócios.",
    icon: Briefcase,
    services: 0,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Finance",
    description: "Serviços financeiros.",
    icon: Landmark,
    services: 0,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Health",
    description: "Hospitais, clínicas e médicos.",
    icon: HeartPulse,
    services: 0,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Agriculture",
    description: "Agricultura e pecuária.",
    icon: Wheat,
    services: 0,
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Entertainment",
    description: "Cinema, música e cultura.",
    icon: Clapperboard,
    services: 0,
    color: "from-fuchsia-500 to-violet-600",
  },
  {
    title: "Tourism",
    description: "Hotéis, viagens e turismo.",
    icon: Plane,
    services: 0,
    color: "from-sky-500 to-cyan-600",
  },
  {
    title: "Real Estate",
    description: "Compra e venda de imóveis.",
    icon: Building,
    services: 0,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Donations",
    description: "Doações e solidariedade.",
    icon: HandHeart,
    services: 0,
    color: "from-rose-500 to-pink-600",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="space-y-8">

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="flex flex-wrap items-center justify-between gap-6"
      >

        <div>

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">

            Marketplace

          </span>

          <h2 className="mt-5 text-4xl font-black text-white">

            Categorias em Destaque

          </h2>

          <p className="mt-4 max-w-3xl text-zinc-400 leading-8">

            Explore todas as áreas disponíveis dentro do
            eSocial Services. Cada categoria foi criada
            para conectar utilizadores, empresas,
            profissionais e organizações através de um
            marketplace inteligente.

          </p>

        </div>

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: .96,
          }}
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-cyan-500
            px-6
            py-4
            font-bold
            text-black
          "
        >

          Explorar Marketplace

          <ArrowRight size={18} />

        </motion.button>

      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {categories.slice(0,6).map((category,index)=>(

          <motion.div
            key={category.title}
            initial={{
              opacity:0,
              y:20,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              delay:index*0.08,
            }}
          >

           <CategoryCard
    title={category.title}
    description={category.description}
    href="#"
    icon={<category.icon size={30} />}
    services={category.services}
/>

          </motion.div>

        ))}

      </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {categories.slice(6).map((category, index) => (

            <motion.div
              key={category.title}
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
              transition={{
                delay: index * 0.08,
              }}
            >

              <CategoryCard
    title={category.title}
    description={category.description}
    href="#"
    icon={<category.icon size={30} />}
    services={category.services}
/>

            </motion.div>

          ))}

        </div>

      <motion.div
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

            <h2 className="text-3xl font-black text-white">

              Porque utilizar o eSocial Services?

            </h2>

            <p className="mt-6 leading-8 text-zinc-400">

              O eSocial Services foi concebido para reunir
              empresas, profissionais, empreendedores,
              instituições e clientes numa única plataforma.

              Cada módulo partilha a mesma identidade digital,
              facilitando a descoberta de serviços,
              pagamentos, reservas, comunicação e gestão
              profissional.

            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-cyan-500" />

                <span className="text-zinc-300">

                  Um único Perfil Inteligente

                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-emerald-500" />

                <span className="text-zinc-300">

                  Marketplace Integrado

                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-orange-500" />

                <span className="text-zinc-300">

                  Pagamentos Digitais

                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-pink-500" />

                <span className="text-zinc-300">

                  Escalável para milhares de serviços

                </span>

              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-2xl bg-zinc-900 p-6 text-center"
            >

              <h3 className="text-5xl font-black text-cyan-400">

                13

              </h3>

              <p className="mt-4 text-zinc-400">

                Categorias

              </p>

            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-2xl bg-zinc-900 p-6 text-center"
            >

              <h3 className="text-5xl font-black text-emerald-400">

                15+

              </h3>

              <p className="mt-4 text-zinc-400">

                Serviços

              </p>

            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-2xl bg-zinc-900 p-6 text-center"
            >

              <h3 className="text-5xl font-black text-orange-400">

                AI

              </h3>

              <p className="mt-4 text-zinc-400">

                Inteligência Artificial

              </p>

            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-2xl bg-zinc-900 p-6 text-center"
            >

              <h3 className="text-5xl font-black text-pink-400">

                ∞

              </h3>

              <p className="mt-4 text-zinc-400">

                Possibilidades

              </p>

            </motion.div>

          </div>

        </div>

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-10
          text-center
        "
      >

        <h2 className="text-3xl font-black text-white">

          Pronto para descobrir novos serviços?

        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-zinc-400">

          Explore categorias, encontre profissionais,
          descubra empresas, realize reservas,
          compre produtos e desenvolva o seu negócio
          dentro do ecossistema inteligente da eSocial.

        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .96,
          }}
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-cyan-500
            px-8
            py-4
            font-bold
            text-black
          "
        >

          Explorar Agora

          <ArrowRight size={20} />

        </motion.button>

      </motion.div>

    </section>

  );

}