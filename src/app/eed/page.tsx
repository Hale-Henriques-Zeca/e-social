export default function EEDPage() {
  return (
    <section className="min-h-screen px-8 py-24 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold text-teal-400 mb-8">
        EED — Empreendedorismo EdenKingDom
      </h1>

      <p className="text-gray-300 max-w-3xl mb-12 text-lg">
        A Divisão de Empoderamento Empreendedor capacita visionários a
        criar negócios sustentáveis, com suporte estratégico,
        tecnológico e estrutural da EdenKingDom.
      </p>

      {/* MISSÃO */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">
          Missão
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Incentivar o pensamento empreendedor</li>
          <li>Criar negócios sustentáveis</li>
          <li>Promover inovação económica</li>
          <li>Desenvolver economias locais</li>
        </ul>
      </div>

      {/* PRINCÍPIO */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-400 mb-4">
          Princípio Fundamental
        </h2>

        <p className="text-gray-300">
          A EdenKingDom não cria empreendedores — capacita visionários.
        </p>
      </div>

      {/* APOIOS */}
      <div className="mb-16 grid md:grid-cols-2 gap-8">

        <div className="bg-[#1a1a1a]/70 p-6 rounded-xl border border-gray-700">
          <h3 className="text-red-500 font-semibold mb-2">
            Apoio Estratégico
          </h3>
          <p className="text-gray-300">
            Modelos de negócio, estrutura organizacional e planeamento.
          </p>
        </div>

        <div className="bg-[#1a1a1a]/70 p-6 rounded-xl border border-gray-700">
          <h3 className="text-teal-400 font-semibold mb-2">
            Apoio Tecnológico
          </h3>
          <p className="text-gray-300">
            Sistemas digitais e infraestrutura moderna.
          </p>
        </div>

        <div className="bg-[#1a1a1a]/70 p-6 rounded-xl border border-gray-700">
          <h3 className="text-red-500 font-semibold mb-2">
            Infraestrutura
          </h3>
          <p className="text-gray-300">
            Equipamentos e estrutura operacional inicial.
          </p>
        </div>

        <div className="bg-[#1a1a1a]/70 p-6 rounded-xl border border-gray-700">
          <h3 className="text-teal-400 font-semibold mb-2">
            Crédito Inicial
          </h3>
          <p className="text-gray-300">
            Financiamento estruturado baseado na viabilidade do projeto.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a
          href="/apply"
          className="bg-red-600 px-10 py-4 rounded text-white font-semibold hover:bg-red-700 transition"
        >
          Submeter Projeto
        </a>
      </div>

    </section>
  );
}