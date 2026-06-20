"use client";

import { useEffect, useRef, useState } from "react";
import { getProjectIcon } from "@/lib/project-icons";
import { cn } from "@/lib/utils";

type ProjectImageProps = {
  slug: string;
  photo?: string;
  alt: string;
  className?: string;
};

// Mostra a foto do projeto; se o arquivo ainda não existe (404) ou não foi
// definido, cai graciosamente para o ícone da marca em vez de uma imagem
// quebrada — útil enquanto as fotos estão sendo adicionadas.
export function ProjectImage({ slug, photo, alt, className }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const Icon = getProjectIcon(slug);

  // A imagem é renderizada no servidor e pode falhar (404) antes do React
  // hidratar e anexar o onError — esse evento se perde. Na montagem, checamos
  // se a imagem já carregou quebrada (complete + naturalWidth 0) e caímos para
  // o fallback.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [photo]);

  if (!photo || failed) {
    return (
      <div
        aria-hidden
        className={cn(
          "flex items-center justify-center bg-erus/[0.06]",
          className,
        )}
      >
        {/* getProjectIcon retorna uma referência estável (não é criada no render) */}
        {/* eslint-disable-next-line react-hooks/static-components */}
        <Icon className="size-10 text-erus/35" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={photo}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
