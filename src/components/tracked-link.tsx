"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type EventName } from "@/lib/analytics";

type Props = {
  href: string;
  event: EventName;
  eventParams?: Record<string, string | number | boolean>;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  external?: boolean;
};

export function TrackedLink({
  href,
  event,
  eventParams,
  className,
  children,
  ariaLabel,
  external,
}: Props) {
  const handleClick = () => trackEvent(event, eventParams);

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
