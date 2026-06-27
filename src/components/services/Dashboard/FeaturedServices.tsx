"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Store,
  Building2,
  GraduationCap,
  Hotel,
  Home,
  Stethoscope,
  Briefcase,
} from "lucide-react";

import ServiceCard from "@/components/services/Shared/ServiceCard";

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  provider: string;
  location: string;
  rating: number;
  reviews: number;
  verified: boolean;
  featured: boolean;
  image: string;
}

const featuredServices: Service[] = [
  {
    id: 1,
    title: "Codorna's Take Away",
    description:
      "Restaurante especializado em gastronomia africana com entregas rápidas.",
    category: "Online Store",
    provider: "Codorna's",
    location: "Maputo",
    rating: 4.9,
    reviews: 258,
    verified: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 2,
    title: "Engenheiro Pedro",
    description:
      "Consultoria em Engenharia Civil e Gestão de Obras.",
    category: "Virtual Office",
    provider: "Pedro Consulting",
    location: "Beira",
    rating: 5,
    reviews: 112,
    verified: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 3,
    title: "React Master",
    description:
      "Curso completo de React e Next.js.",
    category: "Education",
    provider: "eLearning",
    location: "Online",
    rating: 4.8,
    reviews: 925,
    verified: true,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: 4,
    title: "Safari Mozambique",
    description:
      "Experiências turísticas premium.",
    category: "Tourism",
    provider: "Safari Tours",
    location: "Gorongosa",
    rating: 4.9,
    reviews: 432,
    verified: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 5,
    title: "Villa Premium",
    description:
      "Moradias exclusivas disponíveis para venda.",
    category: "Real Estate",
    provider: "Eden Properties",
    location: "Maputo",
    rating: 4.7,
    reviews: 76,
    verified: true,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 6,
    title: "Clínica Vida",
    description:
      "Consultas médicas presenciais e online.",
    category: "Health",
    provider: "Vida",
    location: "Nampula",
    rating: 4.9,
    reviews: 654,
    verified: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
];

const categories = [
  {
    label: "Online Store",
    icon: Store,
  },
  {
    label: "Virtual Office",
    icon: Building2,
  },
  {
    label: "Education",
    icon: GraduationCap,
  },
  {
    label: "Tourism",
    icon: Hotel,
  },
  {
    label: "Real Estate",
    icon: Home,
  },
  {
    label: "Health",
    icon: Stethoscope,
  },
  {
    label: "Business",
    icon: Briefcase,
  },
];

export default function FeaturedServices() {
  return (
    <section className="space-y-8">

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
        className="flex flex-wrap items-center justify-between gap-6"
      >

        <div>

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">

            Marketplace

          </span>

          <h2 className="mt-5 text-4xl font-black text-white">

            Serviços em Destaque

          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">

            Descubra alguns dos serviços mais relevantes
            disponíveis atualmente dentro do ecossistema
            eSocial Services.

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

          Ver Todos

          <ArrowRight size={18} />

        </motion.button>

      </motion.div>

      <div className="flex flex-wrap gap-3">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <button
              key={category.label}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-zinc-900
                px-5
                py-3
                text-sm
                font-semibold
                text-zinc-300
                transition
                hover:border-cyan-500
                hover:text-cyan-400
              "
            >

              <Icon size={18} />

              {category.label}

            </button>

          );

        })}

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {featuredServices.slice(0,3).map((service,index)=>(

          <motion.div
            key={service.id}
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
              delay:index*.08,
            }}
          >

            <ServiceCard
    id={String(service.id)}
    title={service.title}
    description={service.description}
    image={service.image}
    category={service.category}
    provider={service.provider}
    location={service.location}
    rating={service.rating}
    reviews={service.reviews}
    verified={service.verified}
    featured={service.featured}
/>

          </motion.div>

        ))}

      </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {featuredServices.slice(3).map((service, index) => (

            <motion.div
              key={service.id}
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
                delay: index * .08,
              }}
            >

              <ServiceCard
    id={String(service.id)}
    title={service.title}
    description={service.description}
    image={service.image}
    category={service.category}
    provider={service.provider}
    location={service.location}
    rating={service.rating}
    reviews={service.reviews}
    verified={service.verified}
    featured={service.featured}
/>

            </motion.div>

          ))}

        </div>

        {/* Recommended */}

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

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div>

              <h2 className="text-3xl font-black text-white">

                Serviços Recomendados para Você

              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">

                O sistema inteligente da eSocial analisará
                futuramente os seus interesses, pesquisas,
                localização e histórico de utilização para
                recomendar automaticamente os melhores
                serviços disponíveis.

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
                rounded-2xl
                bg-cyan-500
                px-8
                py-4
                font-bold
                text-black
              "
            >

              Ver Recomendações

            </motion.button>

          </div>

        </motion.div>

        {/* Marketplace Numbers */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Serviços",
              value: "0",
            },
            {
              title: "Prestadores",
              value: "0",
            },
            {
              title: "Clientes",
              value: "0",
            },
            {
              title: "Categorias",
              value: "13",
            },
          ].map((item) => (

            <motion.div
              key={item.title}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-zinc-950
                p-6
                text-center
              "
            >

              <p className="text-zinc-500">

                {item.title}

              </p>

              <h3 className="mt-4 text-4xl font-black text-cyan-400">

                {item.value}

              </h3>

            </motion.div>

          ))}

        </div>

        {/* Become Provider */}

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
            p-12
            text-center
          "
        >

          <h2 className="text-4xl font-black text-white">

            Torne-se um Prestador de Serviços

          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">

            Crie a sua Loja Online, Escritório Virtual,
            publique cursos, organize eventos, anuncie
            imóveis, ofereça serviços profissionais e faça
            parte do maior ecossistema digital da
            EdenKingDom.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .96,
              }}
              className="
                rounded-2xl
                bg-cyan-500
                px-8
                py-4
                font-bold
                text-black
              "
            >

              Criar Serviço

            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .96,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                px-8
                py-4
                font-semibold
                text-white
                hover:border-cyan-500
              "
            >

              Saber Mais

            </motion.button>

          </div>

        </motion.div>

      </section>

    );

}