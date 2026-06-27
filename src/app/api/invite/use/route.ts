import { NextRequest, NextResponse } from "next/server";

import {
  getInviteByCode,
  hasAlreadyUsedInvite,
  registerInvite,
} from "@/lib/referrals";

import {
  giveReferralBonus,
  giveSignupBonus,
} from "@/lib/airdrop";

export async function POST(
  request: NextRequest
) {
  try {

    const body = await request.json();

    const {
      userId,
      code,
    } = body;

    if (!userId || !code) {
      return NextResponse.json(
        {
          success: false,
          message: "Parâmetros inválidos.",
        },
        {
          status: 400,
        }
      );
    }

    /*
        Procura o código
    */

    const invite =
      await getInviteByCode(code);

    if (!invite) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Código de convite inexistente.",
        },
        {
          status: 404,
        }
      );
    }

    /*
        Não pode convidar a si próprio
    */

    if (invite.user_id === userId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Não pode utilizar o seu próprio código.",
        },
        {
          status: 400,
        }
      );
    }

    /*
        Impede reutilização
    */

    const already =
      await hasAlreadyUsedInvite(userId);

    if (already) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Este utilizador já utilizou um código anteriormente.",
        },
        {
          status: 400,
        }
      );
    }

    /*
        Regista referral
    */

    await registerInvite(
      invite.user_id,
      userId,
      invite.code
    );

    /*
        Líder recebe
        +1 E-Coin
    */

    await giveReferralBonus(
      invite.user_id
    );

    /*
        Novo utilizador
        recebe
        +5 E-Coin
    */

    await giveSignupBonus(
      userId
    );

    return NextResponse.json({
      success: true,

      inviterId: invite.user_id,

      inviteCode: invite.code,

      inviterReward: 1,

      signupReward: 5,

      message:
        "Convite registado com sucesso.",
    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ??
          "Erro interno.",
      },
      {
        status: 500,
      }
    );

  }
}