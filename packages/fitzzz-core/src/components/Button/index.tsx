import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonStyles = cva("btn font-medium", {
  variants: {
    variant: {
      default: [
        "bg-slate-150",
        "text-slate-800",
        "hover:bg-slate-200",
        "focus:bg-slate-200",
        "active:bg-slate-200/80",
        "dark:bg-navy-500",
        "dark:text-navy-50",
        "dark:hover:bg-navy-450",
        "dark:focus:bg-navy-450",
        "dark:active:bg-navy-450/90",
      ],
      primary: [
        "bg-primary",
        "text-white",
        "hover:bg-primary-focus",
        "focus:bg-primary-focus",
        "active:bg-primary-focus/90",
        "dark:bg-accent",
        "dark:hover:bg-accent-focus",
        "dark:focus:bg-accent-focus",
        "dark:active:bg-accent/90",
      ],
      secondary: [
        "bg-secondary",
        "text-white",
        "hover:bg-secondary-focus",
        "focus:bg-secondary-focus",
        "active:bg-secondary-focus/90",
      ],
      info: [
        "bg-info",
        "text-white",
        "hover:bg-info-focus",
        "focus:bg-info-focus",
        "active:bg-info-focus/90",
      ],
      success: [
        "bg-success",
        "text-white",
        "hover:bg-success-focus",
        "focus:bg-success-focus",
        "active:bg-success-focus/90",
      ],
      warning: [
        "bg-warning",
        "text-white",
        "hover:bg-warning-focus",
        "focus:bg-warning-focus",
        "active:bg-warning-focus/90",
      ],
      error: [
        "bg-error",
        "text-white",
        "hover:bg-error-focus",
        "focus:bg-error-focus",
        "active:bg-error-focus/90",
      ],
    },
    rounded: {
      true: "rounded-full",
    },
    outlined: {
      default: [
        "border",
        "border-slate-300",
        "text-slate-800",
        "hover:bg-slate-150",
        "focus:bg-slate-150",
        "active:bg-slate-150/80",
        "dark:border-navy-450",
        "dark:text-navy-50",
        "dark:hover:bg-navy-500",
        "dark:focus:bg-navy-500",
        "dark:active:bg-navy-500/90",
      ],
      primary: [
        "border",
        "border-primary",
        "text-primary",
        "hover:bg-primary",
        "hover:text-white",
        "focus:bg-primary",
        "focus:text-white",
        "active:bg-primary/90",
        "dark:border-accent",
        "dark:text-accent-light",
        "dark:hover:bg-accent",
        "dark:hover:text-white",
        "dark:focus:bg-accent",
        "dark:focus:text-white",
        "dark:active:bg-accent/90",
      ],
      secondary: [
        "border",
        "border-secondary",
        "text-secondary",
        "hover:bg-secondary",
        "hover:text-white",
        "focus:bg-secondary",
        "focus:text-white",
        "active:bg-secondary/90",
        "dark:text-secondary-light",
        "dark:hover:bg-secondary",
        "dark:hover:text-white",
        "dark:focus:bg-secondary",
        "dark:focus:text-white",
        "dark:active:bg-secondary/90",
      ],
      info: [
        "border",
        "border-info",
        "text-info",
        "hover:bg-info",
        "hover:text-white",
        "focus:bg-info",
        "focus:text-white",
        "active:bg-info/90",
      ],
      success: [
        "border",
        "border-success",
        "text-success",
        "hover:bg-success",
        "hover:text-white",
        "focus:bg-success",
        "focus:text-white",
        "active:bg-success/90",
      ],
      warning: [
        "border",
        "border-warning",
        "text-warning",
        "hover:bg-warning",
        "hover:text-white",
        "focus:bg-warning",
        "focus:text-white",
        "active:bg-warning/90",
      ],
      error: [
        "border",
        "border-error",
        "text-error",
        "hover:bg-error",
        "hover:text-white",
        "focus:bg-error",
        "focus:text-white",
        "active:bg-error/90",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
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
}: ButtonProps): JSX.Element => {
  return (
    <button
      title={title}
      className={`${buttonStyles({
        variant: outlined ? null : variant,
        outlined: variant ? null : outlined,
        rounded,
      })} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
