import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: LucideIcon | null;
  external?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-accent";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent-dark text-ivory shadow-soft hover:bg-ink hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-ink/[0.03] hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-white/70 text-ink border border-border hover:border-accent/50 hover:-translate-y-0.5 active:translate-y-0",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = ArrowUpRight,
  external = false,
  className = "",
  ...rest
}: ButtonProps) {
  const Icon = icon;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon ? (
        <Icon
          size={size === "lg" ? 18 : 16}
          strokeWidth={2.25}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("https")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
