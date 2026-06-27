"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;

  onPageChange: (page: number) => void;

  siblingCount?: number;

  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  if (leftSibling > 2) {
    pages.push(1);
    pages.push("...");
  } else {
    for (let i = 1; i < leftSibling; i++) {
      pages.push(i);
    }
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    pages.push(i);
  }

  if (rightSibling < totalPages - 1) {
    pages.push("...");
    pages.push(totalPages);
  } else {
    for (let i = rightSibling + 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  const buttonStyle =
    "flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      <button
        className={buttonStyle}
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <ChevronsLeft size={18} />
      </button>

      <button
        className={buttonStyle}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-gray-400"
            >
              ...
            </span>
          );
        }

        const active = currentPage === page;

        return (
          <motion.button
            key={page}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(Number(page))}
            className={`w-10 h-10 rounded-xl font-semibold transition-all
              ${
                active
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 border border-white/10 hover:bg-cyan-500/20"
              }`}
          >
            {page}
          </motion.button>
        );
      })}

      <button
        className={buttonStyle}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight size={18} />
      </button>

      <button
        className={buttonStyle}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <ChevronsRight size={18} />
      </button>
    </motion.div>
  );
}