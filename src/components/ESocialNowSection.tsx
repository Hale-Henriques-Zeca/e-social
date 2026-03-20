"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const categories = [
  { id: "all", name: "Tudo" },
  { id: "donations", name: "Doações" },
  { id: "emergency", name: "Emergência" },
  { id: "projects", name: "Projetos" },
  { id: "impact", name: "Impacto" },
  { id: "global", name: "Global" },
];

const mockNews = [
  {
    id: 1,
    title: "Plataforma de doações E-Social lançada oficialmente",
    category: "DOAÇÕES",
    date: "Mar 2026",
  },
  {
    id: 2,
    title: "Primeiras missões humanitárias iniciam em Moçambique",
    category: "EMERGÊNCIA",
    date: "Abr 2026",
  },
  {
    id: 3,
    title: "EdenKingDom ativa sistema de transparência on-chain",
    category: "IMPACTO",
    date: "Abr 2026",
  },
  {
    id: 4,
    title: "Programa de reconstrução pós-ciclone em desenvolvimento",
    category: "PROJETOS",
    date: "Abr 2026",
  },
  {
    id: 5,
    title: "Expansão global da E-Social prevista para novas regiões",
    category: "GLOBAL",
    date: "2026",
  },
];

export default function ESocialNowSection() {
  const [selected, setSelected] = useState("all");
  const [news, setNews] = useState(mockNews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 🔗 FUTURO (Supabase / API real)
        // const { data } = await supabase.from("esocial_news").select("*")
        // if (data) setNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const filteredNews =
    selected === "all"
      ? news
      : news.filter((item) =>
          item.category.toLowerCase().includes(selected.toLowerCase())
        );

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 flex flex-col items-center overflow-hidden">

      {/* 🔮 FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(177,18,38,0.25),transparent_60%)]" />
      </div>

      {/* HEADER */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            E-Social <span className="text-red-600">Agora</span>
          </motion.h2>

          <p className="text-gray-400 mt-2 text-base">
            Atualizações em tempo real da missão humanitária EdenKingDom.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border border-red-600/50 text-red-500 px-5 py-2 rounded-full hover:bg-red-600/20 transition"
        >
          Ver tudo →
        </motion.button>
      </div>

      {/* GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* SIDEBAR */}
        <div className="col-span-1 border border-gray-800 rounded-xl p-6 bg-[#0D0D0D]/60">
          <h3 className="text-lg font-semibold mb-4 text-teal-400">
            Categorias
          </h3>

          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setSelected(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selected === cat.id
                      ? "bg-teal-500/20 text-teal-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* FEED */}
        <div className="col-span-3 border border-gray-800 rounded-xl bg-[#0D0D0D]/60">

          {loading ? (
            <p className="text-center text-gray-400 py-10">
              A carregar atualizações...
            </p>
          ) : (
            <div className="divide-y divide-gray-800">

              {filteredNews.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{
                    backgroundColor: "rgba(177,18,38,0.08)",
                    scale: 1.01,
                  }}
                  className="flex justify-between items-center px-6 py-5 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-6">

                    <span className="text-gray-600 w-4">{i + 1}</span>

                    <div>
                      <h4 className="text-white font-medium hover:text-red-500 transition">
                        {item.title}
                      </h4>

                      <p className="text-sm text-gray-400">
                        Categoria: {item.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-teal-400 text-sm font-semibold">
                    {item.date}
                  </span>

                </motion.div>
              ))}

            </div>
          )}
        </div>
      </div>
    </section>
  );
}