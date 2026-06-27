"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Coins,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

interface ClaimPanelProps {

  available: number;

  processingFee?: number;

  endpoint?: string;

  onSuccess?: () => void;

}

type ClaimStatus =
  | "idle"
  | "loading"
  | "pending"
  | "approved"
  | "completed"
  | "error";

export default function ClaimPanel({

  available,

  processingFee = 0,

  endpoint = "/api/claim",

  onSuccess,

}: ClaimPanelProps) {

  const [status, setStatus] =
    useState<ClaimStatus>("idle");

  const [message, setMessage] =
    useState("");

  const netAmount =
    Math.max(
      available - processingFee,
      0
    );

  async function handleClaim() {

    if (available <= 0) {

      setStatus("error");

      setMessage(
        "Não existe saldo disponível para resgate."
      );

      return;

    }

    try {

      setStatus("loading");

      const response =
        await fetch(endpoint, {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            amount: available,

          }),

        });

      const json =
        await response.json();

      if (!json.success) {

        setStatus("error");

        setMessage(
          json.message ||
          "Falha ao processar o pedido."
        );

        return;

      }

      setStatus("pending");

      setMessage(
        "Pedido enviado com sucesso."
      );

      onSuccess?.();

    }

    catch (err) {

      console.error(err);

      setStatus("error");

      setMessage(
        "Erro interno."
      );

    }

  }

  return (

    <div

      className="

        rounded-3xl

        border

        border-white/10

        bg-[#111]

        p-6

        space-y-6

      "

    >

      <div className="flex items-center gap-3">

        <Wallet

          className="text-green-400"

          size={28}

        />

        <div>

          <h2 className="text-2xl font-black">

            Resgatar E-Coin

          </h2>

          <p className="text-gray-400 text-sm">

            Saque o saldo de presente por se tornar membro da eSocial para a sua carteira web3 na BlockChain.

          </p>

        </div>

      </div>

      <div

        className="

          rounded-2xl

          bg-black/30

          border

          border-white/10

          p-5

          space-y-4

        "

      >

        <div className="flex justify-between">

          <span>Saldo disponível</span>

          <span className="font-bold">

            {available.toFixed(2)} eCoin

          </span>

        </div>

        <div className="flex justify-between">

          <span>Taxa de processamento (10%)</span>

          <span>

            {processingFee.toFixed(2)} eCoin

          </span>

        </div>

        <div className="border-t border-white/10 pt-4 flex justify-between">

          <span className="font-bold">

            Valor líquido

          </span>

          <span className="text-yellow-400 font-black">

            {netAmount.toFixed(2)} eCoin

          </span>

        </div>

      </div>

      <motion.button

        whileHover={{
          scale: 1.02,
        }}

        whileTap={{
          scale: .98,
        }}

        disabled={status === "loading"}

        onClick={handleClaim}

        className="

          w-full

          rounded-2xl

          bg-green-600

          hover:bg-green-700

          py-4

          font-bold

          flex

          items-center

          justify-center

          gap-3

        "

      >

        {status === "loading"

          ? <Loader2 className="animate-spin"/>

          : <Coins />}

        Confirmar Resgate

      </motion.button>

      {status !== "idle" && (

        <div

          className="

            rounded-2xl

            border

            border-white/10

            bg-black/30

            p-4

          "

        >

          <div className="flex items-center gap-3">

            {status === "pending" && (

              <Clock3 className="text-yellow-400"/>

            )}

            {status === "approved" && (

              <ShieldCheck className="text-green-400"/>

            )}

            {status === "completed" && (

              <CheckCircle2 className="text-green-400"/>

            )}

            {status === "error" && (

              <AlertTriangle className="text-red-400"/>

            )}

            {status === "loading" && (

              <Loader2 className="animate-spin"/>

            )}

            <div>

              <p className="font-bold capitalize">

                {status}

              </p>

              <p className="text-sm text-gray-400">

                {message}

              </p>

            </div>

          </div>

        </div>

      )}

      <div

        className="

          rounded-2xl

          bg-green-500/10

          border

          border-green-500/20

          p-4

          text-sm

          text-green-300

        "

      >

        O ClaimManager, enviará automaticamente
        a transação para a sua carteira web via blockchain,
        atualizará o histórico
        e removerá o saldo actual.

      </div>

    </div>

  );

}