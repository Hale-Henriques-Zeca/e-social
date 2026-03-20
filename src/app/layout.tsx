import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "E-Social — EdenKingDom Social",
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

          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />

        </Providers>

      </body>
    </html>
  );
}