"use server";

import nodemailer from "nodemailer";

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
  website?: string; // honeypot
};

const DESTINATION = "hello@steelcitycleanouts.com";

function escape(s: string): string {
  return s.replace(/[<>&"']/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" })[c] ?? c,
  );
}

export async function submitContactForm(input: ContactFormInput): Promise<ContactFormResult> {
  // Honeypot: if filled, silently succeed so bots don't retry
  if (input.website && input.website.trim()) {
    return { ok: true };
  }

  const name = input.name?.trim();
  const email = input.email?.trim();
  const phone = input.phone?.trim();
  const message = input.message?.trim();

  if (!name || !email || !phone || !message) {
    return { ok: false, error: "Please fill in name, email, phone, and a short message." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("[contact] GMAIL_USER or GMAIL_APP_PASSWORD not set");
    return {
      ok: false,
      error: "The contact form isn't fully set up yet. Please call (585) 200-0871 directly.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const subject = `New quote request from ${name}: ${input.service || "General"}`;
  const textBody = [
    `New quote request from Steel City Cleanouts site`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone}`,
    `Service: ${input.service || "(not specified)"}`,
    `Address: ${input.address || "(not specified)"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; padding: 20px;">
      <h2 style="color: #ed6623; margin: 0 0 16px;">New Quote Request</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px 0; font-weight: 600;">Name:</td><td>${escape(name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Email:</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Phone:</td><td><a href="tel:${escape(phone)}">${escape(phone)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Service:</td><td>${escape(input.service || "(not specified)")}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Address:</td><td>${escape(input.address || "(not specified)")}</td></tr>
      </table>
      <h3 style="margin: 24px 0 8px; color: #1d1d1d;">Message</h3>
      <p style="white-space: pre-wrap; line-height: 1.6; color: #1d1d1d;">${escape(message)}</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #888;">Sent from steelcitycleanouts.com contact form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Steel City Cleanouts Site" <${user}>`,
      to: DESTINATION,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] send failed", err);
    return { ok: false, error: "Something went wrong sending your message. Please call (585) 200-0871 or try again." };
  }
}
