import Link from "next/link";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
  href: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-text text-bg hover:opacity-90",
  secondary: "border border-border text-text hover:border-text-secondary",
  ghost: "text-text-secondary hover:text-text",
};

export function Button({ variant = "primary", className, href, children, ...props }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-sm font-medium",
    "transition-[transform,opacity,border-color,color] duration-200 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    className
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
