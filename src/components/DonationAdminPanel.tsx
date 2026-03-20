"use client";

import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { CONTRACTS } from "@/lib/contracts";
import { donationAbi } from "@/lib/abis/donationAbi";
import { bsc } from "wagmi/chains";

export default function DonationAdminPanel() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");

  const { data: owner } = useReadContract({
    address: CONTRACTS.DONATION_POOL,
    abi: donationAbi,
    functionName: "owner",
  });

  const isOwner =
    owner &&
    address &&
    owner.toLowerCase() === address.toLowerCase();

  async function withdraw() {
    const parsed = parseUnits(amount, 18);

    await writeContractAsync({
      address: CONTRACTS.DONATION_POOL,
      abi: donationAbi,
      functionName: "withdraw",
      args: [CONTRACTS.USDT, to, parsed],
      account: address,
      chain: bsc,
    });
  }

  if (!isOwner) return null;

  return (
    <div className="mt-10 border border-red-500 p-6 rounded-xl">
      <h3 className="text-red-400 mb-4">Admin Panel</h3>

      <input
        placeholder="Destino"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full mb-3 p-2 bg-black border"
      />

      <input
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-3 p-2 bg-black border"
      />

      <button
        onClick={withdraw}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Withdraw
      </button>
    </div>
  );
}