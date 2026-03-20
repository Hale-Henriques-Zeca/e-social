"use client";

import { useState, useRef } from "react";
import { QRCode } from "react-qr-code";
import { Copy } from "lucide-react";
import { parseUnits } from "viem";
import {
  useAccount,
  useWriteContract,
  useReadContract,
  usePublicClient,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { CONTRACTS } from "@/lib/contracts";
import { donationAbi } from "@/lib/abis/donationAbi";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { bsc } from "wagmi/chains";

export default function DonateCard() {
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("USDT");

  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();

  const tokenAddress =
    token === "USDT" ? CONTRACTS.USDT : CONTRACTS.ECOIN;

  const copyAddress = async () => {
    await navigator.clipboard.writeText(CONTRACTS.DONATION_POOL);
    alert("Endereço copiado!");
  };

  async function handleDonate() {
    if (!amount) return;

    const parsed = parseUnits(amount, 18);

    try {
      // 1️⃣ APPROVE
      const approveHash = await writeContractAsync({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "approve",
        args: [CONTRACTS.DONATION_POOL, parsed],
        account: address,
        chain: bsc,
      });

      await publicClient.waitForTransactionReceipt({ hash: approveHash });

      // 2️⃣ DONATE
      const donateHash = await writeContractAsync({
        address: CONTRACTS.DONATION_POOL,
        abi: donationAbi,
        functionName: "donateToken",
        args: [tokenAddress, parsed],
        account: address,
        chain: bsc,
      });

      alert("Doação enviada! 🚀");
    } catch (err) {
      console.error(err);
      alert("Erro na transação");
    }
  }

  return (
    <div className="bg-black/60 border border-gray-700 rounded-2xl p-8 max-w-xl mx-auto">

      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Doar para E-Social
      </h2>

      {/* AVISO */}
      <p className="text-yellow-400 text-sm mb-6">
        ⚠ Apenas USDT e E-Coin (BEP-20).  
        Outros tokens serão perdidos.
      </p>

      {/* QR */}
      <div className="bg-white p-4 rounded-xl inline-block mb-4">
        <QRCode value={CONTRACTS.DONATION_POOL} size={200} />
      </div>

      {/* ADDRESS */}
      <div className="text-xs break-all mb-2 text-gray-400">
        {CONTRACTS.DONATION_POOL}
      </div>

      <button
        onClick={copyAddress}
        className="mb-6 px-4 py-2 bg-gray-800 rounded flex items-center gap-2"
      >
        <Copy size={14} /> Copiar endereço
      </button>

      {/* WALLET */}
      <div className="mb-6">
        <ConnectButton />
      </div>

      {/* TOKEN SELECT */}
      <select
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="w-full mb-4 p-3 bg-black border border-gray-600 rounded"
      >
        <option value="USDT">USDT</option>
        <option value="ECOIN">E-Coin</option>
      </select>

      {/* AMOUNT */}
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Valor"
        className="w-full p-3 bg-black border border-gray-600 rounded mb-4"
      />

      {/* BUTTON */}
      <button
        onClick={handleDonate}
        disabled={!isConnected}
        className="w-full bg-red-600 py-3 rounded font-semibold disabled:opacity-40"
      >
        {isConnected ? "Doar Agora" : "Conecte a carteira"}
      </button>

    </div>
  );
}