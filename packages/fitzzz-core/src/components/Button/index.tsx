import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonStyles = cva("btn font-medium", {
  variants: {
    variant: {
      default: [
        "bg-slate-150",
        "text-slate-800",
        "hover:bg-slate-200",
        "active:bg-slate-200/80",
        "dark:bg-navy-500",
        "dark:text-navy-50",
        "dark:hover:bg-navy-450",
        "dark:active:bg-navy-450/90",
      ],
      primary: [
        "bg-primary",
        "text-white",
        "hover:bg-primary-focus",
        "active:bg-primary-focus/90",
        "dark:bg-accent",
        "dark:hover:bg-accent-focus",
        "dark:active:bg-accent/90",
      ],
      secondary: [
        "bg-secondary",
        "text-white",
        "hover:bg-secondary-focus",
        "active:bg-secondary-focus/90",
      ],
      info: [
        "bg-info",
        "text-white",
        "hover:bg-info-focus",
        "active:bg-info-focus/90",
      ],
      success: [
        "bg-success",
        "text-white",
        "hover:bg-success-focus",
        "active:bg-success-focus/90",
      ],
      warning: [
        "bg-warning",
        "text-white",
        "hover:bg-warning-focus",
        "active:bg-warning-focus/90",
      ],
      error: [
        "bg-error",
        "text-white",
        "hover:bg-error-focus",
        "active:bg-error-focus/90",
      ],
    },
    rounded: {
      true: "rounded-full",
    },
    outlined: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
  compoundVariants: [
    {
      variant: "default",
      outlined: true,
      class: [
        "border",
        "border-slate-300",
        "text-slate-800",
        "hover:bg-slate-150",
        "active:bg-slate-150/80",
        "bg-transparent",
        "dark:border-navy-450",
        "dark:text-navy-50",
        "dark:hover:bg-navy-500",
        "dark:active:bg-navy-500/90",
        "dark:bg-transparent",
      ],
    },
    {
      variant: "primary",
      outlined: true,
      class: [
        "border",
        "border-primary",
        "text-primary",
        "hover:bg-primary",
        "hover:text-white",
        "active:bg-primary/90",
        "bg-transparent",
        "dark:border-accent",
        "dark:text-accent-light",
        "dark:hover:bg-accent",
        "dark:hover:text-white",
        "dark:active:bg-accent/90",
        "dark:bg-transparent",
      ],
    },
    {
      variant: "secondary",
      outlined: true,
      class: [
        "border",
        "border-secondary",
        "text-secondary",
        "hover:bg-secondary",
        "hover:text-white",
        "active:bg-secondary/90",
        "bg-transparent",
        "dark:text-secondary-light",
        "dark:hover:bg-secondary",
        "dark:hover:text-white",
        "dark:active:bg-secondary/90",
        "dark:bg-transparent",
      ],
    },
    {
      variant: "info",
      outlined: true,
      class: [
        "border",
        "border-info",
        "text-info",
        "hover:bg-info",
        "hover:text-white",
        "active:bg-info/90",
        "bg-transparent",
      ],
    },
    {
      variant: "success",
      outlined: true,
      class: [
        "border",
        "border-success",
        "text-success",
        "hover:bg-success",
        "hover:text-white",
        "active:bg-success/90",
        "bg-transparent",
      ],
    },
    {
      variant: "warning",
      outlined: true,
      class: [
        "border",
        "border-warning",
        "text-warning",
        "hover:bg-warning",
        "hover:text-white",
        "active:bg-warning/90",
        "bg-transparent",
      ],
    },
    {
      variant: "error",
      outlined: true,
      class: [
        "border",
        "border-error",
        "text-error",
        "hover:bg-error",
        "hover:text-white",
        "active:bg-error/90",
        "bg-transparent",
      ],
    },
  ],
});

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({
  // Types buttonStyles
  variant,
  rounded,
  outlined,

  // Types component
  title,
  className,
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      title={title}
      className={buttonStyles({ variant, outlined, rounded, class: className })}
      {...props}
    >
      {children}
    </button>
  );
};
