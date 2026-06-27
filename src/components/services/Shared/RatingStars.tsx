"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating?: number;

  total?: number;

  size?: number;

  showValue?: boolean;

  showReviews?: boolean;

  reviews?: number;

  interactive?: boolean;

  onChange?: (rating: number) => void;
}

export default function RatingStars({
  rating = 0,
  total = 5,
  size = 20,
  showValue = true,
  showReviews = true,
  reviews = 0,
  interactive = false,
  onChange,
}: RatingStarsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">

      <div className="flex items-center gap-1">

        {Array.from({ length: total }).map((_, index) => {

          const value = index + 1;

          const filled = value <= Math.round(rating);

          return (

            <motion.button
              key={index}
              whileHover={
                interactive
                  ? {
                      scale: 1.2,
                    }
                  : undefined
              }
              whileTap={
                interactive
                  ? {
                      scale: .9,
                    }
                  : undefined
              }
              disabled={!interactive}
              onClick={() =>
                interactive &&
                onChange?.(value)
              }
              className={interactive ? "cursor-pointer" : "cursor-default"}
            >

              <Star
                size={size}
                fill={filled ? "currentColor" : "transparent"}
                className={
                  filled
                    ? "text-yellow-400"
                    : "text-zinc-600"
                }
              />

            </motion.button>

          );

        })}

      </div>

      {showValue && (

        <span className="font-semibold text-white">

          {rating.toFixed(1)}

        </span>

      )}

      {showReviews && (

        <span className="text-zinc-500">

          ({reviews.toLocaleString()} avaliações)

        </span>

      )}

    </div>
  );
}