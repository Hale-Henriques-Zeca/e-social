"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";

// ÍCONES PREMIUM
import { 
  Users, 
  QrCode, 
  Wallet, 
  History, 
  Award, 
  Coins, 
  Sparkles,
  ArrowRight,
  TrendingUp
} from "lucide-react";

// SEUS COMPONENTES EXISTENTES
import ReferralStats from "./ReferralStats";
import ReferralLinkCard from "./ReferralLinkCard";
import InviteHistory from "./InviteHistory";
import VirtualWallet from "./VirtualWallet";
import ClaimPanel from "./ClaimPanel";
import CreateCodeModal from "./CreateCodeModal";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao carregar os dados do ecossistema.");
  }
  return response.json();
};

function InviteDashboardContent() {
  const [mounted, setMounted] = useState(false);
  
  // 🗂️ ESTADO GLOBAL DE ABAS (Navegação Luxuosa)
  const [activeTab, setActiveTab] = useState<"geral" | "codigo" | "carteira" | "historico">("geral");
  const [walletView, setWalletView] = useState<"leader" | "user">("leader");

  const { data } = useSWR("/api/invite/dashboard", fetcher);
  const dashboard = data?.dashboard;

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-[#020205] flex flex-col items-center justify-center text-gray-400 font-mono text-xs gap-3">
        <div className="w-6 h-6 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        <span className="uppercase tracking-[0.2em] text-[#D4AF37]/70">A sincronizar dados na BlockChain...</span>
      </div>
    );
  }

  // Itens do Menu com Semântica de Alta Fidelidade
  const menuItems = [
    { id: "geral", label: "Visão Geral", icon: Users, color: "text-[#D4AF37]", glow: "rgba(212,175,55,0.15)" },
    { id: "codigo", label: "Links", icon: QrCode, color: "text-blue-400", glow: "rgba(96,165,250,0.15)" },
    { id: "carteira", label: "Saque", icon: Wallet, color: "text-purple-400", glow: "rgba(192,132,252,0.15)" },
    { id: "historico", label: "Histórico", icon: History, color: "text-emerald-400", glow: "rgba(52,211,153,0.15)" },
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-gray-300 pt-24 pb-24 lg:pb-12 px-4 lg:px-8 font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Efeito Aurora de Fundo Vivo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#13122b,transparent)] pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* =========================================================================
            1. SIDEBAR DE NAVEGAÇÃO (DESKTOP & TABLET)
           ========================================================================= */}
        <aside className="hidden lg:flex flex-col w-72 bg-[#090a14]/60 border border-white/5 rounded-3xl p-4 h-fit sticky top-28 gap-2 backdrop-blur-xl">
          <div className="px-3 py-3 mb-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#D4AF37]" />
              <span className="font-black tracking-[0.2em] text-[11px] text-white/90 uppercase">Afiliados Web3</span>
            </div>
            <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase tracking-wider animate-pulse">
              Live
            </div>
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                  isActive 
                    ? "bg-white/5 text-white border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
                    : "text-white/40 hover:bg-white/[0.02] hover:text-white/80 border border-transparent"
                }`}
                style={{
                  boxShadow: isActive ? `0 10px 30px -10px ${item.glow}` : undefined
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className={isActive ? item.color : "text-gray-500 group-hover:text-gray-300 transition-colors"} />
                  <span>{item.label}</span>
                </div>
                <ArrowRight size={12} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${item.color}`} />
              </button>
            );
          })}
        </aside>

        {/* =========================================================================
            2. CONTEÚDO DINÂMICO REATIVO (PAINEL VIVO)
           ========================================================================= */}
        <section className="flex-1 min-w-0 space-y-8">
          
          {/* BANNER HEADER ULTRA LUXURY */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#090a14] to-[#040408] border border-white/5 rounded-3xl p-8 backdrop-blur-xl text-center lg:text-left flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent pointer-events-none rounded-full blur-3xl" />
            
            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black tracking-widest uppercase mb-1">
                <Sparkles size={12} className="animate-spin-slow" /> Sistema de Recompensas por convidar membros da eSocial
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight">
                Centro de <span className="text-[#D4AF37]">Convites</span>
              </h1>
              <p className="text-gray-400 text-xs md:text-sm max-w-xl leading-relaxed">
                Maximize os seus rendimentos expandindo a rede. Receba comissões diretas de participação em <span className="text-[#D4AF37] font-semibold">E-Coin</span> e faça o resgate em tempo real para a sua carteira web3 na blockchain.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl relative z-10 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                <Coins className="text-[#D4AF37]" size={20} />
              </div>
              <div className="text-left font-mono">
                <p className="text-[9px] uppercase tracking-wider text-gray-500">Distribuição Global</p>
                <p className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <TrendingUp size={12} /> Instantâneo na BlockChain
                </p>
              </div>
            </div>
          </motion.div>

          {/* RENDERIZAÇÃO DAS ABAS COM ANIMAÇÃO FADE-IN */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* ABA 1: VISÃO GERAL */}
              {activeTab === "geral" && (
                <div className="space-y-8">
                  <ReferralStats />
                  
                </div>
              )}

              {/* ABA 2: MEUS CÓDIGOS */}
              {activeTab === "codigo" && (
                <div className="max-w-3xl mx-auto">
                  <ReferralLinkCard
                    inviteCode={dashboard.user.inviteCode}
                    active={dashboard.user.active}
                    createdAt={dashboard.user.createdAt}
                    totalInvites={dashboard.stats.totalInvites}
                  />
                  <div className="mt-6 flex justify-center">
                    <CreateCodeModal />
                  </div>
                </div>
              )}

              {/* ABA 3: CARTEIRA VIRTUAL & CLAIM COM SWITCH DE LUXO */}
{activeTab === "carteira" && (
  <div className="space-y-8">
    {/* SWITCHER DE ESTADO */}
    <div className="flex bg-[#090a14]/60 p-1 rounded-2xl border border-white/5 max-w-sm mx-auto">
      <button
        onClick={() => setWalletView("leader")}
        className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
          walletView === "leader" 
            ? "bg-[#D4AF37] text-black shadow-lg" 
            : "text-gray-500 hover:text-white"
        }`}
      >
        Líder
      </button>
      <button
        onClick={() => setWalletView("user")}
        className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
          walletView === "user" 
            ? "bg-[#D4AF37] text-black shadow-lg" 
            : "text-gray-500 hover:text-white"
        }`}
      >
        Liderado
      </button>
    </div>

    {/* CONTEÚDO DINÂMICO DO SWITCH */}
    <motion.div
      key={walletView}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.3 }}
    >
      {walletView === "leader" ? (
        <VirtualWallet 
          available={dashboard.wallet.available}
          processingFee={dashboard.wallet.processingFee}
        />
      ) : (
        <ClaimPanel
          available={dashboard.wallet.available}
          processingFee={dashboard.wallet.processingFee}
        />
      )}
    </motion.div>
  </div>
)}

              {/* ABA 4: HISTÓRICO DE CONVITES */}
              {activeTab === "historico" && (
                <div className="bg-[#090a14]/30 border border-white/5 rounded-3xl p-2">
                  <InviteHistory invites={dashboard.history} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* FOOTER CORPORATIVO */}
          <div className="text-center text-gray-600 text-[10px] pt-12 border-t border-white/5 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span>© EdenKingDom Corporation — Secured Network Engine</span>
          </div>

        </section>
      </div>

      {/* =========================================================================
          3. BARRA DE NAVEGAÇÃO FLUTUANTE (MOBILE & SMARTPHONE)
         ========================================================================= */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#06060c]/95 border-t border-white/10 backdrop-blur-lg z-50 px-2 py-2.5 flex items-center justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-all duration-300 ${
                isActive ? "text-white scale-105" : "text-white/30"
              }`}
            >
              <div className={`p-1 rounded-xl transition-all ${isActive ? "bg-white/5 border border-white/10 text-white" : ""}`}>
                <Icon size={18} className={isActive ? item.color : "text-gray-500"} />
              </div>
              <span className="text-[9px] font-bold tracking-tight uppercase">{item.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </nav>

    </div>
  );
}

export default function InviteDashboard() {
  return (
    <InviteDashboardContent />
  );
}