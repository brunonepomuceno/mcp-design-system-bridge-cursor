import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-primary-foreground hover:bg-primary-600/90",
        secondary:
          "bg-secondary-600 text-secondary-foreground hover:bg-secondary-600/80",
        tertiary:
          "bg-transparent text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-50",
      },
      size: {
        sm: "h-8 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-12 rounded-md px-8",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
