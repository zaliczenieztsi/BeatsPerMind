import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[oklch(0.55_0.15_150)] text-[oklch(0.08_0.01_260)] hover:bg-[oklch(0.58_0.15_150)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-5px_oklch(0.55_0.15_150/0.4),0_0_30px_oklch(0.55_0.15_150/0.15)]",
        outline:
          "border-[oklch(1_0_0/12%)] bg-[oklch(0.15_0.005_260/0.5)] text-[oklch(0.9_0.01_260)] hover:bg-[oklch(0.18_0.008_260/0.7)] hover:border-[oklch(0.5_0.15_150/0.4)] dark:border-[oklch(1_0_0/12%)] dark:bg-[oklch(0.15_0.005_260/0.5)] dark:hover:bg-[oklch(0.18_0.008_260/0.7)]",
        secondary:
          "bg-[oklch(0.18_0.008_260)] text-[oklch(0.9_0.01_260)] hover:bg-[oklch(0.22_0.008_260)] border border-[oklch(1_0_0/10%)]",
        ghost:
          "hover:bg-[oklch(0.18_0.008_260/0.8)] hover:text-[oklch(0.95_0.01_260)] dark:hover:bg-[oklch(0.2_0.08_150/0.15)]",
        destructive:
          "bg-[oklch(0.577_0.2_25/0.15)] text-[oklch(0.65_0.2_25)] hover:bg-[oklch(0.577_0.2_25/0.25)] hover:text-[oklch(0.7_0.2_25)] focus-visible:border-[oklch(0.65_0.2_25/0.4)] focus-visible:ring-[oklch(0.65_0.2_25/0.2)] dark:bg-[oklch(0.65_0.2_25/0.25)] dark:hover:bg-[oklch(0.65_0.2_25/0.35)] dark:focus-visible:ring-[oklch(0.65_0.2_25/0.4)]",
        link: "text-[oklch(0.55_0.15_150)] underline-offset-4 hover:underline hover:text-[oklch(0.58_0.15_150)]",
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