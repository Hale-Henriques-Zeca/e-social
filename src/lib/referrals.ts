import { supabase } from "@/lib/supabase";

export interface InviteCode {
  id: string;
  user_id: string;
  code: string;
  active: boolean;
  created_at: string;
}

export interface InviteReward {
  id: string;
  user_id: string;
  amount: number;
  reason: string;
  status: string;
  created_at: string;
}

export async function generateInviteCode() {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 8; i++) {
    code += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return code;
}

export async function createInviteCode(
  userId: string
) {
  while (true) {
    const code = await generateInviteCode();

    const { data } = await supabase
      .from("invite_codes")
      .select("id")
      .eq("code", code)
      .maybeSingle();

    if (data) continue;

    const { data: created, error } =
      await supabase
        .from("invite_codes")
        .insert({
          user_id: userId,
          code,
          active: true,
        })
        .select()
        .single();

    if (error) throw error;

    return created;
  }
}

export async function listInviteCodes(
  userId: string
) {
  const { data, error } = await supabase
    .from("invite_codes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}

export async function activateInviteCode(
  userId: string,
  codeId: string
) {
  await supabase
    .from("invite_codes")
    .update({
      active: false,
    })
    .eq("user_id", userId);

  await supabase
    .from("invite_codes")
    .update({
      active: true,
    })
    .eq("id", codeId);
}

export async function getActiveInviteCode(
  userId: string
) {
  const { data } = await supabase
    .from("invite_codes")
    .select("*")
    .eq("user_id", userId)
    .eq("active", true)
    .maybeSingle();

  return data;
}

export async function getInviteByCode(
  code: string
) {
  const { data } = await supabase
    .from("invite_codes")
    .select("*")
    .eq("code", code)
    .eq("active", true)
    .maybeSingle();

  return data;
}

export async function hasAlreadyUsedInvite(
  userId: string
) {
  const { data } = await supabase
    .from("invites")
    .select("id")
    .eq("guest_id", userId)
    .maybeSingle();

  return !!data;
}

export async function registerInvite(
  inviterId: string,
  guestId: string,
  inviteCode: string
) {
  const already =
    await hasAlreadyUsedInvite(guestId);

  if (already)
    throw new Error(
      "Este utilizador já utilizou um código."
    );

  const { error } = await supabase
    .from("invites")
    .insert({
      inviter_id: inviterId,
      guest_id: guestId,
      invite_code: inviteCode,
    });

  if (error) throw error;
}

export async function countInvites(
  userId: string
) {
  const { count } = await supabase
    .from("invites")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("inviter_id", userId);

  return count || 0;
}

export async function rewardInviter(
  userId: string,
  amount: number
) {
  const { data } = await supabase
    .from("virtual_wallet")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (!data) {
    await supabase
      .from("virtual_wallet")
      .insert({
        user_id: userId,
        ecoin_balance: amount,
      });
  } else {
    await supabase
      .from("virtual_wallet")
      .update({
        ecoin_balance:
          Number(data.ecoin_balance) + amount,
      })
      .eq("user_id", userId);
  }

  await supabase
    .from("airdrop_rewards")
    .insert({
      user_id: userId,
      amount,
      reason: "Referral Bonus",
      status: "pending",
    });
}

export async function getReferralHistory(
  userId: string
) {
  const { data } = await supabase
    .from("invites")
    .select(`
      *,
      guest:users!guest_id(
        name,
        image,
        email
      )
    `)
    .eq("inviter_id", userId)
    .order("created_at", {
      ascending: false,
    });

  return data;
}