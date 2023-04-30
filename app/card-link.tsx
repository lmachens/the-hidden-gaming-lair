"use client";

import Image from "next/image";
import Link from "next/link";
import { trackOutboundLinkClick } from "./PlausibleTracker";

export function CardLink({
  href,
  src,
  alt,
  title,
  description,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-[#569287] bg-[#0b0a0e] overflow-hidden w-[258px] h-[310px] hover:scale-110 transition-transform"
      target="_blank"
      onClick={() => {
        trackOutboundLinkClick(href);
      }}
    >
      <Image src={src} alt={alt} width={258} height={198} draggable={false} />
      <h2 className={`m-3 text-lg font-semibold text-center`}>{title}</h2>
      <p className={`m-3 max-w-[30ch] text-sm opacity-50 text-center`}>
        {description}
      </p>
    </Link>
  );
}
