"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const divisions = [
  {
    name: "eHope",
    desc: "Orfanato & desenvolvimento infantil",
    href: "/ehope",
  },
  {
    name: "eRise",
    desc: "Reintegração social e produtiva",
    href: "/erise",
  },
  {
    name: "eSolidarity",
    desc: "Ajuda humanitária global",
    href: "/esolidarity",
  },
  {
    name: "Educação Social",
    desc: "Literacy, Commercial & Technical",
    href: "/eeducation",
  },
  {
    name: "eCare",
    desc: "Saúde mental, aconselhamento e apoio",
    href: "/ecare",
  },
  {
    name: "eGeriatric",
    desc: "Vida assistida com dignidade",
    href: "/egeriatric",
  },
];

export default function ESocialDivisionCards() {
  return (
    <section className="grid md:grid-cols-3 gap-8">
      {divisions.map((div, i) => (
        <motion.div
          key={div.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.04 }}
          className="bg-[#1a1a1a]/80 border border-gray-700 rounded-2xl p-6 backdrop-blur"
        >
          <h3 className="text-xl font-bold text-red-500 mb-2">
            {div.name}
          </h3>

          <p className="text-gray-300 text-sm mb-6">
            {div.desc}
          </p>

          <Link
            href={div.href}
            className="block text-center w-full py-2 rounded-xl font-semibold
                       bg-gradient-to-r from-[#0F766E] to-[#14b8a6]
                       text-black hover:brightness-110 transition"
          >
            Acessar
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
