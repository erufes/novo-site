"use client";

import { useState } from "react";
import { UserRound } from "lucide-react";

type MemberPhotoProps = {
  name: string;
  photo?: string;
  /** Classes aplicadas à <img> quando há foto. */
  className?: string;
  /** Classes aplicadas ao bloco de fallback (ícone de pessoa). */
  fallbackClassName?: string;
};

/**
 * Foto do membro com fallback gracioso: usa a foto local e, na ausência dela
 * (ou se o arquivo não existir), mostra um ícone de pessoa padrão — assim
 * nenhuma imagem "quebrada" aparece.
 */
export function MemberPhoto({
  name,
  photo,
  className,
  fallbackClassName,
}: MemberPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (!photo || failed) {
    return (
      <span className={fallbackClassName}>
        <UserRound className="h-1/2 w-1/2 text-erus/35" strokeWidth={1.4} aria-hidden />
        <span className="sr-only">{name}</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
