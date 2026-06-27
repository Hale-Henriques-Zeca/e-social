"use client";

import { motion } from "framer-motion";
import {
  Download,
  Printer,
  Maximize2,
  Share2,
  Save,
} from "lucide-react";

interface QRCardActionsProps {

  downloading?: boolean;

  printing?: boolean;

  sharing?: boolean;

  fullscreen?: boolean;

  printable?: boolean;

  onDownload?: () => void;

  onPrint?: () => void;

  onFullscreen?: () => void;

  onShare?: () => void;

  onSaveGallery?: () => void;

  disableSaveGallery?: boolean;

}

export default function QRCardActions({

    downloading = false,

    printing = false,

    sharing = false,

    fullscreen = false,

    printable = true,

    onDownload,

    onPrint,

    onFullscreen,

    onShare,

    onSaveGallery,

    disableSaveGallery = true,

}: QRCardActionsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .30,
      }}
      className="mt-8"
    >
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-5
          gap-3
        "
      >
        <button
  onClick={onDownload}
  disabled={downloading}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-yellow-500
    hover:bg-yellow-400
    py-3
    font-bold
    transition
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  <Download size={18} />

  {downloading ? "Gerando..." : "PNG"}

</button>

        <button
  onClick={onPrint}
  disabled={!printable || printing}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-blue-600
    hover:bg-blue-500
    py-3
    font-bold
    transition
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  <Printer size={18} />

  {
    printing
      ? "A preparar..."
      : printable
      ? "Imprimir"
      : "Indisponível"
  }

</button>

        <button
  onClick={onFullscreen}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-green-600
    hover:bg-green-500
    py-3
    font-bold
    transition
  "
>
  <Maximize2 size={18} />

  {fullscreen ? "Sair" : "Fullscreen"}

</button>

        <button
  onClick={onShare}
  disabled={sharing}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-purple-600
    hover:bg-purple-500
    py-3
    font-bold
    transition
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  <Share2 size={18} />

  {sharing ? "A partilhar..." : "Partilhar"}

</button>

        <button
          disabled={disableSaveGallery}
          onClick={onSaveGallery}
          className={`
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            py-3
            font-bold
            transition

            ${
              disableSaveGallery
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-500"
            }
          `}
        >
          <Save size={18} />
          Galeria
        </button>
      </div>

      {disableSaveGallery && (
        <p className="text-center text-xs text-gray-500 mt-4">
          "Guardar na Galeria" será ativado numa futura versão para Android e iOS.
        </p>
      )}
    </motion.div>
  );
}