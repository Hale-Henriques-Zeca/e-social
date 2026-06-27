"use client";

import { useState } from "react";

import InviteDashboard from "@/components/invite/InviteDashboard";
import InviteBlockChain from "@/components/invite/InviteBlockChain";

import {
    Database,
    Blocks,
} from "lucide-react";

export default function InvitePage() {

    const [system, setSystem] = useState<
        "social" | "blockchain"
    >("social");

    return (

        <main className="min-h-screen bg-[#050505] text-white p-8">

            <div className="max-w-7xl mx-auto space-y-8">

                {/* HEADER */}

                <div className="space-y-3">

                    <h1 className="text-4xl font-black">

                        Centro de Convites

                    </h1>

                    <p className="text-gray-400">

                        Escolha o sistema de referência que pretende utilizar.

                    </p>

                </div>

                {/* SWITCH */}

                <div className="flex flex-wrap gap-4">

                    <button

                        onClick={() => setSystem("social")}

                        className={`

                            flex

                            items-center

                            gap-3

                            rounded-2xl

                            px-6

                            py-4

                            font-bold

                            transition

                            ${

                                system === "social"

                                    ? "bg-blue-600"

                                    : "bg-[#111] hover:bg-[#181818]"

                            }

                        `}

                    >

                        <Database size={22} />

                        eSocial Referral

                    </button>

                    <button

                        onClick={() => setSystem("blockchain")}

                        className={`

                            flex

                            items-center

                            gap-3

                            rounded-2xl

                            px-6

                            py-4

                            font-bold

                            transition

                            ${

                                system === "blockchain"

                                    ? "bg-yellow-500 text-black"

                                    : "bg-[#111] hover:bg-[#181818]"

                            }

                        `}

                    >

                        <Blocks size={22} />

                        Blockchain Referral

                    </button>

                </div>

                {/* CONTEÚDO */}

                {

                    system === "social"

                        ? <InviteDashboard />

                        : <InviteBlockChain />

                }

            </div>

        </main>

    );

}