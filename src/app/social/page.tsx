"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  MessageSquare,
  Video,
  User,
  Wallet,
  Plus,
  Pencil,
  Save,
  DollarSign,
  TrendingUp,
  Users,
  Trophy,
  Bot,
  Briefcase,
  Cpu
} from "lucide-react";
import ServicesPage from "./services/page";
import Link from "next/link";



const navItems = [
  { id: "feed", label: "Feed", icon: Newspaper },
  { id: "socialize", label: "Socializar", icon: MessageSquare },
  { id: "services", label: "Serviços", icon: Briefcase },
  { id: "finance", label: "Finanças", icon: Wallet },
  { id: "instruments", label: "Instrumentos", icon: Cpu },
  { id: "profile", label: "Perfil", icon: User },
];

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState("feed");
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [commentTexts, setCommentTexts] =
useState<Record<string, string>>({});

  useEffect(() => {
  if (!session?.user) return;

  saveUser();
}, [session]);


useEffect(() => {
  if (!session?.user?.email) return;

  loadProfile();
}, [session]);


useEffect(() => {
  loadPosts();
}, []);


const [bio, setBio] = useState("");
const [company, setCompany] = useState("");
const [jobTitle, setJobTitle] = useState("");
const [location, setLocation] = useState("");
const [skills, setSkills] = useState("");




  if (status === "loading") {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Carregando...
    </div>
  );
}

if (!session) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <button
        onClick={() => signIn("google")}
        className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl text-white font-bold"
      >
        Entrar com Google
      </button>
    </div>
  );
}



async function saveUser() {
  if (!session?.user) return;

  const { data: existingUser } = await supabase
  .from("users")
  .select("*")
  .eq("email", session.user.email)
  .maybeSingle();

  if (existingUser) return;

  await supabase
    .from("users")
    .insert({
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    });

  console.log("Utilizador criado");
}


async function loadProfile() {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", session?.user?.email)
    .maybeSingle()

  if (!data) return;
  console.log("USER:", data);

  setProfile(data);

  setBio(data.bio || "");
  setCompany(data.company || "");
  setJobTitle(data.job_title || "");
  setLocation(data.location || "");
  setSkills(data.skills || "");
}


async function saveProfile() {
  if (!session?.user?.email) return;

  const { error } = await supabase
    .from("users")
    .update({
      bio,
      company,
      job_title: jobTitle,
      location,
      skills,
    })
    .eq("email", session.user.email);

  if (!error) {
    setEditing(false);
    loadProfile();
    alert("Perfil atualizado com sucesso.");
  }
}



async function loadPosts() {
  const { data } = await supabase
    .from("posts")
    .select(`
  *,
  users (
    name,
    image
  ),
  likes (
    id
  ),
  comments (
    id
  )
`)
    .order("created_at", {
      ascending: false,
    });

  if (data) {
    setPosts(data);
  }
}

async function createPost() {
  console.log("Profile:", profile);
  console.log("Texto:", newPost);

  if (!newPost.trim()) {
    alert("Escreva algo.");
    return;
  }

  if (!profile?.id) {
    alert("Profile ID não encontrado.");
    return;
  }

  const { data, error } = await supabase
    .from("posts")
    .insert({
      user_id: profile.id,
      content: newPost,
    })
    .select();

  console.log(data);
  console.log(error);

  if (error) {
    alert(error.message);
    return;
  }

  setNewPost("");
  loadPosts();

  alert("Publicado com sucesso.");
}


async function likePost(postId: string, ownerId: string) {
  if (!profile?.id) return;

  await supabase
    .from("likes")
    .insert({
      user_id: profile.id,
      post_id: postId,
    });

  await supabase
    .from("notifications")
    .insert({
      user_id: ownerId,
      title: "Novo Like",
      message: `${profile.name} gostou da tua publicação.`,
    });

  loadPosts();
}

async function addComment(postId:string){

    const text = commentTexts[postId];

    if (!text?.trim()) return;

    if (!profile?.id) return;

    await supabase
      .from("comments")
      .insert({
          user_id: profile.id,
          post_id: postId,
          content: text,
      });

    setCommentTexts({
        ...commentTexts,
        [postId]: "",
    });

    loadComments(postId);
}

