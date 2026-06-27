"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Store,
    Building2,
    GraduationCap,
    BriefcaseBusiness,
    Wheat,
    HeartPulse,
    Landmark,
    CalendarDays,
    Clapperboard,
    Laptop,
    Plane,
    Building,
    Briefcase,
    HandHeart,
    ChevronRight,
} from "lucide-react";

interface SidebarProps {
    active: string;
    onChange: (module: string) => void;
}

const modules = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
    },

    {
        id: "store",
        title: "Online Store",
        icon: Store,
    },

    {
        id: "office",
        title: "Virtual Office",
        icon: Building2,
    },

    {
        id: "education",
        title: "Education",
        icon: GraduationCap,
    },

    {
        id: "business",
        title: "Business Hub",
        icon: BriefcaseBusiness,
    },

    {
        id: "agriculture",
        title: "Agriculture",
        icon: Wheat,
    },

    {
        id: "health",
        title: "Health",
        icon: HeartPulse,
    },

    {
        id: "finance",
        title: "Finance",
        icon: Landmark,
    },

    {
        id: "events",
        title: "Events",
        icon: CalendarDays,
    },

    {
        id: "entertainment",
        title: "Entertainment",
        icon: Clapperboard,
    },

    {
        id: "freelancer",
        title: "Freelancer",
        icon: Laptop,
    },

    {
        id: "tourism",
        title: "Tourism",
        icon: Plane,
    },

    {
        id: "realestate",
        title: "Real Estate",
        icon: Building,
    },

    {
        id: "jobs",
        title: "Jobs",
        icon: Briefcase,
    },

    {
        id: "donations",
        title: "Donations",
        icon: HandHeart,
    },
];

export default function Sidebar({
    active,
    onChange,
}: SidebarProps) {
    return (
        <aside className="w-full lg:w-80">

            <div className="rounded-3xl border border-zinc-800 bg-[#0c0c0c] p-5">

                <div className="mb-5">

                    <h2 className="text-xl font-bold text-white">
                        Services
                    </h2>

                    <p className="text-zinc-500 text-sm mt-1">
                        Marketplace Inteligente
                    </p>

                </div>

                <div className="space-y-2">

                    {modules.map((module) => {

                        const Icon = module.icon;

                        const selected =
                            active === module.id;

                        return (

                            <motion.button
                                key={module.id}
                                whileHover={{
                                    x: 5,
                                }}
                                whileTap={{
                                    scale: .98,
                                }}
                                onClick={() =>
                                    onChange(module.id)
                                }
                                className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 transition-all

                                ${
                                    selected
                                        ? "bg-cyan-500 text-black shadow-lg"
                                        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                                }

                                `}
                            >

                                <div className="flex items-center gap-3">

                                    <Icon size={19} />

                                    <span className="font-medium">

                                        {module.title}

                                    </span>

                                </div>

                                <ChevronRight
                                    size={17}
                                />

                            </motion.button>

                        );

                    })}

                </div>

            </div>

            <motion.div
                whileHover={{
                    y: -3,
                }}
                className="rounded-3xl border border-zinc-800 bg-[#0c0c0c] mt-5 p-5"
            >

                <h3 className="text-white font-semibold">

                    eSocial Services

                </h3>

                <p className="text-zinc-500 text-sm mt-3 leading-relaxed">

                    Plataforma integrada para empresas,
                    profissionais, instituições e criadores de
                    conteúdo oferecerem serviços digitais,
                    presenciais e híbridos num único ecossistema.

                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">

                    <div className="rounded-xl bg-zinc-900 p-4">

                        <p className="text-zinc-500 text-xs">

                            Categorias

                        </p>

                        <h4 className="text-cyan-400 text-2xl font-bold">

                            15

                        </h4>

                    </div>

                    <div className="rounded-xl bg-zinc-900 p-4">

                        <p className="text-zinc-500 text-xs">

                            Módulos

                        </p>

                        <h4 className="text-emerald-400 text-2xl font-bold">

                            {modules.length}

                        </h4>

                    </div>

                </div>

            </motion.div>

        </aside>
    );
}