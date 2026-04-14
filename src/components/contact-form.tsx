"use client";

import { useState, useTransition } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactFormInput } from "@/app/contact/actions";
import { trackEvent } from "@/lib/analytics";
import { services } from "@/lib/services-data";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  const handleFirstFocus = () => {
    if (!started) {
      setStarted(true);
      trackEvent("contact_form_start");
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input: ContactFormInput = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      address: String(formData.get("address") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };
    startTransition(async () => {
      const result = await submitContactForm(input);
      if (result.ok) {
        setStatus("success");
        setError("");
        trackEvent("contact_form_submit", { service: input.service || "none" });
      } else {
        setStatus("error");
        setError(result.error);
        trackEvent("contact_form_error", { error: result.error });
      }
    });
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border-2 border-[#ed6623] bg-[#fff7f2] p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#ed6623]" strokeWidth={2} />
        <h2 className="mt-4 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[26px]">
          Message Sent
        </h2>
        <p className="mt-2 text-[15px] text-[#1d1d1d]/80 font-[family-name:var(--font-body)]">
          Thanks for reaching out. We&apos;ll call or email you back within a few hours.
        </p>
        <p className="mt-4 text-[14px] text-[#1d1d1d]/70 font-[family-name:var(--font-body)]">
          Need us faster? Call{" "}
          <a
            href="tel:5852000871"
            className="font-semibold text-[#ed6623] underline"
            onClick={() => trackEvent("call_click", { location: "contact-success" })}
          >
            (585) 200-0871
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot, hidden from users, bots fill it */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <Field label="Name *">
          <input
            type="text"
            name="name"
            required
            onFocus={handleFirstFocus}
            className="input-base"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone *">
          <input
            type="tel"
            name="phone"
            required
            onFocus={handleFirstFocus}
            className="input-base"
            placeholder="(412) 555-0123"
          />
        </Field>
      </div>

      <Field label="Email *">
        <input
          type="email"
          name="email"
          required
          onFocus={handleFirstFocus}
          className="input-base"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Service">
        <select
          name="service"
          aria-label="Service"
          onFocus={handleFirstFocus}
          className="input-base"
          defaultValue=""
        >
          <option value="">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Address or zip code">
        <input
          type="text"
          name="address"
          onFocus={handleFirstFocus}
          className="input-base"
          placeholder="Where's the job?"
        />
      </Field>

      <Field label="Tell us about the job *">
        <textarea
          name="message"
          required
          rows={5}
          onFocus={handleFirstFocus}
          className="input-base resize-none"
          placeholder="What needs to be hauled? Rough size, access notes, and anything else we should know."
        />
      </Field>

      {status === "error" && error ? (
        <div className="rounded-lg border-2 border-red-300 bg-red-50 p-4 text-[14px] text-red-800">
          {error}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-4 max-md:flex-col">
        <button
          type="submit"
          disabled={pending}
          className="btn btn-primary disabled:opacity-60 max-md:w-full"
        >
          <Send className="h-[18px] w-[18px]" strokeWidth={3} />
          <span>{pending ? "SENDING..." : "SEND MESSAGE"}</span>
        </button>
        <a
          href="tel:5852000871"
          className="btn btn-secondary max-md:w-full"
          onClick={() => trackEvent("call_click", { location: "contact-form" })}
        >
          <Phone className="h-[18px] w-[18px]" strokeWidth={3} />
          <span>OR CALL (585) 200-0871</span>
        </a>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-semibold uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]">
        {label}
      </span>
      {children}
    </label>
  );
}
