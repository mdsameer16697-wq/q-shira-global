import { Link } from "@tanstack/react-router";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Q Shira Creation home">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-[family-name:var(--font-display)] text-2xl italic ${
          onDark ? "bg-highlight text-brand-deep" : "bg-brand text-highlight"
        }`}
        aria-hidden="true"
      >
        Q
      </span>
      <span className="font-[family-name:var(--font-display)] text-xl leading-none sm:text-2xl">
        Q Shira <span className="italic text-highlight-deep">Creation</span>
      </span>
    </Link>
  );
}
