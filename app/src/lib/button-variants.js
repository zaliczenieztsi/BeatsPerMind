import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[oklch(0.55_0.05_160)] text-white hover:bg-[oklch(0.5_0.06_160)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-5px_rgba(129,178,154,0.4)] dark:shadow-[0_0_12px_rgba(20,184,166,0.3)] dark:hover:shadow-[0_0_25px_rgba(20,184,166,0.5)]",
        outline:
          "border-border/50 bg-white/50 hover:bg-white/80 hover:border-border dark:border-[oklch(1_0_0/12%)] dark:bg-[oklch(0.15_0.005_260/0.5)] dark:hover:bg-[oklch(0.18_0.008_260/0.7)] dark:hover:border-[oklch(0.5_0.15_150/0.4)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]",
        secondary:
          "bg-secondary/70 text-secondary-foreground hover:bg-secondary/90 dark:bg-[oklch(0.18_0.008_260)] dark:text-[oklch(0.9_0.01_260)] dark:hover:bg-[oklch(0.22_0.008_260)] dark:border dark:border-[oklch(1_0_0/10%)] dark:shadow-[0_0_12px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
        ghost:
          "hover:bg-secondary/50 hover:text-foreground dark:hover:bg-[oklch(0.18_0.008_260/0.8)] dark:hover:text-[oklch(0.95_0.01_260)] dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-[oklch(0.577_0.2_25/0.15)] dark:text-[oklch(0.65_0.2_25)] dark:hover:bg-[oklch(0.577_0.2_25/0.25)] dark:hover:text-[oklch(0.7_0.2_25)] dark:focus-visible:border-[oklch(0.65_0.2_25/0.4)] dark:focus-visible:ring-[oklch(0.65_0.2_25/0.2)] dark:shadow-[0_0_12px_rgba(239,68,68,0.3)] dark:hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]",
        link: "text-[oklch(0.55_0.05_160)] underline-offset-4 hover:underline dark:text-[oklch(0.55_0.15_150)] dark:hover:text-[oklch(0.58_0.15_150)]",
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