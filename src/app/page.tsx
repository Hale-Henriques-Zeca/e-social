"use client"


import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ESocialDivisionCards from "@/components/ESocialDivisionCards";
import EEDCard from "@/components/EEDCard";
import HeroSocial from "@/components/social/HeroSocial";
import HeroButtons from "@/components/HeroButtons";
import OfficialAnnouncement from "@/components/OfficialAnnouncement";
import ESocialNowSection from "@/components/ESocialNowSection";


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-gray-200">

      {/* 🔮 FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0B] to-[#2A2A2A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(177,18,38,0.25),transparent_60%)]" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10">

 <section className="max-w-3xl mx-auto w-full">

  <HeroSocial />
  </section>

<HeroButtons />


{/* Manifesto Official da EdenKingDom Corporation / Modal */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-10 rounded-full hover:opacity-90 transition"
        >
          ⚖️ Manifesto Official da EdenKingDom Corporation
        </button>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0a0a]/90 border border-[#00FF9C]/30 rounded-2xl p-8 max-w-lg text-center shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-[#00FF9C] mb-4">
              ⚖️ Manifesto Official da EdenKingDom Corporation
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
  A EdenKingDom Corporation é uma entidade global, independente e multissetorial,
  regida por princípios universais de legalidade, ética, sustentabilidade e
  soberania institucional. Não competimos por especulação nem por preços
  artificiais: operamos com excelência técnica, ciência aplicada e responsabilidade
  social real.
  <br /><br />
  Atuamos acima de ideologias políticas, religiosas ou interesses individuais.
  Nossa estrutura responde exclusivamente ao Conselho Central, preservando a
  integridade, a continuidade e a inviolabilidade corporativa em todas as
  jurisdições onde operamos.
  <br /><br />
  A participação pública ocorre de forma inclusiva e transparente através de
  modelos sem direito a voto <span className="text-[#D4AF37] font-semibold">Buy Your Seat</span> na sessão dos acionistas, assegurando prosperidade compartilhada sem
  interferência política interna. Servimos à vida, à verdade e ao progresso humano
  sustentável.
</p>

            <a
            href="https://www.edenkingdom.org/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#f5d97e] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-lg"
          >
            📜 Visite o whitepaper da EdenKingDom Corporation
          </a>
          </div>
        </div>
      )}
          
        {/* Link para o site oficial */}
        <div className="text-center mt-8">
          <a
            href="https://edenkingdom.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#f5d97e] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-lg"
          >
            🌐 Visite a EdenKingDom Corporation Official
          </a>
        </div>
      

{/* SEPARADOR*/}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B11226]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#0F766E]/80">
    EdenKingDom Social (E-Social) humanitarian division
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B11226]/40 to-transparent" />
</div>

<OfficialAnnouncement />


        {/* HERO CINEMATOGRÁFICO */}
       <section className="min-h-screen flex items-center px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-red-600 mb-8 leading-tight">
              E-Social
            </h1>

            <p className="text-2xl text-gray-300 mb-10">
              A expressão humana da EdenKingDom.  
              Uma infraestrutura social on-chain que une
              <span className="text-teal-400"> tecnologia</span>,
              <span className="text-teal-400"> transparência</span> e
              <span className="text-teal-400"> dignidade humana</span>.
            </p>

            <div className="flex gap-6">
              <Link
                href="/donate"
                className="bg-red-600 px-8 py-4 rounded text-white font-semibold hover:bg-red-700 transition"
              >
                Doar Agora
              </Link>

              <Link
                href="/dashboard"
                className="border border-gray-600 px-8 py-4 rounded hover:bg-gray-900 transition"
              >
                Transparência Pública
              </Link>
            </div>
          </div>
        </section>

<ESocialNowSection /> 

        {/* MISSÃO / VALORES */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Vida",
                desc: "A vida é o valor supremo. Nenhuma tecnologia existe acima da dignidade humana.",
              },
              {
                title: "Verdade",
                desc: "Blockchain, auditoria aberta e transparência absoluta em cada ação social.",
              },
              {
                title: "Continuidade",
                desc: "Construímos hoje os sistemas que protegerão as próximas gerações.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0B0B0B]/80 backdrop-blur border border-gray-700 p-8 rounded-xl"
              >
                <h3 className="text-teal-400 text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVISÕES */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
  <h2 className="text-4xl font-semibold mb-16">
    Estrutura Institucional E-Social
  </h2>

  <ESocialDivisionCards />

  
</section>



        {/* ON-CHAIN */}
        <section className="py-32 px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Transparência On-Chain
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Todas as doações são processadas por smart contracts auditáveis.
            Nenhuma decisão é invisível. Nenhum fundo é oculto.
          </p>

          <Link
            href="/dashboard"
            className="text-red-500 underline text-lg"
          >
            Ver Dashboard Público
          </Link>
        </section>

<div className="mt-16">
  <h2 className="text-3xl font-semibold mb-8 text-teal-400 text-center">
    Empreendedorismo & Inovação
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
  <div className="md:col-start-2">
    <EEDCard />
  </div>
</div>
</div>

        {/* FRASE FINAL */}
        <section className="py-40 text-center px-8">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
            “E-Social é a expressão humana da EdenKingDom.
            Onde tecnologia, transparência e responsabilidade social se encontram.”
          </p>

<h1 className="text-4xl font-bold text-red-600 mb-6">
        Socialização EdenKingDom (S)
      </h1>

     <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
        Rede social institucional.  
        Partilha, comunicação, serviços profissionais e impacto humano,
        tudo integrado ao ecossistema EdenKingDom.
      </p>

          <Link
        href="/social"
        className="block text-center w-full py-3 rounded-xl font-semibold
        bg-gradient-to-r from-[#B11226] to-[#0F766E]
        text-white hover:brightness-110 transition"
      >
        Aceder à Social (S)
      </Link>

        </section>

      </div>
    </div>
  );
}
