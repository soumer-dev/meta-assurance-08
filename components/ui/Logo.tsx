import Image from "next/image";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/LOGO Meta assurance.svg"
      alt="Meta Assurances et Conseils"
      width={120}
      height={36}
      className={className}
    />
  );
}
