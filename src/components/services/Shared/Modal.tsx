"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;

  title?: string;
  subtitle?: string;

  children: ReactNode;

  footer?: ReactNode;

  showCloseButton?: boolean;
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;

  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,

  showCloseButton = true,
  closeOnOverlay = true,
  closeOnEsc = true,

  size = "lg",
}: ModalProps) {
  useEffect(() => {
    if (!closeOnEsc) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [closeOnEsc, onClose]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-[96vw] h-[94vh]",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            if (closeOnOverlay) onClose();
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className={`
              ${sizes[size]}
              w-full
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              shadow-2xl
              overflow-hidden
              flex
              flex-col
            `}
          >
            {/* Header */}

            {(title || subtitle || showCloseButton) && (
              <div className="flex items-start justify-between border-b border-white/10 p-6">
                <div>
                  {title && (
                    <h2 className="text-2xl font-bold text-white">
                      {title}
                    </h2>
                  )}

                  {subtitle && (
                    <p className="mt-2 text-sm text-zinc-400">
                      {subtitle}
                    </p>
                  )}
                </div>

                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="
                      rounded-xl
                      p-2
                      text-zinc-400
                      transition
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    <X size={22} />
                  </button>
                )}
              </div>
            )}

            {/* Body */}

            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>

            {/* Footer */}

            {footer && (
              <div className="border-t border-white/10 bg-zinc-900/60 p-5">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}