import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const spinnerStyles = cva("spinner", {
  variants: {
    variant: {
      default: null,
      primary: null,
      secondary: null,
      info: null,
      success: null,
      warning: null,
      error: null,
    },
    type: {
      spin: "animate-spin rounded-full border-[3px]",
      svg: "animate-spin",
    },
    size: {
      xs: "h-3 w-3",
      sm: "h-5 w-5",
      md: "h-7 w-7",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
      "xl-1": "h-16 w-16",
    },
    soft: {
      true: null,
    },
  },
  compoundVariants: [
    // Default
    {
      variant: "default",
      type: "spin",
      soft: true,
      class:
        "border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300",
    },
    {
      variant: "default",
      type: "spin",
      soft: false,
      class:
        "border-slate-500 border-r-transparent dark:border-navy-300 dark:border-r-transparent",
    },
    {
      variant: "default",
      type: "svg",
      class: "text-slate-500 dark:text-navy-300",
    },

    // Primary
    {
      variant: "primary",
      type: "spin",
      soft: true,
      class:
        "border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent",
    },
    {
      variant: "primary",
      type: "spin",
      soft: false,
      class:
        "border-primary border-r-transparent dark:border-accent dark:border-r-transparent",
    },
    {
      variant: "primary",
      type: "svg",
      class: "text-primary dark:text-accent",
    },

    // Secondary
    {
      variant: "secondary",
      type: "spin",
      soft: true,
      class: "border-secondary/30 border-r-secondary",
    },
    {
      variant: "secondary",
      type: "spin",
      soft: false,
      class: "border-secondary border-r-transparent",
    },
    {
      variant: "secondary",
      type: "svg",
      class: "text-secondary dark:text-secondary",
    },

    // Info
    {
      variant: "info",
      type: "spin",
      soft: true,
      class: "border-info/30 border-r-info",
    },
    {
      variant: "info",
      type: "spin",
      soft: false,
      class: "border-info border-r-transparent",
    },
    {
      variant: "info",
      type: "svg",
      class: "text-info dark:text-info",
    },

    // Success
    {
      variant: "success",
      type: "spin",
      soft: true,
      class: "border-success/30 border-r-success",
    },
    {
      variant: "success",
      type: "spin",
      soft: false,
      class: "border-success border-r-transparent",
    },
    {
      variant: "success",
      type: "svg",
      class: "text-success dark:text-success",
    },

    // Warning
    {
      variant: "warning",
      type: "spin",
      soft: true,
      class: "border-warning/30 border-r-warning",
    },
    {
      variant: "warning",
      type: "spin",
      soft: false,
      class: "border-warning border-r-transparent",
    },
    {
      variant: "warning",
      type: "svg",
      class: "text-warning dark:text-warning",
    },

    // Error
    {
      variant: "error",
      type: "spin",
      soft: true,
      class: "border-error/30 border-r-error",
    },
    {
      variant: "error",
      type: "spin",
      soft: false,
      class: "border-error border-r-transparent",
    },
    {
      variant: "error",
      type: "svg",
      class: "text-error dark:text-error",
    },
  ],
  defaultVariants: {
    type: "spin",
    size: "md",
    soft: false,
    variant: "default",
  },
});

export interface SpinnerProps extends VariantProps<typeof spinnerStyles> {}

export const Spinner = ({
  type = "spin",
  size,
  variant,
  soft,
  className,
}: SpinnerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return type === "spin" ? (
    <div
      className={spinnerStyles({
        type,
        size,
        variant,
        soft,
        class: className,
      })}
    ></div>
  ) : type === "svg" ? (
    <div
      className={spinnerStyles({
        type,
        size,
        variant,
        soft,
        class: className,
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  ) : null;
};

export default Spinner;
