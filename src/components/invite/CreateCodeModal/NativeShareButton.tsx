"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Check,
  Smartphone,
} from "lucide-react";

interface NativeShareButtonProps {

  title?: string;

  text?: string;

  url: string;

  className?: string;

  onShared?: () => void;

}

export default function NativeShareButton({

  title = "Convite eSocial",

  text = "Junte-se ao eSocial através do meu link de convite.",

  url,

  className = "",

  onShared,

}: NativeShareButtonProps) {

  const [shared, setShared] = useState(false);

  async function handleShare() {

    try {

      if (navigator.share) {

        await navigator.share({

          title,

          text,

          url,

        });

      } else {

        await navigator.clipboard.writeText(url);

      }

      setShared(true);

      onShared?.();

      setTimeout(() => {

        setShared(false);

      }, 2500);

    }

    catch (error) {

      console.error(error);

    }

  }

  return (

    <motion.button

      whileHover={{
        scale: 1.02,
      }}

      whileTap={{
        scale: .98,
      }}

      onClick={handleShare}

      className={`
        w-full

        rounded-2xl

        py-4

        px-6

        bg-purple-600

        hover:bg-purple-700

        font-bold

        transition-all

        flex

        items-center

        justify-center

        gap-3

        ${className}
      `}

    >

      <AnimatePresence mode="wait">

        {shared ? (

          <motion.div

            key="shared"

            initial={{
              opacity: 0,
              y: -10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: 10,
            }}

            className="flex items-center gap-2"

          >

            <Check
              size={20}
            />

            Partilhado

          </motion.div>

        ) : (

          <motion.div

            key="share"

            initial={{
              opacity: 0,
              y: -10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: 10,
            }}

            className="flex items-center gap-2"

          >

            <Share2
              size={20}
            />

            <Smartphone
              size={18}
            />

            Partilhar

          </motion.div>

        )}

      </AnimatePresence>

    </motion.button>

  );

}