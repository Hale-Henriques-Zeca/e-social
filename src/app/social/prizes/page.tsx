"use client";

import { Trophy, Coins, Users, TrendingUp, Sparkles } from "lucide-react";

export default function PrizesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-black flex items-center gap-3">
            <Trophy className="text-yellow-500" size={40} />
            Fundo de Prémios
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            O Fundo de Prémios eSocial recompensará criadores,
            empreendedores, comunidades e utilizadores ativos da plataforma.
          </p>
        </div>

        {/* HERO */}

        <div className="bg-gradient-to-r from-yellow-600/20 to-red-600/20 border border-yellow-500/30 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-4">
            Monetização em Desenvolvimento
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Em breve os utilizadores poderão gerar rendimentos através
            da criação de conteúdo, participação comunitária,
            crescimento de audiência, referências e integração com o
            ecossistema EdenKingDom.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
            <Coins size={32} className="text-yellow-500 mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Creator Fund
            </h3>

            <p className="text-sm text-gray-400">
              Programa de recompensas para criadores de conteúdo da plataforma.
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
            <Users size={32} className="text-blue-500 mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Comunidade
            </h3>

            <p className="text-sm text-gray-400">
              Incentivos para utilizadores que contribuam para o crescimento
              saudável da rede.
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
            <TrendingUp size={32} className="text-green-500 mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Performance
            </h3>

            <p className="text-sm text-gray-400">
              Métricas futuras baseadas em alcance, participação e engajamento.
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
            <Sparkles size={32} className="text-purple-500 mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Ecossistema eCoin e eDollar
            </h3>

            <p className="text-sm text-gray-400">
              Integração futura com eCoin, eDollar, Staking,
              Mining e ecnTrading AI.
            </p>
          </div>

        </div>

        {/* FUTURO */}

        <div className="bg-[#111] border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Funcionalidades Futuras
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Monetização de Conteúdo
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Creator Fund eSocial
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Recompensas por Participação
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Integração eCoin e eDollar
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              IA Trading e Programas de Ganhos
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Programas Empresariais e Comunidades Premium
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}