"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import { Plus, Copy, Check, X } from "lucide-react";

export default function CreateCodeModal() {

  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [createdCode, setCreatedCode] = useState("");

  const [copied, setCopied] = useState(false);

  async function createCode() {

    if (!session?.user?.email) return;

    setLoading(true);

    try {

      const { data: user } = await supabase
        .from("users")
        .select("id")
        .eq("email", session.user.email)
        .single();

      if (!user) {
        alert("Utilizador não encontrado.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "/api/invite/create",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            userId: user.id,
          }),
        }
      );

      const json = await response.json();

      if (!json.success) {

        alert(json.message);

        setLoading(false);

        return;
      }

      setCreatedCode(json.code.code);

    } catch (err) {

      console.error(err);

      alert("Erro ao criar código.");

    }

    setLoading(false);
  }

  async function copyLink() {

    if (!createdCode) return;

    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "";

    const link =
      `${base}/social/invite?code=${createdCode}`;

    await navigator.clipboard.writeText(link);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);

  }

  return (
    <>

      <button
        onClick={() => {
          setCreatedCode("");
          setOpen(true);
        }}
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-2xl font-bold"
      >
        <Plus size={18} />

        Criar Novo Código
      </button>

      {open && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 w-full max-w-lg">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">

                Novo Código

              </h2>

              <button
                onClick={() => setOpen(false)}
              >
                <X />
              </button>

            </div>

            {createdCode === "" ? (

              <>

                <p className="text-gray-400 mb-8">

                  Clique no botão abaixo para gerar
                  um novo código de referência.

                </p>

                <button
                  onClick={createCode}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 rounded-2xl py-4 font-bold"
                >

                  {loading
                    ? "Criando..."
                    : "Gerar Código"}

                </button>

              </>

            ) : (

              <>

                <div className="bg-black rounded-2xl border border-yellow-500 p-6">

                  <p className="text-gray-400 text-sm">

                    Código Criado

                  </p>

                  <h1 className="text-4xl font-black text-yellow-400 mt-2 tracking-widest">

                    {createdCode}

                  </h1>

                </div>

                <button
                  onClick={copyLink}
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
                >

                  {copied ? (

                    <>
                      <Check size={18} />
                      Copiado
                    </>

                  ) : (

                    <>
                      <Copy size={18} />
                      Copiar Link
                    </>

                  )}

                </button>

              </>

            )}

          </div>

        </div>

      )}

    </>
  );
}