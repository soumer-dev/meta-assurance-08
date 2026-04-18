import logoSvg from "@/assets/logo.svg";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={logoSvg} alt="Meta Assurances et Conseils" className={className} />;
}
