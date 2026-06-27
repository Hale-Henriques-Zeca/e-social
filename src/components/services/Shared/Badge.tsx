"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Star,
  Sparkles,
  Gift,
  Clock3,
  Wifi,
  Lock,
  ShieldCheck,
  XCircle,
  CheckCircle2,
  CircleDollarSign,
  Flame,
} from "lucide-react";

export type BadgeVariant =
  | "verified"
  | "featured"
  | "new"
  | "promotion"
  | "premium"
  | "online"
  | "offline"
  | "open"
  | "closed"
  | "soldout"
  | "secure"
  | "hot"
  | "custom";

interface BadgeProps {
  variant?: BadgeVariant;

  label?: string;

  icon?: ReactNode;

  className?: string;

  animate?: boolean;
}

const styles = {
  verified: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    icon: BadgeCheck,
    label: "Verified",
  },

  featured: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
    icon: Star,
    label: "Featured",
  },

  premium: {
    bg: "bg-violet-500/15",
    text: "text-violet-400",
    border: "border-violet-500/30",
    icon: Sparkles,
    label: "Premium",
  },

  promotion: {
    bg: "bg-pink-500/15",
    text: "text-pink-400",
    border: "border-pink-500/30",
    icon: Gift,
    label: "Promotion",
  },

  new: {
    bg: "bg-cyan-500/15",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    icon: Sparkles,
    label: "New",
  },

  online: {
    bg: "bg-green-500/15",
    text: "text-green-400",
    border: "border-green-500/30",
    icon: Wifi,
    label: "Online",
  },

  offline: {
    bg: "bg-zinc-500/15",
    text: "text-zinc-400",
    border: "border-zinc-500/30",
    icon: Wifi,
    label: "Offline",
  },

  open: {
    bg: "bg-lime-500/15",
    text: "text-lime-400",
    border: "border-lime-500/30",
    icon: CheckCircle2,
    label: "Open",
  },

  closed: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/30",
    icon: XCircle,
    label: "Closed",
  },

  soldout: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/30",
    icon: CircleDollarSign,
    label: "Sold Out",
  },

  secure: {
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/30",
    icon: ShieldCheck,
    label: "Secure",
  },

  hot: {
    bg: "bg-orange-500/15",
    text: "text-orange-400",
    border: "border-orange-500/30",
    icon: Flame,
    label: "Hot",
  },

  custom: {
    bg: "bg-white/10",
    text: "text-white",
    border: "border-white/20",
    icon: Clock3,
    label: "Custom",
  },
};

export default function Badge({
  variant = "custom",
  label,
  icon,
  className = "",
  animate = true,
}: BadgeProps) {
  const badge = styles[variant];

  const Icon = badge.icon;

  const content = (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        backdrop-blur-md
        ${badge.bg}
        ${badge.text}
        ${badge.border}
        ${className}
      `}
    >
      {icon ?? <Icon size={14} />}

      <span>{label ?? badge.label}</span>
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.18,
      }}
    >
      {content}
    </motion.div>
  );
}