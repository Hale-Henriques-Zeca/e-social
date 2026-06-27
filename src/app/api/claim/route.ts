import { NextRequest, NextResponse } from "next/server";

import {
  getWallet,
  claimAirdrop,
  getRewardHistory,
  getClaimHistory,
} from "@/lib/airdrop";

export async function POST(
  request: NextRequest
) {
  try {

    const body = await request.json();

    const {
      userId,
      walletAddress,
    } = body;

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID obrigatório.",
        },
        {
          status: 400,
        }
      );
    }

    /*
        Procura Wallet Virtual
    */

    const wallet =
      await getWallet(userId);

    if (!wallet) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Wallet virtual não encontrada.",
        },
        {
          status: 404,
        }
      );
    }

    /*
        Verifica saldo
    */

    if (
      Number(wallet.ecoin_balance) <= 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Não existe saldo disponível.",
        },
        {
          status: 400,
        }
      );
    }

    /*
        CLAIM

        Nesta primeira fase
        apenas atualiza
        a Base de Dados.

        Futuramente:

        Backend

            ↓

        ClaimManager.sol

            ↓

        AirdropVault.sol

            ↓

        envia eCoin

            ↓

        txHash real

    */

    const result =
      await claimAirdrop(userId);

    /*
        Histórico atualizado
    */

    const rewards =
      await getRewardHistory(userId);

    const claims =
      await getClaimHistory(userId);

    return NextResponse.json({

      success: true,

      message:
        "Pedido de resgate criado com sucesso.",

      walletAddress:
        walletAddress ?? null,

      amount:
        result.amount,

      txHash:
        result.txHash,

      wallet: {

        balance: 0,

        claimed:
          Number(wallet.claimed_balance) +
          Number(result.amount),

      },

      rewards,

      claims,

      blockchain: {

        enabled: false,

        network:
          "BSC",

        contract:
          null,

        status:
          "Aguardando integração",

      },

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

export async function GET() {

  return NextResponse.json({

    success: true,

    endpoint:
      "/api/claim",

    method:
      "POST",

    description:
      "Processa pedidos de resgate da Wallet Virtual.",

    future: {

      blockchain: true,

      contract:
        "ClaimManager",

      vault:
        "AirdropVault",

    },

  });

}