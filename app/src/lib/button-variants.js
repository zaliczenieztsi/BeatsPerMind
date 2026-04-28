import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[oklch(0.55_0.05_160)] text-white hover:bg-[oklch(0.5_0.06_160)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-5px_rgba(129,178,154,0.4)]",
        outline:
          "border-border/50 bg-white/50 hover:bg-white/80 hover:border-border dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary/70 text-secondary-foreground hover:bg-secondary/90",
        ghost:
          "hover:bg-secondary/50 hover:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-[oklch(0.55_0.05_160)] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 px-5 gap-1.5",
        xs: "h-7 px-3 text-xs rounded-xl",
        sm: "h-8 px-3.5 text-sm rounded-xl",
        lg: "h-12 px-6 text-base rounded-2xl",
        icon: "size-10 rounded-full",
        "icon-xs":
          "size-7 rounded-full",
        "icon-sm":
          "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)