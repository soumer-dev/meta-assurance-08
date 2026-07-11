export function WhatsAppButton() {
  return (
    <a
      href="tel:+212661390788"
      aria-label="Appelez-nous au +212 661-390788"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#00c9d2] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#00c9d2]/50"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00c9d2] opacity-40" />

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
