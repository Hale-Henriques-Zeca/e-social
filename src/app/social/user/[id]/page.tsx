"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PublicProfile({
  params,
}: {
  params: { id: string };
}) {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    loadUser();
    loadPosts();
  }, []);

  async function loadUser() {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("id", params.id)
      .maybeSingle();

    if (data) {
      setUser(data);
    }
  }

  async function loadPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", params.id)
      .order("created_at", {
        ascending: false,
      });

    if (data) {
      setPosts(data);
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto">

        <div className="bg-[#111] rounded-2xl p-8 border border-white/10">

          <div className="flex items-center gap-6">

            <img
              src={user.image}
              alt=""
              className="w-32 h-32 rounded-full border-4 border-red-600"
            />

            <div>

              <h1 className="text-4xl font-bold">
                {user.name}
              </h1>

              <p className="text-gray-400">
                {user.email}
              </p>

              <p className="mt-4 text-gray-300">
                {user.bio || "Sem biografia"}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Publicações
          </h2>

          <div className="space-y-4">

            {posts.map((post) => (

              <div
                key={post.id}
                className="bg-[#111] border border-white/10 rounded-2xl p-6"
              >

                <p>
                  {post.content}
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  {new Date(
                    post.created_at
                  ).toLocaleString()}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}