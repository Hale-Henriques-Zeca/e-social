import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "eSocial — EdenKingDom Social",
  description:
    "Rede social institucional da EdenKingDom. Comunicação, impacto social, serviços profissionais e transparência on-chain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-black text-gray-200">

        <Providers>

          {/* Container fixo para o Navbar garantir que ele fique no topo em qualquer página */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>

          {/* O 'pt-20' evita que o Navbar fixo cubra o topo do seu conteúdo original */}
          <main className="min-h-screen pt-20">
            {children}
          </main>
          
          <Footer />

        </Providers>

      </body>
    </html>
  );
}
