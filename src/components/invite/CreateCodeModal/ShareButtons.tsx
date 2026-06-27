"use client";

import {
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Mail,
  Copy,
  Share2,
  MessageSquare,
} from "lucide-react";

import SocialShareButton from "./SocialShareButton";

interface ShareButtonsProps {

  onWhatsapp: () => void;

  onTelegram: () => void;

  onFacebook: () => void;

  onTwitter: () => void;

  onMessenger: () => void;

  onEmail: () => void;

  onCopy: () => void;

  onNativeShare: () => void;

}

export default function ShareButtons({

  onWhatsapp,

  onTelegram,

  onFacebook,

  onTwitter,

  onMessenger,

  onEmail,

  onCopy,

  onNativeShare,

}: ShareButtonsProps) {

  return (

    <div className="mt-8">

      <h3 className="text-lg font-bold mb-4">

        Compartilhar Convite

      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <SocialShareButton

          title="WhatsApp"

          subtitle="Enviar para contactos"

          icon={MessageCircle}

          color="#25D366"

          onClick={onWhatsapp}

        />

        <SocialShareButton

          title="Telegram"

          subtitle="Enviar para grupos"

          icon={Send}

          color="#27A7E7"

          onClick={onTelegram}

        />

        <SocialShareButton

          title="Facebook"

          subtitle="Publicar"

          icon={Facebook}

          color="#1877F2"

          onClick={onFacebook}

        />

        <SocialShareButton

          title="X"

          subtitle="Publicar"

          icon={Twitter}

          color="#ffffff"

          onClick={onTwitter}

        />

        <SocialShareButton

          title="Messenger"

          subtitle="Enviar"

          icon={MessageSquare}

          color="#0084FF"

          onClick={onMessenger}

        />

        <SocialShareButton

          title="Email"

          subtitle="Enviar convite"

          icon={Mail}

          color="#EA4335"

          onClick={onEmail}

        />

        <SocialShareButton

          title="Copiar Link"

          subtitle="Copiar para a área de transferência"

          icon={Copy}

          color="#10B981"

          onClick={onCopy}

        />

        <SocialShareButton

          title="Partilhar"

          subtitle="Apps instaladas"

          icon={Share2}

          color="#A855F7"

          onClick={onNativeShare}

        />

      </div>

    </div>

  );

}