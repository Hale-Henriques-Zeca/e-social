"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#B11226]/30 pt-16 pb-10 relative overflow-hidden">

      {/* FUNDO E-SOCIAL */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0B0B] to-black" />

        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,18,38,0.25),transparent_70%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#B11226] font-semibold text-lg tracking-widest">
            E-SOCIAL • EDENKINGDOM
          </h2>

          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            A divisão humanitária da EdenKingDom.  
            Tecnologia, transparência e impacto social real,
            construindo dignidade e esperança para comunidades.
          </p>
        </motion.div>

        {/* INSTITUCIONAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#B11226] mb-4">
            Institucional
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Sobre a E-Social</li>
            <li className="hover:text-white cursor-pointer">Missão & Valores</li>
            <li className="hover:text-white cursor-pointer">Transparência</li>
            <li className="hover:text-white cursor-pointer">Governança</li>
          </ul>
        </motion.div>

        {/* PROJETOS / NAVEGAÇÃO */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h3 className="text-xl font-semibold text-[#B11226] mb-4">
    Programas & Ações
  </h3>

  <ul className="space-y-3 text-sm">

    {[
      ["🌍 Home", "/"],
      ["🏥 E-Care", "/care"],
      ["👴 Geriatria", "/gericare"],
      ["📚 Educação", "/education"],
      ["💰 Doar Agora", "/donate"],
      ["📊 Transparência", "/dashboard"],
      ["🌐 Social (S)", "/social"],
    ].map(([label, href]) => (
      <li key={href}>
        <a
          href={href}
          className="block text-gray-400 hover:text-white transition hover:translate-x-1 duration-200"
        >
          {label}
        </a>
      </li>
    ))}

  </ul>

  {/* 🔻 DIVISOR */}
  <div className="mt-8 border-t border-[#B11226]/20 pt-6">

    <h4 className="text-sm font-semibold text-[#0F766E] mb-3">
      Empreendedorismo & Inovação
    </h4>

    {/* BOTÃO CENTRAL (EED) */}
    <a
      href="/eed"
      className="block text-center w-full py-2 rounded-lg font-semibold text-sm
      bg-gradient-to-r from-[#0F766E] to-[#14b8a6]
      text-white hover:brightness-110 transition shadow-md"
    >
      Acessar Portal EED
    </a>

  </div>
</motion.div>

        {/* CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#B11226] mb-4">
            Contacto
          </h3>

          <div className="flex flex-wrap gap-3">

            <a
              href="mailto:support@edenkingdom.org"
              className="bg-[#B11226]/10 border border-[#B11226]/40 rounded-full px-4 py-2 text-sm text-[#B11226] hover:bg-[#B11226]/20 hover:shadow-[0_0_10px_#B11226aa] transition-all"
            >
              📩 support@edenkingdom.org
            </a>

            <a
              href="https://esocial.edenkingdom.org"
              target="_blank"
              className="bg-[#0F766E]/10 border border-[#B11226]/40 rounded-full px-4 py-2 text-sm text-[#0F766E] hover:bg-[#0F766E]/20 hover:shadow-[0_0_10px_#0F766Eaa] transition-all"
            >
              🌐 Portal E-Social
            </a>

            <a
              href="https://edenkingdom.org"
              target="_blank"
              className="bg-[#0F766E]/10 border border-[#0F766E]/40 rounded-full px-4 py-2 text-sm text-[#0F766E] hover:bg-[#0F766E]/20 hover:shadow-[0_0_10px_#0F766Eaa] transition-all"
            >
              🌐 Portal EdenKingDom Corporation
            </a>

          </div>
        </motion.div>

        {/* REDES E-SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#B11226] mb-4">
            Comunidade E-Social
          </h3>

          <div className="flex gap-4 text-3xl">

            <a href="https://t.me/+Y828rPGId603Y2Jk" target="_blank">
              <FaTelegramPlane className="text-[#B11226] hover:text-red-400 transition" />
            </a>

            <a href="https://t.me/esocial2025" target="_blank">
              <FaTelegram className="text-[#B11226] hover:text-red-400 transition" />
            </a>

            <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank">
              <FaWhatsapp className="text-[#B11226] hover:text-red-400 transition" />
            </a>

            <a href="https://x.com/CoinE28810" target="_blank">
              <FaTwitter className="text-[#B11226] hover:text-red-400 transition" />
            </a>

          </div>
        </motion.div>

        {/* REDES EDENKINGDOM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#0F766E] mb-4">
            EdenKingDom Global
          </h3>

          <div className="flex gap-4 text-2xl">

            <a href="https://t.me/EdenKingDom" target="_blank">
              <FaTelegramPlane className="text-[#0F766E]" />
            </a>

            <a href="https://instagram.com/edenkingdom.corp" target="_blank">
              <FaInstagram className="text-[#0F766E]" />
            </a>

            <a href="https://x.com/EdenkingdomCorp" target="_blank">
              <FaTwitter className="text-[#0F766E]" />
            </a>

            <a href="https://youtube.com" target="_blank">
              <FaYoutube className="text-[#0F766E]" />
            </a>

          </div>
        </motion.div>

      </div>

      {/* LINHA */}
      <div className="w-full border-t border-[#B11226]/30 mt-14"></div>

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8 text-xs text-gray-500"
      >
        Since © 2025 to {new Date().getFullYear()} EdenKingDom Corporation —  
        E-Social (Humanitarian Division)
      </motion.div>

    </footer>
  );
}