"use client";

const PHONE_NUMBER = "+212661390788";
const WHATSAPP_NUMBER = "212661390788"; // wa.me needs no "+" and no leading zero

export function PhoneCallButton() {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      aria-label="Appelez-nous au +212 661-390788"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#f59e0b] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#f59e0b]/50"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f59e0b] opacity-40" />

      {/* Phone call SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="relative size-7"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
      </svg>
    </a>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp au +212 661-390788"
      className="fixed bottom-24 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-40" />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="relative size-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.19-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.24-8.25M8.53 6.71c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.79 2.87 4.42 3.91 2.19.87 2.63.7 3.11.65.48-.04 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.86-.24-.09-.42-.13-.6.13-.17.26-.68.86-.84 1.04-.15.17-.31.19-.57.06-.26-.13-1.11-.41-2.11-1.31-.78-.7-1.31-1.55-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.47.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.6-1.47-.84-2.01-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.5-.01" />
      </svg>
    </a>
  );
}
