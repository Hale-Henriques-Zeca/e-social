"use client";

import { useState } from "react";

export default function SocialPage() {
  const [tab, setTab] = useState("feed");

  return (
    <div className="min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0B0B0B] border-r border-gray-800 p-6 hidden md:block">

        <h2 className="text-2xl font-bold text-red-600 mb-10">
          S
        </h2>

        <div className="space-y-4 text-sm">

          <button onClick={() => setTab("feed")} className="block text-left w-full hover:text-teal-400">
            📰 Feed
          </button>

          <button onClick={() => setTab("chat")} className="block text-left w-full hover:text-teal-400">
            💬 Chat
          </button>

          <button onClick={() => setTab("live")} className="block text-left w-full hover:text-teal-400">
            🎥 Live / TV
          </button>

          <button onClick={() => setTab("profile")} className="block text-left w-full hover:text-teal-400">
            👤 Perfil
          </button>

          <button onClick={() => setTab("professional")} className="block text-left w-full hover:text-teal-400">
            💼 Profissional
          </button>

        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">

        {/* FEED */}
        {tab === "feed" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Feed Social</h1>

            <textarea
              placeholder="Partilha algo com a comunidade..."
              className="w-full p-4 bg-black border border-gray-700 rounded mb-4"
            />

            <button className="bg-red-600 px-6 py-2 rounded mb-6">
              Publicar
            </button>

            {/* POSTS */}
            <div className="space-y-4">

              <div className="bg-[#1a1a1a] p-4 rounded-xl">
                <p className="text-sm text-gray-400">Hale</p>
                <p>Bem-vindos à rede social EdenKingDom 🚀</p>
              </div>

            </div>
          </div>
        )}

        {/* CHAT */}
        {tab === "chat" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Chat</h1>

            <div className="bg-[#1a1a1a] p-4 rounded h-80 mb-4 overflow-y-auto">
              <p className="text-gray-400">Nenhuma conversa ainda</p>
            </div>

            <input
              placeholder="Escreve mensagem..."
              className="w-full p-3 bg-black border border-gray-700 rounded"
            />
          </div>
        )}

        {/* LIVE */}
        {tab === "live" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Live & TV</h1>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-[#1a1a1a] p-6 rounded">
                🎥 Iniciar Live
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded">
                📺 Aulas / Reuniões
              </div>

            </div>
          </div>
        )}

        {/* PERFIL */}
        {tab === "profile" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Perfil</h1>

            <div className="bg-[#1a1a1a] p-6 rounded">

              <p className="text-lg font-semibold">Hale Zeca</p>
              <p className="text-gray-400">Visionário • EdenKingDom</p>

              <div className="flex gap-6 mt-4 text-sm">
                <span>👥 120 Seguidores</span>
                <span>📌 32 Posts</span>
              </div>

            </div>
          </div>
        )}

        {/* PROFISSIONAL */}
        {tab === "professional" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Perfil Profissional
            </h1>

            <div className="bg-[#1a1a1a] p-6 rounded">

              <p className="font-semibold mb-2">
                Engenheiro / Empreendedor
              </p>

              <p className="text-gray-400 mb-4">
                Disponível para consultoria e serviços.
              </p>

              <button className="bg-teal-500 px-4 py-2 rounded">
                Contactar
              </button>

            </div>
          </div>
        )}

      </main>

    </div>
  );
}