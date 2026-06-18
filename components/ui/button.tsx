import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-forge-500 text-white hover:bg-forge-600 shadow-iron dark:bg-forge-600 dark:hover:bg-forge-500',
        secondary: 'border-2 border-iron-300 bg-transparent text-iron-800 hover:border-iron-500 hover:bg-iron-50 dark:border-iron-700 dark:text-iron-200 dark:hover:bg-iron-950/50',
        outline: 'border border-iron-200 bg-white text-iron-800 hover:bg-iron-50 dark:border-iron-800 dark:bg-iron-950 dark:text-iron-200 dark:hover:bg-iron-900',
        ghost: 'text-iron-500 hover:bg-iron-100 dark:text-iron-300 dark:hover:bg-iron-950',
        link: 'text-forge-600 underline-offset-4 hover:underline dark:text-forge-400'
      },
      size: {
        default: 'h-11 px-6 py-3',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-12 px-8 py-4 text-base',
        xl: 'h-14 px-10 py-5 text-lg',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: { variant: 'default', size: 'default' }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
