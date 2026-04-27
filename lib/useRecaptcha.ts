"use client";

import { useEffect } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/** Loads the reCAPTCHA v3 script once and exposes getToken(action). */
export function useRecaptcha() {
  useEffect(() => {
    if (!SITE_KEY || document.getElementById("recaptcha-script")) return;

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  async function getToken(action: string): Promise<string | null> {
    if (!SITE_KEY) return null;
    try {
      return await window.grecaptcha.execute(SITE_KEY, { action });
    } catch {
      return null;
    }
  }

  return { getToken };
}
