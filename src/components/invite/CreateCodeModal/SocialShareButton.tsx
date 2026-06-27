"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialShareButtonProps {

  title: string;

  subtitle?: string;

  icon: LucideIcon;

  href?: string;

  onClick?: () => void;

  color?: string;

  disabled?: boolean;

}

export default function SocialShareButton({

  title,

  subtitle,

  icon: Icon,

  href,

  onClick,

  color = "#ffffff",

  disabled = false,

}: SocialShareButtonProps) {

  function handleClick() {

    if (disabled) return;

    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      window.open(
        href,
        "_blank",
        "noopener,noreferrer"
      );
    }

  }

  return (

    <motion.button

      whileHover={{
        scale: 1.03,
      }}

      whileTap={{
        scale: .97,
      }}

      onClick={handleClick}

      disabled={disabled}

      className="

      w-full

      bg-[#171717]

      hover:bg-[#202020]

      border

      border-white/10

      hover:border-white/20

      rounded-2xl

      p-4

      transition-all

      disabled:opacity-40

      disabled:cursor-not-allowed

      "

    >

      <div className="flex items-center gap-4">

        <div

          className="

          w-12

          h-12

          rounded-xl

          flex

          items-center

          justify-center

          "

          style={{

            backgroundColor: `${color}20`,

            border: `1px solid ${color}55`,

          }}

        >

          <Icon

            size={22}

            style={{

              color,

            }}

          />

        </div>

        <div className="text-left">

          <h3 className="font-bold text-white">

            {title}

          </h3>

          {subtitle && (

            <p className="text-xs text-gray-400">

              {subtitle}

            </p>

          )}

        </div>

      </div>

    </motion.button>

  );

}