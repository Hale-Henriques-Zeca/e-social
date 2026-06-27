import { NextRequest, NextResponse } from "next/server";

import {
  createInviteCode,
} from "@/lib/referrals";

export async function POST(
  request: NextRequest
) {
  try {

    const body = await request.json();

    const { userId } = body;

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

    const code = await createInviteCode(
      userId
    );

    return NextResponse.json({
      success: true,
      message: "Código criado com sucesso.",
      code,
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