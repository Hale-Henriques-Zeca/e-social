export default function EducationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-200">

      {/* 🎬 FUNDO CINEMATOGRÁFICO DO SABER */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(20,184,166,0.12),transparent_60%)]" />
      </div>

      {/* CONTEÚDO */}
      <section className="relative z-10 px-8 py-28 max-w-6xl mx-auto">

        {/* HERO */}
        <div className="mb-32">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-6">
            EdenKingDom Social Schools (ESS)
          </h1>

          <p className="text-gray-300 max-w-4xl leading-relaxed text-lg">
            Alfabetização gratuita, formação comercial e ensino técnico-profissional
            estruturado para reintegração social, dignidade humana e empregabilidade real.
          </p>

          <div className="mt-10 h-[2px] w-40 bg-gradient-to-r from-teal-400 to-transparent" />
        </div>

        {/* 🔰 CAMINHO EDUCACIONAL */}
        <div className="space-y-32">

          {/* 📖 LITERACY — INÍCIO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                📖 E-Social Literacy School
              </h2>

              <p className="text-gray-200 mb-4">
                Escola de alfabetização gratuita e obrigatória para jovens e adultos,
                destinada à erradicação do analfabetismo funcional.
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Subsídios diários de aprendizagem;</li>
                <li>Currículo focado em leitura, escrita e reintegração social;</li>
                <li>Duração flexível conforme progresso;</li>
              </ul>

              <p className="text-gray-200">
                📘 Diferencial: equivalência direta à <strong>5ª Classe</strong> e
                acesso automático à E-Social Commercial School.
              </p>
            </div>

            <div className="text-teal-400 text-8xl font-extrabold text-right">
              1
            </div>
          </div>

          {/* 💼 COMMERCIAL — EVOLUÇÃO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-teal-400 text-8xl font-extrabold">
              2
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                💼 E-Social Commercial School
              </h2>

              <p className="text-gray-200 mb-4">
                Formação comercial básica gratuita para graduados da Literacy School.
              </p>

              <p className="text-gray-200 mb-4">
                Capacita para atividades económicas reais: comércio, artesanato,
                agricultura, costura, serviços e pequenos negócios.
              </p>

              <p className="text-gray-200">
                📘 Diferencial: prémio financeiro final (cheque bancário) e
                inserção económica imediata.
              </p>
            </div>
          </div>

          {/* 🏭 INDUSTRIAL — CONSOLIDAÇÃO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                🏭 E-Social Industrial School
              </h2>

              <p className="text-gray-200 mb-4">
                Ensino técnico-profissional básico orientado a áreas industriais
                e técnicas essenciais.
              </p>

              <p className="text-gray-200 mb-4">
                Engenharia básica, energia, manufatura, transporte,
                hotelaria e tecnologia aplicada.
              </p>

              <p className="text-gray-200">
                📘 Diferencial: equivalência à <strong>10ª Classe</strong> e
                preparação para ensino médio técnico.
              </p>
            </div>

            <div className="text-teal-400 text-8xl font-extrabold text-right">
              3
            </div>
          </div>

          {/* 🎓 PROFESSIONAL — TOPO */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#0B0B0B]/70 p-12 rounded-2xl border border-teal-400/40">
            <div className="text-teal-300 text-8xl font-extrabold">
              4
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                🎓 E-Social Professional Institute
              </h2>

              <p className="text-gray-200 mb-4">
                Ensino técnico-profissional médio com currículo avançado,
                disciplinas estruturadas e avaliação formal.
              </p>

              <p className="text-gray-200">
                📘 Diferencial máximo: equivalência à <strong>12ª Classe</strong> e
                <strong> acesso direto à universidade ou faculdade</strong>,
                dentro ou fora da EdenKingDom.
              </p>
            </div>
          </div>

        </div>


      </section>
    </div>
  );
}
