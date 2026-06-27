import { supabase } from "@/lib/supabase";

export interface VirtualWallet {
  id: string;
  user_id: string;
  ecoin_balance: number;
  claimed_balance: number;
  created_at: string;
}

export interface ClaimHistory {
  id: string;
  user_id: string;
  amount: number;
  tx_hash: string | null;
  status: string;
  created_at: string;
}

export interface RewardHistory {
  id: string;
  user_id: string;
  amount: number;
  reason: string;
  status: string;
  created_at: string;
}

/* ===========================================
   WALLET
=========================================== */

export async function getWallet(userId: string) {
  const { data, error } = await supabase
    .from("virtual_wallet")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;

  return data;
}

export async function createWallet(userId: string) {
  const { data, error } = await supabase
    .from("virtual_wallet")
    .insert({
      user_id: userId,
      ecoin_balance: 0,
      claimed_balance: 0,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getOrCreateWallet(userId: string) {
  let wallet = await getWallet(userId);

  if (!wallet) {
    wallet = await createWallet(userId);
  }

  return wallet;
}

/* ===========================================
   AIRDROP
=========================================== */

export async function giveSignupBonus(userId: string) {
  const wallet = await getOrCreateWallet(userId);

  const bonus = 5;

  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance:
        Number(wallet.ecoin_balance) + bonus,
    })
    .eq("user_id", userId);

  await supabase
    .from("airdrop_rewards")
    .insert({
      user_id: userId,
      amount: bonus,
      reason: "Cadastro",
      status: "pending",
    });

  return bonus;
}

export async function giveReferralBonus(
  userId: string
) {
  const wallet = await getOrCreateWallet(userId);

  const reward = 1;

  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance:
        Number(wallet.ecoin_balance) + reward,
    })
    .eq("user_id", userId);

  await supabase
    .from("airdrop_rewards")
    .insert({
      user_id: userId,
      amount: reward,
      reason: "Convite",
      status: "pending",
    });

  return reward;
}

export async function giveMissionReward(
  userId: string,
  amount: number,
  reason: string
) {
  const wallet = await getOrCreateWallet(userId);

  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance:
        Number(wallet.ecoin_balance) + amount,
    })
    .eq("user_id", userId);

  await supabase
    .from("airdrop_rewards")
    .insert({
      user_id: userId,
      amount,
      reason,
      status: "pending",
    });
}

/* ===========================================
   CONSULTAS
=========================================== */

export async function getVirtualBalance(
  userId: string
) {
  const wallet = await getOrCreateWallet(userId);

  return Number(wallet.ecoin_balance);
}

export async function getClaimedBalance(
  userId: string
) {
  const wallet = await getOrCreateWallet(userId);

  return Number(wallet.claimed_balance);
}

export async function getRewardHistory(
  userId: string
) {
  const { data } = await supabase
    .from("airdrop_rewards")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  return data || [];
}

export async function getClaimHistory(
  userId: string
) {
  const { data } = await supabase
    .from("claim_history")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  return data || [];
}

/* ===========================================
   CLAIM
=========================================== */

export async function claimAirdrop(
  userId: string
) {
  const wallet = await getOrCreateWallet(userId);

  const balance = Number(wallet.ecoin_balance);

  if (balance <= 0) {
    throw new Error(
      "Saldo insuficiente."
    );
  }

  /*
      FUTURO

      Blockchain

      ↓

      ClaimManager.sol

      ↓

      envia eCoin

      ↓

      recebe txHash

  */

  const fakeTxHash =
    "PENDING_BLOCKCHAIN";

  await supabase
    .from("claim_history")
    .insert({
      user_id: userId,
      amount: balance,
      tx_hash: fakeTxHash,
      status: "pending",
    });

  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance: 0,
      claimed_balance:
        Number(wallet.claimed_balance) + balance,
    })
    .eq("user_id", userId);

  await supabase
    .from("airdrop_rewards")
    .update({
      status: "claimed",
    })
    .eq("user_id", userId)
    .eq("status", "pending");

  return {
    success: true,
    amount: balance,
    txHash: fakeTxHash,
  };
}

/* ===========================================
   ADMIN
=========================================== */

export async function addBalance(
  userId: string,
  amount: number
) {
  const wallet = await getOrCreateWallet(userId);

  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance:
        Number(wallet.ecoin_balance) + amount,
    })
    .eq("user_id", userId);
}

export async function removeBalance(
  userId: string,
  amount: number
) {
  const wallet = await getOrCreateWallet(userId);

  let balance =
    Number(wallet.ecoin_balance) - amount;

  if (balance < 0) balance = 0;

  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance: balance,
    })
    .eq("user_id", userId);
}

export async function resetWallet(
  userId: string
) {
  await supabase
    .from("virtual_wallet")
    .update({
      ecoin_balance: 0,
      claimed_balance: 0,
    })
    .eq("user_id", userId);
}