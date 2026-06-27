"use client";

import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import * as htmlToImage from "html-to-image";

import QRCardBrand from "./QRCardBrand";
import QRCardHeader from "./QRCardHeader";
import QRCardBody from "./QRCardBody";
import QRCardActions from "./QRCardActions";
import QRCardFooter from "./QRCardFooter";

export interface InviteQRCodeCardRef {
  downloadPNG: () => Promise<void>;
  printCard: () => void;
  openFullscreen: () => Promise<void>;
  shareCard: () => Promise<void>;
}

interface InviteQRCodeCardProps {
  inviteCode: string;
  inviteLink: string;
  userName?: string;
  theme?: "dark" | "light";
  printable?: boolean;
  className?: string;
}

const InviteQRCodeCard = forwardRef<InviteQRCodeCardRef, InviteQRCodeCardProps>(
  ({ inviteCode, inviteLink, userName, theme = "dark", printable = true, className = "" }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);

    useImperativeHandle(ref, () => ({
      downloadPNG,
      printCard,
      openFullscreen,
      shareCard,
    }));

    async function downloadPNG() {
      if (!cardRef.current) return;
      try {
        setIsDownloading(true);
        const dataUrl = await htmlToImage.toPng(cardRef.current, {
          cacheBust: true,
          pixelRatio: 3,
          backgroundColor: theme === "dark" ? "#050505" : "#ffffff",
        });
        const link = document.createElement("a");
        link.download = `invite-${inviteCode}.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Erro ao gerar imagem:", err);
      } finally {
        setIsDownloading(false);
      }
    }

    function printCard() {
      if (!cardRef.current) return;
      const printWindow = window.open("", "_blank", "width=900,height=700");
      if (!printWindow) return;

      printWindow.document.write(`
        <html>
          <head>
            <title>Convite ${inviteCode}</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; background: #050505; padding: 40px; }
            </style>
          </head>
          <body>${cardRef.current.outerHTML}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 500);
    }

    async function openFullscreen() {
      if (!cardRef.current) return;
      try {
        if (!document.fullscreenElement) {
          await cardRef.current.requestFullscreen();
          setIsFullscreen(true);
        } else {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      } catch (err) {
        console.error("Erro ao alternar fullscreen:", err);
      }
    }

    async function shareCard() {
      try {
        setIsSharing(true);
        if (navigator.share) {
          await navigator.share({
            title: "Convite eSocial",
            text: "Junta-te ao eSocial através do meu convite.",
            url: inviteLink,
          });
        } else {
          await navigator.clipboard.writeText(inviteLink);
          alert("Link copiado para a área de transferência.");
        }
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      } finally {
        setIsSharing(false);
      }
    }

    return (
      <div className={`flex justify-center items-center ${className}`}>
        <div
          ref={cardRef}
          className={`w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border transition-colors ${
            theme === "dark" 
              ? "bg-[#050505] border-white/10 text-white" 
              : "bg-white border-gray-300 text-black"
          }`}
        >
          <QRCardBrand />
          <QRCardHeader inviteCode={inviteCode} userName={userName} />
          <QRCardBody inviteCode={inviteCode} inviteLink={inviteLink} />
          <QRCardActions
    downloading={isDownloading}
    printing={isPrinting}
    sharing={isSharing}
    fullscreen={isFullscreen}
    printable={printable}
    onDownload={downloadPNG}
    onPrint={printCard}
    onFullscreen={openFullscreen}
    onShare={shareCard}
/>
          <QRCardFooter />
        </div>
      </div>
    );
  }
);

InviteQRCodeCard.displayName = "InviteQRCodeCard";

export default InviteQRCodeCard;