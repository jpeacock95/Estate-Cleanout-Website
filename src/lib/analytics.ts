"use client";

type GtagFn = (
  command: "event" | "config" | "js" | "set",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

type ClarityFn = (
  command: "event" | "set" | "identify" | "consent" | "upgrade",
  eventName?: string,
  value?: string,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    clarity?: ClarityFn;
    dataLayer?: unknown[];
  }
}

export type EventName =
  | "call_click"
  | "quote_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_error"
  | "nav_click"
  | "footer_link_click"
  | "service_card_click"
  | "area_card_click"
  | "email_click"
  | "social_click"
  | "cta_click";

export function trackEvent(
  name: EventName,
  params: Record<string, string | number | boolean> = {},
): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    // swallow analytics errors. Never break the UI
  }

  try {
    if (typeof window.clarity === "function") {
      window.clarity("event", name);
    }
  } catch {
    // swallow
  }
}
