import React from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#FF7D10] text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-gray-500 text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 rounded-full px-4 py-2",
        sm: "h-9  px-3",
        lg: "h-11  px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({ children, className, variant, size }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref}>
      <div className="absolute h-2 w-10 bg-[#FF8E2B] top-0 left-3 rounded-full" />
      {children}
      <div className="absolute h-2 w-10 bg-[#FF8E2B] bottom-0 right-3 rounded-full" />
    </button>
  );
};

export default Button;
