import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 text-plum" aria-label="Q Shira Creation home">
      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden="true">
        <path d="M17 1 33 10v18L17 37 1 28V10L17 1Z" fill="currentColor" opacity="0.18" />
        <path d="M17 1 33 10 17 19 1 10 17 1Z" fill="currentColor" />
        <path d="M17 19v18l16-9V10l-16 9Z" fill="currentColor" opacity="0.6" />
        <path d="m21 24 8 9" stroke="var(--background)" strokeWidth="3" />
      </svg>
      <span className="text-[1.15rem] font-bold uppercase leading-none tracking-[0.22em] sm:text-[1.35rem]">
        Q Shira <span className="font-medium">Creation</span>
      </span>
    </Link>
  );
}
