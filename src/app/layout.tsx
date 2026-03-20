import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-black text-gray-200">

        <Providers> {/* 🔥 ENVOLVE TODA A APP */}

          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />

        </Providers>

      </body>
    </html>
  );
}