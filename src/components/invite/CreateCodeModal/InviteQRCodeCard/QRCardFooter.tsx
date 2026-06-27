"use client";

import { motion } from "framer-motion";
import {
    Globe,
    ShieldCheck,
    Printer,
    Copyright,
} from "lucide-react";

interface QRCardFooterProps {

    version?: string;

    website?: string;

}

export default function QRCardFooter({

    version = "v1.0",

    website = "https://esocial.edenkingdom.org",

}: QRCardFooterProps) {

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
                duration: .35,
            }}

            className="mt-8"

        >

            <div

                className="

                    rounded-3xl

                    border

                    border-white/10

                    bg-gradient-to-b

                    from-[#111]

                    to-[#090909]

                    p-6

                "

            >

                <div className="flex items-center justify-center gap-2">

                    <ShieldCheck

                        size={18}

                        className="text-green-400"

                    />

                    <span

                        className="

                            text-sm

                            font-semibold

                            text-green-300

                        "

                    >

                        Convite Oficial eSocial

                    </span>

                </div>

                <div className="mt-5 flex items-center justify-center gap-2">

                    <Globe

                        size={18}

                        className="text-blue-400"

                    />

                    <span

                        className="

                            text-sm

                            text-gray-300

                            break-all

                        "

                    >

                        {website}

                    </span>

                </div>

                <div

                    className="

                        mt-6

                        flex

                        items-center

                        justify-center

                        gap-2

                        text-xs

                        text-gray-500

                    "

                >

                    <Printer size={15} />

                    Preparado para impressão em alta qualidade

                </div>

                <div

                    className="

                        mt-6

                        border-t

                        border-white/10

                        pt-5

                        flex

                        flex-col

                        items-center

                        gap-2

                    "

                >

                    <div className="flex items-center gap-2">

                        <Copyright

                            size={15}

                            className="text-yellow-400"

                        />

                        <span

                            className="

                                text-xs

                                text-gray-400

                            "

                        >

                            Powered by EdenKingDom®

                        </span>

                    </div>

                    <span

                        className="

                            text-[11px]

                            text-gray-600

                        "

                    >

                        Cartão Digital • {version}

                    </span>

                </div>

            </div>

        </motion.div>

    );

}