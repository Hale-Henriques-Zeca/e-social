"use client";

import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import {
    QrCode,
    Smartphone,
} from "lucide-react";

interface InviteQRCodeProps {

    inviteCode: string;

    baseUrl?: string;

    size?: number;

}

export default function InviteQRCode({

    inviteCode,

    baseUrl =
        typeof window !== "undefined"
            ? window.location.origin
            : "https://esocial.edenkingdom.org",

    size = 220,

}: InviteQRCodeProps) {

    const inviteLink =
        `${baseUrl}/social/invite?code=${inviteCode}`;

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 15,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: .25,
            }}

            className="mt-8"

        >

            <div

                className="

                rounded-3xl

                bg-[#101010]

                border

                border-white/10

                p-8

                "

            >

                <div className="flex items-center gap-3 mb-6">

                    <QrCode

                        className="text-yellow-400"

                        size={22}

                    />

                    <div>

                        <h2 className="font-bold">

                            QR Code

                        </h2>

                        <p className="text-sm text-gray-400">

                            Digitalize para abrir o convite.

                        </p>

                    </div>

                </div>

                <div

                    className="

                    bg-white

                    rounded-3xl

                    p-6

                    mx-auto

                    w-fit

                    "

                >

                    <QRCode

                        value={inviteLink}

                        size={size}

                    />

                </div>

                <div

                    className="

                    mt-6

                    flex

                    items-center

                    justify-center

                    gap-2

                    "

                >

                    <Smartphone

                        className="text-green-400"

                        size={18}

                    />

                    <p className="text-xs text-gray-400">

                        Qualquer smartphone pode ler este QR Code.

                    </p>

                </div>

            </div>

        </motion.div>

    );

}