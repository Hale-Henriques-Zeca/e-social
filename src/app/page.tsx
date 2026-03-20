import Link from "next/link";
import ESocialDivisionCards from "@/components/ESocialDivisionCards";
import EEDCard from "@/components/EEDCard";
import HeroSocial from "@/components/social/HeroSocial";
import HeroButtons from "@/components/HeroButtons";
import OfficialAnnouncement from "@/components/OfficialAnnouncement";
import ESocialNowSection from "@/components/ESocialNowSection";


export default function Home() {
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

<OfficialAnnouncement />

        {/* HERO CINEMATOGRÁFICO */}
        <section className="min-h-screen flex items-center px-8 max-w-7xl mx-auto">
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
