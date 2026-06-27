"use client";

import InvitePreview from "../CreateCodeModal/InvitePreview";
import InviteQRCode from "../CreateCodeModal/InviteQRCode";
import InviteQRCodeCard from "../CreateCodeModal/InviteQRCodeCard/InviteQRCodeCard";
import ShareButtons from "../CreateCodeModal/ShareButtons";
import CopyInviteButton from "../CreateCodeModal/CopyInviteButton";
import NativeShareButton from "../CreateCodeModal/NativeShareButton";

interface InviteSharePanelProps {

  inviteCode: string;

  baseUrl?: string;

}

export default function InviteSharePanel({

  inviteCode,

  baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://esocial.edenkingdom.org",

}: InviteSharePanelProps) {

  const inviteLink =
    `${baseUrl}/social/invite?code=${inviteCode}`;

  function open(url: string) {

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  }

  return (

    <div className="space-y-8">

      <InvitePreview

        inviteCode={inviteCode}

        baseUrl={baseUrl}

      />

      <InviteQRCode

        inviteCode={inviteCode}

        baseUrl={baseUrl}

      />

      <InviteQRCodeCard

        inviteCode={inviteCode}

        inviteLink={inviteLink}

      />

      <div

        className="

          grid

          md:grid-cols-2

          gap-4

        "

      >

        <CopyInviteButton

          link={inviteLink}

        />

        <NativeShareButton

          url={inviteLink}

          title="Convite eSocial"

          text="Junte-se ao eSocial utilizando o meu convite."

        />

      </div>

      <ShareButtons

        onWhatsapp={() =>

          open(

            `https://wa.me/?text=${encodeURIComponent(inviteLink)}`

          )

        }

        onTelegram={() =>

          open(

            `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}`

          )

        }

        onFacebook={() =>

          open(

            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(inviteLink)}`

          )

        }

        onTwitter={() =>

          open(

            `https://twitter.com/intent/tweet?url=${encodeURIComponent(inviteLink)}`

          )

        }

        onMessenger={() =>

          open(

            `fb-messenger://share/?link=${encodeURIComponent(inviteLink)}`

          )

        }

        onEmail={() =>

          open(

            `mailto:?subject=Convite eSocial&body=${encodeURIComponent(inviteLink)}`

          )

        }

        onCopy={async () => {

          await navigator.clipboard.writeText(
            inviteLink
          );

          alert("Link copiado.");

        }}

        onNativeShare={async () => {

          if (navigator.share) {

            await navigator.share({

              title: "Convite eSocial",

              text: "Junte-se ao eSocial.",

              url: inviteLink,

            });

          }

        }}

      />

    </div>

  );

}