async function loadComments(postId: string) {
  const { data } = await supabase
    .from("comments")
    .select(`
      *,
      users(
        name,
        image
      )
    `)
    .eq("post_id", postId)
    .order("created_at", {
      ascending: true,
    });

  if (data) {
    setComments(data);
  }
}




  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row">
      {/* SIDEBAR DESKTOP */}
      <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col">
        <div className="mb-10">
  <h2 className="text-3xl font-black text-red-600 tracking-tighter">
    S
  </h2>

  {session?.user && (
    <div className="mt-6 flex items-center gap-3">
      <img
        src={session.user.image || ""}
        alt="Avatar"
        className="w-12 h-12 rounded-full border border-red-600"
      />

      <div>
        <p className="font-semibold text-white">
          {session.user.name}
        </p>

        <p className="text-xs text-gray-400">
          {session.user.email}
        </p>
        <button
  onClick={() => signOut()}
  className="mt-2 text-xs text-red-500 hover:text-red-400"
>
  Terminar sessão
</button>
      </div>
    </div>
  )}
</div>
        <nav className="space-y-2">
  {navItems.map((item) => {

    if (item.id === "services") {
      return (
        <Link
          key={item.id}
          href="/social/services"
          className="flex items-center gap-3 w-full p-3 rounded-xl transition-all text-gray-500 hover:text-white hover:bg-white/5"
        >
          <item.icon size={20} />
          {item.label}
        </Link>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => setActiveTab(item.id)}
        className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
          activeTab === item.id
            ? "bg-white/10 text-white font-semibold"
            : "text-gray-500 hover:text-white hover:bg-white/5"
        }`}
      >
        <item.icon size={20} />
        {item.label}
      </button>
    );

  })}
</nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 max-w-3xl mx-auto w-full pb-24">
        <header className="mb-8">
          <h1 className="text-3xl font-bold capitalize">{activeTab}</h1>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Conteúdo dinâmico aqui */}
           {activeTab === "profile" ? (

  <div className="space-y-6">

    <div className="bg-[#111] border border-white/10 rounded-2xl p-8">

      <div className="flex items-center gap-6">

        <img
          src={session.user?.image || ""}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-red-600"
        />

        <div>
          <h2 className="text-3xl font-bold">
            {session.user?.name}
          </h2>

          <p className="text-gray-400">
            {session.user?.email}
          </p>

          <p className="text-red-500 mt-2">
            Membro da Rede eSocial
          </p>

          <button
  onClick={() => setEditing(!editing)}
  className="mt-4 flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
>
  <Pencil size={16} />
  Editar Perfil
</button>
        </div>

      </div>

    </div>

    <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3">
        Sobre Mim
      </h3>

      <p className="text-gray-400">
  {profile?.bio || "Este utilizador ainda não adicionou uma biografia."}
</p>
    </div>


<div className="bg-[#111] border border-white/10 rounded-2xl p-6">

    <h3 className="text-xl font-bold mb-4">
      Perfil Profissional
    </h3>

    <div className="space-y-3">

      <p>
        <strong>Empresa:</strong>{" "}
        {profile?.company || "Não definida"}
      </p>

      <p>
        <strong>Cargo:</strong>{" "}
        {profile?.job_title || "Não definido"}
      </p>

      <p>
        <strong>Localização:</strong>{" "}
        {profile?.location || "Não definida"}
      </p>

      <p>
        <strong>Skills:</strong>{" "}
        {profile?.skills || "Não definidas"}
      </p>

    </div>

  </div>

  </div>

) : activeTab === "finance" ? (

<div className="space-y-6">

  <div className="bg-[#111] border border-white/10 rounded-2xl p-6">

    <h2 className="text-2xl font-bold mb-6">
      Centro Financeiro
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

      <button
        onClick={() =>
          window.open(
            "https://ecoin.edenkingdom.org/Savings",
            "_blank"
          )
        }
        className="bg-black rounded-xl p-4 border border-white/10 hover:border-green-500"
      >
        <DollarSign className="mx-auto mb-2" />
        Ganhar
      </button>

      <button
        onClick={() =>
          window.open(
            "https://ecoin.edenkingdom.org/ecoin-hub",
            "_blank"
          )
        }
        className="bg-black rounded-xl p-4 border border-white/10 hover:border-blue-500"
      >
        <TrendingUp className="mx-auto mb-2" />
        Investir
      </button>

      <button
  onClick={() => window.location.href = "/social/invite"}
  className="bg-black rounded-xl p-4 border border-white/10 hover:border-yellow-500"
>
  <Users className="mx-auto mb-2" />
  Convidar
</button>


     <button
  onClick={() => window.location.href = "/social/prizes"}
  className="bg-black rounded-xl p-4 border border-white/10 hover:border-purple-500"
>
  <Trophy className="mx-auto mb-2" />
  Prêmio
</button>

      <button
        onClick={() =>
          window.open(
            "https://ecoin.edenkingdom.org/ecoin-ai-trading",
            "_blank"
          )
        }
        className="bg-black rounded-xl p-4 border border-white/10 hover:border-red-500"
      >
        <Bot className="mx-auto mb-2" />
        IA Trading
      </button>

    </div>

  </div>

  

</div>


) : activeTab === "feed" ? (

<div className="space-y-6">

  <div className="bg-[#111] border border-white/10 rounded-2xl p-6">

    <h2 className="text-2xl font-bold mb-4">
      Nova Publicação
    </h2>

    <textarea
      value={newPost}
      onChange={(e) => setNewPost(e.target.value)}
      placeholder="Partilhe algo com a comunidade..."
      className="w-full h-32 bg-black border border-white/10 rounded-xl p-4"
    />

    <button
      onClick={createPost}
      className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
    >
      Publicar
    </button>

  </div>

  {posts.map((post) => (

    <div
      key={post.id}
      className="bg-[#111] border border-white/10 rounded-2xl p-6"
    >

      <div className="flex items-center gap-3 mb-4">

        <img
          src={post.users?.image}
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div>

          <a
  href={`/social/user/${post.user_id}`}
  className="font-bold hover:text-red-500"
>
  {post.users?.name}
</a>

          <p className="text-xs text-gray-500">
            {new Date(
              post.created_at
            ).toLocaleString()}
          </p>

        </div>

      </div>

      <p className="text-gray-200">
        {post.content}
      </p>

      <p className="text-gray-200">
  {post.content}
</p>



<div className="flex gap-6 mt-4">

  <button
    onClick={() =>
  likePost(
    post.id,
    post.user_id
  )
}
    className="text-red-500"
  >
    ❤️ {post.likes?.length || 0}
  </button>

  <button
    onClick={() => loadComments(post.id)}
    className="text-blue-400"
  >
    💬 {post.comments?.length || 0}
  </button>

</div>


<div className="mt-4">

  <textarea
    value={commentTexts[post.id] || ""}
    onChange={(e)=>
        setCommentTexts({
            ...commentTexts,
            [post.id]: e.target.value,
        })
    }
    placeholder="Escreva um comentário..."
    className="w-full bg-black border border-white/10 rounded-xl p-3"
  />

  <button
    onClick={() => addComment(post.id)}
    className="mt-2 bg-red-600 px-4 py-2 rounded-lg"
  >
    Comentar
  </button>

  <div className="mt-4 space-y-2">

  {comments
    .filter((c) => c.post_id === post.id)
    .map((comment) => (

      <div
        key={comment.id}
        className="bg-black rounded-xl p-3"
      >
        <strong>
          {comment.users?.name}
        </strong>

        <p>
          {comment.content}
        </p>
      </div>

  ))}

</div>

</div>


    </div>

  ))}

</div>


) : (
  <div className="bg-[#111] border border-white/10 p-6 rounded-2xl shadow-2xl">
    <p className="text-gray-400">Módulo em desenvolvimento.</p>
  </div>
)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#0B0B0B]/90 backdrop-blur-md border-t border-white/10 flex justify-around p-3 z-50">
        {navItems.map((item) => {

  if (item.id === "services") {
    return (
      <Link
        key={item.id}
        href="/social/services"
        className="flex items-center gap-3 w-full p-3 rounded-xl transition-all text-gray-500 hover:text-white hover:bg-white/5"
      >
        <item.icon size={20} />
        {item.label}
      </Link>
    );
  }

  return (
    <button
      key={item.id}
      onClick={() => setActiveTab(item.id)}
      className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
        activeTab === item.id
          ? "bg-white/10 text-white font-semibold"
          : "text-gray-500 hover:text-white hover:bg-white/5"
      }`}
    >
      <item.icon size={20} />
      {item.label}
    </button>
  );

})}
      </nav>

      
    </div>
  );
}