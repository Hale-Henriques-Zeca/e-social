export default function EducationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-200">

      {/* 🎬 FUNDO */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(20,184,166,0.12),transparent_60%)]" />
      </div>

      <section className="relative z-10 px-8 py-28 max-w-6xl mx-auto">

        {/* HERO */}
        <div className="mb-32">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-6">
            EdenKingDom Social Schools (ESS)
          </h1>

          <p className="text-gray-300 max-w-4xl leading-relaxed text-lg">
            Sistema educacional progressivo focado em inclusão, empregabilidade imediata
            e crescimento económico sustentável, com evolução de competências e aumento
            direto de rendimento conforme o nível.
          </p>

          <div className="mt-10 h-[2px] w-40 bg-gradient-to-r from-teal-400 to-transparent" />
        </div>

        {/* 🔰 CAMINHO */}
        <div className="space-y-32">

          {/* 1 */}
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
                📘 Diferencial: equivalência direta à <strong>5ª Classe</strong> e ao mesmo tempo, a porta de entrada para inclusão social e acesso automático ao nível E-Social Commercial School.
              </p>
            </div>



            <div className="text-teal-400 text-8xl font-extrabold text-right">
              1
            </div>
          </div>

          {/* 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-teal-400 text-8xl font-extrabold">2</div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                💼 E-Social Commercial School
              </h2>


               <h2 className="text-2xl font-bold text-white mb-6">
                🎓 Cursos
              </h2>

              <h2 className="text-1xl font-bold text-white mb-6">
               💼 1. Administração, Escritório e Negócios
              </h2>

              <p className="text-gray-200 mb-4">
                Formação prática inicial orientada ao mercado de trabalho e geração de renda imediata.
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Administração e Negócios</li>
                <li>Tecnologia e Digital</li>
                <li>Vendas e Atendimento</li>
                <li>Educação básica profissional</li>
                <li>Direito e serviços sociais</li>
                <li>Artes e criação</li>
                <li>Saúde e bem-estar</li>
                <li>Indústria e logística</li>
                <li>Empreendedorismo</li>
                <li>Pesquisa e ciências humanas</li>
              </ul>

              <p className="text-gray-200 mt-4">
                📈 Início da geração de renda + progressão automática para nível técnico.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                🏭 E-Social Industrial School
              </h2>

              <p className="text-gray-200 mb-4">
                Continuação direta dos mesmos cursos com aprofundamento técnico e prática intensiva.
              </p>

              <p className="text-gray-300 mb-4">
                O estudante mantém a mesma área escolhida, porém com:
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Maior especialização técnica</li>
                <li>Experiência prática real</li>
                <li>Integração com indústria e mercado</li>
                <li>Aumento direto de rendimento</li>
              </ul>

              <p className="text-gray-200 mt-4">
                📘 Equivalência à 10ª Classe
              </p>
            </div>

            <div className="text-teal-400 text-8xl font-extrabold text-right">
              3
            </div>
          </div>

          {/* 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#0B0B0B]/70 p-12 rounded-2xl border border-teal-400/40">
            <div className="text-teal-300 text-8xl font-extrabold">4</div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                🎓 E-Social Professional Institute
              </h2>

              <p className="text-gray-200 mb-4">
                Nível máximo técnico-profissional com domínio completo da área escolhida.
              </p>

              <p className="text-gray-300 mb-4">
                Aqui o mesmo curso iniciado no nível 2 atinge o nível avançado:
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Especialização avançada</li>
                <li>Alta empregabilidade</li>
                <li>Criação de negócio próprio</li>
                <li>Salários elevados</li>
              </ul>

              <p className="text-gray-200 mt-4">
                📘 Equivalência à 12ª Classe + acesso à universidade
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="grid md:grid-cols-2 gap-12 items-center border border-yellow-400/30 p-12 rounded-2xl bg-[#0B0B0B]/70">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                🧑‍🦯 E-Social School for the Blind
              </h2>

              <p className="text-gray-200 mb-4">
                Programa intensivo exclusivo para pessoas cegas com formação completa equivalente
                diretamente ao nível do Instituto (nível 4).
              </p>

              <p className="text-gray-300 mb-4">
                Diferente do modelo progressivo (2 → 4), este programa é:
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Formação direta e intensiva</li>
                <li>Turmas exclusivas</li>
                <li>Alta especialização imediata</li>
                <li>Entrada direta no mercado de trabalho</li>
              </ul>

              <p className="text-gray-300 mb-4">
                Áreas disponíveis:
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Tecnologia (programação, IA, suporte)</li>
                <li>Administração e negócios</li>
                <li>Atendimento e comunicação</li>
                <li>Educação e formação</li>
                <li>Direito e serviços sociais</li>
                <li>Artes, música e produção de áudio</li>
                <li>Saúde (massoterapia e terapias)</li>
                <li>Empreendedorismo digital</li>
                <li>Pesquisa e análise</li>
              </ul>

              <p className="text-gray-200 mt-6">
                ⚙️ Totalmente assistido por:
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Leitores de ecrã (NVDA, JAWS)</li>
                <li>Linhas Braille</li>
                <li>Inteligência artificial (OCR, voz)</li>
                <li>Softwares acessíveis</li>
              </ul>

              <p className="text-yellow-300 mt-6">
                🚀 Resultado: empregabilidade imediata + inclusão social + independência financeira
              </p>
            </div>

            <div className="text-yellow-400 text-8xl font-extrabold text-right">
              5
            </div>
          </div>

          {/* 6 - Guia Completo de Profissões e Acessibilidade */}
          <div className="grid md:grid-cols-2 gap-12 items-center border border-yellow-400/30 p-12 rounded-2xl bg-[#0B0B0B]/70 mt-8">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                💼 Profissões e Mercado de Trabalho Para Cegos e Geral
              </h2>

              <p className="text-gray-200 mb-4 font-semibold">
                Não existe praticamente nenhuma profissão “proibida” para pessoas cegas hoje. 
                O que muda não é a profissão, mas sim como ela é executada.
              </p>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-yellow-400 font-bold">💼 1. Administração, Escritório e Negócios</h3>
                   <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Assistente administrativo</li>
                <li>Recursos humanos</li>
                <li>Atendimento e comunicação</li>
                <li>Secretário(a)</li>
                <li>Digitador</li>
                <li>Analista Financeiro</li>
                <li>Planeador financeiro</li>
                <li>Economista</li>
                <li>Telemarketing</li>
                <li>Supervisor de equipa</li>
                <li>Backoffice bancário</li>
                <li>Analista de dados</li>
                <li>Gestor de projetos</li>
                <li>Recrutador</li>
                <li>Assistente virtual</li>
                <li>Contabilista</li>
                <li>Consultor empresarial</li>
                <li>Auditor</li>
                <li>Jurídico e Assistente jurídico</li>
              </ul>
                  <p className="text-sm"><br/> 
                  <span className="text-gray-500">⚙️ Assistido por:</span></p>
                   <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>🖥️ Leitores de ecrã (NVDA/JAWS) leem emails</li>
                <li> Excel (Excel adaptado)</li>
                <li>sistemas internos</li>
                <li>⌨️ Atalhos de teclado substituem o uso do rato</li>
                <li>📊 Softwares acessíveis (ERP com acessibilidade)</li>
                <li>🎧 Comunicação por voz e sistemas CRM acessíveis</li>
              </ul>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">💻 2. Tecnologia e Digital</h3>
                  <p className="text-sm">Programador (Front/Back/Full-stack), QA Tester, Especialista em IA e Engenheiro de IA, DevOps, SEO e Especialista em SEO, Desenvolvedor mobile, Engenheiro de software, Analista de sistemas, QA tester (testes de software), Especialista em acessibilidade digital, UX Writer, Gestor de redes sociais, Editor de conteúdo digital, Administrador de sistemas, Suporte técnico, Especialista em cibersegurança, Cientista de dados. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 💻 IDEs compatíveis com leitores de ecrã (VS Code, etc.), 🔊 Código lido em voz, 🧠 Estrutura lógica (programação não depende de visão), 🌐 Ferramentas web acessíveis e síntese de voz para código.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">📞 3. Comunicação, Atendimento e Vendas</h3>
                  <p className="text-sm">Teleoperador, Representante comercial, Consultor de Vendas, Atendimento remoto, Suporte técnico, Moderador de comunidade, Customer Success, Gestor de clientes, Telemarketing, Gestor de Redes Sociais. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 📱 CRM acessível, 🎧 Sistemas de chamadas com feedback áudio, e 🗣️ Scripts lidos por leitor de ecrã.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">🎓 4. Educação, Formação (formador), Direito e Serviços Sociais</h3>
                  <p className="text-sm">Professor, Tutor Online, Mentor, Coach, Conselheiro, Mediador, Assistente social, Consultor jurídico, Educador especial, Formador profissional, Professor de línguas, Instrutor de informática, Advogado, Psicólogo, Assistente Social. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 🧠 Trabalho baseado em análise e comunicação, 🎧 Softwares jurídicos acessíveis, 📄 Documentos lidos por leitores de ecrã, 📚 Material em áudio ou Braille, Softwares jurídicos, 🎤 Ensino baseado em explicação verbal e 💻 Plataformas EAD acessíveis.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">🎵 5. Artes, Cultura e Criatividade</h3>
                  <p className="text-sm">Músico, Editor de áudio, Narrador / locutor, Roteirista, Cantor, Poeta, Compositor, Escritor, Produtor de Áudio (musical), DJ, Massoterapeuta, Fisioterapeuta, Podcaster. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 🎤 Produção baseada em som, 🎼 Forte uso de audição e criatividade,  Tato desenvolvido e 🎧 Softwares de áudio acessíveis.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">🧘 6. Saúde e Bem-estar</h3>
                  <p className="text-sm">Acupunturista, Conselheiro psicológico, Instrutor de meditação, Massoterapeuta, Fisioterapeuta, Terapeuta ocupacional. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: ✋ Uso do tato altamente desenvolvido, 🧠 Técnicas baseadas em sensibilidade corporal e 🎧 Softwares de áudio acessíveis.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">🏭 8. Indústria, Serviços, Logística e Empreendedorismo</h3>
                  <p className="text-sm">Operador de Produção, Técnico de qualidade (adaptado), Controlador de stock, Consultor independente, Operador de armazém, Repositor, Almoxarife, Embalador, Dono de Loja Online, Freelancer. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 🤖 Automação, 🌐 Plataformas digitais acessíveis, 🎧 Gestão por voz e leitores de ecrã, 🔊 Sistemas com alertas sonoros, 🏷️ Etiquetas em Braille, 📦 Organização física padronizada e automação por voz.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">📚 9. Pesquisa e Ciências Humanas</h3>
                  <p className="text-sm">Investigador, Historiador, Filósofo, Linguista Cientista social e Analista político. <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 📖 Leitura em áudio, 🧠 Trabalho intelectual, 🎧 Bases de dados acessíveis.</span></p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold">🧭 10. Outras Profissões (menos comuns mas possíveis)</h3>
                  <p className="text-sm">Guia turístico (com especialização), Árbitro esportivo (adaptado), Técnico em rádio, Operador de podcast, Tradutor / intérprete, Revisor de textos, Especialista em acessibilidade, Instrutor de mobilidade (para outros cegos). <br/>
                  <span className="text-gray-500">⚙️ Assistido por: 📖 Leitura em áudio, 🧠 Trabalho intelectual, 🎧 Bases de dados acessíveis.</span></p>
                </div>
              </div>

              <div className="bg-yellow-400/10 p-4 rounded-lg mt-6">
                <p className="text-yellow-300 font-bold mb-2">🧠 RESUMO IMPORTANTE:</p>
                <p className="text-gray-300 text-sm">
                  O que permite tudo isso são as tecnologias assistivas: Leitores de ecrã (NVDA, JAWS), Linhas Braille, Inteligência artificial (leitura de imagens, OCR), Softwares adaptados e Smartphones acessíveis (TalkBack, VoiceOver). 
                  A maioria dos trabalhos modernos depende mais de raciocínio do que de visão.
                </p>
                <p className="text-yellow-300 mt-6 font-bold">
                👉 E principalmente: A maioria dos trabalhos modernos depende mais de raciocínio do que visão.
              </p>

              </div>

              <p className="text-yellow-300 mt-6 font-bold">
                🚀 O limite hoje é o acesso à formação e inclusão, não a capacidade!
              </p>
            </div>

            <div className="text-yellow-400 text-8xl font-extrabold text-right">
              6
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}