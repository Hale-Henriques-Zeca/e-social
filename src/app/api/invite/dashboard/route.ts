import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dashboard = {
      user: {
        id: "user_001",
        name: "Hale Henriques",
        inviteCode: "HALE2026",
        active: true,
        createdAt: new Date().toISOString(),
      },

      stats: {
        totalInvites: 0,
        totalClicks: 0,
        totalRegistrations: 0,
        conversionRate: 0,
      },

      wallet: {
        available: 0,
        pending: 0,
        received: 0,
        claimed: 0,
        processingFee: 0,
      },

      history: [],

      share: {
        totalShares: 0,
        bestPlatform: "WhatsApp",
      },
    };

    return NextResponse.json({
      success: true,
      dashboard,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao carregar o dashboard.",
      },
      {
        status: 500,
      }
    );
  }
}