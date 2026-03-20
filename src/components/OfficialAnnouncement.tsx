"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane, FaTwitter, FaDiscord, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function OfficialAnnouncement() {
  return (
    <section className="relative w-full bg-black text-gray-200 py-24 px-6 flex justify-center overflow-hidden">

      {/* 🔮 FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#0F766E]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#B11226]/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            📢 <span className="text-red-600">Comunicado Oficial</span>
          </h2>

          <p className="text-gray-400 text-lg">
            EdenKingDom & E-Coin • E-Social
          </p>
        </motion.div>

        {/* CARD PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0B0B0B]/80 border border-gray-700 rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >

          <div className="space-y-6 leading-relaxed text-sm md:text-base">

            <p>
              É com grande satisfação que anunciamos oficialmente aos nossos apoiadores,
              investidores e à comunidade global que o website de doações da EdenKingDom
              já foi lançado com sucesso:
            </p>

            <a
              href="https://esocial.edenkingdom.org"
              target="_blank"
              className="block text-center text-lg font-semibold text-teal-400 hover:underline"
            >
              🌐 https://esocial.edenkingdom.org
            </a>

            <p>
              Este marco representa um passo fundamental na concretização da nossa missão
              humanitária e no compromisso assumido com todos vocês.
            </p>

            {/* DIVISÃO */}
            <div className="border-t border-gray-700 pt-6">

              <h3 className="text-red-500 font-semibold mb-2">
                ⏳ Início das Doações
              </h3>

              <p>
                O sistema de doações estará ativo em breve, permitindo iniciar,
                já a partir de <span className="text-white font-semibold">Abril de 2026</span>,
                os primeiros projetos de ajuda humanitária.
              </p>

            </div>

            {/* COMPROMISSO */}
            <div className="border-t border-gray-700 pt-6">

              <h3 className="text-teal-400 font-semibold mb-2">
                🤝 Compromisso Cumprido
              </h3>

              <p>
                A equipe da EdenKingDom, em conjunto com o ecossistema E-Coin,
                dará início às suas operações sociais com foco em impacto real,
                transparência e resultados concretos.
              </p>

            </div>

            {/* FOCO */}
            <div className="border-t border-gray-700 pt-6">

              <h3 className="text-yellow-400 font-semibold mb-2">
                🌍 Foco Inicial – Moçambique
              </h3>

              <p>
                Os primeiros esforços serão direcionados para Moçambique,
                país de origem do nosso líder{" "}
                <span className="text-white font-semibold">Hale Zeca</span>, reconhecido pelo seu papel fundamental na expansão e propagação internacional do projeto E-Coin.
              </p>

              <p className="mt-2">
               Diante dos desafios enfrentados pela população do seu país, incluindo{" "}
                <span className="text-red-400 font-semibold">
                  inundações severas e ciclones devastadores
                </span>,
                a EdenKingDom atuará diretamente no apoio às comunidades afetadas, promovendo assistência emergencial, reconstrução e suporte contínuo.
              </p>

            </div>

            {/* VISÃO */}
<div className="border-t border-gray-700 pt-6">

  <h3 className="text-blue-400 font-semibold mb-2">
    🚀 Visão de Futuro
  </h3>

  <p>
    Este é apenas o começo. A EdenKingDom expandirá as suas ações humanitárias a nível global, levando esperança, dignidade e desenvolvimento sustentável às populações mais vulneráveis.

    Valorizamos profundamente cada líder de comunidade que dedica o seu tempo e esforço na promoção dos nossos produtos, marcas e serviços. São vocês que tornam esta missão possível.

    No futuro, os líderes mais comprometidos terão a oportunidade de ver a EdenKingDom atuar diretamente nos seus países, respondendo a necessidades reais com intervenções rápidas, estruturadas e impactantes.

    A sua dedicação de hoje constrói o amanhã da sua comunidade. <p className="mt-3 text-teal-400 font-semibold">
                 EdenKingDom — juntos por um mundo mais justo.
              </p>
  </p>

</div>

            {/* AGRADECIMENTO */}
            <div className="border-t border-gray-700 pt-6">

              <h3 className="text-white font-semibold mb-2">
                🙏 Agradecimento
              </h3>

              <p>
                A todos os apoiadores, parceiros e membros da comunidade:
                o vosso apoio torna esta missão possível.
              </p>

              <p className="mt-3 text-teal-400 font-semibold">
                Juntos, estamos a transformar tecnologia em impacto social real.
              </p>

            </div>

          </div>

          {/* FRASE FINAL */}
          <div className="text-center mt-10 border-t border-gray-700 pt-6">
            <p className="text-gray-400 italic">
              “Construindo um futuro mais justo, através da inovação e solidariedade.”
            </p>
          </div>

        </motion.div>
     
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4 text-red-500"
          >
            {/* TEXTO */}
            <p className="text-sm text-gray-400">
              Conecte-se à comunidade E-Social
            </p>
      
            {/* ICONES */}
            <div className="flex justify-center gap-6 text-2xl">
      
              {/* TELEGRAM GRUPO */}
              <a
                href="https://t.me/+Y828rPGId603Y2Jk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition hover:scale-110"
              >
                <FaTelegramPlane />
              </a>
      
              {/* TELEGRAM CANAL */}
              <a
                href="https://t.me/esocial2025"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition hover:scale-110"
              >
                <FaTelegram />
              </a>
      
              {/* TWITTER */}
              <a
                href="https://x.com/CoinE28810"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition hover:scale-110"
              >
                <FaTwitter />
              </a>
      
              {/* WHATSAPP */}
              <a
                href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
      
            {/* EFEITO VISUAL */}
            <BsStars className="text-3xl mt-4 animate-pulse text-red-500" />
      
          </motion.div>
           </div>
    </section>
    
  );
}